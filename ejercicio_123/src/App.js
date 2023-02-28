import logo from './logo.svg';
import './App.css';
import ContactoList from './components/container/contacto_list';
import { Contacto } from './models/contacto.class';

function App() {

  const contacto1 = new Contacto('Daniel', 'Cartagena', 'daniel@gmail.com', false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoList contacto={contacto1}></ContactoList>
      </header>
    </div>
  );
}

export default App;
