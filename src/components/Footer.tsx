import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-teal-400 to-lime-400 p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">
                PureShine
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bringing sparkle to every space with professional, eco-friendly cleaning services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigate('home')}
                  className="text-gray-600 hover:text-teal-500 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('services')}
                  className="text-gray-600 hover:text-teal-500 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('pricing')}
                  className="text-gray-600 hover:text-teal-500 transition-colors text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('about')}
                  className="text-gray-600 hover:text-teal-500 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Downtown District</li>
              <li>Suburban Areas</li>
              <li>Business Centers</li>
              <li>Residential Communities</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-teal-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-teal-500" />
                <span>hello@pureshine.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-teal-500 mt-0.5" />
                <span>123 Clean Street<br />Suite 100<br />City, ST 12345</span>
              </li>
            </ul>

            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} PureShine Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
