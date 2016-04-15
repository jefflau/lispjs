import "babel-polyfill";

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';
import "../lib/tests";

// import { Nav } from './components/nav';

const monolith = 0; 

const store = createStore((state = 0, action)=>{
  switch(action.type){
    case "INCREMENT":
      console.log('incremting in store')
      return state + 1;
    break;
    case "DECREMENT":
      return state - 1;
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
        value={store.getState()} 
        increment={ () => store.dispatch({type: "INCREMENT"}) }
        decrement={ () => store.dispatch({type: "DECREMENT"}) }
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

const render = () => {
  ReactDOM.render(
      <Board knightPosition={[0, 0]} />,
      document.getElementById('main')
      );
}

store.subscribe(render);

render();
