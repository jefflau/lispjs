import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';
import "../lib/tests";

// import { Nav } from './components/nav';


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

@Radium
class App extends React.Component {
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
    <App />,
    document.getElementById('main')
  );
}

store.subscribe(render);

render();
