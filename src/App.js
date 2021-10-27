import './App.css';
import Card from "./components/Developer.jsx/index.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Maria" age="30 anos" country="Brasil" />
        <Card name="Marie" age="20 anos" country="França" />
        <Card name="Mary" age="25 anos" country="Reino Unido" />
      </header>
    </div>
  );
}

export default App;
