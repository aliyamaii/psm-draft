import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function EditCampaign() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState<'active' | 'paused' | 'completed'>('active');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [channels, setChannels] = useState(['']);
  const [targetAudience, setTargetAudience] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleAddChannel = () => {
    setChannels([...channels, '']);
  };

  const handleRemoveChannel = (index: number) => {
    setChannels(channels.filter((_, i) => i !== index));
  };

  const handleChannelChange = (index: number, value: string) => {
    const newChannels = [...channels];
    newChannels[index] = value;
    setChannels(newChannels);
  };

  useEffect(() => {
    // Load campaign data from localStorage or mock data
    const loadCampaign = () => {
      setLoading(true);

      // Try to get from localStorage first
      const storedCampaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
      const storedCampaign = storedCampaigns.find((c: any) => c.id.toString() === id);

      if (storedCampaign) {
        setName(storedCampaign.name);
        setDescription(storedCampaign.description);
        setType(storedCampaign.type);
        setStatus(storedCampaign.status);
        setStartDate(storedCampaign.startDate);
        setEndDate(storedCampaign.endDate);
        setBudget(storedCampaign.budget.toString());
        setChannels(storedCampaign.channels || ['']);
        setTargetAudience(storedCampaign.targetAudience);
      } else {
        // Use a mock campaign for demo if not found
        const mockCampaign = {
          id: 1,
          name: 'Summer Festival 2026',
          description: 'Multi-channel marketing campaign for annual summer music festival.',
          type: 'Event Promotion',
          status: 'active',
          startDate: '2026-04-01',
          endDate: '2026-07-15',
          budget: 50000,
          spent: 28450,
          impressions: 125430,
          clicks: 8234,
          conversions: 1256,
          roi: '+127.5%',
          channels: ['Facebook', 'Instagram', 'Google Ads', 'Email'],
          targetAudience: 'Music Enthusiasts, Young Adults (18-35)'
        };
        setName(mockCampaign.name);
        setDescription(mockCampaign.description);
        setType(mockCampaign.type);
        setStatus(mockCampaign.status);
        setStartDate(mockCampaign.startDate);
        setEndDate(mockCampaign.endDate);
        setBudget(mockCampaign.budget.toString());
        setChannels(mockCampaign.channels);
        setTargetAudience(mockCampaign.targetAudience);
      }

      setLoading(false);
    };

    loadCampaign();
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !description || !type || !startDate || !endDate || !budget) {
      alert('Please fill in all required fields');
      return;
    }

    // Update campaign data
    const campaignData = {
      id: parseInt(id || '0'),
      name,
      description,
      type,
      status,
      startDate,
      endDate,
      budget: parseFloat(budget),
      spent: 0, // Preserve this in real implementation
      impressions: 0, // Preserve this in real implementation
      clicks: 0, // Preserve this in real implementation
      conversions: 0, // Preserve this in real implementation
      roi: '+0.0%', // Preserve this in real implementation
      channels: channels.filter(c => c.trim() !== ''),
      targetAudience
    };

    // Update campaign data in localStorage
    const storedCampaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
    const updatedCampaigns = storedCampaigns.map((c: any) =>
      c.id.toString() === id ? campaignData : c
    );
    localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));

    // Show success message
    setShowSuccess(true);

    // Navigate back to marketing page after showing success message
    setTimeout(() => {
      navigate('/marketing');
    }, 1500);
  };

  const availableChannels = ['Facebook', 'Instagram', 'Google Ads', 'Email', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'SMS', 'Press Release'];
  const campaignTypes = ['Event Promotion', 'Promotional', 'Brand Awareness', 'Product Launch', 'B2B Marketing', 'Social Media', 'Email Marketing', 'Targeted Marketing', 'Flash Sale'];

  if (loading) {
    return (
      <DashboardLayout title="Edit Campaign">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#273480]" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Edit Campaign">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
          Campaign updated successfully!
        </div>
      )}

      <div className="max-w-4xl">
        <button
          onClick={() => navigate('/marketing')}
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Marketing
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Edit Campaign</h1>
          <p className="text-gray-600 mb-8">Update campaign details and settings</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Campaign Information */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Campaign Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Campaign Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="Summer Festival 2026"
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
                    placeholder="Describe your campaign objectives and strategy..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Campaign Type *
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a type</option>
                      {campaignTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
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
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Start Date *
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      End Date *
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Budget (RM) *
                  </label>
                  <input
                    type="number"
                    step="100"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="50000"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Marketing Channels */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl" style={{ color: '#273480' }}>Marketing Channels</h2>
                <button
                  type="button"
                  onClick={handleAddChannel}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Channel
                </button>
              </div>

              <div className="space-y-4">
                {channels.map((channel, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <select
                      value={channel}
                      onChange={(e) => handleChannelChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                    >
                      <option value="">Select a channel</option>
                      {availableChannels.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {channels.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveChannel(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Target Audience</h2>

              <div>
                <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                  Target Audience *
                </label>
                <textarea
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 h-24"
                  style={{ '--tw-ring-color': '#273480' } as any}
                  placeholder="Music Enthusiasts, Young Adults (18-35)"
                  required
                />
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
                Update Campaign
              </button>
              <button
                type="button"
                onClick={() => navigate('/marketing')}
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