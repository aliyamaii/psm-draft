import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageCircle, ChevronDown, ChevronUp, CheckCircle, ArrowRight, BookOpen, LifeBuoy, Phone, Mail } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'How do I create an event?',
    answer: 'To create an event, log in to your organizer dashboard, click on "Create Event", fill in event details, add ticket types, and publish your event. Your event will be live immediately after publishing.'
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept multiple payment methods including online banking from 48+ Malaysian banks, major eWallets (Touch \'n Go, GrabPay, Boost, Setel, BigPay, ShopeePay), credit cards, and Buy Now Pay Later options.'
  },
  {
    id: 3,
    question: 'How do I receive payments from ticket sales?',
    answer: 'All payments are processed securely and transferred directly to your bank account. You can view all transactions and revenue in your dashboard, with real-time updates on sales and settlements.'
  },
  {
    id: 4,
    question: 'Can I refund tickets to customers?',
    answer: 'Yes, as an event organizer, you can process refunds through your dashboard. Go to event details, find the booking you want to refund, and click "Refund". The refund will be processed according to your payment gateway\'s policies.'
  },
  {
    id: 5,
    question: 'How do I promote my event?',
    answer: 'You can promote your event by sharing the event link on social media, using our built-in marketing tools, sending email invitations to your contact list, and leveraging our analytics to understand which promotion channels work best.'
  },
  {
    id: 6,
    question: 'Is my payment information secure?',
    answer: 'Absolutely. We use bank-grade security with 256-bit SSL encryption and are PCI DSS Level 1 compliant. Your payment information is never stored on our servers.'
  },
  {
    id: 7,
    question: 'How long does it take to get started?',
    answer: 'You can sign up and start accepting payments in as little as 15 minutes. Our streamlined onboarding process ensures you\'re up and running quickly without complex paperwork.'
  },
  {
    id: 8,
    question: 'What are your fees?',
    answer: 'Our transparent pricing starts at 1.5% per transaction with no setup fees, monthly fees, or hidden charges. Enterprise plans offer custom rates based on volume.'
  }
];

const helpCategories = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials',
    link: '/api',
    color: '#273480'
  },
  {
    icon: <LifeBuoy className="w-8 h-8" />,
    title: 'Getting Started',
    description: 'Quick start guides for new users',
    link: '/features',
    color: '#E11A27'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Community',
    description: 'Connect with other users',
    link: '/contact',
    color: '#9F4091'
  }
];

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Clear form
      setName('');
      setEmail('');
      setMessage('');

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Help Center
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Find answers to common questions or contact us for support
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMnx8Y3VzdG9tZXIlMjBzdXBwb3J0fGVufDB8fHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Customer support"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose a category to get started
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {helpCategories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 hover:shadow-lg"
                style={{ borderColor: category.color }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: category.color }}>
                  {category.icon}
                </div>
                <h3 className="text-2xl mb-3 font-semibold text-center" style={{ color: '#273480' }}>
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden hover:border-opacity-50 hover:shadow-xl transition-shadow">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold pr-4 text-lg" style={{ color: '#273480' }}>
                    {faq.question}
                  </span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  )}
                </button>

                {openFaq === faq.id && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600">
              Contact our support team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Contact Us</h3>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 mb-6 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Your message has been sent successfully! We'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmitContact} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  style={{ backgroundColor: '#E11A27' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Phone className="w-6 h-6 mx-auto mb-2" style={{ color: '#273480' }} />
                    <div className="text-sm text-gray-600">
                      <strong>+60 3-1234 5678</strong>
                    </div>
                    <div className="text-xs text-gray-500">Phone Support</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-6 h-6 mx-auto mb-2" style={{ color: '#E11A27' }} />
                    <div className="text-sm text-gray-600">
                      <strong>support@perbadananstadium.my</strong>
                    </div>
                    <div className="text-xs text-gray-500">Email Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#273480' }}>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Monday - Friday</div>
                      <div className="text-gray-600">9:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E11A27' }}>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Saturday - Sunday</div>
                      <div className="text-gray-600">Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Response Time</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Email: Within 24 hours</div>
                      <div className="text-gray-600">We respond to all email inquiries within one business day.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Phone: Immediate</div>
                      <div className="text-gray-600">Call our support line for urgent issues during business hours.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <MessageCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#9F4091' }} />
                <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>24/7 Emergency Support</h3>
                <p className="text-gray-600 mb-6">
                  For urgent technical issues, call our emergency line anytime.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
                  style={{ backgroundColor: '#9F4091', color: 'white' }}
                >
                  Get Emergency Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}