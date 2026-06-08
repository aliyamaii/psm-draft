import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Play, Pause, Trash2, Settings, Plus, Search, Filter, Clock, TrendingUp, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockAutomations = [
  {
    id: 1,
    name: 'Payment Reminder',
    description: 'Automatically send payment reminders to customers who have pending payments.',
    type: 'Communication',
    status: 'active',
    lastRun: '2026-04-15 14:30',
    nextRun: '2026-04-16 14:30',
    frequency: 'Daily',
    executions: 234,
    successRate: 98.5,
    triggers: ['Pending Payment', 'Overdue Payment'],
    actions: ['Send Email', 'Send SMS', 'Update Status']
  },
  {
    id: 2,
    name: 'Event Confirmation',
    description: 'Send automated event confirmation emails after successful ticket purchase.',
    type: 'Communication',
    status: 'active',
    lastRun: '2026-04-15 13:45',
    nextRun: '2026-04-15 15:00',
    frequency: 'Immediate',
    executions: 1456,
    successRate: 99.2,
    triggers: ['Ticket Purchase', 'Payment Success'],
    actions: ['Send Confirmation Email', 'Generate QR Code', 'Update Inventory']
  },
  {
    id: 3,
    name: 'Capacity Alert',
    description: 'Monitor ticket sales and send alerts when approaching capacity limits.',
    type: 'Monitoring',
    status: 'active',
    lastRun: '2026-04-15 12:00',
    nextRun: '2026-04-15 14:00',
    frequency: 'Hourly',
    executions: 567,
    successRate: 100.0,
    triggers: ['80% Capacity', '90% Capacity', '100% Capacity'],
    actions: ['Send Alert', 'Update Dashboard', 'Log Event']
  },
  {
    id: 4,
    name: 'Revenue Report',
    description: 'Generate daily revenue reports and send to finance team.',
    type: 'Reporting',
    status: 'active',
    lastRun: '2026-04-15 08:00',
    nextRun: '2026-04-16 08:00',
    frequency: 'Daily',
    executions: 45,
    successRate: 99.8,
    triggers: ['End of Day', 'Scheduled Time'],
    actions: ['Generate Report', 'Compile Data', 'Send Email']
  },
  {
    id: 5,
    name: 'Customer Follow-up',
    description: 'Automatically follow up with customers after events for feedback.',
    type: 'Communication',
    status: 'active',
    lastRun: '2026-04-15 16:00',
    nextRun: '2026-04-16 16:00',
    frequency: 'Event Based',
    executions: 23,
    successRate: 94.3,
    triggers: ['Event Completion', '24 Hours Post Event'],
    actions: ['Send Survey', 'Request Review', 'Offer Discount']
  },
  {
    id: 6,
    name: 'Ticket Cleanup',
    description: 'Automatically cancel unconfirmed tickets after 24 hours.',
    type: 'Operations',
    status: 'active',
    lastRun: '2026-04-15 15:30',
    nextRun: '2026-04-15 17:00',
    frequency: 'Hourly',
    executions: 89,
    successRate: 97.6,
    triggers: ['Pending > 24h', 'No Payment Confirmation'],
    actions: ['Cancel Ticket', 'Release Inventory', 'Notify Customer']
  },
  {
    id: 7,
    name: 'Social Media Sync',
    description: 'Automatically post updates to social media when events are created.',
    type: 'Marketing',
    status: 'paused',
    lastRun: '2026-04-14 09:00',
    nextRun: '2026-04-15 09:00',
    frequency: 'On Event Creation',
    executions: 12,
    successRate: 92.1,
    triggers: ['New Event Created', 'Event Published'],
    actions: ['Post to Facebook', 'Post to Instagram', 'Post to Twitter']
  },
  {
    id: 8,
    name: 'Customer Re-engagement',
    description: "Re-engage customers who haven't purchased in 30 days.",
    type: 'Marketing',
    status: 'active',
    lastRun: '2026-04-15 10:00',
    nextRun: '2026-04-16 10:00',
    frequency: 'Daily',
    executions: 34,
    successRate: 45.2,
    triggers: ['30 Days Inactive', 'Past Customer'],
    actions: ['Send Email', 'Offer Special Deal', 'Track Engagement']
  },
  {
    id: 9,
    name: 'Event Performance Monitor',
    description: 'Monitor key event metrics and alert if performance drops.',
    type: 'Monitoring',
    status: 'active',
    lastRun: '2026-04-15 11:00',
    nextRun: '2026-04-15 13:00',
    frequency: 'Hourly',
    executions: 234,
    successRate: 99.5,
    triggers: ['Low Ticket Sales', 'Negative Feedback', 'Capacity Underutilized'],
    actions: ['Send Alert', 'Analyze Root Cause', 'Suggest Actions']
  },
  {
    id: 10,
    name: 'Vendor Payment Processing',
    description: 'Automatically process vendor payments after event completion.',
    type: 'Financial',
    status: 'paused',
    lastRun: '2026-04-13 18:00',
    nextRun: '2026-04-20 18:00',
    frequency: 'Event Based',
    executions: 8,
    successRate: 100.0,
    triggers: ['Event Completed', 'Services Delivered'],
    actions: ['Calculate Payments', 'Process Transfers', 'Send Notifications']
  },
  {
    id: 11,
    name: 'Event Countdown',
    description: 'Send countdown reminders to ticket holders before events.',
    type: 'Communication',
    status: 'active',
    lastRun: '2026-04-15 09:00',
    nextRun: '2026-04-16 09:00',
    frequency: 'Daily',
    executions: 156,
    successRate: 96.8,
    triggers: ['7 Days Before', '3 Days Before', '1 Day Before'],
    actions: ['Send Email', 'Send SMS', 'Push Notification']
  },
  {
    id: 12,
    name: 'Fraud Detection',
    description: 'Monitor transactions for suspicious activity and flag potential fraud.',
    type: 'Monitoring',
    status: 'active',
    lastRun: '2026-04-15 08:30',
    nextRun: '2026-04-15 09:30',
    frequency: 'Hourly',
    executions: 345,
    successRate: 99.9,
    triggers: ['Multiple Purchases', 'Unusual Pattern', 'Failed Payments'],
    actions: ['Flag Transaction', 'Block User', 'Notify Security']
  },
  {
    id: 13,
    name: 'Review Request',
    description: 'Send automated review requests after event completion.',
    type: 'Marketing',
    status: 'active',
    lastRun: '2026-04-14 16:00',
    nextRun: '2026-04-15 16:00',
    frequency: 'Event Based',
    executions: 67,
    successRate: 78.5,
    triggers: ['Event Completed', '3 Days After Event'],
    actions: ['Send Review Link', 'Offer Incentive', 'Track Reviews']
  },
  {
    id: 14,
    name: 'Inventory Alert',
    description: 'Monitor inventory levels and alert when supplies are running low.',
    type: 'Operations',
    status: 'active',
    lastRun: '2026-04-15 10:30',
    nextRun: '2026-04-15 12:30',
    frequency: 'Every 2 Hours',
    executions: 234,
    successRate: 100.0,
    triggers: ['Below 20%', 'Below 10%', 'Zero Stock'],
    actions: ['Send Alert', 'Update Dashboard', 'Create Purchase Order']
  },
  {
    id: 15,
    name: 'Email Newsletter',
    description: 'Send weekly newsletters with upcoming events and special offers.',
    type: 'Marketing',
    status: 'active',
    lastRun: '2026-04-14 10:00',
    nextRun: '2026-04-21 10:00',
    frequency: 'Weekly',
    executions: 34,
    successRate: 87.3,
    triggers: ['Weekly Schedule', 'Special Events'],
    actions: ['Compile Newsletter', 'Send Email', 'Track Opens']
  },
  {
    id: 16,
    name: 'VIP Status Update',
    description: 'Automatically update customer VIP status based on purchase history.',
    type: 'Financial',
    status: 'paused',
    lastRun: '2026-04-10 00:00',
    nextRun: '2026-05-01 00:00',
    frequency: 'Monthly',
    executions: 5,
    successRate: 100.0,
    triggers: ['Monthly Review', 'Purchase Threshold'],
    actions: ['Update Status', 'Notify Customer', 'Grant Benefits']
  },
  {
    id: 17,
    name: 'Event Reminder',
    description: 'Send reminder notifications 24 hours before events to attendees.',
    type: 'Communication',
    status: 'active',
    lastRun: '2026-04-15 14:00',
    nextRun: '2026-04-16 14:00',
    frequency: 'Daily',
    executions: 890,
    successRate: 97.8,
    triggers: ['24 Hours Before', 'Event Starting Soon'],
    actions: ['Send SMS', 'Send Email', 'Push Notification']
  },
  {
    id: 18,
    name: 'Performance Report',
    description: 'Generate and send performance reports to event organizers.',
    type: 'Reporting',
    status: 'active',
    lastRun: '2026-04-15 07:00',
    nextRun: '2026-04-16 07:00',
    frequency: 'Daily',
    executions: 89,
    successRate: 99.5,
    triggers: ['End of Day', 'Event Completion'],
    actions: ['Generate Report', 'Send Email', 'Update Dashboard']
  },
  {
    id: 19,
    name: 'Loyalty Program',
    description: 'Manage loyalty points and rewards for repeat customers.',
    type: 'Marketing',
    status: 'active',
    lastRun: '2026-04-15 12:00',
    nextRun: '2026-04-15 14:00',
    frequency: 'Every 2 Hours',
    executions: 567,
    successRate: 100.0,
    triggers: ['Purchase Made', 'Event Attended', 'Review Left'],
    actions: ['Award Points', 'Update Tiers', 'Send Notification']
  },
  {
    id: 20,
    name: 'System Health Check',
    description: 'Monitor system health and alert if any issues are detected.',
    type: 'Monitoring',
    status: 'active',
    lastRun: '2026-04-15 15:00',
    nextRun: '2026-04-15 16:00',
    frequency: 'Hourly',
    executions: 1234,
    successRate: 99.9,
    triggers: ['Performance Issue', 'Error Detected', 'System Down'],
    actions: ['Alert Admin', 'Create Ticket', 'Log Incident']
  }
];

