import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import friends from "./characters.json";
import "./App.css";

class App extends React.Component {
  state = {
    gameStatus: "Playing",
    charactersChosen: [],
    score: 0
  };

 chooseCharacter = id => {
  if(this.state.charactersChosen.includes(id)){
    this.setState({
      gameStatus: "You lose!",
      charactersChosen: [],
      score: 0
    })
  } 
  else{
    this.setState({
      score: this.state.score + 1,
      charactersChosen: this.state.charactersChosen.push(id),
    })
  }
 }

  render() {
  return (
    <Wrapper>
      <div class="jumbotron mt-2">
      <h1 className="title">Star Wars Clicky Game!</h1>
      </div>
      {this.state.friends.map(item => 
      <CharacterCard 
      name={item.name}
      image={item.image}
      id={item.id}
     // removeFriend={this.removeFriend}
      /> )}




    </Wrapper>
  ); 
}
}

export default App;
