import { Link, useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight, Check } from 'lucide-react';

const mockLandingPageData: Record<string, any> = {
  'summer-music-festival-2026': {
    eventId: 1,
    heroTitle: 'Experience the Ultimate Music Festival',
    heroSubtitle: 'Join thousands of music lovers for an unforgettable night',
    heroImage: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'Summer Music Festival 2026',
    date: '2026-07-15',
    time: '18:00',
    venue: 'National Stadium',
    location: 'Kuala Lumpur, Malaysia',
    aboutText: 'Experience the biggest music festival of the summer featuring world-class artists, multiple stages, and unforgettable performances. Join thousands of music lovers for a night of incredible live music, food, and entertainment.',
    highlightsTitle: 'Event Highlights',
    highlights: [
      { title: 'World-Class Artists', description: '20+ international and local performers across multiple genres' },
      { title: 'Multiple Stages', description: '3 stages with non-stop entertainment from 6 PM to midnight' },
      { title: 'Food & Beverages', description: 'Curated selection of food trucks and bars featuring local cuisine' },
      { title: 'VIP Experience', description: 'Exclusive VIP areas with premium viewing and amenities' },
      { title: 'Safe & Secure', description: 'Professional security and medical staff on-site' },
      { title: 'Free Parking', description: 'Ample parking space available for all attendees' }
    ],
    ctaText: 'Get Your Tickets Now',
    primaryColor: '#273480',
    accentColor: '#E11A27',
    organizer: 'Perbadanan Stadium Malaysia'
  }
};

export default function EventLandingPage() {
  const { slug } = useParams();
  const page = mockLandingPageData[slug || 'summer-music-festival-2026'] || mockLandingPageData['summer-music-festival-2026'];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: page.primaryColor }} />
            <span className="font-semibold" style={{ color: page.primaryColor }}>Perbadanan Stadium Malaysia</span>
          </div>
          <Link
            to={`/event/${page.eventId}`}
            className="px-6 py-2 rounded-lg text-white transition-colors"
            style={{ backgroundColor: page.accentColor }}
          >
            Book Tickets
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={page.heroImage}
          alt={page.eventName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${page.primaryColor}dd 0%, ${page.accentColor}aa 100%)`
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl mb-6 text-white">{page.heroTitle}</h1>
          <p className="text-2xl text-white text-opacity-95 mb-8">{page.heroSubtitle}</p>

          <div className="flex items-center justify-center gap-8 mb-8 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              <span className="text-lg">
                {new Date(page.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg">{page.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">{page.venue}</span>
            </div>
          </div>

          <Link
            to={`/event/${page.eventId}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white text-lg transition-all hover:scale-105"
            style={{ backgroundColor: page.accentColor }}
          >
            {page.ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6" style={{ color: page.primaryColor }}>About the Event</h2>
          <p className="text-xl text-gray-700 leading-relaxed">{page.aboutText}</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center" style={{ color: page.primaryColor }}>
            {page.highlightsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.highlights.map((highlight: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: index % 3 === 0 ? page.primaryColor : index % 3 === 1 ? page.accentColor : '#A04292' }}
                >
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-3" style={{ color: page.primaryColor }}>
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6" style={{ color: page.primaryColor }}>Venue</h2>
              <h3 className="text-2xl mb-4" style={{ color: page.accentColor }}>{page.venue}</h3>
              <p className="text-gray-700 text-lg mb-6">{page.location}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: page.primaryColor }} />
                  <span>Easy access via public transportation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: page.primaryColor }} />
                  <span>Ample parking space available</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: page.primaryColor }} />
                  <span>Wheelchair accessible facilities</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
              <img
                src="https://images.unsplash.com/photo-1771344159298-3a6a5b704c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwZXZlbnR8ZW58MXx8fHwxNzc2MTY5NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Venue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${page.primaryColor} 0%, ${page.accentColor} 100%)`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-6">Don't Miss Out!</h2>
          <p className="text-xl mb-8 opacity-90">
            Tickets are selling fast. Secure your spot now and be part of this incredible experience.
          </p>
          <Link
            to={`/event/${page.eventId}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-lg transition-all hover:scale-105"
            style={{ color: page.primaryColor }}
          >
            {page.ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12" style={{ backgroundColor: '#273480' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg" />
                <span className="font-semibold text-white">Perbadanan Stadium Malaysia</span>
              </div>
              <p className="text-gray-300">
                Create and manage events with ease
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
                <li><Link to="/booking" className="text-gray-300 hover:text-white">Booking</Link></li>
                <li><Link to="/qr-payments" className="text-gray-300 hover:text-white">QR Payments</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            © 2026 Perbadanan Stadium Malaysia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
