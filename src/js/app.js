import "babel-polyfill";

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore } from 'redux';

import "../lib/tests";
import blockchain from "./blockchain";
import { boardRender } from "./dnd"

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

store.subscribe(boardRender);
boardRender();



