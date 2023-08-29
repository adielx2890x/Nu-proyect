import React, { useState } from "react";
import "./ThemeSelect.css";

function Reactions ({isDarkMode}) {
  const [likes, setLikes] = useState(0);

  const [loves, setLoves] = useState(0);

 const [Dislikes, setDislikes] = useState(0);

  const [Hates, setHates] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  const handleLoves = () => {
    setLoves(loves + 1);
  };
 

  const handleDislikes = () => {
    setDislikes(Dislikes + 1);
  };

  const handleHates = () => {
    setHates(Hates + 1);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
     
     
      <div>
        <button onClick={handleLikes}>
          {likes} {likes === 1 ? "Like" : "Likes"}
        </button>
      </div>

      <div>
        <button onClick={handleLoves}>
          {loves} {loves === 1 ? "Love" : "Loves"}
        </button>
      </div>

      <div>
        <button onClick={handleDislikes}>
          {Dislikes} {Dislikes === 1 ? "Dislike" : "Dislikes"}
        </button>
      </div>

      <div>
        <button onClick={handleHates}>
          {Hates} {Hates === 1 ? "Hate" : "Hates"}
        </button>
      </div>


    </div>
  );
}

export default Reactions;
