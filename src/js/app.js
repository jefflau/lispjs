import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';

import "../lib/tests";
import blockchain from "./blockchain";

blockchain();


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
    <App />,
    document.getElementById('main')
  );
}

store.subscribe(render);

render();
