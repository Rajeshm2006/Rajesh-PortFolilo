import { MotionConfig } from 'framer-motion';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <div className="min-h-screen bg-[#101312] text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </MotionConfig>
  );
}

export default App;
