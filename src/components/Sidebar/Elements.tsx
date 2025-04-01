import { FiHome, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Elements = () => {
  return (
    <div className="space-y-2">
      <Link 
        to="/home" 
        className="flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-lg transition-all hover:bg-gray-300 text-gray-700 hover:text-gray-900"
      >
        <FiHome className="text-lg" />
        <span>Dashboard</span>
      </Link>
      <Link 
        to="/register" 
        className="flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-lg transition-all hover:bg-gray-300 text-gray-700 hover:text-gray-900"
      >
        <FiUser className="text-lg" />
        <span>Register</span>
      </Link>
    </div>
  );
};

export default Elements;