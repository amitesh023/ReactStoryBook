import logo from './logo.svg';
import './App.css';
//import { Button } from './stories/Button';
//import { InputText } from './components/Input/Input';
//import BootGrid from './components/BootGrid/BootGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Button size="medium" primary label="Click me" /> */}
        {/* <InputText></InputText> */}
        
      </header>
    </div>
  );
}

export default App;
