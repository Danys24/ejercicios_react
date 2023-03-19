import logo from './logo.svg';
import './App.css';

import TodoContainer from './components/container/todoContainer';
import TodoFormContainer from './components/container/todoFormContainer';
import FilterOptions from './components/pure/filterOptions';
/*
<TodosContainer></TodosContainer>
<TodoFormContainer></TodoFormContainer>
<FilterOptions></FilterOptions>
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer>
        <TodoFormContainer></TodoFormContainer>
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
