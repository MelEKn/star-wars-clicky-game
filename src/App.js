import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {
  state = {
    characters,
    charactersChosen: [],
    score: 0
  };

 chooseCharacter = id => {

  console.log("Characters is");
  console.log(characters);

   console.log(this.state.charactersChosen);

   this.setState({
     charactersChosen: [...this.state.charactersChosen, id]
   })

   console.log("this.state.charactersChosen is ");
   console.log(this.state.charactersChosen);
  
  //  let chars = this.state.charactersChosen;

  //  console.log("typeof this.state.charactersChosen");
  //  console.log(typeof this.state.charactersChosen);
   

  //  console.log(chars);

  //  console.log("next is typeof chars");
  //  console.log(typeof chars);

  // if(chars.includes(id)){
  //   this.setState({
  //     charactersChosen: [],
  //     score: 0
  //   })
  //   console.log("You lost!");
  // } 
  // else{
  //  chars.push(id);
  //   this.setState({
  //     score: this.state.score + 1,
  //     charactersChosen: this.state.charactersChosen.push(id),
  //   })
  // }
 }

  render() {
  return (
    <Wrapper>
      {console.log("this.state is")}
      {console.log(this.state)}
      <div className="jumbotron mt-2">
      <h1 className="title">Star Wars Clicky Game!</h1>
      </div>
      {this.state.characters.map(item => 
      <CharacterCard 
      name={item.name}
      image={item.image}
      id={item.id}
      chooseCharacter ={this.chooseCharacter}

     // removeFriend={this.removeFriend}
      /> )}




    </Wrapper>
  ); 
}
}

export default App;
