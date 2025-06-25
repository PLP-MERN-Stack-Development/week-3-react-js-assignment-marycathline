import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Task';
import Posts from './pages/Posts';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Tasks />} /> 
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;