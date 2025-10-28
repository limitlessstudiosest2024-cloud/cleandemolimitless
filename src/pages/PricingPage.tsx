import { Check, Star } from 'lucide-react';

type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact';

interface PricingPageProps {
  onNavigate?: (page: Page) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: 'Basic Clean',
      price: '89',
      description: 'Perfect for regular maintenance and light cleaning needs',
      features: [
        'All rooms dusted & vacuumed',
        'Kitchen surface cleaning',
        'Bathroom cleaning',
        'Floor mopping',
        'Trash removal',
        'Surface disinfection',
      ],
      popular: false,
    },
    {
      name: 'Deep Clean',
      price: '159',
      description: 'Comprehensive cleaning for a thorough refresh',
      features: [
        'Everything in Basic Clean',
        'Inside appliances',
        'Cabinet exteriors',
        'Baseboards & trim',
        'Window sills & frames',
        'Behind furniture',
        'Detailed bathroom scrub',
      ],
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: '249',
      description: 'The ultimate cleaning experience with premium attention',
      features: [
        'Everything in Deep Clean',
        'Interior windows',
        'Blinds & light fixtures',
        'Wall spot cleaning',
        'Oven deep clean',
        'Refrigerator cleaning',
        'Carpet spot treatment',
        'Priority scheduling',
      ],
      popular: false,
    },
  ];

  const addOns = [
    { name: 'Interior Windows', price: '35' },
    { name: 'Oven Deep Clean', price: '45' },
    { name: 'Refrigerator Clean', price: '35' },
    { name: 'Laundry Service', price: '40' },
    { name: 'Carpet Steam Clean', price: '60' },
    { name: 'Garage Organization', price: '80' },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the package that fits your needs. All prices are for standard homes up to 2,000 sq ft.
            Custom quotes available for larger spaces or specialized needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-teal-500 to-lime-400 text-white shadow-2xl transform scale-105 relative hover:shadow-3xl hover:scale-110'
                  : 'bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-teal-600 px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-4">
                <span
                  className={`text-5xl font-bold ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-lg ${
                    plan.popular ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  /visit
                </span>
              </div>

              <p
                className={`mb-8 ${
                  plan.popular ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular
                          ? 'bg-white/20'
                          : 'bg-teal-100'
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 ${
                          plan.popular ? 'text-white' : 'text-teal-600'
                        }`}
                      />
                    </div>
                    <span
                      className={plan.popular ? 'text-white' : 'text-gray-700'}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate?.('contact')}
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${
                  plan.popular
                    ? 'bg-white text-teal-600 hover:shadow-xl transform hover:-translate-y-1'
                    : 'bg-gradient-to-r from-teal-500 to-lime-400 text-white hover:shadow-lg'
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-On Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your cleaning package with these additional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900">{addOn.name}</h3>
                  <span className="text-teal-600 font-bold text-xl">+${addOn.price}</span>
                </div>
                <button className="text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors">
                  Add to package →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-teal-50 to-lime-50 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Recurring Service Discounts
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">10%</div>
                <div className="text-gray-700 font-medium">Weekly Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">7%</div>
                <div className="text-gray-700 font-medium">Bi-Weekly Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">5%</div>
                <div className="text-gray-700 font-medium">Monthly Service</div>
              </div>
            </div>
            <p className="text-center text-gray-600 mb-8">
              Save more with regular cleaning schedules. Cancel anytime with no penalties.
            </p>
            <div className="text-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-gradient-to-r from-teal-500 to-lime-400 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            * Prices may vary based on home size, condition, and location.
            All services include eco-friendly products and satisfaction guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
