import './App.css';
import { MyComponent } from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent name="ReactJs" />
        <MyComponent name="Tona@mb" />
      </header>
    </div>
  );
}

export default App;
