import { useState } from 'react';
import { Calendar, Users, Ticket, DollarSign, Clock, CheckCircle, XCircle, AlertCircle, Plus, Search, Filter, Download, Eye, Edit, Trash2, QrCode, Phone, Mail, MapPin, Star } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockBookings = [
  {
    id: 1,
    customerName: 'Ahmad Razak',
    email: 'ahmad.razak@email.com',
    phone: '+60 12-345-6789',
    eventName: 'Summer Music Festival 2026',
    eventDate: '2026-07-15',
    eventVenue: 'National Stadium',
    tickets: 4,
    ticketType: 'VIP Access',
    totalPrice: 1000.00,
    status: 'confirmed',
    bookingDate: '2026-04-15',
    paymentMethod: 'Credit Card',
    specialRequests: 'Wheelchair access required',
    qrCode: 'QR001',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 2,
    customerName: 'Sarah Lim',
    email: 'sarah.lim@email.com',
    phone: '+60 13-456-7890',
    eventName: 'Tech Conference 2026',
    eventDate: '2026-05-20',
    eventVenue: 'Convention Center',
    tickets: 2,
    ticketType: 'Regular',
    totalPrice: 160.00,
    status: 'confirmed',
    bookingDate: '2026-04-14',
    paymentMethod: 'Online Banking',
    specialRequests: 'None',
    qrCode: 'QR002',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 3,
    customerName: 'Mohd. Ali',
    email: 'mohd.ali@email.com',
    phone: '+60 14-567-8901',
    eventName: 'Championship Final',
    eventDate: '2026-06-10',
    eventVenue: 'Sports Arena',
    tickets: 8,
    ticketType: 'Premium',
    totalPrice: 2400.00,
    status: 'confirmed',
    bookingDate: '2026-04-13',
    paymentMethod: 'Touch n Go',
    specialRequests: 'Group seating needed',
    qrCode: 'QR003',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 4,
    customerName: 'Jennifer Wong',
    email: 'jennifer.wong@email.com',
    phone: '+60 15-678-9012',
    eventName: 'Jazz Night Live',
    eventDate: '2026-08-20',
    eventVenue: 'City Jazz Club',
    tickets: 2,
    ticketType: 'Regular',
    totalPrice: 170.00,
    status: 'pending',
    bookingDate: '2026-04-15',
    paymentMethod: 'GrabPay',
    specialRequests: 'Dietary restrictions',
    qrCode: 'QR004',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 5,
    customerName: 'Tan Wei Ling',
    email: 'tan.weiling@email.com',
    phone: '+60 16-789-0123',
    eventName: 'Gaming Convention',
    eventDate: '2026-09-05',
    eventVenue: 'Convention Center',
    tickets: 3,
    ticketType: 'Regular',
    totalPrice: 540.00,
    status: 'confirmed',
    bookingDate: '2026-04-12',
    paymentMethod: 'ShopeePay',
    specialRequests: 'None',
    qrCode: 'QR005',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 6,
    customerName: 'David Chen',
    email: 'david.chen@email.com',
    phone: '+60 17-890-1234',
    eventName: 'Rock Concert',
    eventDate: '2026-07-28',
    eventVenue: 'National Stadium',
    tickets: 6,
    ticketType: 'VIP Access',
    totalPrice: 1500.00,
    status: 'confirmed',
    bookingDate: '2026-04-11',
    paymentMethod: 'Credit Card',
    specialRequests: 'Parking needed',
    qrCode: 'QR006',
    hasReview: true,
    checkedIn: false
  },
  {
    id: 7,
    customerName: 'Aisha Binti',
    email: 'aisha.binti@email.com',
    phone: '+60 18-901-2345',
    eventName: 'Business Summit',
    eventDate: '2026-10-15',
    eventVenue: 'National Stadium',
    tickets: 4,
    ticketType: 'Corporate',
    totalPrice: 1200.00,
    status: 'confirmed',
    bookingDate: '2026-04-10',
    paymentMethod: 'Bank Transfer',
    specialRequests: 'Meeting room access',
    qrCode: 'QR007',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 8,
    customerName: 'Kumar Rajesh',
    email: 'kumar.rajesh@email.com',
    phone: '+60 19-012-3456',
    eventName: 'Comedy Show',
    eventDate: '2026-08-22',
    eventVenue: 'Comedy Central',
    tickets: 2,
    ticketType: 'Regular',
    totalPrice: 240.00,
    status: 'cancelled',
    bookingDate: '2026-04-09',
    paymentMethod: 'Online Banking',
    specialRequests: 'None',
    qrCode: 'QR008',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 9,
    customerName: 'Fatimah Zahra',
    email: 'fatimah.zahra@email.com',
    phone: '+60 10-123-4567',
    eventName: 'Food Festival',
    eventDate: '2026-10-05',
    eventVenue: 'Central Park',
    tickets: 5,
    ticketType: 'Family',
    totalPrice: 750.00,
    status: 'confirmed',
    bookingDate: '2026-04-08',
    paymentMethod: 'Boost',
    specialRequests: 'Vegetarian options',
    qrCode: 'QR009',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 10,
    customerName: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+60 11-234-5678',
    eventName: 'Charity Gala',
    eventDate: '2026-09-20',
    eventVenue: 'National Stadium',
    tickets: 2,
    ticketType: 'VIP Access',
    totalPrice: 500.00,
    status: 'confirmed',
    bookingDate: '2026-04-07',
    paymentMethod: 'Credit Card',
    specialRequests: 'None',
    qrCode: 'QR010',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 11,
    customerName: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@email.com',
    phone: '+60 12-345-6789',
    eventName: 'Kids Fun Fair',
    eventDate: '2026-09-30',
    eventVenue: 'Family Park',
    tickets: 6,
    ticketType: 'Family',
    totalPrice: 900.00,
    status: 'confirmed',
    bookingDate: '2026-04-06',
    paymentMethod: 'Online Banking',
    specialRequests: 'Childcare services',
    qrCode: 'QR011',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 12,
    customerName: 'Michael Lee',
    email: 'michael.lee@email.com',
    phone: '+60 13-456-7890',
    eventName: 'Art Exhibition',
    eventDate: '2026-11-12',
    eventVenue: 'Art Gallery KL',
    tickets: 3,
    ticketType: 'Regular',
    totalPrice: 195.00,
    status: 'confirmed',
    bookingDate: '2026-04-05',
    paymentMethod: 'Atome',
    specialRequests: 'Accessibility needed',
    qrCode: 'QR012',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 13,
    customerName: 'Emma Wilson',
    email: 'emma.wilson@email.com',
    phone: '+60 14-567-8901',
    eventName: 'Summer Music Festival 2026',
    eventDate: '2026-07-15',
    eventVenue: 'National Stadium',
    tickets: 2,
    ticketType: 'Premium',
    totalPrice: 600.00,
    status: 'confirmed',
    bookingDate: '2026-04-04',
    paymentMethod: 'Credit Card',
    specialRequests: 'Early entry requested',
    qrCode: 'QR013',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 14,
    customerName: 'Ramesh Nair',
    email: 'ramesh.nair@email.com',
    phone: '+60 15-678-9012',
    eventName: 'Tech Conference 2026',
    eventDate: '2026-05-20',
    eventVenue: 'Convention Center',
    tickets: 4,
    ticketType: 'Corporate',
    totalPrice: 800.00,
    status: 'confirmed',
    bookingDate: '2026-04-03',
    paymentMethod: 'Online Banking',
    specialRequests: 'Networking events access',
    qrCode: 'QR014',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 15,
    customerName: 'Chong Wei Ming',
    email: 'chong.weiming@email.com',
    phone: '+60 16-789-0123',
    eventName: 'Championship Final',
    eventDate: '2026-06-10',
    eventVenue: 'Sports Arena',
    tickets: 10,
    ticketType: 'Premium',
    totalPrice: 3000.00,
    status: 'confirmed',
    bookingDate: '2026-04-02',
    paymentMethod: 'Credit Card',
    specialRequests: 'Group transportation',
    qrCode: 'QR015',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 16,
    customerName: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    phone: '+60 17-890-1234',
    eventName: 'Jazz Night Live',
    eventDate: '2026-08-20',
    eventVenue: 'City Jazz Club',
    tickets: 1,
    ticketType: 'VIP Access',
    totalPrice: 250.00,
    status: 'pending',
    bookingDate: '2026-04-01',
    paymentMethod: 'GrabPay',
    specialRequests: 'Table reservation',
    qrCode: 'QR016',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 17,
    customerName: 'Layla Hassan',
    email: 'layla.hassan@email.com',
    phone: '+60 18-901-2345',
    eventName: 'Gaming Convention',
    eventDate: '2026-09-05',
    eventVenue: 'Convention Center',
    tickets: 5,
    ticketType: 'Regular',
    totalPrice: 900.00,
    status: 'confirmed',
    bookingDate: '2026-03-31',
    paymentMethod: 'ShopeePay',
    specialRequests: 'Merchandise bundle',
    qrCode: 'QR017',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 18,
    customerName: 'Kevin Tan',
    email: 'kevin.tan@email.com',
    phone: '+60 19-012-3456',
    eventName: 'Rock Concert',
    eventDate: '2026-07-28',
    eventVenue: 'National Stadium',
    tickets: 4,
    ticketType: 'Regular',
    totalPrice: 1000.00,
    status: 'confirmed',
    bookingDate: '2026-03-30',
    paymentMethod: 'Touch n Go',
    specialRequests: 'Backstage tour',
    qrCode: 'QR018',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 19,
    customerName: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+60 10-123-4567',
    eventName: 'Business Summit',
    eventDate: '2026-10-15',
    eventVenue: 'National Stadium',
    tickets: 3,
    ticketType: 'VIP Access',
    totalPrice: 750.00,
    status: 'confirmed',
    bookingDate: '2026-03-29',
    paymentMethod: 'Credit Card',
    specialRequests: 'Executive lounge access',
    qrCode: 'QR019',
    hasReview: false,
    checkedIn: false
  },
  {
    id: 20,
    customerName: 'Ahmad Bin Ali',
    email: 'ahmad.binali@email.com',
    phone: '+60 11-234-5678',
    eventName: 'Food Festival',
    eventDate: '2026-10-05',
    eventVenue: 'Central Park',
    tickets: 8,
    ticketType: 'Group',
    totalPrice: 1200.00,
    status: 'confirmed',
    bookingDate: '2026-03-28',
    paymentMethod: 'Boost',
    specialRequests: 'Group seating, dietary restrictions',
    qrCode: 'QR020',
    hasReview: false,
    checkedIn: false
  }
];

