import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  // initialise AOS library
  AOS.init();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
