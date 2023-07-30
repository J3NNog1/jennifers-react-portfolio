import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import './App.css';

function App() {
  return (
    <Routes>
      <Route 
          path='/about' 
          element={<About />} 
        />
      <Route 
          path='/contact' 
          element={<Contact />} 
        />
      <Route 
          path='/' 
          element={<Home />} 
        />
      <Route 
          path='/projects' 
          element={<Projects />} 
        />
      <Route 
          path='/resume' 
          element={<Resume />} 
        />
    </Routes>
  );
}

export default App;
