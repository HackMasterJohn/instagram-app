import React, {useState } from "react";
import "../stylesheets/CommentItem.css";
import  { commentPost } from "../reduxParts/actions";
import { connect } from "react-redux";

const CommentItem = function (props: any){
    
    const [inputValue, setInputValue] = useState ('');
    //setInputValue is a function that changes the string value of inputValue

    return (

        <div className="wrapper">


                <input style={ {width: "200px", height: "50px"} } className="form__input" type="text" id="name" 
                    
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
                    
                required />

                <button onClick ={ ()=> {
                    props.comment(props.id, inputValue);
                    setInputValue('');
                }}>Submit Comment </button>



        </div>

    );

}

function mapDispatchToProps (dispatch: any){

    return {
        comment: (data: number, comment: string) => dispatch (commentPost (data, comment))
    }
}

//Connects CommentItem component to store
export default connect (null, mapDispatchToProps) (CommentItem);
