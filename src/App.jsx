import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DisclaimerModal from './components/Modal/DisclaimerModal';

// Pages
import Body from './components/Body/Body'; // Home page
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <>
      {!accepted && <DisclaimerModal onAccept={handleAccept} />}
      {accepted && (
        <Router>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
