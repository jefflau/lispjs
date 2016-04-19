import "babel-polyfill";

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Immutable, { Map } from 'immutable';

import "../lib/tests";
import blockchain from "./blockchain";
import { boardRender } from "./dnd"

//blockchain();

const store = createStore((state = Map({clicks: 0}), action)=>{
      switch(action.type){
        case "INCREMENT":
          return state.updateIn(['clicks'], value => value + 1);
        case "DECREMENT":
          return state.updateIn(['clicks'], value => value - 1);
        default:
          return state;
      }
    }
)

@Radium
class App extends React.Component {
  render() {
    return (
      <CounterWithStore />
    )
  }
}

const Counter = ({ value, increment, decrement }) => (<div>
    {value}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

function mapStateToProps(state){
  return {
    value: state.get('clicks')
  }
}

function mapDispatchToProps(dispatch){
  return {
    increment: ()=>{
      dispatch({type: "INCREMENT"})
    },
    decrement: ()=>{
      dispatch({type: "DECREMENT"})
    }
  }
}

const CounterWithStore = connect(mapStateToProps, mapDispatchToProps)(Counter)

const render = () => {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('main')
  );
}

render();

