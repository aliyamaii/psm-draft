import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Download, Search, TrendingUp, Calendar,
  CreditCard, Wallet, Smartphone, XCircle, CheckCircle,
  Filter, MoreVertical, ArrowUpDown, FileDown
} from 'lucide-react';

const mockTransactions = [
  {
    id: 'TXN-001',
    created: '2026-04-16 10:00:15',
    status: 'successful',
    name: 'John Doe',
    email: 'john@example.com',
    event: 'Summer Music Festival 2026',
    tickets: 2,
    amount: 120.00,
    orderNumber: 'ORD-22148',
    paymentMethod: 'online_banking'
  },
  {
    id: 'TXN-002',
    created: '2026-04-16 09:30:45',
    status: 'successful',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    event: 'Tech Conference 2026',
    tickets: 1,
    amount: 250.00,
    orderNumber: 'ORD-22152',
    paymentMethod: 'credit_card'
  },
  {
    id: 'TXN-003',
    created: '2026-04-15 14:25:30',
    status: 'cancelled',
    name: 'Mike Chen',
    email: 'mike@example.com',
    event: 'Summer Music Festival 2026',
    tickets: 4,
    amount: 200.00,
    orderNumber: 'ORD-22105',
    paymentMethod: 'ewallet'
  },
  {
    id: 'TXN-004',
    created: '2026-04-15 11:10:22',
    status: 'failed',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    event: 'Championship Final',
    tickets: 2,
    amount: 160.00,
    orderNumber: 'ORD-22101',
    paymentMethod: 'online_banking'
  },
  {
    id: 'TXN-005',
    created: '2026-04-14 16:45:10',
    status: 'successful',
    name: 'David Lee',
    email: 'david@example.com',
    event: 'Summer Music Festival 2026',
    tickets: 3,
    amount: 150.00,
    orderNumber: 'ORD-21995',
    paymentMethod: 'qr_code'
  },
  {
    id: 'TXN-006',
    created: '2026-04-14 08:20:33',
    status: 'successful',
    name: 'Lisa Anderson',
    email: 'lisa@example.com',
    event: 'Tech Conference 2026',
    tickets: 1,
    amount: 100.00,
    orderNumber: 'ORD-21980',
    paymentMethod: 'credit_card'
  },
  {
    id: 'TXN-007',
    created: '2026-04-13 15:55:12',
    status: 'cancelled',
    name: 'Robert Taylor',
    email: 'robert@example.com',
    event: 'Summer Music Festival 2026',
    tickets: 2,
    amount: 100.00,
    orderNumber: 'ORD-21965',
    paymentMethod: 'online_banking'
  },
  {
    id: 'TXN-008',
    created: '2026-04-13 12:30:48',
    status: 'successful',
    name: 'Maria Garcia',
    email: 'maria@example.com',
    event: 'Championship Final',
    tickets: 5,
    amount: 400.00,
    orderNumber: 'ORD-21952',
    paymentMethod: 'ewallet'
  }
];

// Revenue breakdown by payment method
const paymentMethodStats = {
  online_banking: { count: 3, amount: 380.00, label: 'Online Banking', icon: Wallet },
  credit_card: { count: 2, amount: 350.00, label: 'Credit Card', icon: CreditCard },
  ewallet: { count: 2, amount: 250.00, label: 'eWallet', icon: Smartphone },
  qr_code: { count: 1, amount: 150.00, label: 'QR Code', icon: Smartphone }
};

