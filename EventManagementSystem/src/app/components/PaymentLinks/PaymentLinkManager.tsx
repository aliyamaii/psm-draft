import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus, Link as LinkIcon, QrCode, Eye, EyeOff, Copy,
  MoreVertical, TrendingUp, Calendar, Users, CreditCard,
  Search, Filter, XCircle, CheckCircle
} from 'lucide-react';
import DashboardLayout from '../DashboardLayout';

const mockPaymentLinks = [
  {
    id: 1,
    title: 'Summer Festival Early Bird',
    amount: 120.00,
    slug: 'summer-festival-early-bird',
    status: 'active',
    created: '2026-04-10',
    expires: '2026-06-30',
    stats: {
      clicks: 1245,
      conversions: 387,
      revenue: 46440.00,
      conversionRate: 31.1
    }
  },
  {
    id: 2,
    title: 'VIP Pass Discount',
    amount: 250.00,
    slug: 'vip-pass-discount',
    status: 'active',
    created: '2026-04-08',
    expires: null,
    stats: {
      clicks: 856,
      conversions: 124,
      revenue: 31000.00,
      conversionRate: 14.5
    }
  },
  {
    id: 3,
    title: 'Group Booking Special',
    amount: 500.00,
    slug: 'group-booking-special',
    status: 'expired',
    created: '2026-03-15',
    expires: '2026-04-15',
    stats: {
      clicks: 2341,
      conversions: 876,
      revenue: 438000.00,
      conversionRate: 37.4
    }
  },
  {
    id: 4,
    title: 'Tech Conference Registration',
    amount: 350.00,
    slug: 'tech-conference-reg',
    status: 'active',
    created: '2026-04-12',
    expires: null,
    stats: {
      clicks: 543,
      conversions: 89,
      revenue: 31150.00,
      conversionRate: 16.4
    }
  },
  {
    id: 5,
    title: 'Season Pass',
    amount: 750.00,
    slug: 'season-pass-2026',
    status: 'disabled',
    created: '2026-04-01',
    expires: null,
    stats: {
      clicks: 1234,
      conversions: 234,
      revenue: 175500.00,
      conversionRate: 19.0
    }
  }
];

