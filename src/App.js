import './App.css';
import { MyComponent } from './components/MyComponent';
import { TextAreaCounter } from './components/TextAreaCounter';
import { TextAreaCounter2E } from './components/TextAreaCounter2E';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent name="ReactJs" />
        <MyComponent name="Tona@mb" />
        <TextAreaCounter text="Admin"/>
        <TextAreaCounter2E />
      </header>
    </div>
  );
}

export default App;
