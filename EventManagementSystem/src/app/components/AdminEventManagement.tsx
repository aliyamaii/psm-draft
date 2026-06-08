import AdminLayout from './AdminLayout';
import EventStatusBadge from './EventStatusBadge';
import { Calendar, MapPin, User, DollarSign, Search, Filter, Download, Eye, Edit, Trash2, X, Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';

export default function AdminEventManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [filterOrganizer, setFilterOrganizer] = useState<'all' | 'organizer-1' | 'organizer-2'>('all');
  const [dateRange, setDateRange] = useState<'all' | 'week' | 'month' | 'year'>('all');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState<'csv' | 'excel' | 'pdf'>('csv');
  const [editingEvent, setEditingEvent] = useState<any>(null);

  // Mock events data with status
  const mockEvents = [
    {
      id: 1,
      name: 'Summer Music Festival 2026',
      description: 'A massive music festival featuring local and international bands',
      venue: 'National Stadium',
      date: '2026-07-15',
      time: '18:00',
      category: 'Music & Concerts',
      organizerId: 'organizer-1',
      organizerName: 'Event Organizer',
      status: 'approved',
      ticketsSold: 8543,
      capacity: 15000,
      revenue: 427150,
      createdAt: '2026-04-10'
    },
    {
      id: 2,
      name: 'Rock Festival 2026',
      description: 'A massive rock music festival featuring local and international bands',
      venue: 'National Stadium',
      date: '2026-08-15',
      time: '18:00',
      category: 'Music & Concerts',
      organizerId: 'organizer-1',
      organizerName: 'Event Organizer',
      status: 'pending',
      ticketsSold: 0,
      capacity: 20000,
      revenue: 0,
      createdAt: '2026-04-20'
    },
    {
      id: 3,
      name: 'Business Summit 2026',
      description: 'Annual business conference bringing together industry leaders',
      venue: 'Bukit Jalil Stadium',
      date: '2026-09-20',
      time: '09:00',
      category: 'Conference',
      organizerId: 'organizer-2',
      organizerName: 'Second Event Organizer',
      status: 'pending',
      ticketsSold: 0,
      capacity: 5000,
      revenue: 0,
      createdAt: '2026-04-19'
    },
    {
      id: 4,
      name: 'Food Festival Malaysia',
      description: 'Celebration of Malaysian cuisine with food stalls and entertainment',
      venue: 'National Stadium',
      date: '2026-10-05',
      time: '11:00',
      category: 'Food',
      organizerId: 'organizer-1',
      organizerName: 'Event Organizer',
      status: 'pending',
      ticketsSold: 0,
      capacity: 25000,
      revenue: 0,
      createdAt: '2026-04-18'
    },
    {
      id: 5,
      name: 'Sports Day Championship',
      description: 'Inter-school sports competition',
      venue: 'Bukit Jalil Stadium',
      date: '2026-05-20',
      time: '08:00',
      category: 'Sports',
      organizerId: 'organizer-2',
      organizerName: 'Second Event Organizer',
      status: 'rejected',
      ticketsSold: 0,
      capacity: 10000,
      revenue: 0,
      createdAt: '2026-04-15',
      rejectionReason: 'Venue conflict with existing event'
    },
    {
      id: 6,
      name: 'Tech Conference 2026',
      description: 'Technology conference featuring startups and investors',
      venue: 'National Stadium',
      date: '2026-06-10',
      time: '09:00',
      category: 'Conference',
      organizerId: 'organizer-1',
      organizerName: 'Event Organizer',
      status: 'approved',
      ticketsSold: 2341,
      capacity: 8000,
      revenue: 175800,
      createdAt: '2026-04-05'
    }
  ];

  const organizers = [
    { id: 'organizer-1', name: 'Event Organizer' },
    { id: 'organizer-2', name: 'Second Event Organizer' }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR'
    }).format(amount);
  };

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.organizerName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = filterStatus === 'all' || event.status === filterStatus;
    const matchesOrganizer = filterOrganizer === 'all' || event.organizerId === filterOrganizer;

    return matchesSearch && matchesStatus && matchesOrganizer;
  });

  const getStats = () => {
    return {
      total: mockEvents.length,
      pending: mockEvents.filter(e => e.status === 'pending').length,
      approved: mockEvents.filter(e => e.status === 'approved').length,
      rejected: mockEvents.filter(e => e.status === 'rejected').length,
      totalRevenue: mockEvents.reduce((sum, e) => sum + e.revenue, 0),
      totalTickets: mockEvents.reduce((sum, e) => sum + e.ticketsSold, 0)
    };
  };

  const stats = getStats();

  // Handler functions
  const handleExport = () => {
    setShowExportModal(true);
  };

  const confirmExport = () => {
    // Simulate export functionality
    alert(`Exporting ${filteredEvents.length} events as ${exportFormat.toUpperCase()}...`);
    setShowExportModal(false);
  };

  const handleEditEvent = (event: any) => {
    setEditingEvent(event);
    setSelectedEvent(event);
  };

  const handleDeleteEvent = (eventId: number) => {
    if (confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
      const event = mockEvents.find(e => e.id === eventId);
      if (event) {
        alert(`Event "${event.name}" has been deleted.`);
        // In a real implementation, this would remove the event from the database
      }
    }
  };

  const handleSaveEdit = (updatedEvent: any) => {
    const eventIndex = mockEvents.findIndex(e => e.id === updatedEvent.id);
    if (eventIndex !== -1) {
      Object.assign(mockEvents[eventIndex], updatedEvent);
      alert(`Event "${updatedEvent.name}" has been updated successfully.`);
      setEditingEvent(null);
      setSelectedEvent(null);
    }
  };

  return (
    <AdminLayout title="Events Management">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <CalendarIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-500">Total Events</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: '#273480' }}>{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
                <span className="text-white text-xs">⏳</span>
              </div>
              <span className="text-sm text-gray-500">Pending</span>
            </div>
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">✅</span>
              </div>
              <span className="text-sm text-gray-500">Approved</span>
            </div>
            <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs">❌</span>
              </div>
              <span className="text-sm text-gray-500">Rejected</span>
            </div>
            <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-500">Revenue</span>
            </div>
            <p className="text-lg font-bold text-green-600">{formatCurrency(stats.totalRevenue)}</p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold" style={{ color: '#273480' }}>
              All Events
            </h2>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Export</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by name, venue, or organizer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <select
                value={filterOrganizer}
                onChange={(e) => setFilterOrganizer(e.target.value as any)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="all">All Organizers</option>
                {organizers.map(org => (
                  <option key={org.id} value={org.id}>{org.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value as any)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="all">All Time</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{event.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{event.description}</p>
                  </div>
                  <EventStatusBadge status={event.status} />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)} at {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{event.organizerName}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Tickets Sold</p>
                    <p className="font-semibold text-gray-900">
                      {event.ticketsSold} / {event.capacity}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500">Revenue</p>
                    <p className="font-semibold text-green-600">
                      {formatCurrency(event.revenue)}
                    </p>
                  </div>
                </div>

                {event.rejectionReason && (
                  <div className="p-2 rounded-lg bg-red-50 border border-red-200 mb-4">
                    <p className="text-xs text-red-700 font-medium">Rejection Reason:</p>
                    <p className="text-sm text-red-600">{event.rejectionReason}</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="px-3 py-2 rounded-lg border border-red-300 hover:bg-red-50 text-red-600 text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                      {selectedEvent.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Event ID: {selectedEvent.id}</p>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <EventStatusBadge status={selectedEvent.status} />
                  <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#E0E7FF', color: '#3730A3' }}>
                    {selectedEvent.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600">{selectedEvent.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Date & Time</h4>
                    <p className="text-gray-600">{formatDate(selectedEvent.date)} at {selectedEvent.time}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Venue</h4>
                    <p className="text-gray-600">{selectedEvent.venue}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Organizer</h4>
                  <p className="text-gray-600">{selectedEvent.organizerName}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                      {selectedEvent.ticketsSold}
                    </p>
                    <p className="text-xs text-gray-500">Tickets Sold</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(selectedEvent.revenue)}
                    </p>
                    <p className="text-xs text-gray-500">Revenue</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                      {Math.round((selectedEvent.ticketsSold / selectedEvent.capacity) * 100)}%
                    </p>
                    <p className="text-xs text-gray-500">Capacity Used</p>
                  </div>
                </div>

                {selectedEvent.rejectionReason && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <h4 className="font-medium text-red-700 mb-2">Rejection Reason</h4>
                    <p className="text-red-600">{selectedEvent.rejectionReason}</p>
                  </div>
                )}

                <div className="text-sm text-gray-500">
                  Created: {formatDate(selectedEvent.createdAt)}
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => handleEditEvent(selectedEvent)}
                  className="px-4 py-2 rounded-lg bg-[#273480] text-white hover:bg-[#1e2850]"
                >
                  Edit Event
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Export Modal */}
        {showExportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                  Export Events
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Export {filteredEvents.length} events to your preferred format
                </p>
              </div>
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-3">Select Format</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="exportFormat"
                      value="csv"
                      checked={exportFormat === 'csv'}
                      onChange={(e) => setExportFormat(e.target.value as any)}
                      className="w-4 h-4 text-[#273480]"
                    />
                    <div>
                      <p className="font-medium text-gray-900">CSV</p>
                      <p className="text-sm text-gray-500">Comma-separated values for spreadsheets</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="exportFormat"
                      value="excel"
                      checked={exportFormat === 'excel'}
                      onChange={(e) => setExportFormat(e.target.value as any)}
                      className="w-4 h-4 text-[#273480]"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Excel</p>
                      <p className="text-sm text-gray-500">Microsoft Excel format with formatting</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="exportFormat"
                      value="pdf"
                      checked={exportFormat === 'pdf'}
                      onChange={(e) => setExportFormat(e.target.value as any)}
                      className="w-4 h-4 text-[#273480]"
                    />
                    <div>
                      <p className="font-medium text-gray-900">PDF</p>
                      <p className="text-sm text-gray-500">Portable document format for printing</p>
                    </div>
                  </label>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmExport}
                  className="px-4 py-2 rounded-lg bg-[#273480] text-white hover:bg-[#1e2850]"
                >
                  Export {exportFormat.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Event Modal */}
        {editingEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                    Edit Event
                  </h3>
                  <button
                    onClick={() => {
                      setEditingEvent(null);
                      setSelectedEvent(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                  <input
                    type="text"
                    defaultValue={editingEvent.name}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    defaultValue={editingEvent.description}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      defaultValue={editingEvent.date}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                      type="time"
                      defaultValue={editingEvent.time}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Venue</label>
                    <input
                      type="text"
                      defaultValue={editingEvent.venue}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      defaultValue={editingEvent.category}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    >
                      <option value="Music & Concerts">Music & Concerts</option>
                      <option value="Sports">Sports</option>
                      <option value="Conference">Conference</option>
                      <option value="Food">Food</option>
                      <option value="Art">Art</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                    <input
                      type="number"
                      defaultValue={editingEvent.capacity}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      defaultValue={editingEvent.status}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setEditingEvent(null);
                    setSelectedEvent(null);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveEdit(editingEvent)}
                  className="px-4 py-2 rounded-lg bg-[#273480] text-white hover:bg-[#1e2850]"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}