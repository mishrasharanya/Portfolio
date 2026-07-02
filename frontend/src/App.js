import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen onLoadingComplete={() => setLoading(false)} />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;