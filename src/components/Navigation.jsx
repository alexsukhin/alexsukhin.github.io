import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
      <div className="text-sm font-semibold text-gray-900 tracking-tight">
        alexander sukhin
      </div>
      <nav className="flex gap-6">
        <Link to="/" className="text-sm text-gray-500 hover:text-amber-600 transition-colors font-medium">
          About
        </Link>
        <Link to="/projects" className="text-sm text-gray-500 hover:text-amber-600 transition-colors font-medium">
          Projects
        </Link>
      </nav>
    </header>
  );
}