import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Placeholder />} />
        <Route path="/map" element={<Placeholder />} />
        <Route path="/insight" element={<Placeholder />} />
        <Route path="/marketing" element={<Placeholder />} />
      </Routes>
    </Router>
  );
}

export default App;
