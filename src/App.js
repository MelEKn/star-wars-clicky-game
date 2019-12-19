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
    wins: 0,
    status: "",
  };

  handleInputChange = event => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  //Shuffling algorithm taken from https://javascript.info/task/shuffle
  shuffleCharacters = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  chooseCharacter = id => {


    console.log("this.state.characters is ");
    console.log(this.state.characters);




    if (!this.state.score) {
      this.setState({
        status: ""
      })
    }

    else if (this.state.score === 12) {
      this.setState({
        status: "",
        charactersChosen: [],
        score: 0
      })

    }



    if (!this.state.charactersChosen.includes(id)) {

      if (this.state.score >= 11) {
        this.setState({
          status: "You won! Congratulations!\n Refresh or click any picture to play again!",
          highScore: 12,
          score: 0,
          charactersChosen: [],
          wins: this.state.wins + 1
        })
        console.log("You won!");

      }
      else {

        let shuffle = this.state.characters;
        shuffle = this.shuffleCharacters(shuffle);
        this.setState({
          charactersChosen: [...this.state.charactersChosen, id],
          score: this.state.score + 1
        })
      }
    }
    else {
      let high;
      if (this.state.score > this.state.highScore) {
        high = this.state.score;
      }
      else {
        high = this.state.highScore;
      }
      console.log("You lose!")

      this.setState({
        charactersChosen: [],
        highScore: high,
        score: 0,
        status: "You lost! Whoops. Refresh or click any picture to play again!"
      })
    }


  }

  render() {
    return (
      <Wrapper>


        <div className="jumbotron">
          <h1 className="title">Star Wars Clicky Game!</h1>
        </div>

        <div className="container">
          <div className="row stats">
            <div className="col-6">
            </div>
            <div className="col-2"> Score: {this.state.score}</div>
            <div className="col-2">
              High Score: {this.state.highScore}
            </div>
            <div className="col-2">
              Total Wins: {this.state.wins}
            </div>
          </div>
          <div className="row">
            <div className="col-8">Click each character once. If you click all 12 only once, you win!</div>
            <div className="col-4"></div>
          </div>
          <h5 className="text-center mt-3">
            {this.state.status}

          </h5>

          <div className="row">
            {this.state.characters.map(item =>
              <CharacterCard
                name={item.name}
                image={item.image}
                id={item.id}
                onChange={this.handleInputChange}
                chooseCharacter={this.chooseCharacter}

              />
            )}

          </div>
        </div>





      </Wrapper >
    );
  }
}

export default App;