export default function Bookings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'pending' | 'cancelled'>('all');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');
  const [venueFilter, setVenueFilter] = useState('all');
  const [eventFilter, setEventFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState<typeof mockBookings[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookings, setBookings] = useState(mockBookings);
  const [showExportMessage, setShowExportMessage] = useState(false);

  const venues = Array.from(new Set(mockBookings.map(b => b.eventVenue)));
  const events = Array.from(new Set(mockBookings.map(b => ({ id: b.id, name: b.eventName }))));

  const handleViewDetails = (booking: typeof mockBookings[0]) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const handleViewQR = (booking: typeof mockBookings[0]) => {
    setSelectedBooking(booking);
    setShowQRModal(true);
  };

  const handleDelete = (booking: typeof mockBookings[0]) => {
    setSelectedBooking(booking);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedBooking) {
      setBookings(bookings.filter(b => b.id !== selectedBooking.id));
      setShowDeleteModal(false);
      setSelectedBooking(null);
    }
  };

  const handleExport = () => {
    // Simulate export functionality
    setShowExportMessage(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowExportMessage(false);
    }, 3000);
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = searchQuery === '' ||
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.eventName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;

    const matchesDate = dateFilter === 'all' ||
      (dateFilter === 'today' && booking.eventDate === '2026-04-17') ||
      (dateFilter === 'week' && booking.eventDate >= '2026-04-17' && booking.eventDate <= '2026-04-24') ||
      (dateFilter === 'month' && booking.eventDate >= '2026-04-17' && booking.eventDate <= '2026-05-17');

    const matchesVenue = venueFilter === 'all' || booking.eventVenue === venueFilter;
    const matchesEvent = eventFilter === 'all' || booking.eventName === eventFilter;

    return matchesSearch && matchesStatus && matchesDate && matchesVenue && matchesEvent;
  });

  const totalRevenue = filteredBookings
    .filter(b => b.status !== 'cancelled')
    .reduce((sum, b) => sum + b.totalPrice, 0);

  const totalTickets = filteredBookings.reduce((sum, b) => sum + b.tickets, 0);

  const getStatusBadge = (status: string) => {
    const colors = {
      confirmed: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      cancelled: 'bg-red-100 text-red-700'
    };
    const icons = {
      confirmed: <CheckCircle className="w-3 h-3 inline mr-1" />,
      pending: <AlertCircle className="w-3 h-3 inline mr-1" />,
      cancelled: <XCircle className="w-3 h-3 inline mr-1" />
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${colors[status as keyof typeof colors]}`}>
        {icons[status as keyof typeof icons]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <DashboardLayout title="Bookings">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Bookings</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredBookings.length}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Ticket className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Tickets</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {totalTickets}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Revenue</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                RM {totalRevenue.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Active Customers</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredBookings.filter(b => b.status === 'confirmed').length}
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Bookings</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
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
                placeholder="Search bookings by name, email, or event..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#273480' } as any}
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <select
              value={eventFilter}
              onChange={(e) => setEventFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Events</option>
              {events.map(event => (
                <option key={event.id} value={event.name}>{event.name}</option>
              ))}
            </select>
            <select
              value={venueFilter}
              onChange={(e) => setVenueFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Venues</option>
              {venues.map(venue => (
                <option key={venue} value={venue}>{venue}</option>
              ))}
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
                setDateFilter('all');
                setVenueFilter('all');
                setEventFilter('all');
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Bookings Table */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No bookings found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Customer</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Event</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Tickets</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Total</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold" style={{ color: '#273480' }}>{booking.customerName}</div>
                          <div className="text-sm text-gray-500">{booking.email}</div>
                          <div className="text-xs text-gray-400">{booking.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold" style={{ color: '#273480' }}>{booking.eventName}</div>
                          <div className="text-sm text-gray-500">{booking.eventVenue}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(booking.eventDate).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4" style={{ color: '#273480' }} />
                          <div>
                            <div className="font-semibold">{booking.tickets} tickets</div>
                            <div className="text-sm text-gray-500">{booking.ticketType}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold" style={{ color: booking.status === 'cancelled' ? '#EF4444' : '#273480' }}>
                          RM {booking.totalPrice.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">{booking.paymentMethod}</div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(booking.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center gap-1 mb-1">
                            <Clock className="w-3 h-3" />
                            {new Date(booking.bookingDate).toLocaleDateString()}
                          </div>
                          {booking.hasReview && (
                            <div className="flex items-center gap-1 text-yellow-500 text-xs">
                              <Star className="w-3 h-3 fill-current" />
                              Has Review
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(booking)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleViewQR(booking)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            title="View QR Code"
                          >
                            <QrCode className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(booking)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-red-500"
                            title="Delete Booking"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* View Details Modal */}
        {showDetailsModal && selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Booking Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {/* Customer Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3" style={{ color: '#273480' }}>Customer Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Name</div>
                        <div className="font-medium">{selectedBooking.customerName}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-medium">{selectedBooking.email}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Phone</div>
                        <div className="font-medium">{selectedBooking.phone}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Booking Date</div>
                        <div className="font-medium">{new Date(selectedBooking.bookingDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3" style={{ color: '#273480' }}>Event Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Event</div>
                        <div className="font-medium">{selectedBooking.eventName}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Venue</div>
                        <div className="font-medium">{selectedBooking.eventVenue}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Event Date</div>
                        <div className="font-medium">{new Date(selectedBooking.eventDate).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Status</div>
                        <div>{getStatusBadge(selectedBooking.status)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3" style={{ color: '#273480' }}>Booking Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Tickets</div>
                        <div className="font-medium">{selectedBooking.tickets} × {selectedBooking.ticketType}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Total Price</div>
                        <div className="font-semibold" style={{ color: '#273480' }}>RM {selectedBooking.totalPrice.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Payment Method</div>
                        <div className="font-medium">{selectedBooking.paymentMethod}</div>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  {selectedBooking.specialRequests && selectedBooking.specialRequests !== 'None' && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2" style={{ color: '#273480' }}>Special Requests</h3>
                      <div className="text-sm">{selectedBooking.specialRequests}</div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <button
                      onClick={() => {
                        setShowDetailsModal(false);
                        handleViewQR(selectedBooking);
                      }}
                      className="flex-1 px-4 py-3 rounded-lg border-2 transition-colors"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      View QR Code
                    </button>
                    <button
                      onClick={() => setShowDetailsModal(false)}
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {showQRModal && selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-semibold" style={{ color: '#273480' }}>Booking QR Code</h2>
                <button
                  onClick={() => setShowQRModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-48 h-48 mx-auto mb-4 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <QrCode className="w-40 h-40 text-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Booking ID</div>
                    <div className="text-lg font-mono font-bold" style={{ color: '#273480' }}>{selectedBooking.qrCode}</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Customer</div>
                      <div className="font-medium">{selectedBooking.customerName}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Event</div>
                      <div className="font-medium">{selectedBooking.eventName}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Tickets</div>
                      <div className="font-medium">{selectedBooking.tickets}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Date</div>
                      <div className="font-medium">{new Date(selectedBooking.eventDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      // In a real app, this would trigger download/print
                      alert('QR Code downloaded!');
                    }}
                    className="flex-1 px-4 py-3 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: '#E11A27' }}
                  >
                    Download QR
                  </button>
                  <button
                    onClick={() => setShowQRModal(false)}
                    className="flex-1 px-4 py-3 rounded-lg border-2 transition-colors"
                    style={{ borderColor: '#273480', color: '#273480' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fee2e2' }}>
                    <Trash2 className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-1" style={{ color: '#273480' }}>Delete Booking?</h2>
                    <p className="text-gray-600 text-sm">
                      Are you sure you want to delete the booking for {selectedBooking.customerName}?
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Event</div>
                      <div className="font-medium">{selectedBooking.eventName}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Amount</div>
                      <div className="font-medium" style={{ color: '#E11A27' }}>RM {selectedBooking.totalPrice.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="flex-1 px-4 py-3 rounded-lg border-2 transition-colors"
                    style={{ borderColor: '#273480', color: '#273480' }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 px-4 py-3 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: '#E11A27' }}
                  >
                    Delete Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Export Success Message */}
        {showExportMessage && (
          <div className="fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in z-50">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Bookings Exported!</div>
              <div className="text-sm">Your booking data has been successfully exported</div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}