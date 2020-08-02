import React from "react";
import { connect } from "react-redux";
import { likePost } from "../reduxParts/actions";
import CommentItem from "./CommentItem";
import "../stylesheets/CommentsSection.css"


const PostItem = function (props: any) {
    
    return (
        <div>

            <img alt="Some Random thing" src={props.imageUrl}/>
            <h2 style={{color: "white"}}>{props.likes}</h2>
            <button onClick={ ()=> {props.likePic(props.post_id)}}>Like</button>
            <div>
                
                <CommentItem id={props.post_id}/>
                <h2> Comments </h2>
                
                {//Maps all comments
                    props.comments.map((comment:string) => 

                    
                    <div className="scrolling-box">
                    <div id="1">
                        <p>{comment}</p>
                    </div>
                    </div>
                    )
                }
            </div>

        </div>
    );

}


function mapDispatchToProps (dispatch : any){
    return  {likePic: (data: number) => ( dispatch(likePost(data)))}
    
};
export default connect(null, mapDispatchToProps)(PostItem);


