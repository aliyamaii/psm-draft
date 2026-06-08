import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, LogOut, Home, Ticket, Heart, Search, User, Bell, LayoutDashboard
} from 'lucide-react';

interface BuyerLayoutProps {
  children: React.ReactNode;
  title: string;
}

// Navigation items for buyer
const navItems = [
  { id: 1, label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { id: 2, label: 'Browse', icon: Search, path: '/buyer-dashboard' },
  { id: 3, label: 'My Tickets', icon: Ticket, path: '/my-tickets' },
  { id: 4, label: 'Saved Events', icon: Heart, path: '/saved-events' }
];

export default function BuyerLayout({ children, title }: BuyerLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeNav = location.pathname;

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  // Sidebar Component
  const Sidebar = () => (
    <div
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-all ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
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
                    ? 'bg-[#E11A27] text-white'
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className={`transition-all ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-semibold" style={{ color: '#273480' }}>{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 rounded-lg relative"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    2
                  </span>
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl border border-gray-200 shadow-lg z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h4 className="font-medium" style={{ color: '#273480' }}>Notifications</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                            <span className="text-white text-xs">{i}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium" style={{ color: '#273480' }}>
                              {i === 1 ? 'Event Reminder' : 'Ticket Confirmed'}
                            </div>
                            <div className="text-xs text-gray-500">{i === 1 ? '2 hours ago' : '1 day ago'}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <button className="w-full py-2 rounded-lg text-sm text-center" style={{ color: '#E11A27' }}>
                        View All
                      </button>
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

        {/* Main Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
