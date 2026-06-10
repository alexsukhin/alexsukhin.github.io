import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-100 text-gray-900 font-sans flex flex-col">
        <div className="flex-1 pt-6 pb-12 px-4 md:pt-8 md:pb-12 md:px-8">
          <div className="w-full max-w-3xl mx-auto">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
        </div>
        
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 pb-6 md:pb-8">
          <Footer />
        </div>
      </div>
    </Router>
  );
}