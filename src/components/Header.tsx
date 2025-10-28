import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-gradient-to-br from-teal-400 to-lime-400 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              PureShine <span className="text-teal-500">Cleaning</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-teal-500'
                    : 'text-gray-700 hover:text-teal-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-gradient-to-r from-teal-500 to-lime-400 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Get Quote
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-teal-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left py-3 font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-teal-500'
                    : 'text-gray-700 hover:text-teal-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="w-full mt-4 bg-gradient-to-r from-teal-500 to-lime-400 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              Get Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
