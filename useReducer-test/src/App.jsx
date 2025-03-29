import { useCounterReducer } from './hooks/useCounterReducer';
import Counter from './components/counter';
import './App.css';

function App() {
  const [state, dispatch] = useCounterReducer();

  return (
    <div className="App">
      <h1>Counter with useReducer</h1>
      <Counter count={state.count} dispatch={dispatch} />
    </div>
  );
}

export default App;