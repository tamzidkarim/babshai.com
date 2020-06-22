import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FcClock, FcAssistant } from 'react-icons/fc';

export default function TopNav() {
  return (
    <nav className="bg-gray-800 transition-all duration-500">
      <ul className="flex justify-between items-center px-8 py-1">
        <ul className="flex justify-between items-center space-x-4">
          <li className="flex items-center space-x-4">
            <FcAssistant />
            <p className="text-gray-600 text-sm ">+8801711121212</p>
          </li>
          <li className="flex items-center space-x-4">
            <FcClock />
            <p className="text-gray-600 text-sm ">ALL WEEK FROM 9 AM TO 9 PM</p>
          </li>
        </ul>

        <ul className="flex justify-between items-center space-x-4">
          <li className="text-sm text-gray-600">
            <FaFacebook />
          </li>
          <li className="text-sm text-gray-600">
            <FaInstagram />
          </li>
          <li className="text-sm text-gray-600">
            <FaTwitter />
          </li>
        </ul>
      </ul>
    </nav>
  );
}
