import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const pages = [
    { name: 'Features', path: '/features' },
    { name: 'Automation Workflow', path: '/automation-workflow' },
    { name: 'Marketing Tracking', path: '/marketing-tracking' },
    { name: 'Payment Links', path: '/payment-link' },
    { name: 'QR Terminal', path: '/qr-payments' },
    { name: 'Event Management', path: '/event-management' },
    { name: 'Landing Page', path: '/landing-page' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Terms', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <footer className="border-t border-gray-100 py-12" style={{ backgroundColor: '#273480' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="https://vectorise.net/logo/wp-content/uploads/2015/07/Kompleks-Sukan-Negara.png"
                  alt="Perbadanan Stadium Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-white">Perbadanan Stadium Malaysia</span>
            </div>
            <p className="text-gray-300 text-sm">
              Malaysia's trusted payment and event management platform
            </p>
          </div>

          {/* Pages Section */}
          <div className="md:col-span-2">
            <h4 className="text-white mb-4 font-semibold">Pages</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link to={page.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <div>
                  <div className="text-white text-xs">Email</div>
                  <div className="text-gray-300 text-xs">support@perbadananstadium.my</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <div className="text-white text-xs">Phone</div>
                  <div className="text-gray-300 text-xs">+60 3-1234 5678</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <div>
                  <div className="text-white text-xs">Location</div>
                  <div className="text-gray-300 text-xs">Bukit Jalil, Kuala Lumpur</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center text-gray-300 text-sm">
          © 2026 Perbadanan Stadium Malaysia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}