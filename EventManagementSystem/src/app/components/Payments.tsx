import { useState } from 'react';
import { CreditCard, Wallet, TrendingUp, Filter, Search, Download, Eye, MoreHorizontal } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockPayments = [
  {
    id: 1,
    eventId: 1,
    eventName: 'Summer Music Festival 2026',
    venue: 'National Stadium',
    transactionId: 'TXN-20260415001',
    date: '2026-04-15',
    time: '14:32:15',
    amount: 240.00,
    currency: 'MYR',
    paymentMethod: 'Maybank2U',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Ahmad Bin Ali',
    customerEmail: 'ahmad.ali@email.com'
  },
  {
    id: 2,
    eventId: 2,
    eventName: 'Tech Conference 2026',
    venue: 'Convention Center',
    transactionId: 'TXN-20260415002',
    date: '2026-04-15',
    time: '13:45:22',
    amount: 100.00,
    currency: 'MYR',
    paymentMethod: 'Touch n Go',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Siti Fatimah',
    customerEmail: 'siti.fatimah@email.com'
  },
  {
    id: 3,
    eventId: 3,
    eventName: 'Championship Final',
    venue: 'Sports Arena',
    transactionId: 'TXN-20260415003',
    date: '2026-04-15',
    time: '11:20:45',
    amount: 340.00,
    currency: 'MYR',
    paymentMethod: 'CIMB Clicks',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Mohamed Khan',
    customerEmail: 'mohamed.khan@email.com'
  },
  {
    id: 4,
    eventId: 1,
    eventName: 'Summer Music Festival 2026',
    venue: 'National Stadium',
    transactionId: 'TXN-20260414001',
    date: '2026-04-14',
    time: '16:15:33',
    amount: 120.00,
    currency: 'MYR',
    paymentMethod: 'GrabPay',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Jennifer Lee',
    customerEmail: 'jennifer.lee@email.com'
  },
  {
    id: 5,
    eventId: 5,
    eventName: 'Startup Expo 2026',
    venue: 'Convention Center',
    transactionId: 'TXN-20260414002',
    date: '2026-04-14',
    time: '09:30:18',
    amount: 180.00,
    currency: 'MYR',
    paymentMethod: 'Boost',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'David Wong',
    customerEmail: 'david.wong@email.com'
  },
  {
    id: 6,
    eventId: 6,
    eventName: 'Rock Concert',
    venue: 'National Stadium',
    transactionId: 'TXN-20260413001',
    date: '2026-04-13',
    time: '19:45:22',
    amount: 225.00,
    currency: 'MYR',
    paymentMethod: 'Visa',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Rajesh Kumar',
    customerEmail: 'rajesh.kumar@email.com'
  },
  {
    id: 7,
    eventId: 7,
    eventName: 'Business Summit',
    venue: 'National Stadium',
    transactionId: 'TXN-20260413002',
    date: '2026-04-13',
    time: '15:22:11',
    amount: 350.00,
    currency: 'MYR',
    paymentMethod: 'Mastercard',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Aisha Binti',
    customerEmail: 'aisha.binti@email.com'
  },
  {
    id: 8,
    eventId: 4,
    eventName: 'Jazz Night',
    venue: 'City Jazz Club',
    transactionId: 'TXN-20260412001',
    date: '2026-04-12',
    time: '20:15:45',
    amount: 35.00,
    currency: 'MYR',
    paymentMethod: 'Atome',
    platform: 'RentasPay',
    status: 'pending',
    customerName: 'Chong Wei Ling',
    customerEmail: 'chong.weiling@email.com'
  },
  {
    id: 9,
    eventId: 9,
    eventName: 'Food Festival',
    venue: 'Central Park',
    transactionId: 'TXN-20260411001',
    date: '2026-04-11',
    time: '12:45:33',
    amount: 60.00,
    currency: 'MYR',
    paymentMethod: 'ShopeePay',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Fatimah Zahra',
    customerEmail: 'fatimah.zahra@email.com'
  },
  {
    id: 10,
    eventId: 10,
    eventName: 'Kids Fun Fair',
    venue: 'Family Park',
    transactionId: 'TXN-20260411002',
    date: '2026-04-11',
    time: '18:30:28',
    amount: 30.00,
    currency: 'MYR',
    paymentMethod: 'Hong Leong Bank',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Nurul Islam',
    customerEmail: 'nurul.islam@email.com'
  },
  {
    id: 11,
    eventId: 11,
    eventName: 'Art Exhibition',
    venue: 'Art Gallery KL',
    transactionId: 'TXN-20260410001',
    date: '2026-04-10',
    time: '17:00:15',
    amount: 20.00,
    currency: 'MYR',
    paymentMethod: 'Public Bank',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Ahmad Bin Ali',
    customerEmail: 'ahmad.ali.2@email.com'
  },
  {
    id: 12,
    eventId: 8,
    eventName: 'Comedy Show',
    venue: 'Comedy Central',
    transactionId: 'TXN-20260410002',
    date: '2026-04-09',
    time: '21:00:18',
    amount: 110.00,
    currency: 'MYR',
    paymentMethod: 'GrabPay',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Sarah Ahmad',
    customerEmail: 'sarah.ahmad@email.com'
  },
  {
    id: 13,
    eventId: 12,
    eventName: 'Charity Gala',
    venue: 'National Stadium',
    transactionId: 'TXN-20260409001',
    date: '2026-04-08',
    time: '10:30:22',
    amount: 85.00,
    currency: 'MYR',
    paymentMethod: 'Touch n Go',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Jennifer Lee',
    customerEmail: 'jennifer.lee@email.com'
  },
  {
    id: 14,
    eventId: 6,
    eventName: 'Rock Concert',
    venue: 'National Stadium',
    transactionId: 'TXN-20260409002',
    date: '2026-04-07',
    time: '14:15:33',
    amount: 75.00,
    currency: 'MYR',
    paymentMethod: 'GrabPay',
    platform: 'RentasPay',
    status: 'failed',
    customerName: 'Michael Tan',
    customerEmail: 'michael.tan@email.com'
  },
  {
    id: 15,
    eventId: 2,
    eventName: 'Tech Conference 2026',
    venue: 'Convention Center',
    transactionId: 'TXN-20260408001',
    date: '2026-04-05',
    time: '16:45:11',
    amount: 250.00,
    currency: 'MYR',
    paymentMethod: 'RHB Bank',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Fatimah Zahra',
    customerEmail: 'fatimah.zahra@email.com'
  },
  {
    id: 16,
    eventId: 4,
    eventName: 'Jazz Night',
    venue: 'City Jazz Club',
    transactionId: 'TXN20260408002',
    date: '2026-04-04',
    time: '13:30:00',
    amount: 35.00,
    currency: 'MYR',
    paymentMethod: 'Atome',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'David Wong',
    customerEmail: 'david.wong@email.com'
  },
  {
    id: 17,
    eventId: 9,
    eventName: 'Food Festival',
    venue: 'Central Park',
    transactionId: 'TXN20260407001',
    date: '2026-04-03',
    time: '11:15:44',
    amount: 15.00,
    currency: 'MYR',
    paymentMethod: 'Boost',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Rajesh Kumar',
    customerEmail: 'rajesh.kumar@email.com'
  },
  {
    id: 18,
    eventId: 10,
    eventName: 'Kids Fun Fair',
    venue: 'Family Park',
    transactionId: 'TXN20260407002',
    date: '2026-04-02',
    time: '15:00:22',
    amount: 30.00,
    currency: 'MYR',
    paymentMethod: 'Maybank2U',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Siti Fatimah',
    customerEmail: 'siti.fatimah@email.com'
  },
  {
    id: 19,
    eventId: 11,
    eventName: 'Art Exhibition',
    venue: 'Art Gallery KL',
    transactionId: 'TXN-20260406001',
    date: '2026-04-01',
    time: '09:45:33',
    amount: 20.00,
    currency: 'MYR',
    paymentMethod: 'CIMB Clicks',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Chong Wei Ling',
    customerEmail: 'chong.weiling@email.com'
  },
  {
    id: 20,
    eventId: 1,
    eventName: 'Summer Music Festival 2026',
    venue: 'National Stadium',
    transactionId: 'TXN20260405501',
    date: '2026-03-31',
    time: '18:30:12',
    amount: 120.00,
    currency: 'MYR',
    paymentMethod: 'Visa',
    platform: 'RentasPay',
    status: 'completed',
    customerName: 'Ahmad Bin Ali',
    customerEmail: 'ahmad.ali@email.com'
  }
];

