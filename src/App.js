import './App.css';
import { GlobalStyle } from './components/GlobalStyle/styles';
import { Toast } from './components/Toastify';
import { Routes } from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Toast />
    </div>
  );
}

export default App;
