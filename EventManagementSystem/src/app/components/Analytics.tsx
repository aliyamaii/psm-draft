import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Eye, Calendar, ChevronDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardLayout from './DashboardLayout';

const events = [
  { id: 1, name: 'Summer Music Festival 2026', date: '2026-07-15', venue: 'National Stadium' },
  { id: 2, name: 'Tech Conference 2026', date: '2026-05-20', venue: 'Convention Center' },
  { id: 3, name: 'Championship Final', date: '2026-06-10', venue: 'Sports Arena' },
  { id: 4, name: 'Jazz Night Live', date: '2026-08-20', venue: 'City Jazz Club' },
  { id: 5, name: 'Gaming Convention', date: '2026-09-05', venue: 'Convention Center' },
  { id: 6, name: 'Rock Concert', date: '2026-07-28', venue: 'National Stadium' },
  { id: 7, name: 'Business Summit', date: '2026-10-15', venue: 'National Stadium' },
  { id: 8, name: 'Comedy Show', date: '2026-08-22', venue: 'Comedy Central' },
  { id: 9, name: 'Food Festival', date: '2026-10-05', venue: 'Central Park' },
  { id: 10, name: 'Charity Gala', date: '2026-09-20', venue: 'National Stadium' },
  { id: 11, name: 'Kids Fun Fair', date: '2026-09-30', venue: 'Family Park' },
  { id: 12, name: 'Art Exhibition', date: '2026-11-12', venue: 'Art Gallery KL' }
];

const salesData = [
  { date: 'Apr 1', tickets: 120, revenue: 6000 },
  { date: 'Apr 3', tickets: 250, revenue: 12500 },
  { date: 'Apr 5', tickets: 180, revenue: 9000 },
  { date: 'Apr 7', tickets: 320, revenue: 16000 },
  { date: 'Apr 9', tickets: 290, revenue: 14500 },
  { date: 'Apr 11', tickets: 410, revenue: 20500 },
  { date: 'Apr 13', tickets: 380, revenue: 19000 }
];

const tierData = [
  { name: 'General Admission', value: 4457, color: '#273480' },
  { name: 'VIP Standing', value: 2936, color: '#E11A27' },
  { name: 'Premium Seating', value: 1150, color: '#A04292' }
];

const trafficData = [
  { source: 'Direct', visits: 2450 },
  { source: 'Social Media', visits: 1890 },
  { source: 'Email', visits: 980 },
  { source: 'Search', visits: 1250 },
  { source: 'Referral', visits: 650 }
];

export default function Analytics() {
  const { id } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const eventName = selectedEvent.name;

  return (
    <DashboardLayout title="Event Analytics">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          {/* Event Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-colors bg-white"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">{eventName}</span>
              <ChevronDown className="w-5 h-5 ml-2 transition-transform" style={{
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-xl z-50">
                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-3">Select an event to view analytics:</div>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {events.map((event) => (
                      <button
                        key={event.id}
                        onClick={() => {
                          setSelectedEvent(event);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          selectedEvent.id === event.id
                            ? 'bg-[#273480] text-white'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">{event.name}</div>
                            <div className="text-xs text-gray-500">{event.venue}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+12%</span>
              </div>
            </div>
            <div className="text-2xl mb-1" style={{ color: '#273480' }}>8,543</div>
            <div className="text-sm text-gray-600">Tickets Sold</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+15%</span>
              </div>
            </div>
            <div className="text-2xl mb-1" style={{ color: '#273480' }}>RM 427,150</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A04292' }}>
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+8%</span>
              </div>
            </div>
            <div className="text-2xl mb-1" style={{ color: '#273480' }}>45,230</div>
            <div className="text-sm text-gray-600">Page Views</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <span>91 days</span>
              </div>
            </div>
            <div className="text-2xl mb-1" style={{ color: '#273480' }}>57%</div>
            <div className="text-sm text-gray-600">Capacity Filled</div>
          </div>
        </div>

        {/* Sales Trend */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl mb-6" style={{ color: '#273480' }}>Sales Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#717182" />
              <YAxis yAxisId="left" stroke="#717182" />
              <YAxis yAxisId="right" orientation="right" stroke="#717182" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="tickets"
                stroke="#273480"
                strokeWidth={2}
                name="Tickets Sold"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="#E11A27"
                strokeWidth={2}
                name="Revenue (RM)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ticket Tiers Distribution */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl mb-6" style={{ color: '#273480' }}>Ticket Tiers Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tierData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {tierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-6 space-y-3">
              {tierData.map((tier, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: tier.color }}
                    />
                    <span className="text-sm text-gray-600">{tier.name}</span>
                  </div>
                  <span className="text-sm" style={{ color: '#273480' }}>
                    {tier.value.toLocaleString()} tickets
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl mb-6" style={{ color: '#273480' }}>Traffic Sources</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="source" stroke="#717182" />
                <YAxis stroke="#717182" />
                <Tooltip />
                <Bar dataKey="visits" fill="#273480" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Metrics */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mt-8">
          <h2 className="text-xl mb-6" style={{ color: '#273480' }}>Conversion Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="text-3xl mb-2" style={{ color: '#273480' }}>18.9%</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
              <div className="text-xs text-gray-500 mt-1">Visitors to buyers</div>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="text-3xl mb-2" style={{ color: '#273480' }}>RM 50.02</div>
              <div className="text-sm text-gray-600">Average Order Value</div>
              <div className="text-xs text-gray-500 mt-1">Per transaction</div>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="text-3xl mb-2" style={{ color: '#273480' }}>2.3</div>
              <div className="text-sm text-gray-600">Avg. Tickets per Order</div>
              <div className="text-xs text-gray-500 mt-1">Per customer</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
