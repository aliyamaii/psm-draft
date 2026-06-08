import AdminLayout from './AdminLayout';
import { Users, Calendar, DollarSign, Search, Filter, MoreVertical, Shield, Ban, Check } from 'lucide-react';
import { useState } from 'react';

export default function UsersManagement() {
  const [activeTab, setActiveTab] = useState<'organizers' | 'buyers'>('organizers');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'suspended'>('all');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Mock organizers data
  const mockOrganizers = [
    {
      id: 'org-1',
      name: 'Event Organizer',
      email: 'organizer@test.com',
      phone: '+60123456789',
      location: 'Kuala Lumpur',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-01-15',
      lastLogin: '2026-04-21T09:30:00Z',
      eventsCreated: 12,
      eventsApproved: 8,
      eventsPending: 2,
      eventsRejected: 2,
      totalRevenue: 427150,
      totalTicketsSold: 1543,
      averageRating: 4.5,
      totalReviews: 23
    },
    {
      id: 'org-2',
      name: 'Second Event Organizer',
      email: 'organizer2@test.com',
      phone: '+60198765432',
      location: 'Penang',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-02-20',
      lastLogin: '2026-04-20T14:15:00Z',
      eventsCreated: 8,
      eventsApproved: 6,
      eventsPending: 1,
      eventsRejected: 1,
      totalRevenue: 215600,
      totalTicketsSold: 892,
      averageRating: 4.2,
      totalReviews: 15
    },
    {
      id: 'org-3',
      name: 'Tech Innovator',
      email: 'tech@innovator.com',
      phone: '+60123456789',
      location: 'Kuala Lumpur',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-01-28',
      lastLogin: '2026-04-21T07:45:00Z',
      eventsCreated: 15,
      eventsApproved: 12,
      eventsPending: 2,
      eventsRejected: 1,
      totalRevenue: 892450,
      totalTicketsSold: 3245,
      averageRating: 4.8,
      totalReviews: 45
    },
    {
      id: 'org-4',
      name: 'Sports Manager',
      email: 'sports@manager.com',
      phone: '+60173456789',
      location: 'Johor Bahru',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-03-05',
      lastLogin: '2026-04-19T16:20:00Z',
      eventsCreated: 6,
      eventsApproved: 4,
      eventsPending: 1,
      eventsRejected: 1,
      totalRevenue: 156780,
      totalTicketsSold: 678,
      averageRating: 4.0,
      totalReviews: 8
    },
    {
      id: 'org-5',
      name: 'Third Event Organizer',
      email: 'organizer3@test.com',
      phone: '+60164567890',
      location: 'Selangor',
      type: 'organizer',
      status: 'suspended',
      createdAt: '2026-03-10',
      lastLogin: '2026-04-15T08:45:00Z',
      eventsCreated: 5,
      eventsApproved: 2,
      eventsPending: 0,
      eventsRejected: 3,
      totalRevenue: 89400,
      totalTicketsSold: 345,
      averageRating: 3.2,
      totalReviews: 5
    },
    {
      id: 'org-6',
      name: 'Art Curator',
      email: 'art@curator.com',
      phone: '+60126789012',
      location: 'Kuala Lumpur',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-02-14',
      lastLogin: '2026-04-20T11:30:00Z',
      eventsCreated: 9,
      eventsApproved: 7,
      eventsPending: 1,
      eventsRejected: 1,
      totalRevenue: 178230,
      totalTicketsSold: 892,
      averageRating: 4.6,
      totalReviews: 19
    },
    {
      id: 'org-7',
      name: 'Game Master',
      email: 'gaming@master.com',
      phone: '+60198765433',
      location: 'Penang',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-01-20',
      lastLogin: '2026-04-21T08:15:00Z',
      eventsCreated: 11,
      eventsApproved: 9,
      eventsPending: 1,
      eventsRejected: 1,
      totalRevenue: 345670,
      totalTicketsSold: 1234,
      averageRating: 4.4,
      totalReviews: 27
    },
    {
      id: 'org-8',
      name: 'Music Events Co',
      email: 'music@eventsco.com',
      phone: '+60134567891',
      location: 'Selangor',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-02-28',
      lastLogin: '2026-04-18T14:50:00Z',
      eventsCreated: 7,
      eventsApproved: 5,
      eventsPending: 2,
      eventsRejected: 0,
      totalRevenue: 234560,
      totalTicketsSold: 1089,
      averageRating: 4.3,
      totalReviews: 14
    },
    {
      id: 'org-9',
      name: 'Conference Hub',
      email: 'conference@hub.com',
      phone: '+60178901234',
      location: 'Kuala Lumpur',
      type: 'organizer',
      status: 'active',
      createdAt: '2026-03-15',
      lastLogin: '2026-04-20T09:25:00Z',
      eventsCreated: 4,
      eventsApproved: 3,
      eventsPending: 1,
      eventsRejected: 0,
      totalRevenue: 98700,
      totalTicketsSold: 423,
      averageRating: 4.1,
      totalReviews: 7
    },
    {
      id: 'org-10',
      name: 'Suspended Organizer',
      email: 'suspended@org.com',
      phone: '+60123456799',
      location: 'Johor Bahru',
      type: 'organizer',
      status: 'suspended',
      createdAt: '2026-04-01',
      lastLogin: '2026-04-16T10:30:00Z',
      eventsCreated: 2,
      eventsApproved: 1,
      eventsPending: 0,
      eventsRejected: 1,
      totalRevenue: 12450,
      totalTicketsSold: 56,
      averageRating: 2.8,
      totalReviews: 3
    }
  ];

  // Mock buyers data
  const mockBuyers = [
    {
      id: 'buyer-1',
      name: 'Test Buyer',
      email: 'buyer@test.com',
      phone: '+60123456789',
      location: 'Kuala Lumpur',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-01-20',
      lastLogin: '2026-04-21T11:20:00Z',
      ticketsPurchased: 15,
      totalSpent: 1250,
      eventsAttended: 12,
      savedEvents: 8,
      favoriteCategories: ['Music & Concerts', 'Sports']
    },
    {
      id: 'buyer-2',
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+60198765432',
      location: 'Penang',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-02-15',
      lastLogin: '2026-04-20T16:30:00Z',
      ticketsPurchased: 8,
      totalSpent: 850,
      eventsAttended: 7,
      savedEvents: 5,
      favoriteCategories: ['Conference']
    },
    {
      id: 'buyer-3',
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+60134567891',
      location: 'Selangor',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-03-05',
      lastLogin: '2026-04-19T10:00:00Z',
      ticketsPurchased: 22,
      totalSpent: 2100,
      eventsAttended: 18,
      savedEvents: 12,
      favoriteCategories: ['Food', 'Music & Concerts', 'Art']
    },
    {
      id: 'buyer-4',
      name: 'Suspended Buyer',
      email: 'suspended@example.com',
      phone: '+60123456788',
      location: 'Johor Bahru',
      type: 'buyer',
      status: 'suspended',
      createdAt: '2026-04-01',
      lastLogin: '2026-04-18T14:45:00Z',
      ticketsPurchased: 3,
      totalSpent: 150,
      eventsAttended: 2,
      savedEvents: 1,
      favoriteCategories: ['Sports']
    },
    {
      id: 'buyer-5',
      name: 'Michael Johnson',
      email: 'michael.j@example.com',
      phone: '+60134567892',
      location: 'Kuala Lumpur',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-01-25',
      lastLogin: '2026-04-21T08:30:00Z',
      ticketsPurchased: 28,
      totalSpent: 3450,
      eventsAttended: 24,
      savedEvents: 15,
      favoriteCategories: ['Sports', 'Music & Concerts']
    },
    {
      id: 'buyer-6',
      name: 'Emily Chen',
      email: 'emily.chen@example.com',
      phone: '+60198765433',
      location: 'Penang',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-02-08',
      lastLogin: '2026-04-20T19:15:00Z',
      ticketsPurchased: 12,
      totalSpent: 980,
      eventsAttended: 10,
      savedEvents: 6,
      favoriteCategories: ['Conference', 'Art']
    },
    {
      id: 'buyer-7',
      name: 'David Wilson',
      email: 'david.w@example.com',
      phone: '+60123456785',
      location: 'Selangor',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-03-12',
      lastLogin: '2026-04-19T14:20:00Z',
      ticketsPurchased: 18,
      totalSpent: 1650,
      eventsAttended: 15,
      savedEvents: 9,
      favoriteCategories: ['Food', 'Music & Concerts']
    },
    {
      id: 'buyer-8',
      name: 'Sarah Martinez',
      email: 'sarah.m@example.com',
      phone: '+60173456788',
      location: 'Johor Bahru',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-01-18',
      lastLogin: '2026-04-21T10:45:00Z',
      ticketsPurchased: 35,
      totalSpent: 4200,
      eventsAttended: 30,
      savedEvents: 18,
      favoriteCategories: ['Sports', 'Conference', 'Music & Concerts']
    },
    {
      id: 'buyer-9',
      name: 'Robert Taylor',
      email: 'robert.t@example.com',
      phone: '+60134567893',
      location: 'Kuala Lumpur',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-02-22',
      lastLogin: '2026-04-18T16:50:00Z',
      ticketsPurchased: 6,
      totalSpent: 450,
      eventsAttended: 5,
      savedEvents: 3,
      favoriteCategories: ['Art']
    },
    {
      id: 'buyer-10',
      name: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      phone: '+60198765434',
      location: 'Penang',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-03-20',
      lastLogin: '2026-04-20T11:10:00Z',
      ticketsPurchased: 14,
      totalSpent: 1280,
      eventsAttended: 12,
      savedEvents: 7,
      favoriteCategories: ['Food', 'Conference']
    },
    {
      id: 'buyer-11',
      name: 'James Thomas',
      email: 'james.t@example.com',
      phone: '+60123456786',
      location: 'Selangor',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-01-30',
      lastLogin: '2026-04-19T09:25:00Z',
      ticketsPurchased: 21,
      totalSpent: 1890,
      eventsAttended: 17,
      savedEvents: 11,
      favoriteCategories: ['Music & Concerts', 'Sports']
    },
    {
      id: 'buyer-12',
      name: 'Amanda White',
      email: 'amanda.w@example.com',
      phone: '+60173456789',
      location: 'Kuala Lumpur',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-02-25',
      lastLogin: '2026-04-21T13:40:00Z',
      ticketsPurchased: 9,
      totalSpent: 720,
      eventsAttended: 8,
      savedEvents: 4,
      favoriteCategories: ['Art', 'Food']
    },
    {
      id: 'buyer-13',
      name: 'Chris Harris',
      email: 'chris.h@example.com',
      phone: '+60134567894',
      location: 'Penang',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-03-08',
      lastLogin: '2026-04-20T15:55:00Z',
      ticketsPurchased: 17,
      totalSpent: 1560,
      eventsAttended: 14,
      savedEvents: 8,
      favoriteCategories: ['Conference', 'Sports']
    },
    {
      id: 'buyer-14',
      name: 'Inactive Buyer',
      email: 'inactive@example.com',
      phone: '+60123456787',
      location: 'Johor Bahru',
      type: 'buyer',
      status: 'suspended',
      createdAt: '2026-03-25',
      lastLogin: '2026-04-10T10:00:00Z',
      ticketsPurchased: 1,
      totalSpent: 50,
      eventsAttended: 0,
      savedEvents: 2,
      favoriteCategories: ['Food']
    },
    {
      id: 'buyer-15',
      name: 'Jessica Brown',
      email: 'jessica.b@example.com',
      phone: '+60198765435',
      location: 'Selangor',
      type: 'buyer',
      status: 'active',
      createdAt: '2026-01-12',
      lastLogin: '2026-04-19T12:30:00Z',
      ticketsPurchased: 33,
      totalSpent: 3890,
      eventsAttended: 28,
      savedEvents: 16,
      favoriteCategories: ['Music & Concerts', 'Art', 'Conference']
    }
  ];

  const handleToggleStatus = (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'suspended' : 'active';
    const action = newStatus === 'suspended' ? 'suspended' : 'activated';
    alert(`User ${userId} has been ${action}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR'
    }).format(amount);
  };

  return (
    <AdminLayout title="Users Management">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#273480' }}>
            Users Management
          </h2>
          <p className="text-gray-600">
            Manage organizer and buyer accounts, view statistics, and control access
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mt-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('organizers')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'organizers'
                  ? 'border-b-2 border-[#273480] text-[#273480]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Organizers ({mockOrganizers.length})
            </button>
            <button
              onClick={() => setActiveTab('buyers')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'buyers'
                  ? 'border-b-2 border-[#273480] text-[#273480]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Buyers ({mockBuyers.length})
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab} by name, email...`}
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
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users List */}
        <div className="bg-white rounded-xl border border-gray-200">
          {/* Organizers Table */}
          {activeTab === 'organizers' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Organizer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Events</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockOrganizers.map((organizer) => (
                    <tr key={organizer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{organizer.name}</div>
                          <div className="text-sm text-gray-500">{organizer.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="text-sm">
                            <div className="font-medium">{organizer.eventsCreated} total</div>
                            <div className="text-gray-500">{organizer.eventsApproved} approved</div>
                          </div>
                          <div className="flex gap-1">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                              {organizer.eventsApproved}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                              {organizer.eventsPending}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">
                              {organizer.eventsRejected}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium">{formatCurrency(organizer.totalRevenue)}</div>
                          <div className="text-gray-500">{organizer.totalTicketsSold} tickets sold</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            organizer.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {organizer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(organizer.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedUser(organizer)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            title="View Details"
                          >
                            <Users className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => handleToggleStatus(organizer.id, organizer.status)}
                            className={`p-2 rounded-lg ${
                              organizer.status === 'active'
                                ? 'hover:bg-red-100 text-red-600'
                                : 'hover:bg-green-100 text-green-600'
                            }`}
                            title={organizer.status === 'active' ? 'Suspend' : 'Activate'}
                          >
                            {organizer.status === 'active' ? (
                              <Ban className="w-4 h-4" />
                            ) : (
                              <Check className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Buyers Table */}
          {activeTab === 'buyers' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tickets</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Spending</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockBuyers.map((buyer) => (
                    <tr key={buyer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{buyer.name}</div>
                          <div className="text-sm text-gray-500">{buyer.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium">{buyer.ticketsPurchased} purchased</div>
                          <div className="text-gray-500">{buyer.eventsAttended} attended</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium">{formatCurrency(buyer.totalSpent)}</div>
                          <div className="text-gray-500">{buyer.savedEvents} saved events</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            buyer.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {buyer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(buyer.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedUser(buyer)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            title="View Details"
                          >
                            <Users className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => handleToggleStatus(buyer.id, buyer.status)}
                            className={`p-2 rounded-lg ${
                              buyer.status === 'active'
                                ? 'hover:bg-red-100 text-red-600'
                                : 'hover:bg-green-100 text-green-600'
                            }`}
                            title={buyer.status === 'active' ? 'Suspend' : 'Activate'}
                          >
                            {buyer.status === 'active' ? (
                              <Ban className="w-4 h-4" />
                            ) : (
                              <Check className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* User Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                        {selectedUser.name}
                      </h3>
                      <p className="text-sm text-gray-500">{selectedUser.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500">Account Type</p>
                    <p className="font-semibold capitalize">{selectedUser.type}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500">Status</p>
                    <p className={`font-semibold capitalize ${
                      selectedUser.status === 'active' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {selectedUser.status}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500">Joined</p>
                    <p className="font-semibold">{formatDate(selectedUser.createdAt)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500">Last Login</p>
                    <p className="font-semibold">{formatDate(selectedUser.lastLogin)}</p>
                  </div>
                  {selectedUser.phone && (
                    <div className="p-4 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold">{selectedUser.phone}</p>
                    </div>
                  )}
                  {selectedUser.location && (
                    <div className="p-4 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">{selectedUser.location}</p>
                    </div>
                  )}
                </div>

                {selectedUser.type === 'organizer' && selectedUser.averageRating && (
                  <div className="mb-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-yellow-700">Average Rating</p>
                        <p className="text-3xl font-bold text-yellow-800">{selectedUser.averageRating.toFixed(1)}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-yellow-700">Based on {selectedUser.totalReviews} reviews</p>
                        <div className="flex mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`text-lg ${
                                star <= Math.round(selectedUser.averageRating)
                                  ? 'text-yellow-500'
                                  : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedUser.type === 'buyer' && selectedUser.favoriteCategories && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Favorite Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedUser.favoriteCategories.map((category: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ backgroundColor: '#E0E7FF', color: '#3730A3' }}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedUser.type === 'organizer' ? (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Event Statistics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">Events Created</p>
                        <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                          {selectedUser.eventsCreated}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">Revenue</p>
                        <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                          {formatCurrency(selectedUser.totalRevenue)}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-green-200 bg-green-50">
                        <p className="text-sm text-green-700">Approved</p>
                        <p className="text-2xl font-bold text-green-700">
                          {selectedUser.eventsApproved}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-yellow-200 bg-yellow-50">
                        <p className="text-sm text-yellow-700">Pending</p>
                        <p className="text-2xl font-bold text-yellow-700">
                          {selectedUser.eventsPending}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Purchase Statistics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">Tickets Purchased</p>
                        <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                          {selectedUser.ticketsPurchased}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">Total Spent</p>
                        <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                          {formatCurrency(selectedUser.totalSpent)}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">Events Attended</p>
                        <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                          {selectedUser.eventsAttended}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">Saved Events</p>
                        <p className="text-2xl font-bold" style={{ color: '#273480' }}>
                          {selectedUser.savedEvents}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => handleToggleStatus(selectedUser.id, selectedUser.status)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedUser.status === 'active'
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {selectedUser.status === 'active' ? 'Suspend Account' : 'Activate Account'}
                </button>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}