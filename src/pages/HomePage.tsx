import { Sparkles, Shield, Clock, Leaf, Star, CheckCircle } from 'lucide-react';

type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact';

interface HomePageProps {
  onNavigate?: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      title: 'Home Cleaning',
      description: 'Comprehensive residential cleaning tailored to your needs',
      icon: Sparkles,
    },
    {
      title: 'Office Cleaning',
      description: 'Professional workspace cleaning for productive environments',
      icon: Shield,
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough cleaning for those hard-to-reach areas',
      icon: CheckCircle,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'PureShine transformed my home! The team is professional, thorough, and always on time.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Michael Chen',
      text: 'Best cleaning service I\'ve used. They pay attention to every detail and use eco-friendly products.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Emily Rodriguez',
      text: 'Reliable, trustworthy, and affordable. I wouldn\'t trust anyone else with my home.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'David Thompson',
      text: 'Outstanding service! They go above and beyond every single time. My office has never looked better.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Lisa Martinez',
      text: 'Eco-friendly products that actually work! Love that they care about the environment as much as I do.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'James Wilson',
      text: 'Been using PureShine for over a year now. Consistently excellent service and wonderful staff.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Trusted Professionals',
      description: 'All staff are background-checked and fully insured',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Products',
      description: 'Safe, non-toxic cleaning solutions for your family',
    },
    {
      icon: Clock,
      title: '100% Satisfaction',
      description: 'We guarantee our work or we\'ll re-clean for free',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-lime-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bringing <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-lime-400">Sparkle</span> to Every Space
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professional cleaning services that make your home or office shine.
                Experience the difference with our eco-friendly approach and meticulous attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="bg-gradient-to-r from-teal-500 to-lime-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  Get a Free Quote
                </button>
                <button
                  onClick={() => onNavigate?.('services')}
                  className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-colors"
                >
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional cleaner at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-lime-100 p-3 rounded-xl">
                    <Star className="w-6 h-6 text-lime-600 fill-lime-600" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to deep cleaning, we offer comprehensive services for every need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-teal-100 to-lime-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button
                  onClick={() => onNavigate?.('services')}
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PureShine?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to deliver exceptional cleaning services you can trust
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center space-y-4"
              >
                <div className="inline-flex bg-gradient-to-br from-teal-100 to-lime-100 w-20 h-20 rounded-2xl items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-lime-400 fill-lime-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 to-lime-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the PureShine Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get a free, no-obligation quote today and discover why thousands of customers trust us with their homes and offices.
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-white text-teal-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
