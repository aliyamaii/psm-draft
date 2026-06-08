import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Plus, Edit, Trash2, Eye, Filter, Calendar, Users, TrendingUp, Globe, Link as LinkIcon, Search } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockContent = [
  {
    id: 1,
    title: 'Event Terms and Conditions',
    type: 'Policy',
    status: 'published',
    lastUpdated: '2026-04-15',
    views: 2341,
    clicks: 189,
    version: 'v2.1',
    author: 'Legal Team',
    content: 'Our terms and conditions govern your use of the platform. By accessing or using our services, you agree to be bound by these terms.'
  },
  {
    id: 2,
    title: 'Privacy Policy',
    type: 'Policy',
    status: 'published',
    lastUpdated: '2026-04-14',
    views: 4523,
    clicks: 367,
    version: 'v3.0',
    author: 'Legal Team',
    content: 'We collect and use personal information to provide our services. This policy explains how we handle your data.'
  },
  {
    id: 3,
    title: 'Refund Policy',
    type: 'Policy',
    status: 'published',
    lastUpdated: '2026-04-13',
    views: 3156,
    clicks: 245,
    version: 'v1.8',
    author: 'Customer Service',
    content: 'Our refund policy provides guidelines for ticket refunds and cancellations based on event timing and circumstances.'
  },
  {
    id: 4,
    title: 'About Perbadanan Stadium Malaysia',
    type: 'Company',
    status: 'published',
    lastUpdated: '2026-04-12',
    views: 6789,
    clicks: 456,
    version: 'v1.0',
    author: 'Marketing Team',
    content: 'Learn about our mission to provide exceptional event experiences through innovative technology and customer service.'
  },
  {
    id: 5,
    title: 'FAQ - Event Organizers',
    type: 'FAQ',
    status: 'published',
    lastUpdated: '2026-04-11',
    views: 8934,
    clicks: 723,
    version: 'v2.5',
    author: 'Support Team',
    content: 'Frequently asked questions for event organizers covering account setup, event creation, ticket management, and more.'
  },
  {
    id: 6,
    title: 'FAQ - Event Attendees',
    type: 'FAQ',
    status: 'published',
    lastUpdated: '2026-04-10',
    views: 12567,
    clicks: 1023,
    version: 'v2.8',
    author: 'Support Team',
    content: 'Questions and answers for ticket buyers including purchasing, refunds, QR codes, and event attendance.'
  },
  {
    id: 7,
    title: 'Venue Guidelines',
    type: 'Guideline',
    status: 'published',
    lastUpdated: '2026-04-09',
    views: 4567,
    clicks: 234,
    version: 'v1.2',
    author: 'Operations Team',
    content: 'Complete guidelines for venue usage including capacity limits, safety protocols, and permitted activities.'
  },
  {
    id: 8,
    title: 'Payment Methods Guide',
    type: 'Guide',
    status: 'published',
    lastUpdated: '2026-04-08',
    views: 6723,
    clicks: 456,
    version: 'v2.0',
    author: 'Finance Team',
    content: 'Detailed information about supported payment methods including online banking, eWallets, and credit cards.'
  },
  {
    id: 9,
    title: 'Safety & Security',
    type: 'Policy',
    status: 'published',
    lastUpdated: '2026-04-07',
    views: 23456,
    clicks: 1823,
    version: 'v1.5',
    author: 'Security Team',
    content: 'Information about our security measures, data protection policies, and steps we take to ensure safe event experiences.'
  },
  {
    id: 10,
    title: 'COVID-19 Safety Protocols',
    type: 'Health',
    status: 'published',
    lastUpdated: '2026-04-06',
    views: 45234,
    clicks: 3456,
    version: 'v1.1',
    author: 'Health Team',
    content: 'Current safety protocols and guidelines for in-person events including social distancing and health screening requirements.'
  },
  {
    id: 11,
    title: 'Event Booking Process',
    type: 'Guide',
    status: 'published',
    lastUpdated: '2026-04-05',
    views: 7890,
    clicks: 567,
    version: 'v2.2',
    author: 'Customer Service',
    content: 'Step-by-step guide for booking tickets, selecting seats, and completing payment for events.'
  },
  {
    id: 12,
    title: 'Corporate Event Services',
    type: 'Company',
    status: 'published',
    lastUpdated: '2026-04-04',
    views: 3456,
    clicks: 234,
    version: 'v1.0',
    author: 'Sales Team',
    content: 'Comprehensive corporate event solutions including venue booking, catering, and professional event management.'
  },
  {
    id: 13,
    title: 'Accessibility Information',
    type: 'Policy',
    status: 'published',
    lastUpdated: '2026-04-03',
    views: 5678,
    clicks: 456,
    version: 'v1.3',
    author: 'Operations Team',
    content: 'Accessibility features and services available at our venues including wheelchair access and special accommodations.'
  },
  {
    id: 14,
    title: 'Food & Beverage Policy',
    type: 'Guideline',
    status: 'published',
    lastUpdated: '2026-04-02',
    views: 2345,
    clicks: 189,
    version: 'v1.1',
    author: 'Operations Team',
    content: 'Rules and guidelines regarding outside food, beverages, and alcohol consumption at events.'
  },
  {
    id: 15,
    title: 'Parking & Transportation',
    type: 'Guide',
    status: 'published',
    lastUpdated: '2026-04-01',
    views: 6789,
    clicks: 567,
    version: 'v2.0',
    author: 'Operations Team',
    content: 'Information about parking availability, rates, and transportation options to and from our venues.'
  },
  {
    id: 16,
    title: 'Lost & Found Policy',
    type: 'Policy',
    status: 'published',
    lastUpdated: '2026-03-31',
    views: 3456,
    clicks: 234,
    version: 'v1.0',
    author: 'Security Team',
    content: 'Procedures for reporting lost items and claiming found property at our venues.'
  },
  {
    id: 17,
    title: 'VIP Services',
    type: 'Company',
    status: 'published',
    lastUpdated: '2026-03-30',
    views: 4567,
    clicks: 345,
    version: 'v1.5',
    author: 'Marketing Team',
    content: 'Premium services available for VIP guests including exclusive access, premium seating, and concierge services.'
  },
  {
    id: 18,
    title: 'Ticket Resale Policy',
    type: 'Policy',
    status: 'published',
    lastUpdated: '2026-03-29',
    views: 5678,
    clicks: 456,
    version: 'v1.2',
    author: 'Legal Team',
    content: 'Guidelines for ticket resale, transfer, and the official ticket exchange platform policies.'
  },
  {
    id: 19,
    title: 'Emergency Procedures',
    type: 'Guideline',
    status: 'published',
    lastUpdated: '2026-03-28',
    views: 7890,
    clicks: 678,
    version: 'v2.0',
    author: 'Security Team',
    content: 'Emergency response procedures, evacuation plans, and safety protocols for attendees and staff.'
  },
  {
    id: 20,
    title: 'Contact Us',
    type: 'Company',
    status: 'published',
    lastUpdated: '2026-03-27',
    views: 12345,
    clicks: 890,
    version: 'v1.0',
    author: 'Customer Service',
    content: 'Multiple ways to contact our customer service team including phone, email, and live chat support.'
  }
];

