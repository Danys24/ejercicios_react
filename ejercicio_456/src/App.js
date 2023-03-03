import logo from './logo.svg';
import './App.css';
//import Clock from './components/clock';
import ClockFunctionComponent from './components/clockFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockFunctionComponent></ClockFunctionComponent>
      </header>
    </div>
  );
}

export default App;
