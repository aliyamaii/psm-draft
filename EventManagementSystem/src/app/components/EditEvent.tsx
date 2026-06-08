import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Upload, Plus, Trash2 } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockEventsData: Record<string, any> = {
  '1': {
    name: 'Summer Music Festival 2026',
    description: 'Experience the biggest music festival of the summer featuring world-class artists',
    venue: 'Stadium Nasional Bukit Jalil',
    date: '2026-07-15',
    time: '18:00',
    category: 'music',
    slug: 'summer-music-festival-2026',
    tiers: [
      { name: 'General Admission', price: '50', quantity: '5000' },
      { name: 'VIP Standing', price: '120', quantity: '1500' },
      { name: 'Premium Seating', price: '200', quantity: '500' }
    ]
  }
};

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventData = mockEventsData[id || '1'];

  const [eventName, setEventName] = useState(eventData?.name || '');
  const [description, setDescription] = useState(eventData?.description || '');
  const [venue, setVenue] = useState(eventData?.venue || '');
  const [date, setDate] = useState(eventData?.date || '');
  const [time, setTime] = useState(eventData?.time || '');
  const [category, setCategory] = useState(eventData?.category || '');
  const [slug, setSlug] = useState(eventData?.slug || '');
  const [ticketTiers, setTicketTiers] = useState(eventData?.tiers || [
    { name: 'General Admission', price: '', quantity: '' }
  ]);

  const handleAddTier = () => {
    setTicketTiers([...ticketTiers, { name: '', price: '', quantity: '' }]);
  };

  const handleRemoveTier = (index: number) => {
    setTicketTiers(ticketTiers.filter((_, i) => i !== index));
  };

  const handleTierChange = (index: number, field: string, value: string) => {
    const newTiers = [...ticketTiers];
    newTiers[index] = { ...newTiers[index], [field]: value };
    setTicketTiers(newTiers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <DashboardLayout title="Edit Event">
      <div className="max-w-4xl">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Edit Event</h1>
              <p className="text-gray-600">Update your event details</p>
            </div>
            <Link
              to={`/edit-landing/${id}`}
              className="px-4 py-2 rounded-lg border-2 transition-colors text-sm"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Edit Landing Page
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Basic Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Event Name *
                  </label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
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
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="music">Music & Concerts</option>
                      <option value="sports">Sports</option>
                      <option value="conference">Conference & Business</option>
                      <option value="arts">Arts & Culture</option>
                      <option value="food">Food & Drink</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Venue/Stadium *
                    </label>
                    <input
                      type="text"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                      disabled
                    />
                    <p className="text-xs text-gray-500 mt-1">Venue cannot be changed after creation</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Date *
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Time *
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Landing Page Slug *
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">eventhub.com/e/</span>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Event Image */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Event Image</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                <button
                  type="button"
                  className="mt-4 px-6 py-2 rounded-lg border-2 transition-colors"
                  style={{ borderColor: '#273480', color: '#273480' }}
                >
                  Choose File
                </button>
              </div>
            </div>

            {/* Ticket Tiers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl" style={{ color: '#273480' }}>Ticket Tiers</h2>
                <button
                  type="button"
                  onClick={handleAddTier}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Tier
                </button>
              </div>

              <div className="space-y-4">
                {ticketTiers.map((tier, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                            Tier Name
                          </label>
                          <input
                            type="text"
                            value={tier.name}
                            onChange={(e) => handleTierChange(index, 'name', e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#273480' } as any}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                            Price (RM)
                          </label>
                          <input
                            type="number"
                            value={tier.price}
                            onChange={(e) => handleTierChange(index, 'price', e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#273480' } as any}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                            Quantity
                          </label>
                          <input
                            type="number"
                            value={tier.quantity}
                            onChange={(e) => handleTierChange(index, 'quantity', e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': '#273480' } as any}
                            required
                          />
                        </div>
                      </div>

                      {ticketTiers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTier(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg mt-7"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="px-8 py-3 rounded-lg text-white transition-colors"
                style={{ backgroundColor: '#E11A27' }}
              >
                Save Changes
              </button>
              <Link
                to="/dashboard"
                className="px-8 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