export default function Payments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending' | 'failed'>('all');
  const [methodFilter, setMethodFilter] = useState<'all' | 'online' | 'ewallet' | 'card'>('all');
  const [venueFilter, setVenueFilter] = useState('all');
  const [eventFilter, setEventFilter] = useState('all');
  const [showExportMessage, setShowExportMessage] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<typeof mockPayments[0] | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);

  const venues = Array.from(new Set(mockPayments.map(p => p.venue)));
  const events = Array.from(new Set(mockPayments.map(p => ({ id: p.eventId, name: p.eventName }))));

  const filteredPayments = mockPayments.filter(payment => {
    const matchesSearch = searchQuery === '' ||
      payment.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;

    const matchesMethod = methodFilter === 'all' ||
      (methodFilter === 'online' && ['Maybank2U', 'CIMB Clicks', 'Hong Leong Bank'].includes(payment.paymentMethod)) ||
      (methodFilter === 'ewallet' && ['Touch n Go', 'GrabPay', 'Boost', 'ShopeePay'].includes(payment.paymentMethod)) ||
      (methodFilter === 'card' && ['Visa', 'Mastercard', 'Atome'].includes(payment.paymentMethod));

    const matchesVenue = venueFilter === 'all' || payment.venue === venueFilter;
    const matchesEvent = eventFilter === 'all' || payment.eventId.toString() === eventFilter;

    return matchesSearch && matchesStatus && matchesMethod && matchesVenue && matchesEvent;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      failed: 'bg-red-100 text-red-700'
    };
    const labels = {
      completed: 'Completed',
      pending: 'Pending',
      failed: 'Failed'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const totalRevenue = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0);
  const completedPayments = filteredPayments.filter(p => p.status === 'completed').length;

  const handleExport = () => {
    // Simulate export functionality
    setShowExportMessage(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowExportMessage(false);
    }, 3000);
  };

  const handleViewDetails = (payment: typeof mockPayments[0]) => {
    setSelectedPayment(payment);
    setShowDetailsModal(true);
  };

  const handleRefund = (payment: typeof mockPayments[0]) => {
    setSelectedPayment(payment);
    setShowRefundModal(true);
  };

  const handleResend = (payment: typeof mockPayments[0]) => {
    alert(`Downloaded receipt for transaction ${payment.transactionId}`);
  };

  return (
    <DashboardLayout title="Payments">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Revenue</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                RM {totalRevenue.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Completed Transactions</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {completedPayments}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Pending Transactions</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                {filteredPayments.filter(p => p.status === 'pending').length}
              </div>
            </div>
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
                placeholder="Search by event, customer, or transaction ID..."
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
              {events.map(event => (
                <option key={event.id} value={event.id.toString()}>{event.name}</option>
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
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Methods</option>
              <option value="online">Online Banking</option>
              <option value="ewallet">eWallets</option>
              <option value="card">Credit Cards</option>
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
                setMethodFilter('all');
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

        {/* Results Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>
            {filteredPayments.length} {filteredPayments.length === 1 ? 'Transaction' : 'Transactions'}
          </h2>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white transition-colors"
            style={{ backgroundColor: '#273480' }}
          >
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>

        {/* Transactions Table */}
        {filteredPayments.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No transactions found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Transaction ID</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Event</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Date & Time</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Payment Method</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Platform</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.map((payment) => (
                    <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: '#273480' }}>
                        {payment.transactionId}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="font-medium">{payment.eventName}</div>
                        <div className="text-xs text-gray-500">{payment.customerEmail}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="font-medium">{payment.customerName}</div>
                        <div className="text-xs text-gray-500">{payment.customerEmail}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div>{payment.date}</div>
                        <div className="text-xs text-gray-500">{payment.time}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">{payment.paymentMethod}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E11A27', color: 'white' }}>
                          {payment.platform}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold" style={{ color: '#273480' }}>
                        RM {payment.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {getStatusBadge(payment.status)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(payment)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleRefund(payment)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-red-500"
                            title="Process Refund"
                            disabled={payment.status !== 'completed'}
                          >
                            <CreditCard className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleResend(payment)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-blue-500"
                            title="Resend Receipt"
                          >
                            <Download className="w-4 h-4" />
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

        {/* Export Success Message */}
        {showExportMessage && (
          <div className="fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in z-50">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Payment Report Exported!</div>
              <div className="text-sm">Your payment data has been successfully exported</div>
            </div>
          </div>
        )}

        {/* View Details Modal */}
        {showDetailsModal && selectedPayment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Transaction Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {/* Transaction Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3" style={{ color: '#273480' }}>Transaction Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Transaction ID</div>
                        <div className="font-mono font-medium">{selectedPayment.transactionId}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Status</div>
                        <div>{getStatusBadge(selectedPayment.status)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Date & Time</div>
                        <div className="font-medium">{selectedPayment.date} at {selectedPayment.time}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Platform</div>
                        <div className="font-medium">{selectedPayment.platform}</div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3" style={{ color: '#273480' }}>Payment Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Amount</div>
                        <div className="text-xl font-bold" style={{ color: '#273480' }}>RM {selectedPayment.amount.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Payment Method</div>
                        <div className="font-medium">{selectedPayment.paymentMethod}</div>
                      </div>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3" style={{ color: '#273480' }}>Event Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Event</div>
                        <div className="font-medium">{selectedPayment.eventName}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Venue</div>
                        <div className="font-medium">{selectedPayment.venue}</div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3" style={{ color: '#273480' }}>Customer Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Name</div>
                        <div className="font-medium">{selectedPayment.customerName}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-medium">{selectedPayment.customerEmail}</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <button
                      onClick={() => {
                        setShowDetailsModal(false);
                        handleRefund(selectedPayment);
                      }}
                      className="flex-1 px-4 py-3 rounded-lg text-white transition-colors"
                      style={{ backgroundColor: '#E11A27' }}
                      disabled={selectedPayment.status !== 'completed'}
                    >
                      Process Refund
                    </button>
                    <button
                      onClick={() => {
                        setShowDetailsModal(false);
                        handleResend(selectedPayment);
                      }}
                      className="flex-1 px-4 py-3 rounded-lg border-2 transition-colors"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      Resend Receipt
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

        {/* Refund Confirmation Modal */}
        {showRefundModal && selectedPayment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fee2e2' }}>
                    <CreditCard className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-1" style={{ color: '#273480' }}>Process Refund?</h2>
                    <p className="text-gray-600 text-sm">
                      Are you sure you want to refund RM {selectedPayment.amount.toFixed(2)} to {selectedPayment.customerName}?
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Transaction ID</div>
                      <div className="font-medium font-mono">{selectedPayment.transactionId}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Event</div>
                      <div className="font-medium">{selectedPayment.eventName}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowRefundModal(false)}
                    className="flex-1 px-4 py-3 rounded-lg border-2 transition-colors"
                    style={{ borderColor: '#273480', color: '#273480' }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert(`Refund processed for transaction ${selectedPayment.transactionId}`);
                      setShowRefundModal(false);
                    }}
                    className="flex-1 px-4 py-3 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: '#E11A27' }}
                  >
                    Process Refund
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}