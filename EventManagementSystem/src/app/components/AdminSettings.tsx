import AdminLayout from './AdminLayout';
import { Bell, Shield, Users, Settings as SettingsIcon, Save, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState<'approval' | 'notifications' | 'users' | 'system'>('approval');
  const [saveMessage, setSaveMessage] = useState('');

  // Mock settings data
  const [approvalSettings, setApprovalSettings] = useState({
    requireApproval: true,
    autoApproveTrusted: false,
    trustedOrganizers: ['organizer-1'],
    approvalTimeout: 72,
    autoRejectOldEvents: true,
    oldEventThreshold: 30
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newEventSubmission: true,
    eventApproved: true,
    eventRejected: true,
    userRegistration: true,
    systemAlerts: true
  });

  const [userSettings, setUserSettings] = useState({
    requireEmailVerification: false,
    allowSelfRegistration: true,
    defaultUserRole: 'buyer',
    maxEventsPerOrganizer: 10,
    inactiveUserTimeout: 180
  });

  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    maxFileSize: 10,
    allowedFileTypes: ['jpg', 'jpeg', 'png', 'pdf'],
    sessionTimeout: 60,
    enableDebugMode: false
  });

  const handleSave = (section: string) => {
    setSaveMessage(`${section} settings saved successfully!`);
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <AdminLayout title="Admin Settings">
      <div className="space-y-6">
        {/* Save Message */}
        {saveMessage && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2 text-green-700">
            <Shield className="w-5 h-5" />
            <span>{saveMessage}</span>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('approval')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'approval'
                    ? 'border-[#273480] text-[#273480]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Approval Workflow
                </div>
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'notifications'
                    ? 'border-[#273480] text-[#273480]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Notifications
                </div>
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'users'
                    ? 'border-[#273480] text-[#273480]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  User Management
                </div>
              </button>
              <button
                onClick={() => setActiveTab('system')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'system'
                    ? 'border-[#273480] text-[#273480]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <SettingsIcon className="w-4 h-4" />
                  System Config
                </div>
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Approval Workflow Settings */}
            {activeTab === 'approval' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>
                    Event Approval Settings
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Configure how events are approved and managed in the system.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Require Admin Approval</h4>
                      <p className="text-sm text-gray-500">All events must be approved by an admin before going live</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={approvalSettings.requireApproval}
                        onChange={(e) => setApprovalSettings({...approvalSettings, requireApproval: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Auto-Approve Trusted Organizers</h4>
                      <p className="text-sm text-gray-500">Events from trusted organizers are automatically approved</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={approvalSettings.autoApproveTrusted}
                        onChange={(e) => setApprovalSettings({...approvalSettings, autoApproveTrusted: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200">
                    <label className="block font-medium text-gray-900 mb-2">
                      Approval Timeout (hours)
                    </label>
                    <input
                      type="number"
                      value={approvalSettings.approvalTimeout}
                      onChange={(e) => setApprovalSettings({...approvalSettings, approvalTimeout: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      min="1"
                      max="168"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Time window for admin review before automatic action
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Auto-Reject Old Events</h4>
                      <p className="text-sm text-gray-500">Automatically reject events older than threshold</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={approvalSettings.autoRejectOldEvents}
                        onChange={(e) => setApprovalSettings({...approvalSettings, autoRejectOldEvents: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200">
                    <label className="block font-medium text-gray-900 mb-2">
                      Old Event Threshold (days)
                    </label>
                    <input
                      type="number"
                      value={approvalSettings.oldEventThreshold}
                      onChange={(e) => setApprovalSettings({...approvalSettings, oldEventThreshold: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      min="1"
                      max="365"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Events older than this will be automatically rejected
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSave('Approval workflow')}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#273480] text-white hover:bg-[#1e2850]"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>
                    Email Notification Settings
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Configure when and how email notifications are sent.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Enable Email Notifications</h4>
                      <p className="text-sm text-gray-500">Send email notifications for system events</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.emailNotifications}
                        onChange={(e) => setNotificationSettings({...notificationSettings, emailNotifications: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">New Event Submission</h4>
                      <p className="text-sm text-gray-500">Notify admins when new events are submitted</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.newEventSubmission}
                        onChange={(e) => setNotificationSettings({...notificationSettings, newEventSubmission: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Event Approved</h4>
                      <p className="text-sm text-gray-500">Notify organizers when events are approved</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.eventApproved}
                        onChange={(e) => setNotificationSettings({...notificationSettings, eventApproved: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Event Rejected</h4>
                      <p className="text-sm text-gray-500">Notify organizers when events are rejected</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.eventRejected}
                        onChange={(e) => setNotificationSettings({...notificationSettings, eventRejected: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">User Registration</h4>
                      <p className="text-sm text-gray-500">Notify admins when new users register</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.userRegistration}
                        onChange={(e) => setNotificationSettings({...notificationSettings, userRegistration: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">System Alerts</h4>
                      <p className="text-sm text-gray-500">Send alerts for system issues and warnings</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.systemAlerts}
                        onChange={(e) => setNotificationSettings({...notificationSettings, systemAlerts: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSave('Notification')}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#273480] text-white hover:bg-[#1e2850]"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* User Management Settings */}
            {activeTab === 'users' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>
                    User Management Settings
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Configure user registration and account management policies.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Require Email Verification</h4>
                      <p className="text-sm text-gray-500">Users must verify email before accessing the system</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userSettings.requireEmailVerification}
                        onChange={(e) => setUserSettings({...userSettings, requireEmailVerification: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <h4 className="font-medium text-gray-900">Allow Self-Registration</h4>
                      <p className="text-sm text-gray-500">New users can register without admin approval</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userSettings.allowSelfRegistration}
                        onChange={(e) => setUserSettings({...userSettings, allowSelfRegistration: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#273480]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273480]"></div>
                    </label>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200">
                    <label className="block font-medium text-gray-900 mb-2">
                      Default User Role
                    </label>
                    <select
                      value={userSettings.defaultUserRole}
                      onChange={(e) => setUserSettings({...userSettings, defaultUserRole: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    >
                      <option value="buyer">Buyer</option>
                      <option value="organizer">Organizer</option>
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      Default role assigned to new self-registered users
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200">
                    <label className="block font-medium text-gray-900 mb-2">
                      Max Events Per Organizer
                    </label>
                    <input
                      type="number"
                      value={userSettings.maxEventsPerOrganizer}
                      onChange={(e) => setUserSettings({...userSettings, maxEventsPerOrganizer: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      min="1"
                      max="100"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Maximum number of active events an organizer can have
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200">
                    <label className="block font-medium text-gray-900 mb-2">
                      Inactive User Timeout (days)
                    </label>
                    <input
                      type="number"
                      value={userSettings.inactiveUserTimeout}
                      onChange={(e) => setUserSettings({...userSettings, inactiveUserTimeout: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      min="30"
                      max="365"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Days before inactive user account is marked for review
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSave('User management')}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#273480] text-white hover:bg-[#1e2850]"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* System Configuration */}
            {activeTab === 'system' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>
                    System Configuration
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Configure system-wide settings and maintenance options.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-red-200 bg-red-50">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-red-900">Maintenance Mode</h4>
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-sm text-red-700">Take the system offline for maintenance</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={systemSettings.maintenanceMode}
                        onChange={(e) => setSystemSettings({...systemSettings, maintenanceMode: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200">
                    <label className="block font-medium text-gray-900 mb-2">
                      Max File Upload Size (MB)
                    </label>
                    <input
                      type="number"
                      value={systemSettings.maxFileSize}
                      onChange={(e) => setSystemSettings({...systemSettings, maxFileSize: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      min="1"
                      max="100"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Maximum file size for uploads (images, documents)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200">
                    <label className="block font-medium text-gray-900 mb-2">
                      Session Timeout (minutes)
                    </label>
                    <input
                      type="number"
                      value={systemSettings.sessionTimeout}
                      onChange={(e) => setSystemSettings({...systemSettings, sessionTimeout: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      min="15"
                      max="480"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      User session duration before automatic logout
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                    <div>
                      <h4 className="font-medium text-yellow-900">Enable Debug Mode</h4>
                      <p className="text-sm text-yellow-700">Show detailed error messages and debug information</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={systemSettings.enableDebugMode}
                        onChange={(e) => setSystemSettings({...systemSettings, enableDebugMode: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSave('System configuration')}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#273480] text-white hover:bg-[#1e2850]"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}