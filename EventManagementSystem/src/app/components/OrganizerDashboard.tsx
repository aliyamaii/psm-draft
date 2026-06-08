import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus, Calendar, Users, DollarSign, TrendingUp, MoreVertical,
  Eye, Activity, Settings, LogOut, Bell, Search, User,
  FileText, MessageSquare, Clock, CheckCircle, XCircle,
  LayoutDashboard, Calendar as CalendarIcon, CreditCard,
  Users as UsersIcon, FileText as FileTextIcon,
  Shield, Zap, BarChart3, Menu
} from 'lucide-react';
import EventCalendar from './EventCalendar';

// Mock Data
const mockEvents = [
  {
    id: 1,
    name: 'Summer Music Festival 2026',
    date: '2026-07-15',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 8543,
    capacity: 15000,
    revenue: 427150,
    status: 'active'
  },
  {
    id: 2,
    name: 'Tech Conference 2026',
    date: '2026-05-20',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 1250,
    capacity: 2000,
    revenue: 125000,
    status: 'active'
  },
  {
    id: 3,
    name: 'Championship Final',
    date: '2026-06-10',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 12000,
    capacity: 12000,
    revenue: 960000,
    status: 'sold-out'
  },
  {
    id: 4,
    name: 'Jazz Night Live',
    date: '2026-08-20',
    venue: 'City Jazz Club',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxqYXp6JTIwY29uY2VydHxlbnawfHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 234,
    capacity: 300,
    revenue: 8190,
    status: 'active'
  },
  {
    id: 5,
    name: 'Gaming Convention',
    date: '2026-09-05',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8b21lZHklMjBjbHVifGVufDB8fHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 567,
    capacity: 1000,
    revenue: 28350,
    status: 'active'
  },
  {
    id: 6,
    name: 'Rock Concert',
    date: '2026-07-28',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNnx8Y29uY2VydCUyMHBlbnZvbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 8923,
    capacity: 25000,
    revenue: 669225,
    status: 'active'
  },
  {
    id: 7,
    name: 'Business Summit',
    date: '2026-10-15',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8Y29uZmVyZW5jZSUyMHBlbnZlbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 378,
    capacity: 800,
    revenue: 113400,
    status: 'active'
  },
  {
    id: 8,
    name: 'Comedy Show',
    date: '2026-08-22',
    venue: 'Comedy Central',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjb21lZHklMjBjbHVifGVufDB8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 156,
    capacity: 200,
    revenue: 7800,
    status: 'active'
  },
  {
    id: 9,
    name: 'Food Festival',
    date: '2026-10-05',
    venue: 'Central Park',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmb29kJTIwZmVzdGl2YWx8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 2341,
    capacity: 5000,
    revenue: 35115,
    status: 'active'
  },
  {
    id: 10,
    name: 'Charity Gala',
    date: '2026-09-20',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8Y29uZmVyZW5jZSUyMHBlbnZlbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 850,
    capacity: 1000,
    revenue: 127500,
    status: 'active'
  },
  {
    id: 11,
    name: 'Kids Fun Fair',
    date: '2026-09-30',
    venue: 'Family Park',
    image: 'https://images.unsplash.com/photo-1560341347-951896e6909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHtZpZHMlMjBmdW4lMjBmYWlyfGVufDB8fHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 4567,
    capacity: 8000,
    revenue: 137010,
    status: 'active'
  },
  {
    id: 12,
    name: 'Art Exhibition',
    date: '2026-11-12',
    venue: 'Art Gallery KL',
    image: 'https://images.unsplash.com/photo-1577720643271-66f541818a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkcnQlMjBhcnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 234,
    capacity: 400,
    revenue: 4680,
    status: 'active'
  }
];

const mockActivities = [
  { id: 1, type: 'booking', message: 'New booking for Summer Music Festival', time: '2 min ago', icon: CheckCircle },
  { id: 2, type: 'payment', message: 'Payment received RM 450.00', time: '15 min ago', icon: DollarSign },
  { id: 3, type: 'registration', message: 'New registration for Tech Conference', time: '1 hour ago', icon: Users },
  { id: 4, type: 'refund', message: 'Refund processed for Order #1234', time: '3 hours ago', icon: XCircle },
  { id: 5, type: 'message', message: 'New support message received', time: '5 hours ago', icon: MessageSquare },
  { id: 6, type: 'booking', message: 'New booking for Jazz Night Live', time: '8 min ago', icon: CheckCircle },
  { id: 7, type: 'payment', message: 'Payment received RM 1,125.00', time: '25 min ago', icon: DollarSign },
  { id: 8, type: 'registration', message: 'New registration for Gaming Convention', time: '30 min ago', icon: Users },
  { id: 9, type: 'message', message: 'Ticket generated for Championship Final', time: '45 min ago', icon: MessageSquare }
];

