import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />  
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
