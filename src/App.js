import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home"
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
};

export default App;
