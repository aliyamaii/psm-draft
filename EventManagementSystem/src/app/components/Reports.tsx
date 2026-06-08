import { useState } from 'react';
import { BarChart3, TrendingUp, Download, Calendar, Filter, FileText, PieChart, LineChart, Target, DollarSign, Users, ArrowRight } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

// Mock events and venues for filtering
const mockEvents = [
  { id: 1, name: 'Summer Music Festival 2026', venue: 'National Stadium' },
  { id: 2, name: 'Tech Conference 2026', venue: 'Convention Center' },
  { id: 3, name: 'Championship Final', venue: 'Sports Arena' },
  { id: 4, name: 'Rock Concert', venue: 'National Stadium' },
  { id: 5, name: 'Business Summit', venue: 'Convention Center' }
];

const mockVenues = ['National Stadium', 'Convention Center', 'Sports Arena', 'City Jazz Club', 'Central Park'];

const mockReports = [
  {
    id: 1,
    name: 'Revenue Performance',
    description: 'Monthly and yearly revenue breakdown by events, ticket types, and payment methods.',
    type: 'Financial',
    lastGenerated: '2026-04-15',
    dataPoints: 24,
    growthRate: '+15.3%',
    trend: 'up',
    eventId: 1,
    venue: 'National Stadium'
  },
  {
    id: 2,
    name: 'Event Attendance',
    description: 'Detailed attendance analysis including check-in rates, no-show rates, and capacity utilization.',
    type: 'Operations',
    lastGenerated: '2026-04-14',
    dataPoints: 156,
    growthRate: '+8.7%',
    trend: 'up',
    eventId: 2,
    venue: 'Convention Center'
  },
  {
    id: 3,
    name: 'Customer Satisfaction',
    description: 'Survey results, feedback analysis, and satisfaction scores across different events.',
    type: 'Customer',
    lastGenerated: '2026-04-13',
    dataPoints: 89,
    growthRate: '+2.1%',
    trend: 'up',
    eventId: 3,
    venue: 'Sports Arena'
  },
  {
    id: 4,
    name: 'Sales Performance',
    description: 'Sales team performance, conversion rates, and revenue attribution by sales representative.',
    type: 'Sales',
    lastGenerated: '2026-04-15',
    dataPoints: 45,
    growthRate: '-1.2%',
    trend: 'down',
    eventId: 4,
    venue: 'National Stadium'
  },
  {
    id: 5,
    name: 'Ticket Sales Analysis',
    description: 'Ticket type breakdown, pricing analysis, and purchase timing patterns.',
    type: 'Financial',
    lastGenerated: '2026-04-12',
    dataPoints: 234,
    growthRate: '+12.5%',
    trend: 'up',
    eventId: 5,
    venue: 'Convention Center'
  },
  {
    id: 6,
    name: 'Marketing ROI',
    description: 'Return on investment analysis for marketing campaigns and channels.',
    type: 'Marketing',
    lastGenerated: '2026-04-11',
    dataPoints: 67,
    growthRate: '+5.8%',
    trend: 'up',
    eventId: 1,
    venue: 'National Stadium'
  },
  {
    id: 7,
    name: 'Venue Utilization',
    description: 'Capacity analysis, scheduling efficiency, and venue performance metrics.',
    type: 'Operations',
    lastGenerated: '2026-04-10',
    dataPoints: 123,
    growthRate: '+3.2%',
    trend: 'up',
    eventId: 2,
    venue: 'Convention Center'
  },
  {
    id: 8,
    name: 'Customer Demographics',
    description: 'Age, location, and preference analysis of ticket purchasers.',
    type: 'Customer',
    lastGenerated: '2026-04-09',
    dataPoints: 78,
    growthRate: '+7.4%',
    trend: 'up',
    eventId: 3,
    venue: 'Sports Arena'
  },
  {
    id: 9,
    name: 'Expense Analysis',
    description: 'Operating expenses breakdown, cost per event, and expense trends.',
    type: 'Financial',
    lastGenerated: '2026-04-08',
    dataPoints: 189,
    growthRate: '+4.1%',
    trend: 'up',
    eventId: 4,
    venue: 'National Stadium'
  },
  {
    id: 10,
    name: 'Event Success Metrics',
    description: 'Overall event success KPIs including on-time completion and customer feedback.',
    type: 'Operations',
    lastGenerated: '2026-04-07',
    dataPoints: 23,
    growthRate: '+9.3%',
    trend: 'up',
    eventId: 5,
    venue: 'Convention Center'
  },
  {
    id: 11,
    name: 'Payment Method Trends',
    description: 'Analysis of payment method preferences and usage patterns across events.',
    type: 'Financial',
    lastGenerated: '2026-04-06',
    dataPoints: 312,
    growthRate: '+6.8%',
    trend: 'up',
    eventId: 1,
    venue: 'National Stadium'
  },
  {
    id: 12,
    name: 'Churn Analysis',
    description: 'Customer retention metrics, churn rates, and repeat purchase behavior.',
    type: 'Customer',
    lastGenerated: '2026-04-05',
    dataPoints: 67,
    growthRate: '-2.3%',
    trend: 'down',
    eventId: 2,
    venue: 'Convention Center'
  },
  {
    id: 13,
    name: 'Campaign Performance',
    description: 'Marketing campaign effectiveness across channels and target audiences.',
    type: 'Marketing',
    lastGenerated: '2026-04-04',
    dataPoints: 145,
    growthRate: '+11.2%',
    trend: 'up',
    eventId: 3,
    venue: 'Sports Arena'
  },
  {
    id: 14,
    name: 'Vendor Performance',
    description: 'Vendor reliability, cost-effectiveness, and service quality ratings.',
    type: 'Operations',
    lastGenerated: '2026-04-03',
    dataPoints: 34,
    growthRate: '+4.5%',
    trend: 'up',
    eventId: 4,
    venue: 'National Stadium'
  },
  {
    id: 15,
    name: 'Referral Analysis',
    description: 'Customer referral patterns, word-of-mouth impact, and referral program effectiveness.',
    type: 'Marketing',
    lastGenerated: '2026-04-02',
    dataPoints: 89,
    growthRate: '+8.9%',
    trend: 'up',
    eventId: 5,
    venue: 'Convention Center'
  },
  {
    id: 16,
    name: 'Peak Usage Patterns',
    description: 'Analysis of peak booking times, seasonal trends, and demand patterns.',
    type: 'Operations',
    lastGenerated: '2026-04-01',
    dataPoints: 456,
    growthRate: '+3.7%',
    trend: 'up',
    eventId: 1,
    venue: 'National Stadium'
  },
  {
    id: 17,
    name: 'Profitability Report',
    description: 'Profit margins, cost structures, and profitability by event type and category.',
    type: 'Financial',
    lastGenerated: '2026-03-31',
    dataPoints: 78,
    growthRate: '+7.2%',
    trend: 'up',
    eventId: 2,
    venue: 'Convention Center'
  },
  {
    id: 18,
    name: 'Support Ticket Analysis',
    description: 'Customer support metrics, response times, and common issue categories.',
    type: 'Customer',
    lastGenerated: '2026-03-30',
    dataPoints: 234,
    growthRate: '+1.8%',
    trend: 'up',
    eventId: 3,
    venue: 'Sports Arena'
  },
  {
    id: 19,
    name: 'Sales Forecast',
    description: 'Predictive sales forecasting and revenue projections for upcoming events.',
    type: 'Sales',
    lastGenerated: '2026-03-29',
    dataPoints: 56,
    growthRate: '+10.5%',
    trend: 'up',
    eventId: 4,
    venue: 'National Stadium'
  },
  {
    id: 20,
    name: 'Social Media Impact',
    description: 'Social media engagement metrics, viral reach, and brand sentiment analysis.',
    type: 'Marketing',
    lastGenerated: '2026-03-28',
    dataPoints: 345,
    growthRate: '+12.8%',
    trend: 'up',
    eventId: 5,
    venue: 'Convention Center'
  }
];

