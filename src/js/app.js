import "babel-polyfill";

import React, { Component } from 'react';
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
    <Knight />,
    document.getElementById('main')
  );
}

store.subscribe(render);

render();
