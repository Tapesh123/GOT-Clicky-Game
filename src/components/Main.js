import React, { Component } from 'react';
import GOTArray from '../GOT.json';
import GOT from './GOT';
import '../styles/Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      previousClick: false
    }
  }

  shuffle = array => {
    for (let a = array.length - 1; a > 0; a --) {
      const b = Math.floor(Math.random() * (a + 1));
      [array[a], array[b]] = [array[b], array[a]];
    }
  }

  clickHandler = id => {
    this.props.scoreKeeper(id);
    this.setState({
      previousClick: id
    });
    this.shuffle(GOTArray);
  }

  render() {
    return (
      <div className="main">
          <div className="Jumbotron">
            <p><h4>
              Click on any image, but only once!
              
           </h4> </p>
            

          </div>
          <div className="container-fluid GOT-area">
            {GOTArray.map( game => 
              <GOT
                id={ game.id}
                src={ game.src}
                alt={ game.name}
                key={ game.id.toString() }
                clickHandler={this.clickHandler}
              /> 
            )}
          </div>
      </div>
    )
  }
}
