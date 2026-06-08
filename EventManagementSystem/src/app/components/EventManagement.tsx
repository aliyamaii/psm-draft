import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Ticket, MapPin, Users, BarChart, Settings, Share2, QrCode, Zap, Shield, CheckCircle, Clock, Globe, TrendingUp, Layout } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const features = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Event Creation',
    description: 'Create events in minutes with our intuitive interface.',
    color: '#273480'
  },
  {
    icon: <Ticket className="w-8 h-8" />,
    title: 'Ticket Management',
    description: 'Set up multiple ticket types and pricing tiers.',
    color: '#E11A27'
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Venue Management',
    description: 'Manage multiple venues and locations easily.',
    color: '#9F4091'
  }
];

const managementTools = [
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Real-Time Analytics',
    description: 'Monitor sales, revenue, and attendance as they happen.',
    color: '#273480'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Attendee Management',
    description: 'Track check-ins, manage attendees, and send communications.',
    color: '#E11A27'
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Event Settings',
    description: 'Configure event details, policies, and restrictions.',
    color: '#9F4091'
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Marketing Tools',
    description: 'Promote your events with built-in marketing features.',
    color: '#273480'
  }
];

const benefits = [
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Fast Setup',
    description: 'Create and launch events in under 15 minutes',
    color: '#273480'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Secure Platform',
    description: 'Bank-grade security protects your events and data',
    color: '#E11A27'
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: 'Reliable System',
    description: '99.9% uptime ensures your events are always accessible',
    color: '#9F4091'
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: '24/7 Support',
    description: 'Our team is always here to help you succeed',
    color: '#273480'
  }
];

export default function EventManagement() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Event Management
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Create, manage, and sell out your events with ease
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Event management"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Powerful Event Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage successful events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
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

      {/* Management Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Comprehensive Management Tools
            </h2>
            <p className="text-xl text-gray-600">
              All the tools you need in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementTools.map((tool) => (
              <div key={tool.title} className="bg-white rounded-xl p-6 shadow-lg border-2 hover:shadow-lg transition-shadow" style={{ borderColor: tool.color }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: tool.color }}>
                  {tool.icon}
                </div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>
                  {tool.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Support for All Event Types
            </h2>
            <p className="text-xl text-gray-600">
              From small workshops to large concerts, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Concerts', icon: '🎵', color: '#273480' },
              { name: 'Sports', icon: '⚽', color: '#E11A27' },
              { name: 'Conferences', icon: '💼', color: '#9F4091' },
              { name: 'Workshops', icon: '📚', color: '#273480' },
              { name: 'Festivals', icon: '🎉', color: '#E11A27' },
              { name: 'Exhibitions', icon: '🖼️', color: '#9F4091' },
              { name: 'Performances', icon: '🎭', color: '#273480' },
              { name: 'Private Events', icon: '🎊', color: '#E11A27' }
            ].map((type) => (
              <div key={type.name} className="bg-white rounded-xl p-8 shadow-lg border-2 text-center" style={{ borderColor: type.color }}>
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                  {type.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">
              The benefits of using Perbadanan Stadium Malaysia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: benefit.color }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <QrCode className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>QR Check-in</h3>
              <p className="text-gray-600 leading-relaxed">
                Digital check-in with QR codes for quick and efficient entry.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <Globe className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Social Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in sharing to promote events across all social platforms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>SEO Optimized</h3>
              <p className="text-gray-600 leading-relaxed">
                Events are optimized for search engines to increase visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how organizers are succeeding with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Summer Music Festival', tickets: '12,450', revenue: 'RM 622,500', growth: '+45%' },
              { name: 'Tech Conference 2026', tickets: '3,200', revenue: 'RM 320,000', growth: '+32%' },
              { name: 'Charity Gala', tickets: '850', revenue: 'RM 127,500', growth: '+28%' }
            ].map((story) => (
              <div key={story.name} className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
                <h3 className="text-xl mb-4 font-semibold" style={{ color: '#273480' }}>
                  {story.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tickets Sold</span>
                    <span className="font-semibold" style={{ color: '#273480' }}>{story.tickets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue</span>
                    <span className="font-semibold" style={{ color: '#273480' }}>{story.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth</span>
                    <span className="font-semibold text-green-600">{story.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Ready to Manage Events?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start creating and selling out your events today
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Create Event
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/templates"
              className="px-12 py-4 rounded-lg border-2 transition-colors text-lg font-semibold"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}