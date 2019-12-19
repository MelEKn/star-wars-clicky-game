import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="row">
    <div className="container">
      <div className="img-container"
      onClick= {() => props.chooseCharacter(props.id)} className="choose">
        <img className="character" alt={props.name} src={props.image} />
      {/* <span onClick= {() => props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
    </div>
    </div>
  );
}

export default CharacterCard;
