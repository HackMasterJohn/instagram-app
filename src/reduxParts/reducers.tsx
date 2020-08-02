import { COMMENT_POST, LIKE_POST } from "./actions";
import { Post } from "./store";
import { storeState } from "./store"

export const actionsManager = (state = storeState, action:any ) =>{

    const { type, payload} = action;
    

    switch (type){

        case LIKE_POST:{

            const { data } = payload; //Data will be a number 
            
            const newState = [...state];//Copy of the array


            //A element can be found given the data value.
            //The data value should be a number and can identify the proper post object 
            //in the array of posts by simply indexing ArrayOfPosts [ data - 1]
            //In this fashion the proper post object can be identified. 
            
            const postIndex = data -1;
            if (postIndex < newState.length){ //If postIndex is within the range of the array.
            
            const item = state[postIndex]
            const newPost = { // Makes a new Post object with the likes attribute adjusted
                             // by 1.
                post_id: item.post_id,
                imageUrl: item.imageUrl, 
                comments: item.comments, 
                likes: item.likes+1}

             console.log(newPost);

            
             //Adds new post object to state
             newState[postIndex] = newPost;
            }

            return newState; //Returns back the new state   
        }


        case COMMENT_POST:{

            const { data, comment } = payload; //Data will be a number 
            
            const newState = [...state];//Copy of the array


            //A element can be found given the data value.
            //The data value should be a number and can identify the proper post object 
            //in the array of posts by simply indexing ArrayOfPosts [ data - 1]
            //In this fashion the proper post object can be identified. 
            
            const postIndex = data -1;
            if (postIndex < newState.length){ //If postIndex is within the range of the array.
            
            const item = state[postIndex]
            const newPost = { // Makes a new Post object with the likes attribute adjusted
                             // by 1.
                post_id: item.post_id,
                imageUrl: item.imageUrl, 
                comments: item.comments.concat(comment), //Adds the comment to the posts list of comments 
                likes: item.likes}

             console.log(newPost);

            
             //Adds new post object to state
             newState[postIndex] = newPost;
            }

            return newState;
        }

        default: 
            return state; //Default returns state either way.

    }

}