export default function Content() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'Policy' | 'Company' | 'FAQ' | 'Guideline' | 'Guide' | 'Health'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [content, setContent] = useState(mockContent);

  // Load content from localStorage on component mount
  useEffect(() => {
    const storedContent = JSON.parse(localStorage.getItem('content') || '[]');
    if (storedContent.length > 0) {
      setContent([...mockContent, ...storedContent]);
    }
  }, []);

  const filteredContent = content.filter(content => {
    const matchesSearch = searchQuery === '' ||
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'all' || content.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || content.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleDeleteContent = (contentId: number) => {
    if (confirm('Are you sure you want to delete this content? This action cannot be undone.')) {
      const updatedContent = content.filter(item => item.id !== contentId);
      setContent(updatedContent);

      // Update localStorage
      const storedContent = JSON.parse(localStorage.getItem('content') || '[]');
      const updatedStoredContent = storedContent.filter((c: any) => c.id !== contentId);
      localStorage.setItem('content', JSON.stringify(updatedStoredContent));
    }
  };

  const handleEditContent = (contentId: number) => {
    navigate(`/edit-content/${contentId}`);
  };

  const handleCreateContent = () => {
    navigate('/create-content');
  };

  const handleViewUrl = (contentUrl: string) => {
    window.open(`https://eventhub.com/${contentUrl}`, '_blank');
  };

  const totalViews = filteredContent.reduce((sum, c) => sum + c.views, 0);
  const totalClicks = filteredContent.reduce((sum, c) => sum + c.clicks, 0);
  const avgClickRate = totalClicks > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : 0;

  const getTypeBadge = (type: string) => {
    const colors = {
      Policy: 'bg-red-100 text-red-700',
      Company: 'bg-blue-100 text-blue-700',
      FAQ: 'bg-green-100 text-green-700',
      Guideline: 'bg-purple-100 text-purple-700',
      Guide: 'bg-orange-100 text-orange-700',
      Health: 'bg-teal-100 text-teal-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[type as keyof typeof colors]}`}>
        {type}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      published: 'bg-green-100 text-green-700',
      draft: 'bg-yellow-100 text-yellow-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <DashboardLayout title="Content">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <FileText className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Content</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredContent.length}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Eye className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Views</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {totalViews.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Clicks</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                {totalClicks.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Avg Click Rate</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {avgClickRate}%
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Content Management</h2>
          <button
            onClick={handleCreateContent}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#E11A27' }}
          >
            <Plus className="w-5 h-5" />
            Create Content
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search content..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#273480' } as any}
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Types</option>
              <option value="Policy">Policies</option>
              <option value="Company">Company Info</option>
              <option value="FAQ">FAQ</option>
              <option value="Guideline">Guidelines</option>
              <option value="Guide">Guides</option>
              <option value="Health">Health & Safety</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setTypeFilter('all');
                setStatusFilter('all');
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Content Grid */}
        {filteredContent.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Content Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>{content.title}</h3>
                        {getTypeBadge(content.type)}
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(content.status)}
                        <span className="text-xs text-gray-500">v{content.version}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleViewUrl(content.url)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      title="View Content"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEditContent(content.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      title="Edit Content"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteContent(content.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg text-red-500"
                      title="Delete Content"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {content.content}
                  </p>

                  {/* Content Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Last Updated</div>
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#273480' }}>
                        {content.lastUpdated}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Author</div>
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#273480' }}>
                        {content.author}
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Eye className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Views</div>
                      </div>
                      <div className="text-xl font-bold" style={{ color: '#273480' }}>
                        {content.views.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4" style={{ color: '#E11A27' }} />
                        <div className="text-xs text-gray-600">Clicks</div>
                      </div>
                      <div className="text-xl font-bold" style={{ color: '#E11A27' }}>
                        {content.clicks.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Globe className="w-4 h-4" style={{ color: '#9F4091' }} />
                        <div className="text-xs text-gray-600">Click Rate</div>
                      </div>
                      <div className="text-xl font-bold" style={{ color: '#9F4091' }}>
                        {content.views > 0 ? ((content.clicks / content.views) * 100).toFixed(1) : 0}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 p-4 border-t border-gray-200">
                  <button
                    onClick={() => handleEditContent(content.id)}
                    className="flex-1 px-4 py-2 rounded-lg border-2 transition-colors text-sm"
                    style={{ borderColor: '#273480', color: '#273480' }}
                  >
                    <LinkIcon className="w-4 h-4 inline mr-2" />
                    View & Edit
                  </button>
                  <button
                    onClick={() => handleViewUrl(content.url)}
                    className="px-4 py-2 rounded-lg border-2 transition-colors text-sm"
                    style={{ borderColor: '#E11A27', color: '#E11A27' }}
                  >
                    <Globe className="w-4 h-4 inline mr-2" />
                    Public URL
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-2">
              <Plus className="w-8 h-8" style={{ color: '#273480' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Create New Page</h3>
            </div>
            <p className="text-sm text-gray-600">Create a new content page from scratch</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Start Creating
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-8 h-8" style={{ color: '#E11A27' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Import Content</h3>
            </div>
            <p className="text-sm text-gray-600">Import existing content from other platforms</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#273480' }}>
              Start Import
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8" style={{ color: '#9F4091' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Content Analytics</h3>
            </div>
            <p className="text-sm text-gray-600">View detailed content performance reports</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#E11A27' }}>
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}