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

