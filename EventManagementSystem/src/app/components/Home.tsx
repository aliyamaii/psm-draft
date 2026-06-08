import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Shield, Zap, Users, Star, ChevronDown } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 font-bold" style={{ color: '#273480' }}>
            Quickly create QR terminal, payment form & payment link.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8">
            Accept payments securely and grow your business with Malaysia's trusted payment solution
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-lg text-white flex items-center justify-center gap-2 transition-colors text-base md:text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Sign Up Now
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-lg border-2 transition-colors text-base md:text-lg font-semibold"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              How It Works
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#273480' }} />
              <span className="text-sm md:text-base font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#E11A27' }} />
              <span className="text-sm md:text-base font-medium">10,000+ Businesses</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#9F4091' }} />
              <span className="text-sm md:text-base font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 md:mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwYXltZW50JTIwcGxhdGZvcm18ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Payment platform"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 md:py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 font-bold" style={{ color: '#273480' }}>
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Get started in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="text-center">
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-white" style={{ backgroundColor: '#273480' }}>
                  1
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-full h-1" style={{ backgroundColor: '#E11A27', transform: 'translateY(-50%)' }}></div>
              </div>
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>Create Account</h3>
              <p className="text-gray-600">
                Sign up in minutes with just your email and basic information. No complex paperwork required.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxzaWduJTIwdXB8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Create account"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-white" style={{ backgroundColor: '#E11A27' }}>
                  2
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-full h-1" style={{ backgroundColor: '#9F4091', transform: 'translateY(-50%)' }}></div>
              </div>
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>Set Up Payments</h3>
              <p className="text-gray-600">
                Configure your payment methods and customize the checkout experience to match your brand.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxwYXltZW50JTIwc2V0dXB8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Setup payments"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-white" style={{ backgroundColor: '#9F4091' }}>
                  3
                </div>
              </div>
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>Start Accepting Payments</h3>
              <p className="text-gray-600">
                Integrate payment links or checkout buttons and start receiving payments immediately.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxhY2NlcHRpbmclMjBwYXltZW50c3xlbnwwfHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Accept payments"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage payments efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#273480' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#273480' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: '#273480' }}>Online Banking</h3>
              <p className="text-gray-600 mb-4">
                Accept payments from all major Malaysian banks with instant confirmation
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#273480' }} />
                  <span>Maybank2U, CIMB Clicks, Hong Leong Bank</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#273480' }} />
                  <span>RHB Bank, Public Bank, AmBank</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#E11A27' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#E11A27' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: '#273480' }}>eWallets</h3>
              <p className="text-gray-600 mb-4">
                Support for popular Malaysian eWallets for seamless checkout
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#E11A27' }} />
                  <span>Touch 'n Go, GrabPay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#E11A27' }} />
                  <span>Boost, ShopeePay</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#9F4091' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#9F4091' }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: '#273480' }}>Buy Now, Pay Later</h3>
              <p className="text-gray-600 mb-4">
                Offer flexible payment options to increase conversion rates
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#9F4091' }} />
                  <span>Atome, GrabPay Later</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#9F4091' }} />
                  <span>SPayLater, Zip</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#273480' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#273480' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: '#273480' }}>Credit & Debit Cards</h3>
              <p className="text-gray-600 mb-4">
                Accept all major cards with competitive processing rates
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#273480' }} />
                  <span>Visa, Mastercard, American Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#273480' }} />
                  <span>3D Secure authentication</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#E11A27' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#E11A27' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: '#273480' }}>Instant Settlement</h3>
              <p className="text-gray-600 mb-4">
                Get your money faster with T+1 or T+0 settlement options
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#E11A27' }} />
                  <span>Real-time transaction monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#E11A27' }} />
                  <span>Automated reconciliation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#9F4091' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#9F4091' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold" style={{ color: '#273480' }}>Multi-Currency</h3>
              <p className="text-gray-600 mb-4">
                Accept payments in multiple currencies with auto-conversion
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#9F4091' }} />
                  <span>MYR, USD, SGD, EUR</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: '#9F4091' }} />
                  <span>Competitive FX rates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees, no surprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="mb-2 text-2xl font-semibold" style={{ color: '#273480' }}>Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#273480' }}>1.5%</span>
                <span className="text-gray-600 text-lg"> per transaction</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Perfect for small businesses and startups</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#273480' }} />
                  <span className="text-gray-600">All payment methods</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#273480' }} />
                  <span className="text-gray-600">Payment links & checkout</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#273480' }} />
                  <span className="text-gray-600">Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#273480' }} />
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
              <Link
                to="/login"
                className="w-full block text-center px-6 py-3 rounded-lg border-2 transition-colors font-semibold"
                style={{ borderColor: '#273480', color: '#273480' }}
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 p-8 rounded-xl relative transform scale-105" style={{ borderColor: '#E11A27' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-white font-semibold" style={{ backgroundColor: '#E11A27' }}>
                Most Popular
              </div>
              <h3 className="mb-2 text-2xl font-semibold" style={{ color: '#273480' }}>Professional</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#273480' }}>1.2%</span>
                <span className="text-gray-600 text-lg"> per transaction</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">For growing businesses with higher volume</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#E11A27' }} />
                  <span className="text-gray-600">Everything in Starter</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#E11A27' }} />
                  <span className="text-gray-600">API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#E11A27' }} />
                  <span className="text-gray-600">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#E11A27' }} />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#E11A27' }} />
                  <span className="text-gray-600">Custom branding</span>
                </li>
              </ul>
              <Link
                to="/login"
                className="w-full block text-center px-6 py-3 rounded-lg text-white transition-colors font-semibold"
                style={{ backgroundColor: '#E11A27' }}
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="mb-2 text-2xl font-semibold" style={{ color: '#273480' }}>Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: '#273480' }}>Custom</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Tailored solutions for large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#9F4091' }} />
                  <span className="text-gray-600">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#9F4091' }} />
                  <span className="text-gray-600">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#9F4091' }} />
                  <span className="text-gray-600">Custom integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#9F4091' }} />
                  <span className="text-gray-600">24/7 phone support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#9F4091' }} />
                  <span className="text-gray-600">SLA guarantee</span>
                </li>
              </ul>
              <Link
                to="/login"
                className="w-full block text-center px-6 py-3 rounded-lg border-2 transition-colors font-semibold"
                style={{ borderColor: '#273480', color: '#273480' }}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 shadow-lg" style={{ borderColor: '#273480' }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#E11A27' }} />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Perbadanan Stadium Malaysia transformed our event ticketing. The payment integration was seamless, and our conversion rates increased by 40%."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                  <span className="text-white font-semibold">SA</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: '#273480' }}>Sarah Ahmad</div>
                  <div className="text-sm text-gray-600">Event Organizer</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 shadow-lg" style={{ borderColor: '#E11A27' }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#E11A27' }} />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The multi-currency support helped us expand to international markets. Customer support is exceptional - they're always available when we need help."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                  <span className="text-white font-semibold">MK</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: '#273480' }}>Mohamed Khan</div>
                  <div className="text-sm text-gray-600">E-commerce Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 shadow-lg" style={{ borderColor: '#9F4091' }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#E11A27' }} />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Setup took less than 30 minutes. The BNPL options have significantly boosted our average order value. Highly recommend for any Malaysian business."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                  <span className="text-white font-semibold">JL</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: '#273480' }}>Jennifer Lee</div>
                  <div className="text-sm text-gray-600">Retail Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to get started?",
                answer: "You can sign up and start accepting payments in as little as 15 minutes. Our streamlined onboarding process ensures you're up and running quickly without complex paperwork."
              },
              {
                question: "What payment methods do you support?",
                answer: "We support all major Malaysian banks, popular eWallets (Touch 'n Go, GrabPay, Boost, ShopeePay), credit/debit cards (Visa, Mastercard, Amex), and BNPL options (Atome, GrabPay Later, SPayLater, Zip)."
              },
              {
                question: "How secure is the payment platform?",
                answer: "We use bank-level security with 256-bit SSL encryption, PCI DSS Level 1 compliance, and advanced fraud detection. Your customers' payment data is never stored on your servers."
              },
              {
                question: "What are the fees?",
                answer: "Our transparent pricing starts at 1.5% per transaction with no setup fees, monthly fees, or hidden charges. Enterprise plans offer custom rates based on volume."
              },
              {
                question: "How do I receive my funds?",
                answer: "Funds are settled to your bank account within 1-2 business days. We also offer T+0 same-day settlement options for eligible businesses with higher transaction volumes."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 overflow-hidden" style={{ borderColor: index % 3 === 0 ? '#273480' : index % 3 === 1 ? '#E11A27' : '#9F4091' }}>
                <button className="w-full px-6 py-4 flex items-center justify-between text-left" style={{ color: '#273480' }}>
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Ready to Transform Your Payments?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already using Perbadanan Stadium Malaysia
          </p>
          <Link
            to="/login"
            className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold mx-auto"
            style={{ backgroundColor: '#E11A27' }}
          >
            Sign Up Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}