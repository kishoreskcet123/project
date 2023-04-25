import React, { useEffect, useState } from "react";
import axios from "axios";
import TwitterIcon from '@mui/icons-material/Twitter';
import "./App.css";
import colors from "./Colors";



const baseURL = "https://dummyjson.com/quotes";


export default function App() {

  const [post, setPost] = React.useState(null);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 29) + 1);
  const [colorRandom, setColorRandom] = useState(Math.floor(Math.random() * 9) + 1);



  const customStyle = {
    color: colors[colorRandom],
    body: {
      backgroundColor: "red",

    }
  };

  const conatinerStyle = {
    backgroundColor: colors[colorRandom],
  }


  function handleClick() {
    setRandomNumber(Math.floor(Math.random() * 29) + 1);
    setColorRandom(Math.floor(Math.random() * 9) + 1);


  }

 


  //Axios using Functional Component

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  });

  if (!post) return null;



  return (
    <div className="main-container" style={conatinerStyle}>
      <div className="qoute-container rounded-top rounded-bottom">

        <i class="fa fa-quote-left quotemark" style={customStyle} ></i>
        <span class="qoute" style={customStyle} >{post.quotes[randomNumber].quote}</span>
        <i class="fa-solid fa-quote-right qoutemark1" style={customStyle}></i>
        <p className="author" style={customStyle}> - {post.quotes[randomNumber].author}</p>
        <div className="footer">
          <a className="icons" href={`https://twitter.com/compose/tweet?hashtags=quotes&text=${post.quotes[randomNumber].quote}`} style={customStyle}><TwitterIcon /></a>
          

          <button type="submit" style={{ backgroundColor: colors[colorRandom] }} className="btn" onClick={handleClick}>New Qoute </button>
        </div>
      </div>
    </div>
  );
}

