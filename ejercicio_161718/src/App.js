//import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
//import Father from './components/container/father';
//import RenderConditionalComponent from './components/pure/renderizadoCondicional';
//import LoginFormik from './components/pure/forms/loginFormik';
//import RegisterFormik from './components/pure/forms/registerFormik';
//import TaskFormik from './components/pure/forms/taskFormik';
import TaskList from './components/container/task_list';


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/* <img src={logo} className="App-logo" alt="logo" />*/}
      {/*<Greeting name="Danys"></Greeting>*/}
      {/*<Greetingf name="Danys"></Greetingf>*/}   
      {/* </header>*/}       
      {/*<Father></Father>*/}       
      {/* <RenderConditionalComponent></RenderConditionalComponent>*/}  
      {/*<LoginFormik></LoginFormik>*/} 
      {/*<RegisterFormik></RegisterFormik>*/}
      {/*   <TaskFormik></TaskFormik>*/}
         <TaskList></TaskList>
    </div>
  );
}

export default App;
