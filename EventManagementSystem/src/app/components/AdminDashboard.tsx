import AdminLayout from './AdminLayout';
import { Users, Calendar, CheckCircle, XCircle, DollarSign, TrendingUp, ArrowRight, Building, BarChart3, Filter, MapPin, User, Eye, Edit, Trash2, X, Check } from 'lucide-react';
import { useState } from 'react';

export default function AdminDashboard() {
  const [filterCompany, setFilterCompany] = useState<string>('all');
  const [filterVenue, setFilterVenue] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  // Mock data for admin dashboard - all events with status
  const allEvents = [
    { id: 1, name: 'Rock Festival 2026', organizer: 'Event Organizer', date: '2026-08-15', venue: 'National Stadium', status: 'pending', revenue: 150000, buyers: 45 },
    { id: 2, name: 'Business Summit', organizer: 'Second Event Organizer', date: '2026-09-20', venue: 'Bukit Jalil Stadium', status: 'pending', revenue: 200000, buyers: 60 },
    { id: 3, name: 'Food Festival', organizer: 'Event Organizer', date: '2026-10-05', venue: 'National Stadium', status: 'pending', revenue: 80000, buyers: 120 },
    { id: 4, name: 'Tech Conference 2026', organizer: 'Tech Innovator', date: '2026-07-10', venue: 'KLCC Convention Centre', status: 'approved', revenue: 350000, buyers: 85 },
    { id: 5, name: 'Jazz Night Festival', organizer: 'Event Organizer', date: '2026-06-22', venue: 'Petronas Philharmonic Hall', status: 'approved', revenue: 280000, buyers: 70 },
    { id: 6, name: 'Sports Championship', organizer: 'Sports Manager', date: '2026-11-15', venue: 'Bukit Jalil Stadium', status: 'pending', revenue: 420000, buyers: 95 },
    { id: 7, name: 'Art Exhibition', organizer: 'Art Curator', date: '2026-05-30', venue: 'National Art Gallery', status: 'rejected', revenue: 0, buyers: 0 },
    { id: 8, name: 'Gaming Expo', organizer: 'Game Master', date: '2026-12-01', venue: 'Setia City Convention Centre', status: 'rejected', revenue: 0, buyers: 0 },
    { id: 9, name: 'Music Concert', organizer: 'Tech Innovator', date: '2026-08-25', venue: 'KLCC Convention Centre', status: 'approved', revenue: 180000, buyers: 55 },
    { id: 10, name: 'Business Workshop', organizer: 'Second Event Organizer', date: '2026-07-18', venue: 'Bukit Jalil Stadium', status: 'approved', revenue: 95000, buyers: 40 },
    { id: 11, name: 'Food Fair', organizer: 'Event Organizer', date: '2026-09-12', venue: 'National Stadium', status: 'pending', revenue: 65000, buyers: 80 },
    { id: 12, name: 'Tech Startup Summit', organizer: 'Tech Innovator', date: '2026-10-20', venue: 'KLCC Convention Centre', status: 'approved', revenue: 275000, buyers: 65 }
  ];

  const recentActivity = [
    { id: 1, type: 'approval', message: 'Approved "Summer Music Festival"', time: '2 minutes ago', user: 'Admin' },
    { id: 2, type: 'rejection', message: 'Rejected "Tech Conference 2026"', time: '15 minutes ago', user: 'Admin' },
    { id: 3, type: 'registration', message: 'New organizer registered', time: '1 hour ago', user: 'System' },
    { id: 4, type: 'approval', message: 'Approved "Sports Day Event"', time: '2 hours ago', user: 'Admin' },
    { id: 5, type: 'registration', message: 'New buyer registered', time: '3 hours ago', user: 'System' }
  ];

  // Filter events based on selected filters
  const filteredEvents = allEvents.filter((event) => {
    const matchesCompany = filterCompany === 'all' || event.organizer === filterCompany;
    const matchesVenue = filterVenue === 'all' || event.venue === filterVenue;
    return matchesCompany && matchesVenue;
  });

  // Calculate dynamic stats based on filtered events
  const stats = {
    pendingEvents: filteredEvents.filter(e => e.status === 'pending').length,
    approvedEvents: filteredEvents.filter(e => e.status === 'approved').length,
    rejectedEvents: filteredEvents.filter(e => e.status === 'rejected').length,
    totalOrganizers: new Set(filteredEvents.map(e => e.organizer)).size,
    totalBuyers: filteredEvents.reduce((sum, e) => sum + e.buyers, 0),
    systemRevenue: filteredEvents.reduce((sum, e) => sum + e.revenue, 0)
  };

  // Get only pending events for the pending events section
  const pendingEvents = filteredEvents.filter(e => e.status === 'pending');

  // Handler functions for event actions
  const handleViewEvent = (event: any) => {
    setSelectedEvent(event);
  };

  const handleApproveEvent = (eventId: number) => {
    const event = allEvents.find(e => e.id === eventId);
    if (event && event.status === 'pending') {
      event.status = 'approved';
      alert(`Event "${event.name}" has been approved!`);
    }
  };

  const handleRejectEvent = (eventId: number) => {
    const event = allEvents.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setShowRejectModal(true);
    }
  };

  const confirmReject = () => {
    if (!rejectReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }
    if (selectedEvent) {
      const event = allEvents.find(e => e.id === selectedEvent.id);
      if (event) {
        event.status = 'rejected';
        event.rejectionReason = rejectReason;
        alert(`Event "${event.name}" has been rejected with reason: "${rejectReason}"`);
      }
    }
    setShowRejectModal(false);
    setRejectReason('');
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId: number) => {
    if (confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
      const index = allEvents.findIndex(e => e.id === eventId);
      if (index !== -1) {
        const event = allEvents[index];
        allEvents.splice(index, 1);
        alert(`Event "${event.name}" has been deleted.`);
      }
    }
  };

  const handleEditEvent = (eventId: number) => {
    alert(`Edit functionality for event ${eventId} - would navigate to edit page`);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'approval':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejection':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'registration':
        return <Users className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#273480' }}>
            Welcome back, Administrator
          </h2>
          <p className="text-gray-600">
            Here's what's happening in your event management system today.
          </p>
        </div>

        {/* Global Filters */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1" style={{ color: '#273480' }}>Dashboard Filters</h3>
              <p className="text-sm text-gray-600">Filter dashboard data by company and venue</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {/* Company/Organizer Filter */}
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-400" />
                <select
                  value={filterCompany}
                  onChange={(e) => setFilterCompany(e.target.value)}
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending Events</p>
                <p className="text-3xl font-bold" style={{ color: '#273480' }}>{stats.pendingEvents}</p>
                <p className="text-xs text-orange-600 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Requires review
                </p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Approved Events</p>
                <p className="text-3xl font-bold" style={{ color: '#273480' }}>{stats.approvedEvents}</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Live events
                </p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Organizers</p>
                <p className="text-3xl font-bold" style={{ color: '#273480' }}>{stats.totalOrganizers}</p>
                <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Active accounts
                </p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Buyers</p>
                <p className="text-3xl font-bold" style={{ color: '#273480' }}>{stats.totalBuyers}</p>
                <p className="text-xs text-purple-600 mt-2 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Registered users
                </p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E9D5FF' }}>
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">System Revenue</p>
                <p className="text-3xl font-bold" style={{ color: '#273480' }}>
                  RM{(stats.systemRevenue / 1000000).toFixed(1)}M
                </p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <DollarSign className="w-3 h-3" /> +12.5% from last month
                </p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Rejected Events</p>
                <p className="text-3xl font-bold" style={{ color: '#273480' }}>{stats.rejectedEvents}</p>
                <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> Not approved
                </p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#273480] hover:bg-gray-50 transition-all group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900">Review Pending Events</div>
                <div className="text-sm text-gray-500">{stats.pendingEvents} awaiting approval</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#273480] transition-colors" />
            </button>

            <button className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#273480] hover:bg-gray-50 transition-all group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900">Manage Users</div>
                <div className="text-sm text-gray-500">{stats.totalOrganizers} organizers, {stats.totalBuyers} buyers</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#273480] transition-colors" />
            </button>

            <button className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#273480] hover:bg-gray-50 transition-all group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                <BarChart3 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900">View System Stats</div>
                <div className="text-sm text-gray-500">Analytics and reports</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#273480] transition-colors" />
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time} • {activity.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Pending Events Requiring Review</h3>
            <div className="space-y-3">
              {pendingEvents.length === 0 ? (
                <div className="text-center py-6 text-gray-500">
                  No pending events for the selected filters
                </div>
              ) : (
                pendingEvents.map((event) => (
                <div key={event.id} className="p-4 rounded-lg border border-gray-200 hover:border-[#273480] transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{event.name}</h4>
                      <p className="text-sm text-gray-500">{event.organizer}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
                      Pending
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" /> {event.venue}
                    </span>
                  </div>
                </div>
              ))
              )}
            </div>
          </div>
        </div>

        {/* Filtered Events Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Events Directory</h3>

          {/* Filtered Events List */}
          <div className="space-y-3">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No events found for the selected filters
              </div>
            ) : (
              filteredEvents.map((event) => (
                  <div key={event.id} className="p-4 rounded-lg border border-gray-200 hover:border-[#273480] hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{event.name}</h4>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            event.status === 'approved' ? 'bg-green-100 text-green-800' :
                            event.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4 text-gray-400" /> {event.organizer}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-gray-400" /> {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4 text-gray-400" /> {event.venue}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {event.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApproveEvent(event.id)}
                              className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-green-600 text-green-600 hover:bg-green-50 transition-colors"
                            >
                              <Check className="w-3 h-3" />
                              Approve
                            </button>
                            <button
                              onClick={() => handleRejectEvent(event.id)}
                              className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-red-600 text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <X className="w-3 h-3" />
                              Reject
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleViewEvent(event)}
                          className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && !showRejectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                    {selectedEvent.name}
                  </h3>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Status</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedEvent.status === 'approved' ? 'bg-green-100 text-green-800' :
                    selectedEvent.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedEvent.status.charAt(0).toUpperCase() + selectedEvent.status.slice(1)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Organizer</h4>
                    <p className="text-gray-600">{selectedEvent.organizer}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Venue</h4>
                    <p className="text-gray-600">{selectedEvent.venue}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Date</h4>
                    <p className="text-gray-600">{selectedEvent.date}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Revenue</h4>
                    <p className="text-gray-600">RM{selectedEvent.revenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Buyers</h4>
                    <p className="text-gray-600">{selectedEvent.buyers}</p>
                  </div>
                </div>
                {selectedEvent.status === 'rejected' && selectedEvent.rejectionReason && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <h4 className="font-medium text-red-900 mb-2">Rejection Reason</h4>
                    <p className="text-sm text-red-700">{selectedEvent.rejectionReason}</p>
                  </div>
                )}
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-between">
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this event?')) {
                      handleDeleteEvent(selectedEvent.id);
                      setSelectedEvent(null);
                    }
                  }}
                  className="px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50"
                >
                  Delete Event
                </button>
                <div className="flex gap-3">
                  {selectedEvent.status === 'pending' && (
                    <>
                      <button
                        onClick={() => {
                          setSelectedEvent(null);
                          handleRejectEvent(selectedEvent.id);
                        }}
                        className="px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => {
                          handleApproveEvent(selectedEvent.id);
                          setSelectedEvent(null);
                        }}
                        className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                      >
                        Approve
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reject Confirmation Modal */}
        {showRejectModal && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                  Reject Event
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Please provide a reason for rejecting "<strong>{selectedEvent.name}</strong>":
                </p>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Enter rejection reason..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480] h-32 resize-none"
                />
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowRejectModal(false);
                    setRejectReason('');
                    setSelectedEvent(null);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReject}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Reject Event
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}