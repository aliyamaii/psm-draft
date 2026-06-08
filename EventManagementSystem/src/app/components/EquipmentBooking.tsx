import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown, ChevronUp } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

// Equipment categories and items
const equipmentCategories = [
  {
    id: 'chairs',
    name: 'Chairs & Seating',
    icon: '🪑',
    items: [
      { id: 'vip-chairs', name: 'VIP Chairs', description: 'Premium cushioned chairs for VIP guests' },
      { id: 'plastic-chairs', name: 'Plastic Chairs', description: 'Standard plastic chairs for general seating' },
      { id: 'foldable-chairs', name: 'Foldable Chairs', description: 'Easy to store and transport' },
      { id: 'banquet-chairs', name: 'Banquet Chairs', description: 'Elegant chairs for formal events' },
      { id: 'stadium-seats', name: 'Stadium Cushion Seats', description: 'Portable cushions for stadium seating' },
    ]
  },
  {
    id: 'tables',
    name: 'Tables',
    icon: '🍽️',
    items: [
      { id: 'round-tables', name: 'Round Tables (6-seater)', description: 'Standard banquet round tables' },
      { id: 'rectangular-tables', name: 'Rectangular Tables', description: '6ft and 8ft rectangular tables' },
      { id: 'cocktail-tables', name: 'Cocktail Tables', description: 'High tables for networking events' },
      { id: 'registration-tables', name: 'Registration Tables', description: 'Tables for check-in/counters' },
      { id: 'buffet-tables', name: 'Buffet Tables', description: 'Tables for food service' },
    ]
  },
  {
    id: 'sound-systems',
    name: 'Sound Systems',
    icon: '🔊',
    items: [
      { id: 'pa-system', name: 'PA System Package', description: 'Full PA system with microphones' },
      { id: 'speakers', name: 'Additional Speakers', description: 'Extra speakers for larger venues' },
      { id: 'wireless-mics', name: 'Wireless Microphones', description: 'Handheld and lapel microphones' },
      { id: 'mixing-console', name: 'Audio Mixing Console', description: 'Professional sound control' },
      { id: 'dj-equipment', name: 'DJ Equipment', description: 'Decks, mixer, and basic lighting' },
    ]
  },
  {
    id: 'lightings',
    name: 'Lightings',
    icon: '💡',
    items: [
      { id: 'stage-lights', name: 'Stage Lighting Package', description: 'Professional stage lights' },
      { id: 'spotlights', name: 'Spotlights', description: 'Focused spotlights for speakers/performers' },
      { id: 'ambient-lights', name: 'Ambient Lighting', description: 'Mood and decorative lighting' },
      { id: 'led-walls', name: 'LED Display Walls', description: 'Large LED screen displays' },
      { id: 'emergency-lights', name: 'Emergency Lighting', description: 'Backup lighting for safety' },
    ]
  },
  {
    id: 'sports-equipment',
    name: 'Sports Equipment',
    icon: '⚽',
    items: [
      { id: 'scoreboards', name: 'Electronic Scoreboards', description: 'Digital score display systems' },
      { id: 'goal-posts', name: 'Goal Posts', description: 'Removable goal posts' },
      { id: 'court-markings', name: 'Court Marking Equipment', description: 'Temporary court/field marking' },
      { id: 'timing-systems', name: 'Timing Systems', description: 'Professional timing and race clocks' },
      { id: 'ball-return', name: 'Ball Return Systems', description: 'Ball collection equipment' },
    ]
  },
  {
    id: 'venue-facilities',
    name: 'Other Venue Facilities',
    icon: '🏟️',
    items: [
      { id: 'air-conditioning', name: 'Additional AC Units', description: 'Portable air conditioning' },
      { id: 'generators', name: 'Power Generators', description: 'Backup power supply' },
      { id: 'tents', name: 'Outdoor Tents', description: 'Weather protection tents' },
      { id: 'carpets', name: 'Red Carpet/Aisle Runners', description: 'Event carpeting' },
      { id: 'barriers', name: 'Crowd Control Barriers', description: 'Metal barriers for crowd management' },
    ]
  }
];

interface SelectedItem {
  itemId: string;
  quantity: number;
}

