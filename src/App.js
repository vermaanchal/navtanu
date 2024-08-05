import './App.css';
import Service from './component/Service';
import About from './component/About';
import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import KnowledgeCentre from './component/KnowledgeCentre';
import MutualFund from './component/products/MutualFund';

function App() {
  return (
    <div className="">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/aboutUs" element={<About />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/mutualfunds" element={<MutualFund />} />
        </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
