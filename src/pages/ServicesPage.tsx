import { Home, Building2, Sparkles, Truck, Sofa, Calendar } from 'lucide-react';

type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact';

interface ServicesPageProps {
  onNavigate?: (page: Page) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Home,
      title: 'Home Cleaning',
      description: 'Complete residential cleaning services including dusting, vacuuming, mopping, and sanitizing all rooms. Perfect for maintaining a clean and healthy living space.',
      features: ['Kitchen & bathroom cleaning', 'Bedroom & living area care', 'Floor cleaning & vacuuming', 'Dusting & surface wiping'],
      image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Building2,
      title: 'Office Cleaning',
      description: 'Professional commercial cleaning for offices, retail spaces, and business environments. Create a productive and welcoming workspace for your team and clients.',
      features: ['Desk & workstation cleaning', 'Break room sanitation', 'Restroom deep cleaning', 'Floor care & maintenance'],
      image: 'https://images.pexels.com/photos/7615470/pexels-photo-7615470.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Intensive, top-to-bottom cleaning that reaches every corner. Ideal for spring cleaning, post-renovation, or when your space needs extra attention.',
      features: ['Behind appliances & furniture', 'Baseboards & crown molding', 'Window & blind cleaning', 'Detailed bathroom & kitchen'],
      image: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Truck,
      title: 'Move-In/Out Cleaning',
      description: 'Comprehensive cleaning for properties being vacated or occupied. Ensure your new home sparkles or leave your old one spotless for the next residents.',
      features: ['All rooms thoroughly cleaned', 'Cabinet & closet interior', 'Appliance cleaning', 'Detailed floor care'],
      image: 'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sofa,
      title: 'Carpet & Upholstery Care',
      description: 'Professional cleaning for carpets, rugs, and upholstered furniture. Remove stains, odors, and allergens with our advanced cleaning techniques.',
      features: ['Steam cleaning', 'Stain removal', 'Odor elimination', 'Fabric protection'],
      image: 'https://images.pexels.com/photos/4108726/pexels-photo-4108726.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Calendar,
      title: 'Recurring Cleaning',
      description: 'Regular maintenance cleaning on your schedule. Choose weekly, bi-weekly, or monthly service to keep your space consistently clean and fresh.',
      features: ['Flexible scheduling', 'Same team each visit', 'Customized cleaning plans', 'Priority booking'],
      image: 'https://images.pexels.com/photos/6196945/pexels-photo-6196945.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From everyday maintenance to specialized deep cleaning, we offer comprehensive solutions
            for every cleaning need. All services use eco-friendly products and are performed by trained professionals.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-gradient-to-br from-teal-100 to-lime-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="bg-gradient-to-r from-teal-500 to-lime-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  Book This Service
                </button>
              </div>

              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-teal-500 to-lime-400 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Cleaning Solution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every space is unique. Let us create a personalized cleaning plan that fits your specific needs and budget.
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-white text-teal-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Contact Us for Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
}
