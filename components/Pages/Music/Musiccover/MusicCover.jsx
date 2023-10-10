import React from "react";
import "./musiccover.css"
import { Link } from "react-router-dom";

const MusicCover = ({cover, title, id}) => {
    const value = `/music/${id}`
  return (
    <div className="musicpage-cover">
        <Link to = {value}>

      <img src={cover} alt="albumcover" />
        </Link>
      <p>{title}</p>
    </div>
  );
};

export default MusicCover;
