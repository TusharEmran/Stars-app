import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Courses from './pages/Courses'; 
import Memories from './pages/Memories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorials" element={<Courses />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
