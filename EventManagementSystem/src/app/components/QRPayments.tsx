import { Link } from 'react-router-dom';
import { ArrowRight, QrCode, Smartphone, CreditCard, Shield, Clock, Globe, CheckCircle, Zap, Users } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const paymentMethods = [
  {
    id: 1,
    name: 'Online Banking',
    icon: <div className="text-3xl">🏦</div>,
    description: '48+ Malaysian banks supported. Instant bank transfer.',
    fee: 'RM 1.00',
    badges: ['FPX', 'IBG', 'DuitNow'],
    color: '#273480'
  },
  {
    id: 2,
    name: 'eWallets',
    icon: <div className="text-3xl">📱</div>,
    description: 'Touch \'n Go, GrabPay, Boost, Setel, BigPay, ShopeePay.',
    fee: 'RM 1.00',
    badges: ['TouchNG', 'GrabPay', 'Boost', 'Setel'],
    color: '#E11A27'
  },
  {
    id: 3,
    name: 'Credit Cards',
    icon: <div className="text-3xl">💳</div>,
    description: 'Visa, Mastercard, American Express accepted.',
    fee: 'RM 1.00 + 1%',
    badges: ['Visa', 'Mastercard', 'Amex'],
    color: '#9F4091'
  },
  {
    id: 4,
    name: 'DuitNow QR',
    icon: <QrCode className="w-10 h-10" />,
    description: 'Scan QR code with any banking app or eWallet.',
    fee: 'RM 1.00',
    badges: ['DuitNow'],
    color: '#273480'
  }
];

export default function QRPayments() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            QR Code Payments
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Fast, secure, and convenient payment solution for events
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMXx8cXIlMjBjb2RlJTIwcGF5bWVudHxlbnwwfHx8fHwxNzc2MjQwMjc4fA&ixlib=rb-4.1.0&q=80&w=1200"
            alt="QR code payments"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* QR Code Display */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Scan to Pay
            </h2>
            <p className="text-xl text-gray-600">
              Quick and easy payments with QR codes
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-12 text-center max-w-2xl mx-auto border-2" style={{ borderColor: '#273480' }}>
            <div className="mb-8">
              <div className="inline-block p-8 rounded-2xl" style={{ backgroundColor: '#273480' }}>
                <QrCode className="w-32 h-32 text-white" />
              </div>
            </div>
            <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>
              Scan to Pay Instantly
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Scan this QR code with any Malaysian banking app or eWallet to make payment instantly
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Smartphone className="w-5 h-5" />
              <span>Supports all major banking apps and eWallets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Accepted Payment Methods
            </h2>
            <p className="text-xl text-gray-600">
              Multiple options for your convenience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => (
              <div key={method.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{ borderColor: method.color }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: method.color }}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2 font-semibold" style={{ color: '#273480' }}>{method.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{method.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold" style={{ color: method.color }}>{method.fee}</span>
                  <span className="text-gray-600">per transaction</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {method.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: method.color }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Why Choose QR Payments?
            </h2>
            <p className="text-xl text-gray-600">
              The smart way to accept payments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <Zap className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Instant Processing</h3>
              <p className="text-gray-600 leading-relaxed">Payments are processed in real-time. No waiting periods.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <Shield className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Bank-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">All transactions are encrypted and secure. PCI DSS compliant.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Clock className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed">QR codes never expire. Accept payments anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <div className="flex items-center justify-center gap-6">
                <CheckCircle className="w-12 h-12 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl mb-2 font-semibold" style={{ color: '#273480' }}>Shariah-Compliant</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our payment system follows Islamic finance principles. Certified by religious authorities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <div className="flex items-center justify-center gap-6">
                <Users className="w-12 h-12 flex-shrink-0" style={{ color: '#E11A27' }} />
                <div>
                  <h3 className="text-2xl mb-2 font-semibold" style={{ color: '#273480' }}>User-Friendly</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Simple and intuitive process for both organizers and attendees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              How to Use QR Payments
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get started
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#273480' }}>
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>Generate QR Code</h4>
                  <p className="text-gray-600 leading-relaxed">Event organizers can generate unique QR codes for each event or ticket type.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E11A27' }}>
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>Display at Venue</h4>
                  <p className="text-gray-600 leading-relaxed">Show QR code at event entrance, on tickets, or in marketing materials.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#9F4091' }}>
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>Instant Payment</h4>
                  <p className="text-gray-600 leading-relaxed">Customers scan and pay immediately using their preferred banking app or eWallet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Ready to Accept QR Payments?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start accepting QR payments for your events today
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Get Started
              <QrCode className="w-6 h-6" />
            </Link>
            <Link
              to="/help"
              className="px-12 py-4 rounded-lg border-2 transition-colors text-lg font-semibold"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}