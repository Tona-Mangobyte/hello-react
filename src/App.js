import './App.css';
import { MyComponent } from './components/MyComponent';
import { TextAreaCounter } from './components/TextAreaCounter';
import {BookComponent} from "./components/BookComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent name="Tona@mb" />
        <TextAreaCounter text="Admin" length={7}/>
        <TextAreaCounter />
        <BookComponent />
      </header>
    </div>
  );
}

export default App;
