import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <span className="text-2xl">🏈</span>
            <span className="text-xl font-bold text-gray-900">
              Budget <span className="text-green-600">Ball</span>
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className="text-gray-600 text-sm hidden sm:block mr-2">
                  Hi, <span className="font-medium text-gray-900">{user.username}</span>
                </span>
                <button 
                  onClick={handleLogout} 
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;