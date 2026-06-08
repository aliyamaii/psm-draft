import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, Eye, Database, CheckCircle, ArrowRight, Users, Globe, Bell } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const privacySections = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Data Protection',
    content: 'We implement industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure.',
    color: '#273480'
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Data Collection',
    content: 'We collect only the information necessary to provide our services. You have control over what data you share with us.',
    color: '#E11A27'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Usage',
    content: 'Your data is used solely to improve our services and provide you with a better experience. We never sell your personal information.',
    color: '#9F4091'
  }
];

const rights = [
  'Right to access your personal data',
  'Right to know how your data is used',
  'Right to request data deletion',
  'Right to correct inaccurate data',
  'Right to opt-out of marketing communications',
  'Right to data portability'
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Privacy Policy
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Your privacy matters to us
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8cHJpdmFjeSUyMHBvbGljeXxlbnwwfHx8fHwxNzc2MjQwMjc4fA&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Privacy policy"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Last Updated */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#273480' }}>
          <div className="flex items-center gap-4">
            <Bell className="w-8 h-8" style={{ color: '#273480' }} />
            <div>
              <div className="font-semibold text-lg" style={{ color: '#273480' }}>Last Updated</div>
              <div className="text-gray-600">April 17, 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600">
              How we protect your personal information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privacySections.map((section) => (
              <div key={section.title} className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: section.color }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: section.color }}>
                  {section.icon}
                </div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Data We Collect
            </h2>
            <p className="text-xl text-gray-600">
              Information we gather to provide our services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-12 max-w-4xl mx-auto border-2" style={{ borderColor: '#273480' }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Name, email address, phone number, and other contact information you provide when creating an account or using our services.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {['Name', 'Email', 'Phone', 'Address', 'Date of Birth'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Payment Information</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Payment details processed securely through our payment partners. We do not store your full credit card information.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {['Payment Method', 'Transaction Details', 'Billing Address'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Usage Data</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Information about how you use our services, including pages visited, features used, and time spent on the platform.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {['Page Views', 'Click Patterns', 'Session Duration', 'Device Info'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">{item}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Event Information</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Details about events you create, attend, or show interest in, including ticket purchases and attendance records.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {['Event Details', 'Ticket Purchases', 'Attendance', 'Preferences'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Your Rights
            </h2>
            <p className="text-xl text-gray-600">
              Control over your personal information
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto border-2" style={{ borderColor: '#273480' }}>
            <ul className="space-y-4">
              {rights.map((right) => (
                <li key={right} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Security Measures
            </h2>
            <p className="text-xl text-gray-600">
              How we protect your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <Lock className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Encryption</h3>
              <p className="text-gray-600 leading-relaxed">
                All data is encrypted using 256-bit SSL encryption during transmission and storage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <Shield className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Secure Storage</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is stored in secure data centers with physical and digital security measures.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Users className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Access Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Strict access controls ensure only authorized personnel can access your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600">
              We comply with international privacy regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <Globe className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>GDPR Compliant</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully compliant with General Data Protection Regulation for EU residents.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <FileText className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>PDPA Compliant</h3>
              <p className="text-gray-600 leading-relaxed">
                Complies with Malaysia's Personal Data Protection Act 2010.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our privacy team is here to help you understand your rights
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Contact Privacy Team
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/help"
              className="px-12 py-4 rounded-lg border-2 transition-colors text-lg font-semibold"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}