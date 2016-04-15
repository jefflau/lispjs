import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import "../lib/tests";

// import { Nav } from './components/nav';


@Radium
class App extends React.Component {
  render() {
    return (
      <div className="app">
        Hello world, this is a React app
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
