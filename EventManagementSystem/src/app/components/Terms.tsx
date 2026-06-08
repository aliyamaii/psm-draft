import { Link } from 'react-router-dom';
import { Shield, FileText, Users, AlertCircle, Clock, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const termsSections = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Acceptance of Terms',
    content: 'By accessing and using Perbadanan Stadium Malaysia services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.',
    color: '#273480'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'User Responsibilities',
    content: 'Users are responsible for maintaining the confidentiality of their account credentials. You agree to notify us immediately of any unauthorized use of your account. You are responsible for all activities that occur under your account.',
    color: '#E11A27'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Service Availability',
    content: 'We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. We reserve the right to suspend, modify, or discontinue services at any time without prior notice for maintenance, updates, or other operational requirements.',
    color: '#9F4091'
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: 'Payment Processing',
    content: 'All payments are processed securely through our payment partners. By using our services, you agree to the terms and conditions of these payment providers. We are not responsible for any errors or delays in payment processing.',
    color: '#273480'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Refund Policy',
    content: 'Refund policies are determined by event organizers and may vary. We facilitate refund processing according to organizer policies and payment provider guidelines. Please review specific event refund policies before purchasing tickets.',
    color: '#E11A27'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Intellectual Property',
    content: 'All content on our platform, including text, graphics, logos, and software, is owned by Perbadanan Stadium Malaysia and protected by intellectual property laws. Users may not reproduce, distribute, or create derivative works without explicit permission.',
    color: '#9F4091'
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Terms and Conditions
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Please read our terms carefully before using our services
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNHx8bGVnYWwlMjBkb2N1bWVudHN8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Terms and conditions"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Last Updated */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#273480' }}>
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8" style={{ color: '#273480' }} />
            <div>
              <div className="font-semibold text-lg" style={{ color: '#273480' }}>Last Updated</div>
              <div className="text-gray-600">April 17, 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Key Terms
            </h2>
            <p className="text-xl text-gray-600">
              Important information about using our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {termsSections.map((section) => (
              <div key={section.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{ borderColor: section.color }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: section.color }}>
                  {section.icon}
                </div>
                <h3 className="text-xl mb-4 font-semibold" style={{ color: '#273480' }}>
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

      {/* Detailed Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Detailed Terms
            </h2>
            <p className="text-xl text-gray-600">
              Complete terms and conditions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-12 max-w-4xl mx-auto border-2" style={{ borderColor: '#273480' }}>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>1. Introduction</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Perbadanan Stadium Malaysia. These terms and conditions govern your use of our payment platform and related services. By accessing or using our services, you agree to be bound by these terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are using our services on behalf of an organization, you warrant that you have the authority to bind that organization to these terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>2. Account Creation and Security</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To use certain features of our services, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>3. Payment Terms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We accept various payment methods including online banking, eWallets, credit cards, and Buy Now Pay Later options. Payment processing is handled securely through our trusted payment partners.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By making a payment, you authorize us to charge the specified amount to your chosen payment method. All payments are subject to our fee structure as outlined in our pricing page.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify our fees at any time with prior notice to users.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>4. Service Availability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to maintain high service availability and uptime. However, we do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We may suspend, limit, or terminate your access to our services at any time for any reason, including but not limited to violations of these terms or suspected fraudulent activity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>5. User Conduct</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these terms. You must not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Use our services for any fraudulent or unlawful purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit viruses or other harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to investigate any suspected violation of these terms and to take appropriate action, including account suspension or termination.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>6. Privacy and Data Protection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>7. Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Perbadanan Stadium Malaysia shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability for any claims shall not exceed the amount you paid for our services in the twelve months preceding the claim.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#273480' }}>8. Modifications to Terms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of material changes by posting the updated terms on our platform and sending an email notification.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              More information about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 hover:shadow-xl transition-shadow" style={{ borderColor: '#273480' }}>
              <CheckCircle className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Privacy Policy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn how we collect, use, and protect your personal information.
              </p>
              <Link
                to="#"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: '#273480' }}
              >
                View Privacy Policy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 hover:shadow-xl transition-shadow" style={{ borderColor: '#E11A27' }}>
              <Shield className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Security Information</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Details about our security measures and data protection practices.
              </p>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: '#E11A27' }}
              >
                Learn About Security
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 hover:shadow-xl transition-shadow" style={{ borderColor: '#9F4091' }}>
              <Users className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Contact Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Have questions about our terms? Our support team is here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: '#9F4091' }}
              >
                Contact Us
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