import logo from './logo.svg';
import './App.css';
import Animal from './Animal';
import Human from './Human'

function App() {
  return (
    <div className="App">
      <Animal animal="dog cat turtle"/>
      <Human name="Leo" age="26" location="Seattle" hobby="Running, Reading, Writing" prompt="Invest"/>
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
      </header>
      <Animal />
    </div>
  );
}

export default App;
