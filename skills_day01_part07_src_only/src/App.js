//import logo from './logo.svg';
import { BrowserRouter, Route } from "react-router-dom";
import './styles.css';
import Home from "./components/home";
//
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home}/>
      </BrowserRouter>
    </div>
  );
}
//
export default App;
