import './App.css';
import { GlobalStyle } from './components/GlobalStyle/styles';
import { Routes } from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
