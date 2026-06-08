import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Calendar, CreditCard, Shield, Bell, LogOut, Camera, AlertTriangle } from 'lucide-react';

interface ProfileProps {
  userType: 'organizer' | 'buyer';
}

export default function Profile({ userType }: ProfileProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+60 12-345 6789');
  const [address, setAddress] = useState('Kuala Lumpur, Malaysia');
  const [company, setCompany] = useState('Perbadanan Stadium Malaysia');
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleSave = () => {
    // Simulate save operation
    setTimeout(() => {
      setIsEditing(false);
      setSuccessMessage('Profile updated successfully!');
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 500);
  };

  const handleLogout = () => {
    // Show confirmation dialog before logout
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    // Perform logout operation
    setShowLogoutConfirm(false);
    setSuccessMessage('You have been logged out successfully!');
    setShowSuccess(true);

    // Hide success message and navigate to login after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/login');
    }, 2000);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://vectorise.net/logo/wp-content/uploads/2015/07/Kompleks-Sukan-Negara.png"
              alt="Perbadanan Stadium Malaysia Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            {userType === 'buyer' && (
              <Link to="/my-tickets" className="text-gray-600 hover:text-gray-900">My Tickets</Link>
            )}
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 mx-6 mt-4 rounded-lg flex items-center gap-2">
          <span className="text-xl">✓</span>
          {successMessage}
        </div>
      )}

      {/* Logout Confirmation Dialog */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full mx-4 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fee2e2' }}>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#273480' }}>Confirm Logout</h3>
                <p className="text-gray-600">Are you sure you want to log out of your account?</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={cancelLogout}
                className="flex-1 px-6 py-3 rounded-lg border-2 transition-colors"
                style={{ borderColor: '#273480', color: '#273480' }}
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 px-6 py-3 rounded-lg text-white transition-colors"
                style={{ backgroundColor: '#E11A27' }}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>My Profile</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#273480' }}>
                    <span className="text-white text-3xl">JD</span>
                  </div>
                  <button className="absolute bottom-4 right-0 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <h3 className="mb-1" style={{ color: '#273480' }}>{name}</h3>
                <p className="text-sm text-gray-600">{userType === 'organizer' ? 'Event Organizer' : 'Event Buyer'}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-[#273480] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Profile Info</span>
                </button>

                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'security'
                      ? 'bg-[#273480] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Shield className="w-5 h-5" />
                  <span>Security</span>
                </button>

                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'notifications'
                      ? 'bg-[#273480] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>

                {userType === 'buyer' && (
                  <button
                    onClick={() => setActiveTab('payment')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'payment'
                        ? 'bg-[#273480] text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Payment Methods</span>
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-4"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Info Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl" style={{ color: '#273480' }}>Profile Information</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 rounded-lg border-2 transition-colors"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-lg text-white"
                        style={{ backgroundColor: '#E11A27' }}
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-2" style={{ color: '#273480' }}>
                        <User className="w-4 h-4" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 disabled:bg-gray-50"
                        style={{ '--tw-ring-color': '#273480' } as any}
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm mb-2" style={{ color: '#273480' }}>
                        <Mail className="w-4 h-4" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 disabled:bg-gray-50"
                        style={{ '--tw-ring-color': '#273480' } as any}
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm mb-2" style={{ color: '#273480' }}>
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 disabled:bg-gray-50"
                        style={{ '--tw-ring-color': '#273480' } as any}
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm mb-2" style={{ color: '#273480' }}>
                        <MapPin className="w-4 h-4" />
                        Location
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 disabled:bg-gray-50"
                        style={{ '--tw-ring-color': '#273480' } as any}
                      />
                    </div>

                    {userType === 'organizer' && (
                      <div className="md:col-span-2">
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ color: '#273480' }}>
                          <Calendar className="w-4 h-4" />
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 disabled:bg-gray-50"
                          style={{ '--tw-ring-color': '#273480' } as any}
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="mb-4" style={{ color: '#273480' }}>Account Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Account Type:</span>
                        <span className="ml-2" style={{ color: '#273480' }}>
                          {userType === 'organizer' ? 'Event Organizer' : 'Event Buyer'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Member Since:</span>
                        <span className="ml-2" style={{ color: '#273480' }}>January 2026</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Account Status:</span>
                        <span className="ml-2 px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl mb-6" style={{ color: '#273480' }}>Security Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4" style={{ color: '#273480' }}>Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm mb-2 text-gray-600">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                          style={{ '--tw-ring-color': '#273480' } as any}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-gray-600">New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                          style={{ '--tw-ring-color': '#273480' } as any}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-gray-600">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                          style={{ '--tw-ring-color': '#273480' } as any}
                        />
                      </div>
                      <button
                        className="px-6 py-3 rounded-lg text-white"
                        style={{ backgroundColor: '#E11A27' }}
                      >
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="mb-4" style={{ color: '#273480' }}>Two-Factor Authentication</h3>
                    <p className="text-gray-600 mb-4">
                      Add an extra layer of security to your account
                    </p>
                    <button
                      className="px-6 py-3 rounded-lg border-2"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl mb-6" style={{ color: '#273480' }}>Notification Preferences</h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div>
                      <h4 className="mb-1" style={{ color: '#273480' }}>Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive updates via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480] peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div>
                      <h4 className="mb-1" style={{ color: '#273480' }}>Event Reminders</h4>
                      <p className="text-sm text-gray-600">Get notified before your events</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480] peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div>
                      <h4 className="mb-1" style={{ color: '#273480' }}>Marketing Updates</h4>
                      <p className="text-sm text-gray-600">Receive news and promotional offers</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480] peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  {userType === 'organizer' && (
                    <div className="flex items-center justify-between py-4">
                      <div>
                        <h4 className="mb-1" style={{ color: '#273480' }}>Sales Notifications</h4>
                        <p className="text-sm text-gray-600">Get notified when tickets are sold</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480] peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Payment Methods Tab (Buyer Only) */}
            {activeTab === 'payment' && userType === 'buyer' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl" style={{ color: '#273480' }}>Payment Methods</h2>
                  <button
                    className="px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: '#E11A27' }}
                  >
                    Add Card
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="mb-1" style={{ color: '#273480' }}>Visa ending in 4242</h4>
                          <p className="text-sm text-gray-600">Expires 12/2026</p>
                          <span className="inline-block mt-2 px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                            Default
                          </span>
                        </div>
                      </div>
                      <button className="text-red-600 text-sm hover:underline">Remove</button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6 border-dashed">
                    <div className="text-center py-8">
                      <CreditCard className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <h4 className="mb-2 text-gray-600">No other payment methods</h4>
                      <p className="text-sm text-gray-500 mb-4">Add a new card for faster checkout</p>
                      <button
                        className="px-6 py-2 rounded-lg border-2"
                        style={{ borderColor: '#273480', color: '#273480' }}
                      >
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
