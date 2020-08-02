

//Instantiates strings representing an imutable Stting representation of every
// 'actions' can be possibly performed on the redux store, whiche affects the state of the APP.


export const LIKE_POST = "LIKE_POST"; // String value representing the action of liking a post.
export const likePost = (data: number) => ({ //This fucntion needs to return a payload of a Image Url
                                // to be able to find the object in the state.

    type: LIKE_POST,
    payload: { data }, //Post ID

}); 

export const COMMENT_POST = "COMMENT_POST"; // String value representing the action of liking a post.
export const commentPost = (data: number, comment: string) => ({ //This fucntion needs to return a payload of a Image Url
                                // to be able to find the object in the state.

    type: COMMENT_POST,
    payload: { data, comment }, //Post ID & Comment

}); 