export default function Transactions() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [exportOption, setExportOption] = useState('csv');
  const [showExportMessage, setShowExportMessage] = useState(false);

  // Transaction calculations
  const totalTransactions = mockTransactions.length;
  const successfulTransactions = mockTransactions.filter(t => t.status === 'successful');
  const successfulAmount = successfulTransactions.reduce((sum, t) => sum + t.amount, 0);
  const failedTransactions = mockTransactions.filter(t => t.status === 'failed' || t.status === 'cancelled');
  const failedAmount = failedTransactions.reduce((sum, t) => sum + t.amount, 0);
  const successRate = ((successfulTransactions.length / totalTransactions) * 100).toFixed(1);

  const filteredTransactions = mockTransactions.filter(t => {
    const matchesFilter = activeFilter === 'all' || t.status === activeFilter;
    const matchesSearch = searchQuery === '' ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.event.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleExport = (format: string) => {
    // Show export message
    setShowExportMessage(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowExportMessage(false);
    }, 3000);
  };

  // Payment method icon component
  const PaymentMethodIcon = ({ method }: { method: string }) => {
    const stat = paymentMethodStats[method as keyof typeof paymentMethodStats];
    const Icon = stat?.icon || CreditCard;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#273480' }} />
            <span className="font-semibold" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link to="/transactions" className="text-gray-600 hover:text-gray-900 font-medium" style={{ color: '#273480' }}>Transactions</Link>
            <Link to="/profile" className="w-8 h-8 rounded-full flex items-center justify-center hover:ring-2 hover:ring-[#273480] hover:ring-offset-2 transition-all" style={{ backgroundColor: '#273480' }}>
              <span className="text-white text-sm">JD</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Transactions</h1>
            <p className="text-gray-600">View and manage all your ticket sales</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/drafts"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              <FileText className="w-4 h-4" />
              View Drafts
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleExport('csv')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                CSV
              </button>
              <button
                onClick={() => handleExport('pdf')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#273480] text-white hover:opacity-90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export PDF
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+12.5%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold" style={{ color: '#273480' }}>{totalTransactions}</div>
            <div className="text-sm text-gray-600">Total Transactions</div>
            <div className="text-xs text-gray-500 mt-1">{successRate}% success rate</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+8.3%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold text-green-600">RM {successfulAmount.toFixed(2)}</div>
            <div className="text-sm text-gray-600">Successful Amount</div>
            <div className="text-xs text-gray-500 mt-1">{successfulTransactions.length} successful payments</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EF4444' }}>
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-red-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>-2.1%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold text-red-600">RM {failedAmount.toFixed(2)}</div>
            <div className="text-sm text-gray-600">Failed Amount</div>
            <div className="text-xs text-gray-500 mt-1">{failedTransactions.length} failed payments</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A04292' }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+15.7%</span>
              </div>
            </div>
            <div className="text-3xl mb-1 font-semibold" style={{ color: '#273480' }}>
              RM {(successfulAmount / successfulTransactions.length).toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Avg. Transaction</div>
            <div className="text-xs text-gray-500 mt-1">Per successful order</div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showAdvancedFilters && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Advanced Filters</h3>
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <XCircle className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Date Range</label>
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="date"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Payment Method</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]">
                  <option value="all">All Methods</option>
                  <option value="online_banking">Online Banking</option>
                  <option value="credit_card">Credit Card</option>
                  <option value="ewallet">eWallet</option>
                  <option value="qr_code">QR Code</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Amount Range</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-4">
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="px-4 py-2 rounded-lg bg-[#273480] text-white text-sm hover:opacity-90 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Transaction Breakdown Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Revenue by Payment Method</h3>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(paymentMethodStats).map(([key, stat]) => (
                <div key={key} className="text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-lg font-semibold" style={{ color: '#273480' }}>RM {stat.amount.toFixed(0)}</div>
                  <div className="text-xs text-gray-500">{stat.count} transactions</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Transaction Trend</h3>
            <div className="h-48 flex items-end gap-2 justify-between">
              {[40, 65, 45, 78, 52, 89, 67, 92, 58, 73].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-lg transition-all hover:opacity-80 relative group"
                  style={{
                    backgroundColor: '#273480',
                    height: `${height}%`
                  }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    RM {height * 10}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>
        </div>

        {/* Main Filters and Search */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* Transaction Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeFilter === 'all'
                        ? 'bg-[#273480] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  All ({totalTransactions})
                </button>
                <button
                    onClick={() => setActiveFilter('successful')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeFilter === 'successful'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Successful ({successfulTransactions.length})
                </button>
                <button
                    onClick={() => setActiveFilter('failed')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeFilter === 'failed'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Failed ({mockTransactions.filter(t => t.status === 'failed').length})
                </button>
                <button
                    onClick={() => setActiveFilter('cancelled')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeFilter === 'cancelled'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Cancelled ({mockTransactions.filter(t => t.status === 'cancelled').length})
                </button>
              </div>

              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by customer, email, event, or order number..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                    <button className="flex items-center gap-1 hover:text-gray-900">
                      Created <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Tickets</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Order Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Payment Method</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600">Amount</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-6 py-12 text-center text-gray-500">
                      No transactions found matching your criteria
                    </td>
                  </tr>
                ) : (
                  filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600">{transaction.created}</td>
                      <td className="px-6 py-4">
                        <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              transaction.status === 'successful'
                                ? 'bg-green-100 text-green-700'
                                : transaction.status === 'cancelled'
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm" style={{ color: '#273480' }}>{transaction.name}</div>
                        <div className="text-xs text-gray-500">{transaction.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{transaction.event}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{transaction.tickets}x</td>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: '#273480' }}>
                        {transaction.orderNumber}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <PaymentMethodIcon method={transaction.paymentMethod} />
                          <span className="text-sm text-gray-600">
                            {paymentMethodStats[transaction.paymentMethod as keyof typeof paymentMethodStats]?.label || 'Unknown'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-sm font-semibold" style={{ color: '#273480' }}>
                          RM {transaction.amount.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Enhanced Pagination Footer */}
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {filteredTransactions.length} of {totalTransactions} transactions
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
                Previous
              </button>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1 rounded bg-[#273480] text-white text-sm">1</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-50">4</button>
              </div>
              <button className="px-3 py-1 rounded border border-gray-300 text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Export Success Message */}
        {showExportMessage && (
          <div className="fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in z-50">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Transactions Exported!</div>
              <div className="text-sm">Your transaction data has been successfully exported</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}