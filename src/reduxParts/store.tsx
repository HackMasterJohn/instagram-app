//
import { createStore, combineReducers} from 'redux';
import { actionsManager} from "./reducers";


export interface Post {
    post_id: number, // Post identifier that auto increments
    imageUrl: string,
    comments: Array<string>, // Array of comments
    likes: number   // Number of likes that this post has.
}


// Makes 3 post objects to be set as the inital state of the store
const post1: Post = {
    post_id: 1,
    imageUrl : "https://media.giphy.com/media/hpR27uz9Nk3M9SFPSu/giphy.gif",
    comments : [],
    likes : 1090
  }
  const post2 = {
    post_id: 2,
    imageUrl : "https://media.giphy.com/media/l2Jecex1iG867Xzri/giphy.gif",
    comments : [],
    likes : 4050
  }
  const post3 = {
    post_id:3,
    imageUrl : "https://media.giphy.com/media/11JTxkrmq4bGE0/giphy.gif",
    comments : [],
    likes : 15700,
  }
//End of post object initializations




const reducers = {
    //Define the functions for the actions
    actionsManager,

    


};


export const storeState = [post1, post2, post3]; // Initial store state to be passed into the create store function

const rootReducer = combineReducers (reducers);//Combines all reducers into one root reducer for the creatStore function.

export const configureStore = () => createStore (rootReducer);//Creates Redux store
