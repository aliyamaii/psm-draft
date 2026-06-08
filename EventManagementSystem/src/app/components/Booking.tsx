import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Ticket, CreditCard, Smartphone, Shield, Clock, CheckCircle, Zap, Globe } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const steps = [
  {
    id: 1,
    icon: <Calendar className="w-12 h-12" />,
    title: 'Choose Your Event',
    description: 'Browse events or search for specific concerts, sports, and entertainment shows. Find the perfect event for you.',
    color: '#273480'
  },
  {
    id: 2,
    icon: <Ticket className="w-12 h-12" />,
    title: 'Select Tickets',
    description: 'Choose from available ticket types. Select the quantity you need and add to cart.',
    color: '#E11A27'
  },
  {
    id: 3,
    icon: <CreditCard className="w-12 h-12" />,
    title: 'Secure Payment',
    description: 'Pay securely using multiple payment methods. All transactions are encrypted and protected.',
    color: '#9F4091'
  },
  {
    id: 4,
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Get Your Tickets',
    description: 'Receive your tickets instantly via email and QR code. Access your event easily.',
    color: '#273480'
  }
];

export default function Booking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Simple, Secure Ticket Booking
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Get your tickets in minutes, not hours
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y29uY2VydCUyMHRpY2tldHxlbnwwfHx8fHwxNzc2MjQwMjc4fA&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Event booking"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your tickets in 4 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 hover:shadow-xl transition-shadow" style={{ borderColor: step.color }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: step.color }}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl mb-3 font-semibold text-center" style={{ color: '#273480' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Multiple Payment Methods
            </h2>
            <p className="text-xl text-gray-600">
              Pay your way, with the method you prefer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Online Banking', icon: '🏦', count: '48+ Banks', color: '#273480' },
              { name: 'eWallets', icon: '📱', count: 'Major Providers', color: '#E11A27' },
              { name: 'Credit Cards', icon: '💳', count: 'All Types', color: '#9F4091' }
            ].map((method) => (
              <div key={method.name} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border-2" style={{ borderColor: method.color }}>
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>{method.name}</h3>
                <p className="text-gray-600">{method.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with Perbadanan Stadium Malaysia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <Shield className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>100% Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                All transactions are protected with bank-grade encryption. Your payment information is never stored.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <Clock className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Instant Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your tickets immediately after payment. No waiting, no delays.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Zap className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Fast Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete your booking in under 2 minutes with our streamlined checkout process.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <Globe className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Mobile Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Book tickets from anywhere using your smartphone. Our mobile experience is optimized for convenience.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <CheckCircle className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>No Hidden Fees</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with no surprise charges. What you see is what you pay.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Smartphone className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Digital Tickets</h3>
              <p className="text-gray-600 leading-relaxed">
                Access your tickets via QR code. No printing required, just scan and enter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Ready to Book Your Next Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse thousands of events and get your tickets securely
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Browse Events
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/qr-payments"
              className="px-12 py-4 rounded-lg border-2 transition-colors text-lg font-semibold"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              View Payment Options
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}