import "babel-polyfill";

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';

import "../lib/tests";
import blockchain from "./blockchain";

//blockchain();

const monolith = 0; 

const store = createStore((state = {}, action)=>{
  switch(action.type){
    case "currentBlock":
      return Object.assign({}, state, {
        currentBlock: action.currentBlock
      });
    break;
    default:
      return state;
  }
})

class Knight extends Component {
  render(){
    return <span>♘</span>
  }
}

class Square extends Component {

  static propTypes = {
    black: PropTypes.bool
  };

  render(){
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
        <div style={{ 
          backgroundColor: fill,
          color: stroke, 
          width: '100%', 
          height: '100%'}} >

          {this.props.children}

          </div>
        );
  }
}

class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
                        PropTypes.number.isRequired
                        ).isRequired
  };

  renderSquare(i) {
    const x = i % 8
    const y = Math.floor( i / 8 )
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = ( x === knightX && y === knightY) ? 
      <Knight /> : 
      null; 

    return (
        <div key={i}
             style={{width: '12.5%', height: '12.5%'}}> 
        <Square black={black}>
        {piece}
        </Square>
        </div>
        );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++){
      squares.push(this.renderSquare(i));
  }

    return (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex', 
          flexWrap: 'wrap'
        }}>
        {squares}
        </div>
        )
  }
}

const render = () => {
  ReactDOM.render(
      <Board knightPosition={[4, 7]} />,
      document.getElementById('main')
      );
}

store.subscribe(render);

render();



