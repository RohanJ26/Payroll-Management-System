import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Footer/Footer';
import Home from './Components/Home';
import Insert from './Components/Insert';
import Update from './Components/Update';
import Delete from './Components/Delete';
import Search from './Components/Search';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
