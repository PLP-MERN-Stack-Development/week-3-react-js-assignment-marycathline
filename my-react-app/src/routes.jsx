import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Tasks from './pages/Task';
import Posts from './pages/Posts';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Layout route that wraps all pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/posts" element={<Posts />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