export default function Reports() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'Financial' | 'Operations' | 'Customer' | 'Sales' | 'Marketing'>('all');
  const [dateRange, setDateRange] = useState<'7days' | '30days' | '90days' | '1year'>('30days');
  const [venueFilter, setVenueFilter] = useState('all');
  const [eventFilter, setEventFilter] = useState('all');
  const [showExportMessage, setShowExportMessage] = useState(false);

  const handleExport = () => {
    setShowExportMessage(true);
    setTimeout(() => {
      setShowExportMessage(false);
    }, 3000);
  };

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = searchQuery === '' ||
      report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'all' || report.type === typeFilter;
    const matchesVenue = venueFilter === 'all' || report.venue === venueFilter;
    const matchesEvent = eventFilter === 'all' || report.eventId === parseInt(eventFilter);

    return matchesSearch && matchesType && matchesVenue && matchesEvent;
  });

  const getTypeBadge = (type: string) => {
    const colors = {
      Financial: 'bg-green-100 text-green-700',
      Operations: 'bg-blue-100 text-blue-700',
      Customer: 'bg-purple-100 text-purple-700',
      Sales: 'bg-orange-100 text-orange-700',
      Marketing: 'bg-pink-100 text-pink-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[type as keyof typeof colors]}`}>
        {type}
      </span>
    );
  };

  const keyMetrics = {
    totalRevenue: 1245780.00,
    totalTickets: 45234,
    totalEvents: 234,
    avgRating: 4.7,
    revenueGrowth: '+12.3%',
    customerSatisfaction: 89.2
  };

  const filteredMetrics = {
    totalRevenue: filteredReports.reduce((sum, report) => sum + report.dataPoints * 500, 0),
    totalTickets: filteredReports.reduce((sum, report) => sum + report.dataPoints * 20, 0),
    totalEvents: filteredReports.length,
    avgRating: 4.7,
    revenueGrowth: '+12.3%',
    customerSatisfaction: 89.2
  };

  return (
    <DashboardLayout title="Reports">
      <div className="max-w-7xl mx-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Revenue</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                RM {keyMetrics.totalRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-green-500 font-medium">{keyMetrics.revenueGrowth}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <FileText className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Tickets Sold</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {keyMetrics.totalTickets.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Events</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                {keyMetrics.totalEvents}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Avg Rating</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {keyMetrics.avgRating.toFixed(1)}
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Analytics & Reports</h2>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="1year">Last Year</option>
            </select>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              <Download className="w-5 h-5" />
              Export All
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-64">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reports..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#273480' } as any}
              />
            </div>
            <select
              value={eventFilter}
              onChange={(e) => setEventFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Events</option>
              {mockEvents.map(event => (
                <option key={event.id} value={event.id.toString()}>
                  {event.name}
                </option>
              ))}
            </select>
            <select
              value={venueFilter}
              onChange={(e) => setVenueFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Venues</option>
              {mockVenues.map(venue => (
                <option key={venue} value={venue}>{venue}</option>
              ))}
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Types</option>
              <option value="Financial">Financial</option>
              <option value="Operations">Operations</option>
              <option value="Customer">Customer</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setTypeFilter('all');
                setVenueFilter('all');
                setEventFilter('all');
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Reports Grid */}
        {filteredReports.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No reports found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Report Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>{report.name}</h3>
                        {getTypeBadge(report.type)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${report.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {report.growthRate}
                    </span>
                    <span className="text-xs text-gray-500">
                      vs previous period
                    </span>
                  </div>
                </div>

                {/* Report Description */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{report.description}</p>

                  {/* Report Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart3 className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Data Points</div>
                      </div>
                      <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                        {report.dataPoints}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Last Generated</div>
                      </div>
                      <div className="text-lg font-semibold" style={{ color: '#273480' }}>
                        {new Date(report.lastGenerated).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Chart Preview */}
                  <div className="mb-4 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs text-gray-600">Preview</div>
                      <button className="text-sm" style={{ color: '#E11A27' }}>View Full Report</button>
                    </div>
                    <div className="h-24 flex items-end justify-between gap-2">
                      {[40, 65, 45, 80, 55, 70, 60, 90, 75, 85, 70, 80].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            height: `${height}%`,
                            backgroundColor: i % 3 === 0 ? '#273480' : i % 3 === 1 ? '#E11A27' : '#9F4091'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 p-4 border-t border-gray-200">
                    <button
                      className="flex-1 px-4 py-2 rounded-lg text-white transition-colors text-sm"
                      style={{ backgroundColor: '#273480' }}
                    >
                      <PieChart className="w-4 h-4 inline mr-2" />
                      View Report
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg border-2 transition-colors text-sm"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      <LineChart className="w-4 h-4 inline mr-2" />
                      Generate New
                    </button>
                    <button
                      onClick={handleExport}
                      className="px-4 py-2 rounded-lg border-2 transition-colors text-sm"
                      style={{ borderColor: '#E11A27', color: '#E11A27' }}
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-8 h-8" style={{ color: '#273480' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Custom Report</h3>
            </div>
            <p className="text-sm text-gray-600">Build your own report with custom metrics and filters</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Create Custom Report
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-8 h-8" style={{ color: '#E11A27' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Financial Summary</h3>
            </div>
            <p className="text-sm text-gray-600">Quick overview of all financial metrics and KPIs</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#273480' }}>
              View Financial Summary
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8" style={{ color: '#9F4091' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Customer Insights</h3>
            </div>
            <p className="text-sm text-gray-600">Deep dive into customer behavior and preferences</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#E11A27' }}>
              View Customer Data
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8" style={{ color: '#273480' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Trend Analysis</h3>
            </div>
            <p className="text-sm text-gray-600">Identify trends and patterns across all metrics</p>
            <button className="mt-3 w-full px-4 py-2 rounded-lg text-white text-sm transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Analyze Trends
            </button>
          </div>
        </div>

        {/* Export Success Message */}
        {showExportMessage && (
          <div className="fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in z-50">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Reports Exported!</div>
              <div className="text-sm">Your report data has been successfully exported</div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
