import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import friends from "./characters.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  }

 removeFriend = id => {
  this.setState({ friends: this.state.friends.filter(item => item.id !== id)})

 }

  render() {
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
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
