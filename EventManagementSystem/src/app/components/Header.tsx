import { Link } from 'react-router-dom';
import { Home, User, LogIn } from 'lucide-react';

interface HeaderProps {
  showBackButton?: boolean;
  backTo?: string;
}

export default function Header({ showBackButton = false, backTo = '/' }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-white">
              <img
                src="https://vectorise.net/logo/wp-content/uploads/2015/07/Kompleks-Sukan-Negara.png"
                alt="Perbadanan Stadium Malaysia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</span>
          </Link>
        </div>

        {showBackButton ? (
          <Link to={backTo} className="text-gray-600 hover:text-gray-900">
            <Home className="w-5 h-5" />
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/features" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
              Features
            </Link>
            <Link to="/login?signup=true" className="px-4 py-2 rounded-lg text-white transition-colors text-sm" style={{ backgroundColor: '#273480' }}>
              Sign Up
            </Link>
            <Link to="/login" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}