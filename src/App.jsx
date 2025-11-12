import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-stone-100 text-gray-900 font-sans pt-8 pl-16 pb-8 pr-8">
      <div className="w-full max-w-3xl">
        <Header />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
