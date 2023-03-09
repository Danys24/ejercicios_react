//import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
//import Father from './components/container/father';
import RenderConditionalComponent from './components/pure/renderizadoCondicional';
//import TaskList from './components/container/task_list';


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
        {/*<Greeting name="Danys"></Greeting>*/}
        {/*<Greetingf name="Danys"></Greetingf>*/}   
     {/* </header>*/}       
     {/*<Father></Father>*/}       
     {/* <TaskList></TaskList>*/}  
         <RenderConditionalComponent></RenderConditionalComponent>

    </div>
  );
}

export default App;
