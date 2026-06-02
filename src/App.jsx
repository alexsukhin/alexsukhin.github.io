import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen bg-stone-100 text-gray-900 font-sans pt-6 pb-6 px-4 md:pt-8 md:pb-8 md:px-8">
        <div className="w-full max-w-3xl mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
