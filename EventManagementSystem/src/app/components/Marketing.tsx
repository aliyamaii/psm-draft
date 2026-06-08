import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, TrendingUp, Target, Globe, Users, Share2, Calendar, DollarSign, Plus, Edit, Trash2, Search, Filter, PieChart, LineChart, ArrowRight } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockCampaigns = [
  {
    id: 1,
    name: 'Summer Festival 2026',
    description: 'Multi-channel marketing campaign for the annual summer music festival.',
    type: 'Event Promotion',
    status: 'active',
    startDate: '2026-04-01',
    endDate: '2026-07-15',
    budget: 50000.00,
    spent: 28450.00,
    impressions: 125430,
    clicks: 8234,
    conversions: 1256,
    roi: '+127.5%',
    channels: ['Facebook', 'Instagram', 'Google Ads', 'Email'],
    targetAudience: 'Music Enthusiasts, Young Adults (18-35)'
  },
  {
    id: 2,
    name: 'Tech Conference Early Bird',
    description: 'Early bird promotion for the tech conference with limited time offers.',
    type: 'Promotional',
    status: 'active',
    startDate: '2026-04-10',
    endDate: '2026-05-20',
    budget: 25000.00,
    spent: 12300.00,
    impressions: 87654,
    clicks: 5234,
    conversions: 892,
    roi: '+92.3%',
    channels: ['LinkedIn', 'Email', 'Industry Websites'],
    targetAudience: 'Tech Professionals, Developers, Engineers'
  },
  {
    id: 3,
    name: 'Championship Finals Promo',
    description: 'Last-minute promotion for the championship finals event.',
    type: 'Event Promotion',
    status: 'active',
    startDate: '2026-04-05',
    endDate: '2026-06-10',
    budget: 35000.00,
    spent: 18750.00,
    impressions: 156789,
    clicks: 9845,
    conversions: 2341,
    roi: '+156.8%',
    channels: ['Facebook', 'Instagram', 'Twitter', 'Sports Websites'],
    targetAudience: 'Sports Fans, Teams, Families'
  },
  {
    id: 4,
    name: 'Jazz Night Awareness',
    description: 'Brand awareness campaign for the monthly jazz night events.',
    type: 'Brand Awareness',
    status: 'active',
    startDate: '2026-03-15',
    endDate: '2026-08-31',
    budget: 15000.00,
    spent: 9234.00,
    impressions: 45678,
    clicks: 2345,
    conversions: 456,
    roi: '+78.4%',
    channels: ['Instagram', 'Local Media', 'Email'],
    targetAudience: 'Jazz Enthusiasts, Adults (25-50)'
  },
  {
    id: 5,
    name: 'Gaming Convention Launch',
    description: 'Launch campaign for the new gaming convention.',
    type: 'Product Launch',
    status: 'paused',
    startDate: '2026-04-20',
    endDate: '2026-09-05',
    budget: 75000.00,
    spent: 8900.00,
    impressions: 34567,
    clicks: 1234,
    conversions: 234,
    roi: '+45.2%',
    channels: ['Twitch', 'YouTube', 'Gaming Forums', 'Twitter'],
    targetAudience: 'Gamers, Tech-Savvy Users, Young Adults'
  },
  {
    id: 6,
    name: 'Corporate Events B2B',
    description: 'B2B marketing campaign targeting corporate event planners.',
    type: 'B2B Marketing',
    status: 'active',
    startDate: '2026-04-01',
    endDate: '2026-10-31',
    budget: 40000.00,
    spent: 21567.00,
    impressions: 67890,
    clicks: 3456,
    conversions: 567,
    roi: '+98.7%',
    channels: ['LinkedIn', 'Email Marketing', 'Industry Events'],
    targetAudience: 'Event Planners, Corporate Managers, HR'
  },
  {
    id: 7,
    name: 'Rock Concert Hype',
    description: 'Hype-building campaign for the upcoming rock concert.',
    type: 'Event Promotion',
    status: 'active',
    startDate: '2026-04-08',
    endDate: '2026-07-28',
    budget: 60000.00,
    spent: 34567.00,
    impressions: 234567,
    clicks: 15678,
    conversions: 2890,
    roi: '+134.2%',
    channels: ['Facebook', 'Instagram', 'TikTok', 'Radio'],
    targetAudience: 'Rock Music Fans, Concert Goers'
  },
  {
    id: 8,
    name: 'Business Summit LinkedIn',
    description: 'LinkedIn-only campaign for business summit promotion.',
    type: 'Targeted Marketing',
    status: 'active',
    startDate: '2026-04-12',
    endDate: '2026-10-15',
    budget: 20000.00,
    spent: 11234.00,
    impressions: 23456,
    clicks: 2345,
    conversions: 456,
    roi: '+112.8%',
    channels: ['LinkedIn'],
    targetAudience: 'Business Professionals, Entrepreneurs'
  },
  {
    id: 9,
    name: 'Comedy Show Social',
    description: 'Social media focused campaign for comedy show promotion.',
    type: 'Social Media',
    status: 'active',
    startDate: '2026-04-15',
    endDate: '2026-08-22',
    budget: 18000.00,
    spent: 9876.00,
    impressions: 98765,
    clicks: 5432,
    conversions: 678,
    roi: '+89.4%',
    channels: ['Instagram', 'TikTok', 'Twitter', 'Facebook'],
    targetAudience: 'Comedy Fans, Entertainment Seekers'
  },
  {
    id: 10,
    name: 'Food Festival Instagram',
    description: 'Instagram-only campaign for food festival.',
    type: 'Social Media',
    status: 'completed',
    startDate: '2026-02-01',
    endDate: '2026-04-10',
    budget: 25000.00,
    spent: 24890.00,
    impressions: 187654,
    clicks: 12345,
    conversions: 2341,
    roi: '+145.6%',
    channels: ['Instagram'],
    targetAudience: 'Foodies, Families, Couples'
  },
  {
    id: 11,
    name: 'Charity Gala Email',
    description: 'Email marketing campaign for charity gala ticket sales.',
    type: 'Email Marketing',
    status: 'active',
    startDate: '2026-04-01',
    endDate: '2026-09-20',
    budget: 12000.00,
    spent: 8234.00,
    impressions: 67890,
    clicks: 4567,
    conversions: 890,
    roi: '+178.3%',
    channels: ['Email'],
    targetAudience: 'Past Donors, Charity Supporters'
  },
  {
    id: 12,
    name: 'Kids Fun Fair Parents',
    description: 'Targeted campaign for parents promoting kids fun fair.',
    type: 'Targeted Marketing',
    status: 'active',
    startDate: '2026-04-10',
    endDate: '2026-09-30',
    budget: 30000.00,
    spent: 15678.00,
    impressions: 123456,
    clicks: 8234,
    conversions: 1567,
    roi: '+123.4%',
    channels: ['Facebook', 'Instagram', 'Parenting Blogs'],
    targetAudience: 'Parents, Families with Children'
  },
  {
    id: 13,
    name: 'Art Exhibition Culture',
    description: 'Cultural marketing campaign for art exhibition.',
    type: 'Brand Awareness',
    status: 'active',
    startDate: '2026-04-05',
    endDate: '2026-11-12',
    budget: 22000.00,
    spent: 9234.00,
    impressions: 56789,
    clicks: 3456,
    conversions: 567,
    roi: '+92.1%',
    channels: ['Art Magazines', 'Cultural Websites', 'Email'],
    targetAudience: 'Art Enthusiasts, Culture Lovers, Students'
  },
  {
    id: 14,
    name: 'VIP Packages Launch',
    description: 'Product launch campaign for new VIP service packages.',
    type: 'Product Launch',
    status: 'active',
    startDate: '2026-04-18',
    endDate: '2026-07-31',
    budget: 45000.00,
    spent: 12345.00,
    impressions: 89012,
    clicks: 4567,
    conversions: 678,
    roi: '+67.8%',
    channels: ['Email', 'Social Media', 'Website'],
    targetAudience: 'High-Value Customers, VIP Members'
  },
  {
    id: 15,
    name: 'Seasonal Passes Spring',
    description: 'Spring seasonal pass promotion campaign.',
    type: 'Promotional',
    status: 'completed',
    startDate: '2026-02-15',
    endDate: '2026-04-15',
    budget: 35000.00,
    spent: 32890.00,
    impressions: 156789,
    clicks: 9876,
    conversions: 1876,
    roi: '+112.3%',
    channels: ['Email', 'Social Media', 'Website'],
    targetAudience: 'Repeat Customers, Seasonal Visitors'
  },
  {
    id: 16,
    name: 'Student Discount Back',
    description: 'Back-to-school student discount campaign.',
    type: 'Promotional',
    status: 'active',
    startDate: '2026-04-20',
    endDate: '2026-05-31',
    budget: 18000.00,
    spent: 6234.00,
    impressions: 78901,
    clicks: 4567,
    conversions: 1234,
    roi: '+145.6%',
    channels: ['Instagram', 'TikTok', 'Student Platforms'],
    targetAudience: 'Students, Young Adults'
  },
  {
    id: 17,
    name: 'Group Bookings Corporate',
    description: 'Corporate group booking campaign.',
    type: 'B2B Marketing',
    status: 'active',
    startDate: '2026-04-01',
    endDate: '2026-12-31',
    budget: 50000.00,
    spent: 23456.00,
    impressions: 123456,
    clicks: 6789,
    conversions: 890,
    roi: '+89.5%',
    channels: ['LinkedIn', 'Email', 'Direct Sales'],
    targetAudience: 'Corporate HR, Team Managers'
  },
  {
    id: 18,
    name: 'Flash Sale Weekend',
    description: 'Flash sale campaign for weekend events.',
    type: 'Flash Sale',
    status: 'completed',
    startDate: '2026-04-12',
    endDate: '2026-04-15',
    budget: 15000.00,
    spent: 14890.00,
    impressions: 234567,
    clicks: 15678,
    conversions: 3456,
    roi: '+234.5%',
    channels: ['Email', 'Social Media', 'SMS'],
    targetAudience: 'General Public, Last-Minute Buyers'
  },
  {
    id: 19,
    name: 'Referral Program Launch',
    description: 'Launch campaign for new referral program.',
    type: 'Product Launch',
    status: 'active',
    startDate: '2026-04-16',
    endDate: '2026-08-31',
    budget: 28000.00,
    spent: 7890.00,
    impressions: 67890,
    clicks: 3456,
    conversions: 567,
    roi: '+78.9%',
    channels: ['Email', 'Social Media', 'Website'],
    targetAudience: 'Existing Customers, Referrers'
  },
  {
    id: 20,
    name: 'Anniversary Celebration',
    description: 'Company anniversary celebration campaign.',
    type: 'Brand Awareness',
    status: 'active',
    startDate: '2026-04-15',
    endDate: '2026-05-15',
    budget: 40000.00,
    spent: 12345.00,
    impressions: 156789,
    clicks: 8901,
    conversions: 1234,
    roi: '+112.4%',
    channels: ['All Channels', 'Press Release', 'Media'],
    targetAudience: 'General Public, Loyal Customers'
  }
];

