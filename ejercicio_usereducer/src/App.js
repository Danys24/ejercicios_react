import logo from './logo.svg';
import './App.css';
import Counter from './components/pure/Counter';
import LoginUseState from './components/pure/loginUseState';
import LoginUseReducer from './components/pure/loginUseReducer';
import TaskList from './components/container/taskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<h1>useReducer Example</h1>*/}
        {/*<Counter></Counter>*/}
        {/*<LoginUseState></LoginUseState>*/}
        {/*<LoginUseReducer></LoginUseReducer>*/}
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
