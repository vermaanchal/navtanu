import './App.css';
import Service from './component/Service';
import About from './component/About';
import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';

function App() {
  return (
    <div className="">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/aboutUs" element={<About />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
