import { Heart, Award, Users, Leaf, Shield, Clock } from 'lucide-react';

type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact';

interface AboutPageProps {
  onNavigate?: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction and trust are at the heart of everything we do. We listen, we care, and we deliver.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'We use only non-toxic, environmentally safe products that protect your family and our planet.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on. Same great quality, every single time.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We take pride in our work and strive for perfection in every clean. Your space deserves the best.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Clients' },
    { number: '50,000+', label: 'Cleanings Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  const team = [
    {
      name: 'Maria Santos',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'James Chen',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sophie Williams',
      role: 'Training Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About PureShine</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a cleaning company – we're your trusted partner in creating
            healthy, sparkling spaces where life happens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2009, PureShine Cleaning Services began with a simple mission:
                to provide professional, eco-friendly cleaning that families could trust.
                What started as a small team of passionate cleaners has grown into one of
                the region's most trusted cleaning companies.
              </p>
              <p>
                Our founder, Maria Santos, saw a gap in the market for cleaning services
                that truly cared about both customers and the environment. With 15 years
                of experience and a commitment to excellence, we've built our reputation
                one satisfied customer at a time.
              </p>
              <p>
                Today, we're proud to serve thousands of homes and businesses, maintaining
                the same dedication to quality, integrity, and customer satisfaction that
                we started with. Every member of our team is background-checked, trained,
                and passionate about what they do.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional cleaning"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <img
                src="https://images.pexels.com/photos/4099093/pexels-photo-4099093.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Clean home"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-lime-400 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{value.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-lime-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gradient-to-br from-teal-100 to-lime-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Trained Professionals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All team members undergo rigorous training and background checks.
                We invest in our people so they can deliver exceptional results.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gradient-to-br from-teal-100 to-lime-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Leaf className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Green Cleaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We exclusively use eco-friendly, non-toxic products that are safe
                for your family, pets, and the environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gradient-to-br from-teal-100 to-lime-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Always On Time</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We respect your time. Our teams arrive punctually and work
                efficiently without compromising on quality.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience the PureShine Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their homes and offices.
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-gradient-to-r from-teal-500 to-lime-400 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </div>
  );
}