const quickActions = [
  { id: 1, label: 'Create Event', icon: Plus, path: '/create-event', color: '#E11A27' },
  { id: 2, label: 'Payment Links', icon: CreditCard, path: '/payment-links', color: '#273480' },
  { id: 3, label: 'View Reports', icon: BarChart3, path: '/reports', color: '#A04292' },
  { id: 4, label: 'Automations', icon: Zap, path: '/automations', color: '#273480' }
];

// Navigation Items
const navItems = [
  { id: 1, label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', active: true },
  { id: 2, label: 'Events', icon: CalendarIcon, path: '/events', hasSubmenu: true },
  { id: 3, label: 'Bookings', icon: FileTextIcon, path: '/bookings', hasSubmenu: true },
  { id: 4, label: 'Payments', icon: CreditCard, path: '/payments', hasSubmenu: true },
  { id: 5, label: 'Services', icon: DollarSign, path: '/services' },
  { id: 6, label: 'Employees', icon: UsersIcon, path: '/employees' },
  { id: 7, label: 'Content', icon: FileText, path: '/protected-content' },
  { id: 8, label: 'Marketing', icon: MessageSquare, path: '/marketing', hasSubmenu: true },
  { id: 9, label: 'Analytics', icon: TrendingUp, path: '/analytics' },
  { id: 10, label: 'Reports', icon: BarChart3, path: '/reports' },
  { id: 11, label: 'Automations', icon: Zap, path: '/automations' },
  { id: 12, label: 'Settings', icon: Settings, path: '/settings' }
];

export default function OrganizerDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState('all');

  const totalRevenue = mockEvents.reduce((sum, event) => sum + event.revenue, 0);
  const totalTickets = mockEvents.reduce((sum, event) => sum + event.ticketsSold, 0);
  const activeEvents = mockEvents.filter(e => e.status === 'active').length;

  const venues = Array.from(new Set(mockEvents.map(event => event.venue)));

  // Filter events based on both venue and event selection
  let filteredEvents = mockEvents;

  if (selectedEvent !== 'all') {
    filteredEvents = filteredEvents.filter(event => event.id === parseInt(selectedEvent));
  }

  if (selectedVenue !== 'all') {
    filteredEvents = filteredEvents.filter(event => event.venue === selectedVenue);
  }

  const filteredRevenue = filteredEvents.reduce((sum, event) => sum + event.revenue, 0);
  const filteredTickets = filteredEvents.reduce((sum, event) => sum + event.ticketsSold, 0);

  // If a specific event is selected, reset venue filter and vice versa
  const handleEventChange = (value: string) => {
    setSelectedEvent(value);
    if (value !== 'all') {
      const event = mockEvents.find(e => e.id === parseInt(value));
      if (event) {
        setSelectedVenue(event.venue);
      }
    }
  };

  const handleVenueChange = (value: string) => {
    setSelectedVenue(value);
    if (value !== 'all' && selectedEvent !== 'all') {
      const event = mockEvents.find(e => e.id === parseInt(selectedEvent));
      if (event && event.venue !== value) {
        setSelectedEvent('all');
      }
    }
  };

  const calendarEvents = mockEvents.map(event => ({
    id: event.id,
    name: event.name,
    date: event.date,
    color: event.status === 'sold-out' ? '#E11A27' : '#273480'
  }));

  const handleEventClick = (event: any) => {
    navigate(`/event/${event.id}`);
  };

  const handleNavClick = (path: string) => {
    setActiveNav(path);
    navigate(path);
  };

  // Revenue Chart Component
  const RevenueChart = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium" style={{ color: '#273480' }}>Revenue Overview</h3>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480] min-w-[120px]">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="h-64 flex items-end gap-2 px-2">
        {[65, 45, 78, 52, 89, 67, 92, 58, 73, 81, 64, 76].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
            style={{
              backgroundColor: index === 11 ? '#E11A27' : '#273480',
              height: `${height}%`
            }}
            title={`Week ${index + 1}: ${height}%`}
          />
        ))}
      </div>
      <div className="flex justify-between px-2 mt-3 text-xs text-gray-600">
        <span className="flex-1 text-center">Week 1</span>
        <span className="flex-1 text-center">Week 2</span>
        <span className="flex-1 text-center">Week 3</span>
        <span className="flex-1 text-center">Week 4</span>
      </div>
    </div>
  );

  // Status Cards Component
  const StatusCards = () => {
    const filteredActiveEvents = filteredEvents.filter(e => e.status === 'active').length;
    const filteredPageViews = selectedEvent !== 'all' || selectedVenue !== 'all'
      ? Math.round(45.2 * (filteredEvents.length / mockEvents.length) * 10) / 10
      : 45.2;

    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-500 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>+12.5%</span>
            </div>
          </div>
          <div className="text-xl md:text-2xl mb-1 font-semibold" style={{ color: '#273480' }}>{filteredActiveEvents}</div>
          <div className="text-xs md:text-sm text-gray-600">Active Events</div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
              <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-500 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>+8.3%</span>
            </div>
          </div>
          <div className="text-xl md:text-2xl mb-1 font-semibold" style={{ color: '#273480' }}>{filteredTickets.toLocaleString()}</div>
          <div className="text-xs md:text-sm text-gray-600">Tickets Sold</div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A04292' }}>
              <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-500 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>+15.7%</span>
            </div>
          </div>
          <div className="text-xl md:text-2xl mb-1 font-semibold" style={{ color: '#273480' }}>
            RM {filteredRevenue.toLocaleString()}
          </div>
          <div className="text-xs md:text-sm text-gray-600">Total Revenue</div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
              <Eye className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="flex items-center gap-1 text-green-500 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>+23.1%</span>
            </div>
          </div>
          <div className="text-xl md:text-2xl mb-1 font-semibold" style={{ color: '#273480' }}>{filteredPageViews}K</div>
          <div className="text-xs md:text-sm text-gray-600">Page Views</div>
        </div>
      </div>
    );
  };

  // Activity Feed Component
  const ActivityFeed = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium" style={{ color: '#273480' }}>Recent Activity</h3>
        <Link to="/marketing" className="text-sm" style={{ color: '#E11A27' }}>View All</Link>
      </div>
      <div className="space-y-4">
        {mockActivities.map((activity) => {
          const Icon = activity.icon;
          const colorClass = {
            booking: 'text-green-500',
            payment: 'text-blue-500',
            registration: 'text-purple-500',
            refund: 'text-red-500',
            message: 'text-orange-500'
          }[activity.type];

          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorClass}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Quick Actions Component
  const QuickActions = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-medium mb-4" style={{ color: '#273480' }}>Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => (
          <Link
            key={action.id}
            to={action.path}
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: action.color }}
            >
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium" style={{ color: '#273480' }}>{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  // Mobile Sidebar Overlay
  const MobileOverlay = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity ${
        sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setSidebarOpen(false)}
    />
  );

  // Sidebar Component
  const Sidebar = () => (
    <div
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } ${sidebarOpen ? 'w-64' : 'w-20'}`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-white">
            <img
              src="https://vectorise.net/logo/wp-content/uploads/2015/07/Kompleks-Sukan-Negara.png"
              alt="Perbadanan Stadium Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {sidebarOpen && (
            <span className="font-semibold" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</span>
          )}
        </div>
      </div>

      <div className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
        <div className="space-y-2">
          {navItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleNavClick(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  activeNav === item.path
                    ? 'bg-[#273480] text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && (
                  <span className="flex-1 text-left">{item.label}</span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  // Main Content Wrapper
  const MainContent = () => (
    <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-64 ml-0' : 'md:ml-20 ml-0'}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xl md:text-2xl font-semibold" style={{ color: '#273480' }}>Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 hover:bg-gray-100 rounded-lg relative"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl border border-gray-200 shadow-lg z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h4 className="font-medium" style={{ color: '#273480' }}>Notifications</h4>
                  </div>
                  <div className="p-4 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                          <span className="text-white text-xs">{i}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">New booking received</p>
                          <p className="text-xs text-gray-500">{i * 5} min ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <Link to="/notifications" className="text-sm text-center block w-full py-2 rounded-lg" style={{ color: '#E11A27' }}>
                      View All Notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="w-10 h-10 rounded-full flex items-center justify-center ring-2 ring-[#273480] hover:ring-offset-2 transition-all"
              style={{ backgroundColor: '#273480' }}
            >
              <span className="text-white text-sm font-medium">JD</span>
            </button>
          </div>
        </div>
      </header>

      <div className="p-4 md:p-6">
        {/* Filters Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>Dashboard Filters</h2>
              <p className="text-sm text-gray-600">Filter your dashboard data by event and venue</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <select
                value={selectedEvent}
                onChange={(e) => handleEventChange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480] min-w-[180px]"
              >
                <option value="all">All Events</option>
                {mockEvents.map(event => (
                  <option key={event.id} value={event.id.toString()}>
                    {event.name} ({event.venue})
                  </option>
                ))}
              </select>
              <select
                value={selectedVenue}
                onChange={(e) => handleVenueChange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480] min-w-[140px]"
              >
                <option value="all">All Venues</option>
                {venues.map(venue => (
                  <option key={venue} value={venue}>{venue}</option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSelectedEvent('all');
                  setSelectedVenue('all');
                }}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
          {(selectedEvent !== 'all' || selectedVenue !== 'all') && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active Filters:</span>
                {selectedEvent !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#273480', color: 'white' }}>
                    Event: {mockEvents.find(e => e.id === parseInt(selectedEvent))?.name}
                  </span>
                )}
                {selectedVenue !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E11A27', color: 'white' }}>
                    Venue: {selectedVenue}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Status Cards */}
        <div className="mb-6 md:mb-8">
          <StatusCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Activity Feed */}
          <div>
            <ActivityFeed />
          </div>

          {/* Mini Calendar */}
          <div className="lg:col-span-2">
            <EventCalendar events={calendarEvents} onEventClick={handleEventClick} />
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-xl font-semibold" style={{ color: '#273480' }}>Recent Events</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                  />
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]">
                  <option>All Events</option>
                  <option>Active</option>
                  <option>Sold Out</option>
                  <option>Draft</option>
                </select>
                <Link
                  to="/create-event"
                  className="w-full md:w-auto px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 transition-colors text-sm"
                  style={{ backgroundColor: '#E11A27' }}
                >
                  <Plus className="w-4 h-4" />
                  Create Event
                </Link>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredEvents.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No events match the selected filters. Try clearing the filters to see all events.
              </div>
            ) : (
              filteredEvents.map((event) => (
              <div key={event.id} className="p-4 md:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full md:w-32 h-48 md:h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-base md:text-lg mb-1 font-semibold" style={{ color: '#273480' }}>{event.name}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span>{event.venue}</span>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Tickets Sold</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                backgroundColor: '#273480',
                                width: `${(event.ticketsSold / event.capacity) * 100}%`
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium" style={{ color: '#273480' }}>
                            {event.ticketsSold}/{event.capacity}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-1">Revenue</div>
                        <div className="text-base md:text-lg font-semibold" style={{ color: '#273480' }}>
                          RM {event.revenue.toLocaleString()}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-600 mb-1">Status</div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === 'sold-out'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {event.status === 'sold-out' ? 'Sold Out' : 'Active'}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mt-4">
                      <Link
                        to={`/event/${event.id}`}
                        className="w-full md:w-auto px-4 py-2 rounded-lg border-2 transition-colors text-sm font-medium text-center"
                        style={{ borderColor: '#273480', color: '#273480' }}
                      >
                        View Event Page
                      </Link>
                      <Link
                        to={`/edit-event/${event.id}`}
                        className="w-full md:w-auto px-4 py-2 rounded-lg text-sm transition-colors font-medium text-center"
                        style={{ backgroundColor: '#f3f4f6', color: '#273480' }}
                      >
                        Edit Event
                      </Link>
                      <Link
                        to="/analytics"
                        className="w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors text-center"
                      >
                        Analytics
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileOverlay />
      <Sidebar />
      <MainContent />
    </div>
  );
}