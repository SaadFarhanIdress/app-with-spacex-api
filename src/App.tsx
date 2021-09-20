import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";
import NavBar from './containers/NavBar/NavBar';

function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
