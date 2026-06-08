import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Clock, Globe, Users, Zap, ArrowRight, Building, Linkedin, Twitter, Instagram } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const contactReasons = [
  'General Inquiry',
  'Technical Support',
  'Billing Question',
  'Partnership Opportunity',
  'API Access Request',
  'Feedback',
  'Other'
];

const supportInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Support',
    value: 'support@perbadananstadium.my',
    link: 'mailto:support@perbadananstadium.my',
    color: '#273480'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone Support',
    value: '+60 3-1234 5678',
    link: 'tel:+60312345678',
    color: '#E11A27'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    link: '',
    color: '#9F4091'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Response Time',
    value: 'Within 24 hours',
    link: '',
    color: '#273480'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reason: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        reason: 'General Inquiry',
        message: ''
      });

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
            Contact Us
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            We're here to help. Reach out for support, partnerships, or any questions.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxM3x8b2ZmaWNlJTIwY29udGFjdHxlbnwwfHx8fHwxNzc2MjQwMjc4fA&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Contact us"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {showSuccess && (
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-green-50 border-2 border-green-200 text-green-800 px-8 py-6 rounded-xl flex items-center gap-4">
            <CheckCircle className="w-8 h-8" />
            <div>
              <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>Message Sent!</h3>
              <p className="text-gray-700">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Main Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#273480' }}>
              <h2 className="text-3xl mb-6 font-semibold" style={{ color: '#273480' }}>Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    required
                  >
                    <option value="">Select a subject</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
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
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#E11A27' }}>
                <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Quick Contact</h3>

                <div className="space-y-6">
                  {supportInfo.map((info) => (
                    <div key={info.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: info.color }}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold mb-1" style={{ color: '#273480' }}>{info.title}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                      {info.link && (
                        <a
                          href={info.link}
                          className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
                          style={{ backgroundColor: info.color }}
                        >
                          Contact
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#9F4091' }}>
                <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Office Hours</h3>

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
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Saturday</div>
                      <div className="text-gray-600">Closed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#9F4091' }}>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Sunday</div>
                      <div className="text-gray-600">Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#273480' }}>
                <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Our Location</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-8 h-8 flex-shrink-0" style={{ color: '#273480' }} />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</div>
                      <div className="text-gray-600">National Stadium Complex</div>
                      <div className="text-gray-600">Bukit Jalil, 57000 Kuala Lumpur, Malaysia</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Serving thousands of event organizers and attendees daily</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>24/7 support available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Connect With Us</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media for updates, tips, and exclusive offers.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="#"
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 hover:shadow-lg transition-all"
                  style={{ borderColor: '#273480' }}
                >
                  <Linkedin className="w-8 h-8" style={{ color: '#273480' }} />
                  <span className="text-sm font-medium" style={{ color: '#273480' }}>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 hover:shadow-lg transition-all"
                  style={{ borderColor: '#E11A27' }}
                >
                  <Twitter className="w-8 h-8" style={{ color: '#E11A27' }} />
                  <span className="text-sm font-medium" style={{ color: '#273480' }}>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 hover:shadow-lg transition-all"
                  style={{ borderColor: '#9F4091' }}
                >
                  <Instagram className="w-8 h-8" style={{ color: '#9F4091' }} />
                  <span className="text-sm font-medium" style={{ color: '#273480' }}>Instagram</span>
                </a>
              </div>
            </div>

            {/* Partnership */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Interested in partnering with Perbadanan Stadium Malaysia? We'd love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: '#273480' }}
              >
                <Building className="w-5 h-5" />
                Partnership Inquiry
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}