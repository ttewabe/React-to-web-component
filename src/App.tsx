
import './App.css'
import { ICardProps } from './components/Card';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-card': ICardProps;
    }
  }
}

function App() {

  return (
    <div className="App">
      <h2>React To Web Component</h2>
      <app-card title="Task One" description="Card Content"/>
    </div>
  )
}

export default App
