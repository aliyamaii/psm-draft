import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Send, Clock, Building, Users, MessageCircle, CheckCircle, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const contactChannels = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email Support',
    description: 'Get detailed responses via email',
    contact: 'support@perbadananstadium.my',
    color: '#273480'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Phone Support',
    description: 'Speak with our team directly',
    contact: '+60 3-1234 5678',
    color: '#E11A27'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Live Chat',
    description: 'Get instant help via chat',
    contact: 'Available 24/7',
    color: '#9F4091'
  }
];

const departments = [
  { name: 'Sales', description: 'New business inquiries and partnerships', email: 'sales@perbadananstadium.my' },
  { name: 'Support', description: 'Technical assistance and troubleshooting', email: 'support@perbadananstadium.my' },
  { name: 'Billing', description: 'Payment and account related questions', email: 'billing@perbadananstadium.my' },
  { name: 'Marketing', description: 'Marketing collaborations and sponsorships', email: 'marketing@perbadananstadium.my' }
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 font-bold" style={{ color: '#273480' }}>
            Contact Us
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            We're here to help you succeed
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-12" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred contact method
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactChannels.map((channel) => (
              <div key={channel.title} className="bg-white rounded-xl p-8 shadow-lg border-2 text-center" style={{ borderColor: channel.color }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: channel.color }}>
                  {channel.icon}
                </div>
                <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="text-lg font-semibold" style={{ color: channel.color }}>
                  {channel.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#273480' }}>
              <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480] resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors"
                  style={{ backgroundColor: '#E11A27' }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="space-y-6">
              {/* Office Location */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#E11A27' }}>
                <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Our Office</h3>
                <div className="flex items-start gap-4 mb-6">
                  <Building className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#E11A27' }} />
                  <div>
                    <div className="font-semibold mb-2" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</div>
                    <div className="text-gray-600">
                      <div>National Stadium Complex</div>
                      <div>Bukit Jalil, 57000</div>
                      <div>Kuala Lumpur, Malaysia</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8" style={{ color: '#E11A27' }} />
                  <a href="#" className="text-lg font-semibold" style={{ color: '#E11A27' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#9F4091' }}>
                <h3 className="text-2xl mb-6 font-semibold" style={{ color: '#273480' }}>Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 flex-shrink-0" style={{ color: '#9F4091' }} />
                    <div>
                      <div className="font-semibold" style={{ color: '#273480' }}>Monday - Friday</div>
                      <div className="text-gray-600">9:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 flex-shrink-0" style={{ color: '#9F4091' }} />
                    <div>
                      <div className="font-semibold" style={{ color: '#273480' }}>Saturday</div>
                      <div className="text-gray-600">9:00 AM - 1:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 flex-shrink-0" style={{ color: '#9F4091' }} />
                    <div>
                      <div className="font-semibold" style={{ color: '#273480' }}>Sunday</div>
                      <div className="text-gray-600">Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2" style={{ borderColor: '#273480' }}>
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
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#273480' }}>Chat: Under 5 minutes</div>
                      <div className="text-gray-600">Live chat response time during business hours.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Contact by Department
            </h2>
            <p className="text-xl text-gray-600">
              Reach the right team for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="bg-white rounded-xl p-6 shadow-lg border-2 text-center" style={{ borderColor: '#273480' }}>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{dept.description}</p>
                <div className="text-sm" style={{ color: '#273480' }}>
                  {dept.email}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600">
              Follow us on social media for updates and news
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a href="#" className="bg-white rounded-xl p-8 shadow-lg border-2 text-center hover:shadow-xl transition-shadow" style={{ borderColor: '#0077B5' }}>
              <Linkedin className="w-12 h-12 mx-auto mb-4" style={{ color: '#0077B5' }} />
              <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>LinkedIn</h3>
            </a>
            <a href="#" className="bg-white rounded-xl p-8 shadow-lg border-2 text-center hover:shadow-xl transition-shadow" style={{ borderColor: '#1DA1F2' }}>
              <Twitter className="w-12 h-12 mx-auto mb-4" style={{ color: '#1DA1F2' }} />
              <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>Twitter</h3>
            </a>
            <a href="#" className="bg-white rounded-xl p-8 shadow-lg border-2 text-center hover:shadow-xl transition-shadow" style={{ borderColor: '#E4405F' }}>
              <Instagram className="w-12 h-12 mx-auto mb-4" style={{ color: '#E4405F' }} />
              <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>Instagram</h3>
            </a>
            <a href="#" className="bg-white rounded-xl p-8 shadow-lg border-2 text-center hover:shadow-xl transition-shadow" style={{ borderColor: '#1877F2' }}>
              <Facebook className="w-12 h-12 mx-auto mb-4" style={{ color: '#1877F2' }} />
              <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>Facebook</h3>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}