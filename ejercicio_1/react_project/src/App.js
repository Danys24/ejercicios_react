import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
import TaskList from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Danys"></Greeting>*/}
        {/*<Greetingf name="Danys"></Greetingf>*/}
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
