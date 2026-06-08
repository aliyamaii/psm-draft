import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Key, Globe, Zap, CheckCircle, BookOpen, FileText, Users, Terminal, Shield } from 'lucide-react';
import Header from './Header';

const apiFeatures = [
  {
    id: 1,
    icon: <Key className="w-8 h-8" />,
    title: 'Secure API Keys',
    description: 'Generate and manage API keys for secure access to event data',
    color: '#273480'
  },
  {
    id: 2,
    icon: <Terminal className="w-8 h-8" />,
    title: 'REST API Endpoints',
    description: 'Full REST API with comprehensive endpoints for events, tickets, and bookings',
    color: '#E11A27'
  },
  {
    id: 3,
    icon: <Globe className="w-8 h-8" />,
    title: 'Webhooks Support',
    description: 'Real-time notifications for ticket sales, cancellations, and refunds',
    color: '#A04292'
  },
  {
    id: 4,
    icon: <Zap className="w-8 h-8" />,
    title: 'Instant Integration',
    description: 'Quick setup with SDKs for popular programming languages',
    color: '#273480'
  },
  {
    id: 5,
    icon: <Users className="w-8 h-8" />,
    title: 'Developer Portal',
    description: 'Interactive documentation and testing tools for developers',
    color: '#E11A27'
  },
  {
    id: 6,
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with industry standards',
    color: '#A04292'
  }
];

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/events',
    description: 'List all events with filters and pagination'
  },
  {
    method: 'POST',
    path: '/api/v1/events',
    description: 'Create new event with ticket types and pricing'
  },
  {
    method: 'GET',
    path: '/api/v1/events/:id',
    description: 'Get detailed event information by ID'
  },
  {
    method: 'PUT',
    path: '/api/v1/events/:id',
    description: 'Update event details and settings'
  },
  {
    method: 'DELETE',
    path: '/api/v1/events/:id',
    description: 'Delete event and all associated data'
  },
  {
    method: 'GET',
    path: '/api/v1/tickets',
    description: 'Get ticket information and availability'
  },
  {
    method: 'POST',
    path: '/api/v1/bookings',
    description: 'Create booking with payment processing'
  }
];

export default function API() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4" style={{ color: '#273480' }}>
            Developer API
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build powerful integrations with our comprehensive API and developer tools
          </p>
        </div>

        {/* API Key Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
              <Key className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl mb-2" style={{ color: '#273480' }}>Get Your API Key</h2>
              <p className="text-gray-600">
                Generate your secure API key to start integrating with our event management platform
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                API Key
              </label>
              <input
                type="text"
                placeholder="Enter your API key"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                Secret
              </label>
              <input
                type="password"
                placeholder="Enter your secret key"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273480]"
              />
            </div>
            <button
              className="w-full py-3 rounded-lg text-white font-medium transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              Generate API Key
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl mb-8 text-center" style={{ color: '#273480' }}>
            API Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiFeatures.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3 text-center" style={{ color: '#273480' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-12">
          <h2 className="text-3xl mb-8 text-center" style={{ color: '#273480' }}>
            Available Endpoints
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-6 py-4">
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 text-sm font-medium" style={{ color: '#273480' }}>
                <div>Method</div>
                <div>Endpoint</div>
                <div>Description</div>
                <div>Authentication</div>
              </div>
            </div>
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className={`px-6 py-4 border-t border-gray-100 grid grid-cols-4 gap-4 ${
                  index === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className={`px-3 py-1 rounded font-medium ${
                  endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                  endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                  endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}
                >
                  {endpoint.method}
                </div>
                <div className="font-mono text-sm">{endpoint.path}</div>
                <div className="text-gray-600">{endpoint.description}</div>
                <div>
                  {index === 0 ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <BookOpen className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl" style={{ color: '#273480' }}>API Documentation</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Comprehensive documentation, code examples, and integration guides
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/help"
              className="px-6 py-3 rounded-lg border-2 transition-colors"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              View Documentation
            </Link>
            <Link
              to="/help"
              className="px-6 py-3 rounded-lg border-2 transition-colors"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl mb-4" style={{ color: '#273480' }}>
            Ready to Integrate?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start building with our powerful API today
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-8 py-4 rounded-lg text-white flex items-center gap-2 transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              Get API Access
              <Code className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg border-2 transition-colors"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}