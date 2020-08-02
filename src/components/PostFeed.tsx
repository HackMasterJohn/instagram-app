import React from "react";
import { Post } from "../reduxParts/store";
import PostItem  from "./PostItem";
import { connect } from "react-redux";
import { likePost } from "../reduxParts/actions";


export const PostFeed = function (props: any) { // An array of PostItems

    return (
        <div> 
            
            {
                props.feed.map ( (item: Post) =>{
                    return (
                        <PostItem {...item} />
                    );
                })
            }
            
        </div>
    );

}

function mapStateToProps (state: any){

    return {
        feed: state.actionsManager,
    };
}


export default connect(mapStateToProps) (PostFeed);