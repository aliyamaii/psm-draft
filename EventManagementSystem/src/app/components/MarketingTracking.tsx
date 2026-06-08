import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, TrendingUp, Target, Users, Globe, Share2, Link as LinkIcon, Zap, PieChart, LineChart, Filter, Clock } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const trackingFeatures = [
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Real-Time Analytics',
    description: 'Monitor your marketing performance with live data and insights.',
    color: '#273480'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Conversion Tracking',
    description: 'Track customer journeys from first touch to final purchase.',
    color: '#E11A27'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Campaign Performance',
    description: 'Measure the effectiveness of all your marketing campaigns.',
    color: '#9F4091'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Audience Insights',
    description: 'Understand your customers with detailed demographic data.',
    color: '#273480'
  }
];

const channels = [
  { name: 'Social Media', icon: '📱', metrics: '45% of traffic', color: '#273480' },
  { name: 'Email Marketing', icon: '📧', metrics: '25% of traffic', color: '#E11A27' },
  { name: 'Search Engines', icon: '🔍', metrics: '20% of traffic', color: '#9F4091' },
  { name: 'Direct Traffic', icon: '🎯', metrics: '10% of traffic', color: '#273480' }
];

const metrics = [
  { label: 'Total Visitors', value: '125,430', growth: '+23.5%', icon: <Users className="w-6 h-6" />, color: '#273480' },
  { label: 'Conversion Rate', value: '3.2%', growth: '+15.8%', icon: <TrendingUp className="w-6 h-6" />, color: '#E11A27' },
  { label: 'Avg. Session', value: '4m 32s', growth: '+8.2%', icon: <Clock className="w-6 h-6" />, color: '#9F4091' }
];

export default function MarketingTracking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Marketing Tracking
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Track, analyze, and optimize your marketing performance
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNnx8bWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDB8fHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Marketing tracking"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Key Performance Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Real-time insights into your marketing performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: metric.color }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: metric.color }}>
                    {metric.icon}
                  </div>
                  <div className="text-green-600 font-semibold">{metric.growth}</div>
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#273480' }}>
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Powerful Tracking Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to understand your marketing ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-lg border-2 hover:shadow-lg transition-shadow" style={{ borderColor: feature.color }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>
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

      {/* Traffic Channels */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Traffic Sources
            </h2>
            <p className="text-xl text-gray-600">
              Understand where your customers are coming from
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel) => (
              <div key={channel.name} className="bg-white rounded-xl p-6 shadow-lg border-2 text-center" style={{ borderColor: channel.color }}>
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>
                  {channel.name}
                </h3>
                <div className="text-gray-600">{channel.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Analytics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Advanced Analytics
            </h2>
            <p className="text-xl text-gray-600">
              Deep insights to optimize your marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <PieChart className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Funnel Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Track customer journey from awareness to conversion. Identify drop-off points and optimize your funnel.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <LineChart className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Trend Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor performance trends over time. Spot seasonal patterns and growth opportunities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <Filter className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Custom Reports</h3>
              <p className="text-gray-600 leading-relaxed">
                Build custom reports with your specific KPIs. Export data in multiple formats.
              </p>
            </div>
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
              Connect with your favorite marketing tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Google Analytics', icon: '📊' },
              { name: 'Facebook Pixel', icon: '📘' },
              { name: 'Google Ads', icon: '📣' },
              { name: 'Hotjar', icon: '🔥' }
            ].map((tool) => (
              <div key={tool.name} className="bg-white rounded-xl p-6 shadow-lg text-center border-2" style={{ borderColor: '#273480' }}>
                <div className="text-3xl mb-3">{tool.icon}</div>
                <div className="font-semibold" style={{ color: '#273480' }}>{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Start Tracking Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get actionable insights to improve your marketing ROI
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Get Started
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/contact"
              className="px-12 py-4 rounded-lg border-2 transition-colors text-lg font-semibold"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}