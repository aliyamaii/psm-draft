import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Clock, Globe, CheckCircle, BarChart, Code, Star, Lock } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const features = [
  {
    id: 1,
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast Setup',
    description: 'Create events and start selling tickets in under 5 minutes. No technical skills required.',
    color: '#273480'
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure Payments',
    description: 'Industry-leading security with bank-grade encryption. Your customer data is always protected.',
    color: '#E11A27'
  },
  {
    id: 3,
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Real-Time Analytics',
    description: 'Track sales, revenue, and attendance in real-time. Make data-driven decisions.',
    color: '#9F4091'
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8" />,
    title: 'Audience Management',
    description: 'Build lasting relationships with attendees. Send notifications and gather feedback.',
    color: '#273480'
  },
  {
    id: 5,
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to help you succeed.',
    color: '#E11A27'
  },
  {
    id: 6,
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Reach',
    description: 'Accept payments from anywhere in world. Expand your event business globally.',
    color: '#9F4091'
  },
  {
    id: 7,
    icon: <Code className="w-8 h-8" />,
    title: 'Developer API',
    description: 'Full REST API with webhooks for seamless integration with your existing systems.',
    color: '#273480'
  },
  {
    id: 8,
    icon: <BarChart className="w-8 h-8" />,
    title: 'Smart Reporting',
    description: 'Detailed reports and insights to optimize your event performance and revenue.',
    color: '#E11A27'
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Powerful Features for Payment Success
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Everything you need to accept payments securely and grow your business
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxwYXltZW50JTIwZmVhdHVyZXN8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Payment features"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-opacity-100" style={{ borderColor: feature.color, opacity: 0.9 }}>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>
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

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Bank-grade security for peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#273480' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3 font-semibold text-center" style={{ color: '#273480' }}>
                PCI DSS Compliant
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Level 1 PCI DSS compliance ensures the highest security standards for payment processing
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#E11A27' }}>
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3 font-semibold text-center" style={{ color: '#273480' }}>
                256-bit Encryption
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                All transactions are protected with enterprise-grade encryption technology
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#9F4091' }}>
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3 font-semibold text-center" style={{ color: '#273480' }}>
                Fraud Protection
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Advanced fraud detection algorithms protect your business from unauthorized transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already using Perbadanan Stadium Malaysia
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Sign Up Now
              <ArrowRight className="w-6 h-6" />
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

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: '#273480' }}>
                10,000+
              </div>
              <div className="text-gray-600 text-lg">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: '#E11A27' }}>
                RM 50M+
              </div>
              <div className="text-gray-600 text-lg">Transactions Processed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: '#9F4091' }}>
                99.9%
              </div>
              <div className="text-gray-600 text-lg">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: '#273480' }}>
                24/7
              </div>
              <div className="text-gray-600 text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}