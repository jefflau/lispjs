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

  render() {
    return (
      <div>
        <Square black>
          <Knight />
        </Square>
      </div>
        )
  }
}

@Radium
class App extends Component {
  render() {
    return (
      <Counter 
        value={store.getState().currentBlock} 
      />
    )
  }
}

const Counter = ({ value, increment, decrement }) => (<div>
    {value}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

function renderSquare(x, y) {
  const black = (x + y) % 2 === 1;

  const [knightX, knightY] = this.props.knightPosition;
  const piece = ( x === knightX && y === knightY) ? 
    <Knight /> : 
    null; 

  return (
      <Square black={black}>
      {piece}
      </Square>
      );
}

const render = () => {
  ReactDOM.render(
      <Board knightPosition={[0, 0]} />,
      document.getElementById('main')
      );
}

store.subscribe(render);

render();



