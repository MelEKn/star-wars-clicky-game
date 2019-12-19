import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {
  state = {
    characters,
    charactersChosen: [],
    score: 0,
    highScore: 0,
    status: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    let {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  chooseCharacter = id => {

    if(!this.state.score){
      this.setState({
        status: ""
      })
    }
    
    else if(this.state.score===12){
      console.log("The else if for this.state.score===12 WAS triggered, it just didn't reset the state for some reason???");
      this.setState({
        status: "",
        score: 0
      })

    }

    console.log("Score is: ");
    console.log(this.state.score);
    console.log("-------");

    console.log("this.state.status is ");
    console.log(this.state.status);

    console.log("does this.state.status === 'You won! Congratulations!'?");
    console.log(this.state.status === "You won! Congratulations!");

    if(this.state.status === "You won! Congratulations!"){
      console.log("THIS DID RUN!!!!!");
      this.setState({
        status: "",
        charactersChosen: [],
        score: 0
      })
    }

    console.log("this.state.status is ");
    console.log(this.state.status);


   

    console.log("this.state.charactersChosen.includes(id) is ");
    console.log(this.state.charactersChosen.includes(id));

    console.log("this.state.charactersChosen.includes(id) is");
    console.log(this.state.charactersChosen.includes(id));

    if (!this.state.charactersChosen.includes(id)) {
      if (this.state.score >= 11) {
        this.setState({
          status: "You won! Congratulations!",
          highScore: 12,
          score: 0,
          charactersChosen: []
        })
        console.log("You won!");
      }
      else {
        this.setState({
          charactersChosen: [...this.state.charactersChosen, id],
          score: this.state.score + 1
        })
      }
    }
    else {
      let high;
      if(this.state.score>this.state.highScore){
      high = this.state.score;
      }
      else{
        high=this.state.highScore;
      }
      console.log("You lose!")
     
      this.setState({
        charactersChosen: [],
        highScore: high,
        score: 0,
        status: "You lost! Whoops. Refresh or click any picture to play again!"
      })
    }

    console.log("this.state is ");
    console.log(this.state);

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
        <div className="container">
       
        <div className="jumbotron">
          <h1 className="title">Star Wars Clicky Game!</h1>
        </div>
        <div className="row stats">
          <div className="col-8">Click each character once. If you click all 12 only once, you win!</div> 
          </div>
          <div className="row">
          <div className="col-8"> </div>
           <div className="col-2"> Score: {this.state.score}</div>
           <div className="col-2">
           High Score: {this.state.highScore}
           </div>
          </div>
          <div className="winLose">
            {this.state.status}
            
          </div>
        <div className="row">
        {this.state.characters.map(item =>
          <CharacterCard
            name={item.name}
            image={item.image}
            id={item.id}
            onChange={this.handleInputChange}
            chooseCharacter={this.chooseCharacter}

          // removeFriend={this.removeFriend}
          />)}
          </div>

          </div>


      </Wrapper>
    );
  }
}

export default App;