export default function Automations() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'Communication' | 'Monitoring' | 'Reporting' | 'Operations' | 'Marketing' | 'Financial'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'paused'>('all');
  const [automations, setAutomations] = useState<any[]>([]);

  useEffect(() => {
    // Load automations from localStorage or use mock data
    const storedAutomations = JSON.parse(localStorage.getItem('automations') || '[]');
    if (storedAutomations.length > 0) {
      setAutomations(storedAutomations);
    } else {
      setAutomations(mockAutomations);
    }
  }, []);

  const filteredAutomations = automations.filter(automation => {
    const matchesSearch = searchQuery === '' ||
      automation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      automation.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'all' || automation.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || automation.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleCreateAutomation = () => {
    navigate('/create-automation');
  };

  const handleEditAutomation = (id: number) => {
    navigate(`/edit-automation/${id}`);
  };

  const handleDeleteAutomation = (id: number) => {
    if (window.confirm('Are you sure you want to delete this automation?')) {
      const updatedAutomations = automations.filter(a => a.id !== id);
      setAutomations(updatedAutomations);
      localStorage.setItem('automations', JSON.stringify(updatedAutomations));
    }
  };

  const handleToggleStatus = (id: number) => {
    const updatedAutomations = automations.map(a => {
      if (a.id === id) {
        return { ...a, status: a.status === 'active' ? 'paused' : 'active' };
      }
      return a;
    });
    setAutomations(updatedAutomations);
    localStorage.setItem('automations', JSON.stringify(updatedAutomations));
  };

  const activeAutomations = filteredAutomations.filter(a => a.status === 'active').length;
  const avgSuccessRate = filteredAutomations.reduce((sum, a) => sum + a.successRate, 0) / filteredAutomations.length || 0;

  const getTypeBadge = (type: string) => {
    const colors = {
      Communication: 'bg-blue-100 text-blue-700',
      Monitoring: 'bg-purple-100 text-purple-700',
      Reporting: 'bg-green-100 text-green-700',
      Operations: 'bg-orange-100 text-orange-700',
      Marketing: 'bg-pink-100 text-pink-700',
      Financial: 'bg-teal-100 text-teal-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[type as keyof typeof colors]}`}>
        {type}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      paused: 'bg-yellow-100 text-yellow-700'
    };
    const icons = {
      active: <CheckCircle className="w-3 h-3 inline mr-1" />,
      paused: <Pause className="w-3 h-3 inline mr-1" />
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${styles[status as keyof typeof styles]}`}>
        {icons[status as keyof typeof icons]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <DashboardLayout title="Automations">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Automations</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredAutomations.length}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Clock className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Active</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {activeAutomations}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Avg Success Rate</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                {avgSuccessRate.toFixed(1)}%
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Clock className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Executions</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredAutomations.reduce((sum, a) => sum + a.executions, 0).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Workflow Automations</h2>
          <button
            onClick={handleCreateAutomation}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#E11A27' }}
          >
            <Plus className="w-5 h-5" />
            Create Automation
          </button>
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
                placeholder="Search automations..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#273480' } as any}
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Types</option>
              <option value="Communication">Communication</option>
              <option value="Monitoring">Monitoring</option>
              <option value="Reporting">Reporting</option>
              <option value="Operations">Operations</option>
              <option value="Marketing">Marketing</option>
              <option value="Financial">Financial</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setTypeFilter('all');
                setStatusFilter('all');
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Automation Cards */}
        {filteredAutomations.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Zap className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No automations found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAutomations.map((automation) => (
              <div key={automation.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Automation Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>{automation.name}</h3>
                        {getTypeBadge(automation.type)}
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(automation.status)}
                        <span className="text-xs text-gray-500">
                          {automation.frequency}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleStatus(automation.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      title={automation.status === 'active' ? 'Pause Automation' : 'Resume Automation'}
                    >
                      {automation.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => handleEditAutomation(automation.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      title="Settings"
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteAutomation(automation.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg text-red-500"
                      title="Delete Automation"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Automation Details */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{automation.description}</p>

                  {/* Triggers */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-600 mb-2">Triggers</div>
                    <div className="flex flex-wrap gap-2">
                      {automation.triggers.map((trigger, index) => (
                        <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#f3f3f5', color: '#273480' }}>
                          <AlertCircle className="w-3 h-3" />
                          <span>{trigger}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-600 mb-2">Actions</div>
                    <div className="flex flex-wrap gap-2">
                      {automation.actions.map((action, index) => (
                        <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#e0f2fe', color: '#273480' }}>
                          <Zap className="w-3 h-3" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Last Run</div>
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#273480' }}>
                        {automation.lastRun}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Next Run</div>
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#273480' }}>
                        {automation.nextRun}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Executions</div>
                      </div>
                      <div className="text-xl font-bold" style={{ color: '#273480' }}>
                        {automation.executions}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4" style={{ color: '#273480' }} />
                        <div className="text-xs text-gray-600">Success Rate</div>
                      </div>
                      <div className="text-xl font-bold" style={{ color: automation.successRate >= 95 ? '#10B981' : '#273480' }}>
                        {automation.successRate.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}