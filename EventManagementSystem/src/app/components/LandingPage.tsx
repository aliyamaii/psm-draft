import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Palette, Type, Image as ImageIcon, Video, MapPin, Calendar, Ticket, Smartphone, Zap, Globe, CheckCircle, Code, Clock } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const features = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Drag & Drop Builder',
    description: 'Create stunning landing pages without any coding knowledge.',
    color: '#273480'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Custom Themes',
    description: 'Match your brand with customizable colors and fonts.',
    color: '#E11A27'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Responsive',
    description: 'Perfect display on all devices - desktop, tablet, and mobile.',
    color: '#9F4091'
  }
];

const components = [
  { icon: <Type className="w-8 h-8" />, title: 'Text & Typography', color: '#273480' },
  { icon: <ImageIcon className="w-8 h-8" />, title: 'Images & Gallery', color: '#E11A27' },
  { icon: <Video className="w-8 h-8" />, title: 'Video Embeds', color: '#9F4091' },
  { icon: <MapPin className="w-8 h-8" />, title: 'Location Maps', color: '#273480' },
  { icon: <Calendar className="w-8 h-8" />, title: 'Event Details', color: '#E11A27' },
  { icon: <Ticket className="w-8 h-8" />, title: 'Ticket Selection', color: '#9F4091' }
];

const templates = [
  { name: 'Concert Event', description: 'Perfect for music festivals and concerts', icon: '🎵', color: '#273480' },
  { name: 'Sports Event', description: 'Ideal for games and competitions', icon: '⚽', color: '#E11A27' },
  { name: 'Conference', description: 'Great for business events and seminars', icon: '💼', color: '#9F4091' },
  { name: 'Workshop', description: 'Perfect for training and classes', icon: '📚', color: '#273480' }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Landing Page Builder
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Create beautiful event landing pages in minutes
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxOXx8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Landing page builder"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Powerful Builder Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create stunning landing pages
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

      {/* Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Built-in Components
            </h2>
            <p className="text-xl text-gray-600">
              Drag and drop elements to build your page
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <div key={component.title} className="bg-white rounded-xl p-6 shadow-lg border-2 hover:shadow-lg transition-shadow" style={{ borderColor: component.color }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: component.color }}>
                  {component.icon}
                </div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>
                  {component.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Professional Templates
            </h2>
            <p className="text-xl text-gray-600">
              Start with templates designed for events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div key={template.name} className="bg-white rounded-xl p-8 shadow-lg border-2 text-center" style={{ borderColor: template.color }}>
                <div className="text-5xl mb-4">{template.icon}</div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>
                  {template.name}
                </h3>
                <p className="text-gray-600">{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <Code className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Custom Code</h3>
              <p className="text-gray-600 leading-relaxed">
                Add custom HTML, CSS, and JavaScript for advanced customization.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <Globe className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Social Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in social sharing buttons for easy promotion.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Zap className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Fast Loading</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for speed and SEO performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Built-in Analytics
            </h2>
            <p className="text-xl text-gray-600">
              Track landing page performance in real-time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Page Views', value: '45,230', icon: <Layout className="w-6 h-6" /> },
              { label: 'Conversions', value: '1,245', icon: <CheckCircle className="w-6 h-6" /> },
              { label: 'Bounce Rate', value: '32%', icon: <ArrowRight className="w-6 h-6" /> },
              { label: 'Avg. Time', value: '3m 45s', icon: <Clock className="w-6 h-6" /> }
            ].map((metric) => (
              <div key={metric.label} className="bg-white rounded-xl p-6 shadow-lg border-2 text-center" style={{ borderColor: '#273480' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#273480' }}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#273480' }}>{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Start Building Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Create professional landing pages in minutes, not hours
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Create Landing Page
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