export default function Marketing() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'paused' | 'completed'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'Event Promotion' | 'Promotional' | 'Brand Awareness' | 'Product Launch' | 'B2B Marketing' | 'Social Media' | 'Email Marketing' | 'Targeted Marketing' | 'Flash Sale'>('all');
  const [campaigns, setCampaigns] = useState(mockCampaigns);

  // Load campaigns from localStorage on component mount
  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
    if (storedCampaigns.length > 0) {
      setCampaigns([...mockCampaigns, ...storedCampaigns]);
    }
  }, []);

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = searchQuery === '' ||
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    const matchesType = typeFilter === 'all' || campaign.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const handleDeleteCampaign = (campaignId: number) => {
    if (confirm('Are you sure you want to delete this campaign? This action cannot be undone.')) {
      const updatedCampaigns = campaigns.filter(campaign => campaign.id !== campaignId);
      setCampaigns(updatedCampaigns);

      // Update localStorage
      const storedCampaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
      const updatedStoredCampaigns = storedCampaigns.filter((c: any) => c.id !== campaignId);
      localStorage.setItem('campaigns', JSON.stringify(updatedStoredCampaigns));
    }
  };

  const handleEditCampaign = (campaignId: number) => {
    navigate(`/edit-campaign/${campaignId}`);
  };

  const handleCreateCampaign = () => {
    navigate('/create-campaign');
  };

  const totalBudget = filteredCampaigns.reduce((sum, c) => sum + c.budget, 0);
  const totalSpent = filteredCampaigns.reduce((sum, c) => sum + c.spent, 0);
  const totalImpressions = filteredCampaigns.reduce((sum, c) => sum + c.impressions, 0);
  const totalConversions = filteredCampaigns.reduce((sum, c) => sum + c.conversions, 0);

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      paused: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-blue-100 text-blue-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <DashboardLayout title="Marketing">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Budget</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                RM {totalBudget.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Target className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Conversions</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {totalConversions.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <Globe className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Impressions</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                {totalImpressions.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <BarChart className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Avg ROI</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                +112.5%
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Marketing Campaigns</h2>
          <button
            onClick={handleCreateCampaign}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#E11A27' }}
          >
            <Plus className="w-5 h-5" />
            Create Campaign
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
                placeholder="Search campaigns..."
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
              <option value="Event Promotion">Event Promotion</option>
              <option value="Promotional">Promotional</option>
              <option value="Brand Awareness">Brand Awareness</option>
              <option value="Product Launch">Product Launch</option>
              <option value="B2B Marketing">B2B Marketing</option>
              <option value="Social Media">Social Media</option>
              <option value="Email Marketing">Email Marketing</option>
              <option value="Targeted Marketing">Targeted Marketing</option>
              <option value="Flash Sale">Flash Sale</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
                setTypeFilter('all');
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Campaign Grid */}
        {filteredCampaigns.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Target className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No campaigns found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Campaign Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>{campaign.name}</h3>
                        {getStatusBadge(campaign.status)}
                      </div>
                      <div className="text-sm text-gray-600">{campaign.type}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEditCampaign(campaign.id)} className="p-2 hover:bg-gray-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => handleDeleteCampaign(campaign.id)} className="p-2 hover:bg-gray-100 rounded-lg text-red-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{campaign.description}</p>
                </div>

                {/* Campaign Metrics */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Budget</div>
                      <div className="text-lg font-bold" style={{ color: '#273480' }}>
                        RM {campaign.budget.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Spent</div>
                      <div className="text-lg font-bold" style={{ color: '#E11A27' }}>
                        RM {campaign.spent.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Impressions</div>
                      <div className="text-lg font-bold" style={{ color: '#273480' }}>
                        {campaign.impressions.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Conversions</div>
                      <div className="text-lg font-bold" style={{ color: '#9F4091' }}>
                        {campaign.conversions.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Channels */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-600 mb-2">Channels</div>
                    <div className="flex flex-wrap gap-2">
                      {campaign.channels.map((channel, index) => (
                        <span key={index} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#f3f3f5', color: '#273480' }}>
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dates & ROI */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#273480' }}>
                        {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                      <div className="text-lg font-bold text-green-500">
                        {campaign.roi}
                      </div>
                    </div>
                  </div>
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
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Create Campaign</h3>
            </div>
            <p className="text-sm text-gray-600">Start a new marketing campaign</p>
            <button onClick={handleCreateCampaign} className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Create Now
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-2">
              <LineChart className="w-8 h-8" style={{ color: '#E11A27' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>View Analytics</h3>
            </div>
            <p className="text-sm text-gray-600">Detailed campaign performance</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#273480' }}>
              View Reports
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-2">
              <PieChart className="w-8 h-8" style={{ color: '#9F4091' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Audience Insights</h3>
            </div>
            <p className="text-sm text-gray-600">Understand your target audience</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#E11A27' }}>
              View Insights
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}