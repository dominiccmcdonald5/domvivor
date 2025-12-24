import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IdolHunt from './pages/IdolHunt';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idol-hunt" element={<IdolHunt />} />
        <Route path="/idol-hunt/:id" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