export default function PaymentLinkManager() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showQRModal, setShowQRModal] = useState<{ link: typeof mockPaymentLinks[0] } | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const totalLinks = mockPaymentLinks.length;
  const activeLinks = mockPaymentLinks.filter(l => l.status === 'active').length;
  const totalRevenue = mockPaymentLinks.reduce((sum, link) => sum + (link.stats?.revenue || 0), 0);
  const totalClicks = mockPaymentLinks.reduce((sum, link) => sum + (link.stats?.clicks || 0), 0);
  const avgConversionRate = (mockPaymentLinks.reduce((sum, link) => sum + (link.stats?.conversionRate || 0), 0) / mockPaymentLinks.length).toFixed(1);

  const filteredLinks = mockPaymentLinks.filter(link => {
    const matchesFilter = statusFilter === 'all' || link.status === statusFilter;
    const matchesSearch = searchQuery === '' ||
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCopyLink = (slug: string) => {
    const url = `https://bcl.my/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(slug);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleGenerateQR = (link: typeof mockPaymentLinks[0]) => {
    setShowQRModal({ link });
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      expired: 'bg-red-100 text-red-700',
      disabled: 'bg-gray-100 text-gray-600'
    };
    const labels = {
      active: 'Active',
      expired: 'Expired',
      disabled: 'Disabled'
    };

    return (
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <DashboardLayout title="Payment Links">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Payment Links</h1>
            <p className="text-gray-600">Create and manage payment links for your events</p>
          </div>
          <button
            onClick={() => navigate('/create-payment-link')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#E11A27' }}
          >
            <Plus className="w-5 h-5" />
            Create Payment Link
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <LinkIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+18.2%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold" style={{ color: '#273480' }}>{totalLinks}</div>
            <div className="text-sm text-gray-600">Total Links</div>
            <div className="text-xs text-gray-500 mt-1">{activeLinks} active</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+24.5%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold" style={{ color: '#273480' }}>{totalClicks.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Clicks</div>
            <div className="text-xs text-gray-500 mt-1">Across all links</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A04292' }}>
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+32.1%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold" style={{ color: '#273480' }}>RM {totalRevenue.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
            <div className="text-xs text-gray-500 mt-1">From payment links</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+15.3%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold" style={{ color: '#273480' }}>{avgConversionRate}%</div>
            <div className="text-sm text-gray-600">Avg. Conversion Rate</div>
            <div className="text-xs text-gray-500 mt-1">Click to purchase</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* Status Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      statusFilter === 'all'
                        ? 'bg-[#273480] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  All ({totalLinks})
                </button>
                <button
                    onClick={() => setStatusFilter('active')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      statusFilter === 'active'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Active ({activeLinks})
                </button>
                <button
                    onClick={() => setStatusFilter('expired')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      statusFilter === 'expired'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Expired ({mockPaymentLinks.filter(l => l.status === 'expired').length})
                </button>
                <button
                    onClick={() => setStatusFilter('disabled')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      statusFilter === 'disabled'
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Disabled ({mockPaymentLinks.filter(l => l.status === 'disabled').length})
                </button>
              </div>

              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search payment links..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                />
              </div>
            </div>
          </div>

          {/* Payment Links List */}
          <div className="divide-y divide-gray-200">
            {filteredLinks.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                No payment links found
              </div>
            ) : (
              filteredLinks.map((link) => (
                <div key={link.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>{link.title}</h3>
                        {getStatusBadge(link.status)}
                        <span className="text-xs text-gray-500">
                          Created {new Date(link.created).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold" style={{ color: '#273480' }}>RM {link.amount.toFixed(2)}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">Slug:</span>
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">{link.slug}</code>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyLink(link.slug)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Copy link"
                      >
                        {copiedLink === link.slug ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      <button
                        onClick={() => handleGenerateQR(link)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Generate QR Code"
                      >
                        <QrCode className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="More options">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Clicks</div>
                        <div className="text-sm font-medium" style={{ color: '#273480' }}>{link.stats.clicks.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Conversions</div>
                        <div className="text-sm font-medium" style={{ color: '#273480' }}>{link.stats.conversions.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Revenue</div>
                        <div className="text-sm font-medium" style={{ color: '#273480' }}>RM {link.stats.revenue.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Conv. Rate</div>
                        <div className="text-sm font-medium" style={{ color: '#273480' }}>{link.stats.conversionRate}%</div>
                      </div>
                    </div>
                  </div>

                  {/* URL Display */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Payment URL:</span>
                        <a
                          href={`https://bcl.my/${link.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                          style={{ color: '#273480' }}
                        >
                          https://bcl.my/{link.slug}
                        </a>
                      </div>
                      {link.expires && (
                        <span className="text-xs text-red-500">
                          Expires {new Date(link.expires).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold" style={{ color: '#273480' }}>QR Code</h2>
              <button
                onClick={() => setShowQRModal(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <XCircle className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="p-6 text-center">
              <div className="w-48 h-48 mx-auto bg-white border-4 border-gray-200 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-32 h-32" style={{ color: '#273480' }} />
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium mb-1" style={{ color: '#273480' }}>{showQRModal.link.title}</div>
                <div className="text-gray-600">https://bcl.my/{showQRModal.link.slug}</div>
              </div>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    const url = `https://bcl.my/${showQRModal.link.slug}`;
                    navigator.clipboard.writeText(url);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Copy Link
                </button>
                <button
                  onClick={() => setShowQRModal(null)}
                  className="px-4 py-2 rounded-lg bg-[#273480] text-white hover:opacity-90 transition-colors"
                >
                  Download QR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}