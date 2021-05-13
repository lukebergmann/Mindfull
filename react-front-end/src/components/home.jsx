import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import MenuAppBar from "./navbar";
import Login from "./login";
import Register from "./register";
import UserProfile from "./user_profile";
import Moods from "./moods";
import Resource from "./resource";
import HomeAnimation from "./home_animation";
import LoadingAnimation from "./loading_animation";

const Home = (props) => {
  const verifiedArticle = Array.isArray(props.newsArticle)? props.newsArticle : [];

  const [moods, setMoods] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    setMoods({
      category: e.target.value
    });
  };

  useEffect(() => {

  })

  return (
    <div className="App">
      <MenuAppBar />
     <Moods handleClick={handleClick}/>
     <a href={props.newsArticle[1]} target="_blank">{props.newsArticle[0]}</a>
     <Resource category={moods}/> 
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <UserProfile /> */}
      {/* <HomeAnimation /> */}
      {/* <LoadingAnimation /> */}
      {/* <h1>Hello!</h1>
      <button onClick={props.fetchData} >
      Fetch Data
    </button>         */}
    </div>
  );
};

export default Home;