export default function EquipmentBooking() {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleItemSelect = (categoryId: string, itemId: string) => {
    const existing = selectedItems.find(item => item.itemId === itemId);
    if (existing) {
      setSelectedItems(selectedItems.filter(item => item.itemId !== itemId));
    } else {
      setSelectedItems([...selectedItems, { itemId, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setSelectedItems(selectedItems.map(item =>
      item.itemId === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const handleCompleteBooking = () => {
    // In a real app, save equipment bookings to backend
    const bookingData = {
      eventId,
      equipmentBookings: selectedItems,
      bookedAt: new Date().toISOString(),
    };

    // Save to localStorage for demo
    const existingBookings = JSON.parse(localStorage.getItem('equipmentBookings') || '[]');
    localStorage.setItem('equipmentBookings', JSON.stringify([...existingBookings, bookingData]));

    setShowSuccess(true);

    // Navigate to landing page builder after success
    setTimeout(() => {
      navigate(`/landing-page-builder/${eventId}`);
    }, 1500);
  };

  const skipEquipment = () => {
    navigate(`/landing-page-builder/${eventId}`);
  };

  const getItemById = (itemId: string) => {
    for (const category of equipmentCategories) {
      const item = category.items.find(i => i.id === itemId);
      if (item) return { item, categoryName: category.name };
    }
    return null;
  };

  const totalSelectedCount = selectedItems.length;

  return (
    <DashboardLayout title="Equipment Booking">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center gap-2 mb-6">
          <Check className="w-5 h-5" />
          Equipment booking confirmed! Redirecting to landing page builder...
        </div>
      )}

      <div className="max-w-4xl">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Additional Equipment & Facilities</h1>
          <p className="text-gray-600 mb-8">
            Enhance your event with additional equipment and facilities available at the stadium.
            Select what you need below or skip to proceed directly to landing page creation.
          </p>

          {/* Equipment Categories */}
          <div className="space-y-4 mb-8">
            {equipmentCategories.map((category) => {
              const isExpanded = expandedCategories.has(category.id);
              const selectedInCategory = selectedItems.filter(si =>
                category.items.some(item => item.id === si.itemId)
              );

              return (
                <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{category.icon}</span>
                      <div className="text-left">
                        <h3 className="font-medium" style={{ color: '#273480' }}>{category.name}</h3>
                        {selectedInCategory.length > 0 && (
                          <p className="text-sm text-green-600">{selectedInCategory.length} item(s) selected</p>
                        )}
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
                      {category.items.map((item) => {
                        const selectedItem = selectedItems.find(si => si.itemId === item.id);
                        const isSelected = !!selectedItem;

                        return (
                          <div
                            key={item.id}
                            className={`border rounded-lg p-4 transition-colors ${
                              isSelected ? 'border-[#273480] bg-blue-50' : 'border-gray-200 bg-white'
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <input
                                type="checkbox"
                                id={item.id}
                                checked={isSelected}
                                onChange={() => handleItemSelect(category.id, item.id)}
                                className="mt-1 w-5 h-5 rounded"
                              />
                              <div className="flex-1">
                                <label
                                  htmlFor={item.id}
                                  className="font-medium cursor-pointer"
                                  style={{ color: '#273480' }}
                                >
                                  {item.name}
                                </label>
                                <p className="text-sm text-gray-500 mt-1">{item.description}</p>

                                {isSelected && (
                                  <div className="mt-4 flex items-center gap-3">
                                    <label className="text-sm text-gray-600">Quantity:</label>
                                    <input
                                      type="number"
                                      min="1"
                                      value={selectedItem?.quantity || 1}
                                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                      className="w-24 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2"
                                      style={{ '--tw-ring-color': '#273480' } as any}
                                    />
                                    <span className="text-sm text-gray-500">units</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary */}
          {totalSelectedCount > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-medium mb-4" style={{ color: '#273480' }}>
                Selected Items ({totalSelectedCount})
              </h3>
              <div className="space-y-2">
                {selectedItems.map(({ itemId, quantity }) => {
                  const result = getItemById(itemId);
                  if (!result) return null;
                  const { item, categoryName } = result;
                  return (
                    <div key={itemId} className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        {categoryName} / {item.name}
                      </span>
                      <span className="font-medium" style={{ color: '#273480' }}>
                        x{quantity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleCompleteBooking}
              className="px-8 py-3 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              {totalSelectedCount > 0 ? 'Confirm & Book Equipment' : 'Proceed Without Equipment'}
            </button>
            <button
              type="button"
              onClick={skipEquipment}
              className="px-8 py-3 rounded-lg border-2 transition-colors"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
