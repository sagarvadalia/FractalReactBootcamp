import logo from './logo.svg';
import './App.css';
import Header from "./components/Wrapper/Header"
import './styles.css'
import Container from './components/Home/Container'
import Footer from './components/Wrapper/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Customers from './components/Customers/Customers';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Route exact path="/" component={Header} />
        <Route path="/home" component={Home} />
        <Route path="/customers" component={ Customers } />
      </BrowserRouter>
    </div>
  );
}

export default App;
