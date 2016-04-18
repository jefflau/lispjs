import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import "../lib/tests";
import blockchain from "./blockchain";

blockchain();


const state = createStore((state = 0, action)=>{
  switch(action.type){
    case "INCREMENT":
      return state ++;
    case "DECREMENT":
      return state --;
    default:
      return state;
  }
})

@Radium
class App extends React.Component {
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

const render = () => {
  ReactDOM.render(
    <Provider><App /></Provider>,
    document.getElementById('main')
  );
}

store.subscribe(render);

render();
