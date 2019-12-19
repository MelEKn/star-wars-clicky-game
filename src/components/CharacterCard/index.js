import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
      <div className="img-container"
      onClick= {() => props.chooseCharacter(props.id)} className="choose">
        <img className="character" alt={props.name} src={props.image} />
        {console.log("props is")}
        {console.log(props)}
      {/* <span onClick= {() => props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
  );
}

export default CharacterCard;
