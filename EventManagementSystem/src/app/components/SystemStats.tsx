import AdminLayout from './AdminLayout';
import { Users, Calendar, DollarSign, TrendingUp, Download, BarChart3, PieChart, LineChart, User, MapPin, Building } from 'lucide-react';
import { useState } from 'react';

export default function SystemStats() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [filterOrganizer, setFilterOrganizer] = useState<string>('all');
  const [filterVenue, setFilterVenue] = useState<string>('all');
  const [showExportNotification, setShowExportNotification] = useState(false);

  // Comprehensive event data with venue and organizer information
  const allEventsData = [
    { id: 1, name: 'Rock Festival 2026', organizer: 'Event Organizer', venue: 'National Stadium', revenue: 150000, status: 'active', buyers: 45, month: 'Jun', category: 'Music & Concerts' },
    { id: 2, name: 'Business Summit', organizer: 'Second Event Organizer', venue: 'Bukit Jalil Stadium', revenue: 200000, status: 'active', buyers: 60, month: 'Jun', category: 'Conference' },
    { id: 3, name: 'Food Festival', organizer: 'Event Organizer', venue: 'National Stadium', revenue: 80000, status: 'pending', buyers: 120, month: 'May', category: 'Food' },
    { id: 4, name: 'Tech Conference 2026', organizer: 'Tech Innovator', venue: 'KLCC Convention Centre', revenue: 350000, status: 'active', buyers: 85, month: 'Jun', category: 'Conference' },
    { id: 5, name: 'Jazz Night Festival', organizer: 'Event Organizer', venue: 'Petronas Philharmonic Hall', revenue: 280000, status: 'active', buyers: 70, month: 'May', category: 'Music & Concerts' },
    { id: 6, name: 'Sports Championship', organizer: 'Sports Manager', venue: 'Bukit Jalil Stadium', revenue: 420000, status: 'pending', buyers: 95, month: 'Jun', category: 'Sports' },
    { id: 7, name: 'Art Exhibition', organizer: 'Art Curator', venue: 'National Art Gallery', revenue: 0, status: 'rejected', buyers: 0, month: 'Apr', category: 'Art' },
    { id: 8, name: 'Gaming Expo', organizer: 'Game Master', venue: 'Setia City Convention Centre', revenue: 0, status: 'rejected', buyers: 0, month: 'Apr', category: 'Gaming' },
    { id: 9, name: 'Music Concert', organizer: 'Tech Innovator', venue: 'KLCC Convention Centre', revenue: 180000, status: 'active', buyers: 55, month: 'May', category: 'Music & Concerts' },
    { id: 10, name: 'Business Workshop', organizer: 'Second Event Organizer', venue: 'Bukit Jalil Stadium', revenue: 95000, status: 'active', buyers: 40, month: 'Apr', category: 'Conference' },
    { id: 11, name: 'Food Fair', organizer: 'Event Organizer', venue: 'National Stadium', revenue: 65000, status: 'pending', buyers: 80, month: 'May', category: 'Food' },
    { id: 12, name: 'Tech Startup Summit', organizer: 'Tech Innovator', venue: 'KLCC Convention Centre', revenue: 275000, status: 'active', buyers: 65, month: 'Jun', category: 'Conference' }
  ];

  // Filter events based on selected filters
  const filteredEvents = allEventsData.filter(event => {
    const matchesOrganizer = filterOrganizer === 'all' || event.organizer === filterOrganizer;
    const matchesVenue = filterVenue === 'all' || event.venue === filterVenue;
    return matchesOrganizer && matchesVenue;
  });

  // Calculate dynamic stats based on filtered events
  const systemStats = {
    totalUsers: 249, // This could be calculated from filtered data if user data was available
    totalEvents: filteredEvents.length,
    totalRevenue: filteredEvents.reduce((sum, e) => sum + e.revenue, 0),
    approvalRate: filteredEvents.length > 0
      ? Math.round((filteredEvents.filter(e => e.status === 'active').length / filteredEvents.length) * 100)
      : 85,
    activeEvents: filteredEvents.filter(e => e.status === 'active').length,
    pendingEvents: filteredEvents.filter(e => e.status === 'pending').length,
    rejectedEvents: filteredEvents.filter(e => e.status === 'rejected').length
  };

  // Calculate dynamic user growth data based on filtered events
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const userGrowthData = months.map(month => {
    const monthEvents = filteredEvents.filter(e => e.month === month);
    const uniqueOrganizers = new Set(monthEvents.map(e => e.organizer)).size;
    const totalBuyers = monthEvents.reduce((sum, e) => sum + e.buyers, 0);
    return { month, organizers: uniqueOrganizers, buyers: totalBuyers };
  });

  // Calculate dynamic revenue data based on filtered events
  const revenueData = months.map(month => {
    const monthRevenue = filteredEvents
      .filter(e => e.month === month)
      .reduce((sum, e) => sum + e.revenue, 0);
    return { month, revenue: monthRevenue };
  });

  // Calculate dynamic category distribution based on filtered events
  const categoryCounts = filteredEvents.reduce((acc, event) => {
    acc[event.category] = (acc[event.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryDistribution = Object.entries(categoryCounts)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / filteredEvents.length) * 100)
    }))
    .sort((a, b) => b.count - a.count);

  // Calculate dynamic popular venues based on filtered events
  const venueStats = filteredEvents.reduce((acc, event) => {
    if (!acc[event.venue]) {
      acc[event.venue] = { events: 0, revenue: 0 };
    }
    acc[event.venue].events += 1;
    acc[event.venue].revenue += event.revenue;
    return acc;
  }, {} as Record<string, { events: number; revenue: number }>);

  const popularVenues = Object.entries(venueStats)
    .map(([name, stats]) => ({ name, ...stats }))
    .sort((a, b) => b.events - a.events)
    .slice(0, 5);

  // Calculate dynamic top organizers based on filtered events
  const organizerStats = filteredEvents.reduce((acc, event) => {
    if (!acc[event.organizer]) {
      acc[event.organizer] = { events: 0, revenue: 0, approved: 0 };
    }
    acc[event.organizer].events += 1;
    acc[event.organizer].revenue += event.revenue;
    if (event.status === 'active') {
      acc[event.organizer].approved += 1;
    }
    return acc;
  }, {} as Record<string, { events: number; revenue: number; approved: number }>);

  const topOrganizers = Object.entries(organizerStats)
    .map(([name, stats]) => ({
      name,
      events: stats.events,
      revenue: stats.revenue,
      approvalRate: Math.round((stats.approved / stats.events) * 100)
    }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR'
    }).format(amount);
  };

  const handleExportReport = () => {
    setShowExportNotification(true);
    setTimeout(() => {
      setShowExportNotification(false);
    }, 3000);
  };

  return (
    <AdminLayout title="System Statistics">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>
                System Analytics
              </h2>
              <p className="text-gray-600 mt-1">
                Comprehensive overview of platform performance and metrics
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as any)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <button
                onClick={handleExportReport}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Export Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Global Filters */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1" style={{ color: '#273480' }}>Statistics Filters</h3>
              <p className="text-sm text-gray-600">Filter statistics by organizer and venue</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {/* Organizer Filter */}
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-400" />
                <select
                  value={filterOrganizer}
                  onChange={(e) => setFilterOrganizer(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                >
                  <option value="all">All Organizers</option>
                  <option value="Event Organizer">Event Organizer</option>
                  <option value="Second Event Organizer">Second Event Organizer</option>
                  <option value="Tech Innovator">Tech Innovator</option>
                  <option value="Sports Manager">Sports Manager</option>
                  <option value="Art Curator">Art Curator</option>
                  <option value="Game Master">Game Master</option>
                </select>
              </div>

              {/* Venue Filter */}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <select
                  value={filterVenue}
                  onChange={(e) => setFilterVenue(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                >
                  <option value="all">All Venues</option>
                  <option value="National Stadium">National Stadium</option>
                  <option value="Bukit Jalil Stadium">Bukit Jalil Stadium</option>
                  <option value="KLCC Convention Centre">KLCC Convention Centre</option>
                  <option value="Petronas Philharmonic Hall">Petronas Philharmonic Hall</option>
                  <option value="National Art Gallery">National Art Gallery</option>
                  <option value="Setia City Convention Centre">Setia City Convention Centre</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{systemStats.totalUsers}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{systemStats.totalEvents}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+8.2% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(systemStats.totalRevenue)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+15.3% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E9D5FF' }}>
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Approval Rate</p>
                <p className="text-2xl font-bold text-gray-900">{systemStats.approvalRate}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+3.1% from last month</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>
                User Growth
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">Organizers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Buyers</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end justify-around pt-4">
              {userGrowthData.map((data, index) => {
                const maxOrganizerHeight = Math.max(...userGrowthData.map(d => d.organizers));
                const maxBuyerHeight = Math.max(...userGrowthData.map(d => d.buyers));
                const maxHeight = Math.max(maxOrganizerHeight, maxBuyerHeight);
                const scaleFactor = 200 / maxHeight; // 200px max height

                return (
                  <div key={data.month} className="flex flex-col items-center gap-2 flex-1">
                    <div className="flex gap-1 items-end" style={{ height: '200px' }}>
                      <div
                        className="w-6 bg-blue-500 rounded-t transition-all"
                        style={{ height: `${data.organizers * scaleFactor}px` }}
                      />
                      <div
                        className="w-6 bg-green-500 rounded-t transition-all"
                        style={{ height: `${data.buyers * scaleFactor}px` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Revenue Trend */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>
                Revenue Trend
              </h3>
              <LineChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-end justify-around">
              {revenueData.map((data, index) => (
                <div key={data.month} className="flex flex-col items-center gap-2">
                  <div className="w-12 bg-gradient-to-t from-green-600 to-green-400 rounded-t transition-all flex items-end justify-center"
                    style={{ height: `${data.revenue / 5000}px` }}>
                    <span className="text-xs text-white mb-1">
                      {(data.revenue / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>
                Event Categories
              </h3>
              <PieChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {categoryDistribution.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No category data for the selected filters
                </div>
              ) : (
                categoryDistribution.map((category, index) => (
                <div key={category.name} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count} events ({category.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${category.percentage}%`,
                          backgroundColor: ['#273480', '#E11A27', '#A04292', '#059669'][index]
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))
              )}
            </div>
          </div>

          {/* Popular Venues */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>
                Popular Venues
              </h3>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {popularVenues.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No venue data for the selected filters
                </div>
              ) : (
                popularVenues.map((venue, index) => (
                <div key={venue.name} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{venue.name}</h4>
                    <span className="text-sm font-semibold text-green-600">
                      {formatCurrency(venue.revenue)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{venue.events} events hosted</span>
                    <span className="text-xs text-gray-500">
                      #{index + 1} most popular
                    </span>
                  </div>
                </div>
              ))
              )}
            </div>
          </div>
        </div>

        {/* Top Organizers */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>
              Top Organizers
            </h3>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Organizer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Events</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Approval Rate</th>
                </tr>
              </thead>
              <tbody>
                {topOrganizers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                      No organizer data for the selected filters
                    </td>
                  </tr>
                ) : (
                  topOrganizers.map((organizer, index) => (
                  <tr key={organizer.name} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                          style={{ backgroundColor: ['#273480', '#E11A27', '#A04292'][index] }}>
                          {index + 1}
                        </div>
                        <span className="font-medium text-gray-900">{organizer.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-600">{organizer.events}</td>
                    <td className="px-4 py-4 font-semibold text-green-600">
                      {formatCurrency(organizer.revenue)}
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        organizer.approvalRate >= 90 ? 'bg-green-100 text-green-700' :
                        organizer.approvalRate >= 80 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {organizer.approvalRate}%
                      </span>
                    </td>
                  </tr>
                ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Event Status Overview */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-6" style={{ color: '#273480' }}>
            Event Status Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">{systemStats.activeEvents}</div>
              <div className="text-sm text-green-700">Active Events</div>
              <div className="text-xs text-green-600 mt-1">
                {Math.round((systemStats.activeEvents / systemStats.totalEvents) * 100)}% of total
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-yellow-50 border border-yellow-200">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{systemStats.pendingEvents}</div>
              <div className="text-sm text-yellow-700">Pending Approval</div>
              <div className="text-xs text-yellow-600 mt-1">
                {Math.round((systemStats.pendingEvents / systemStats.totalEvents) * 100)}% of total
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-red-50 border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">{systemStats.rejectedEvents}</div>
              <div className="text-sm text-red-700">Rejected Events</div>
              <div className="text-xs text-red-600 mt-1">
                {Math.round((systemStats.rejectedEvents / systemStats.totalEvents) * 100)}% of total
              </div>
            </div>
          </div>
        </div>

        {/* Export Success Notification */}
        {showExportNotification && (
          <div className="fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in z-50">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Report Exported!</div>
              <div className="text-sm">Your system statistics data has been successfully exported</div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}