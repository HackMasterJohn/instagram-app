import React from 'react';
import './App.css';
import PostFeed from "./components/PostFeed";


export const App = function (props: any){

  return (
    <div>
      <h1 style={{color: "white"}}> Instagram Mockup</h1>

      <PostFeed > </PostFeed>

    </div>
      
  )
}

export default App;
