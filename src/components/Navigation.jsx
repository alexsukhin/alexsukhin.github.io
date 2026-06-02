import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
      <p className="text-xs md:text-sm font-semibold tracking-wide text-stone-900">alexander sukhin</p>
      <nav className="flex gap-4 md:gap-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm">
          Home
        </Link>
        <Link to="/projects" className="text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm">
          Projects
        </Link>
      </nav>
    </header>
  );
}
