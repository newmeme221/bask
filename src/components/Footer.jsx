import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              BASK <span className="text-orange-500">ENGINEERING</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Ghana's leading engineering and construction company with the tenacity to deliver 
              a range of projects of any size to clients in various markets.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-sm">P.O BOX CS 8284 TEMA - GHANA WEST AFRICA</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-sm">(233) 0246 381 748 / 0272 903 115</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-sm">bs@baskengineeringlimited.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Steel Fabrication</li>
              <li className="text-gray-300">Pipeline Installation</li>
              <li className="text-gray-300">Plant Machinery</li>
              <li className="text-gray-300">Corrosion Protection</li>
              <li className="text-gray-300">Structural Engineering</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BASK Engineering Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Safety • Quality • Timely Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

