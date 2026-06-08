import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Save, AlertCircle, Zap, Clock, CheckCircle } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function CreateAutomation() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState<'active' | 'paused'>('active');
  const [frequency, setFrequency] = useState('');
  const [triggers, setTriggers] = useState(['']);
  const [actions, setActions] = useState(['']);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddTrigger = () => {
    setTriggers([...triggers, '']);
  };

  const handleRemoveTrigger = (index: number) => {
    setTriggers(triggers.filter((_, i) => i !== index));
  };

  const handleTriggerChange = (index: number, value: string) => {
    const newTriggers = [...triggers];
    newTriggers[index] = value;
    setTriggers(newTriggers);
  };

  const handleAddAction = () => {
    setActions([...actions, '']);
  };

  const handleRemoveAction = (index: number) => {
    setActions(actions.filter((_, i) => i !== index));
  };

  const handleActionChange = (index: number, value: string) => {
    const newActions = [...actions];
    newActions[index] = value;
    setActions(newActions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !description || !type || !frequency) {
      alert('Please fill in all required fields');
      return;
    }

    // Filter out empty triggers and actions
    const validTriggers = triggers.filter(t => t.trim() !== '');
    const validActions = actions.filter(a => a.trim() !== '');

    if (validTriggers.length === 0) {
      alert('Please add at least one trigger');
      return;
    }

    if (validActions.length === 0) {
      alert('Please add at least one action');
      return;
    }

    // Generate ID and create automation
    const automationData = {
      id: Date.now(),
      name,
      description,
      type,
      status,
      lastRun: 'Never',
      nextRun: 'Pending',
      frequency,
      executions: 0,
      successRate: 100.0,
      triggers: validTriggers,
      actions: validActions
    };

    // Get existing automations from localStorage
    const storedAutomations = JSON.parse(localStorage.getItem('automations') || '[]');
    const updatedAutomations = [...storedAutomations, automationData];
    localStorage.setItem('automations', JSON.stringify(updatedAutomations));

    // Show success message
    setShowSuccess(true);

    // Navigate back to automations page after showing success message
    setTimeout(() => {
      navigate('/automations');
    }, 1500);
  };

  const availableTypes = ['Communication', 'Monitoring', 'Reporting', 'Operations', 'Marketing', 'Financial'];
  const availableFrequencies = ['Immediate', 'Hourly', 'Every 2 Hours', 'Every 6 Hours', 'Daily', 'Weekly', 'Monthly', 'Event Based', 'On Event Creation', 'On Event Completion'];
  const availableTriggers = ['Pending Payment', 'Overdue Payment', 'Ticket Purchase', 'Payment Success', '80% Capacity', '90% Capacity', '100% Capacity', 'End of Day', 'Scheduled Time', 'Event Completion', '24 Hours Post Event', 'Pending > 24h', 'No Payment Confirmation', 'New Event Created', 'Event Published', '30 Days Inactive', 'Past Customer', 'Low Ticket Sales', 'Negative Feedback', 'Capacity Underutilized', 'Event Completed', 'Services Delivered', '7 Days Before', '3 Days Before', '1 Day Before', 'Multiple Purchases', 'Unusual Pattern', 'Failed Payments', 'Below 20%', 'Below 10%', 'Zero Stock', 'Weekly Schedule', 'Special Events', 'Monthly Review', 'Purchase Threshold', '24 Hours Before', 'Event Starting Soon', 'End of Day', 'Purchase Made', 'Event Attended', 'Review Left', 'Performance Issue', 'Error Detected', 'System Down'];
  const availableActions = ['Send Email', 'Send SMS', 'Update Status', 'Generate QR Code', 'Update Inventory', 'Send Alert', 'Update Dashboard', 'Log Event', 'Generate Report', 'Compile Data', 'Send Confirmation Email', 'Send Survey', 'Request Review', 'Offer Discount', 'Cancel Ticket', 'Release Inventory', 'Notify Customer', 'Post to Facebook', 'Post to Instagram', 'Post to Twitter', 'Offer Special Deal', 'Track Engagement', 'Analyze Root Cause', 'Suggest Actions', 'Calculate Payments', 'Process Transfers', 'Send Notifications', 'Update Status', 'Notify Customer', 'Grant Benefits', 'Send Reminder Notifications', 'Push Notification', 'Send Review Link', 'Offer Incentive', 'Track Reviews', 'Award Points', 'Update Tiers', 'Send Notification', 'Alert Admin', 'Create Ticket', 'Log Incident'];

  return (
    <DashboardLayout title="Create Automation">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
          Automation created successfully!
        </div>
      )}

      <div className="max-w-4xl">
        <button
          onClick={() => navigate('/automations')}
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Automations
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Create New Automation</h1>
          <p className="text-gray-600 mb-8">Set up automated workflows for your event management system</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Basic Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Automation Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="Payment Reminder"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Description *
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 h-32"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="Describe what this automation does and when it should run..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Automation Type *
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a type</option>
                      {availableTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Frequency *
                    </label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select frequency</option>
                      {availableFrequencies.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Status *
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    required
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Triggers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl" style={{ color: '#273480' }}>Triggers</h2>
                <button
                  type="button"
                  onClick={handleAddTrigger}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Trigger
                </button>
              </div>

              <div className="space-y-4">
                {triggers.map((trigger, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg border border-gray-300">
                      <AlertCircle className="w-4 h-4" style={{ color: '#273480' }} />
                      <select
                        value={trigger}
                        onChange={(e) => handleTriggerChange(index, e.target.value)}
                        className="flex-1 focus:outline-none"
                      >
                        <option value="">Select a trigger</option>
                        {availableTriggers.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    {triggers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTrigger(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl" style={{ color: '#273480' }}>Actions</h2>
                <button
                  type="button"
                  onClick={handleAddAction}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Action
                </button>
              </div>

              <div className="space-y-4">
                {actions.map((action, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg border border-gray-300">
                      <Zap className="w-4 h-4" style={{ color: '#273480' }} />
                      <select
                        value={action}
                        onChange={(e) => handleActionChange(index, e.target.value)}
                        className="flex-1 focus:outline-none"
                      >
                        <option value="">Select an action</option>
                        {availableActions.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                    {actions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveAction(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-lg text-white transition-colors"
                style={{ backgroundColor: '#E11A27' }}
              >
                <Save className="w-5 h-5" />
                Create Automation
              </button>
              <button
                type="button"
                onClick={() => navigate('/automations')}
                className="px-8 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
