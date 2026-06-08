import { Link } from 'react-router-dom';
import { ArrowRight, Link as LinkIcon, Copy, Share2, QrCode, Zap, Shield, Clock, CheckCircle, BarChart, Smartphone, Globe, CreditCard } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const linkFeatures = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Instant Creation',
    description: 'Generate payment links in seconds. No coding required.',
    color: '#273480'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure Processing',
    description: 'All payments processed securely with bank-grade encryption.',
    color: '#E11A27'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Instant Payouts',
    description: 'Receive funds immediately after successful transactions.',
    color: '#9F4091'
  }
];

const useCases = [
  {
    title: 'Social Media',
    description: 'Share payment links on Facebook, Instagram, and Twitter for instant sales.',
    icon: '📱',
    color: '#273480'
  },
  {
    title: 'Email Marketing',
    description: 'Include payment links in email campaigns for easy checkout.',
    icon: '📧',
    color: '#E11A27'
  },
  {
    title: 'SMS Marketing',
    description: 'Send payment links via SMS for quick mobile purchases.',
    icon: '💬',
    color: '#9F4091'
  },
  {
    title: 'Website Embed',
    description: 'Embed payment forms directly on your website.',
    icon: '🌐',
    color: '#273480'
  }
];

export default function PaymentLink() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Payment Links
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Accept payments anywhere with shareable payment links
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxN3x8b25saW5lJTIwcGF5bWVudHxlbnwwfHx8fHwxNzc2MjQwMjc4fA&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Payment links"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Payment Link Demo */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              How Payment Links Work
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and effective payment solution
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-12 max-w-4xl mx-auto border-2" style={{ borderColor: '#273480' }}>
            <div className="text-center mb-8">
              <LinkIcon className="w-16 h-16 mx-auto mb-4" style={{ color: '#273480' }} />
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>
                Your Payment Link
              </h3>
              <p className="text-gray-600 mb-6">
                Share this link anywhere to accept payments instantly
              </p>
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <code className="text-lg font-mono" style={{ color: '#273480' }}>
                  https://pay.perbadananstadium.my/your-link
                </code>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button className="px-6 py-3 rounded-lg flex items-center gap-2 text-white font-semibold transition-colors" style={{ backgroundColor: '#E11A27' }}>
                  <Copy className="w-5 h-5" />
                  Copy Link
                </button>
                <button className="px-6 py-3 rounded-lg flex items-center gap-2 border-2 font-semibold transition-colors" style={{ borderColor: '#273480', color: '#273480' }}>
                  <QrCode className="w-5 h-5" />
                  Generate QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to accept payments via links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {linkFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: feature.color }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Use Payment Links Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              Multiple channels for maximum reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white rounded-xl p-8 shadow-lg border-2 text-center" style={{ borderColor: useCase.color }}>
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
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
              Accept All Payment Methods
            </h2>
            <p className="text-xl text-gray-600">
              Give your customers flexibility and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <CreditCard className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Credit Cards</h3>
              <p className="text-gray-600 leading-relaxed">
                Visa, Mastercard, American Express accepted with competitive rates.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <Smartphone className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>eWallets</h3>
              <p className="text-gray-600 leading-relaxed">
                Touch 'n Go, GrabPay, Boost, and other popular Malaysian eWallets.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Globe className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Online Banking</h3>
              <p className="text-gray-600 leading-relaxed">
                48+ Malaysian banks supported with instant transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Track Your Performance
            </h2>
            <p className="text-xl text-gray-600">
              Real-time analytics for all your payment links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <BarChart className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Conversion Rates</h3>
              <p className="text-gray-600 leading-relaxed">
                Track link performance and optimize for better conversions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <CheckCircle className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Success Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor successful payments and failed transactions in real-time.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Share2 className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Share Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                See which channels drive the most traffic and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Start Accepting Payments Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Create your first payment link in under 2 minutes
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Create Payment Link
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/features"
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