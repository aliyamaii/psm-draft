import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function EditService() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [features, setFeatures] = useState(['']);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load service data from localStorage or mock data
    const loadService = () => {
      setLoading(true);

      // Try to get from localStorage first
      const storedServices = JSON.parse(localStorage.getItem('services') || '[]');
      const storedService = storedServices.find((s: any) => s.id.toString() === id);

      if (storedService) {
        setServiceName(storedService.name);
        setDescription(storedService.description);
        setPrice(storedService.price.toString());
        setCategory(storedService.category);
        setIsActive(storedService.isActive);
        setFeatures(storedService.features || ['']);
      } else {
        // Use a mock service for demo if not found
        const mockService = {
          id: 1,
          name: 'VIP Access Package',
          description: 'Premium access with exclusive benefits including backstage tours, meet & greet, and priority seating.',
          price: 250.00,
          category: 'Premium',
          isActive: true,
          features: ['Backstage Access', 'Priority Seating', 'Meet & Greet', 'Complimentary Drinks', 'Exclusive Merchandise']
        };
        setServiceName(mockService.name);
        setDescription(mockService.description);
        setPrice(mockService.price.toString());
        setCategory(mockService.category);
        setIsActive(mockService.isActive);
        setFeatures(mockService.features);
      }

      setLoading(false);
    };

    loadService();
  }, [id]);

  const handleAddFeature = () => {
    setFeatures([...features, '']);
  };

  const handleRemoveFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!serviceName || !description || !price || !category) {
      alert('Please fill in all required fields');
      return;
    }

    // Update service data
    const serviceData = {
      id: parseInt(id || '0'),
      name: serviceName,
      description,
      price: parseFloat(price),
      currency: 'MYR',
      category,
      isActive,
      bookingsCount: 0, // Preserve this in real implementation
      revenueGenerated: 0, // Preserve this in real implementation
      createdAt: new Date().toISOString().split('T')[0],
      features: features.filter(f => f.trim() !== '')
    };

    // Update service data in localStorage
    const existingServices = JSON.parse(localStorage.getItem('services') || '[]');
    const updatedServices = existingServices.map((s: any) =>
      s.id.toString() === id ? serviceData : s
    );
    localStorage.setItem('services', JSON.stringify(updatedServices));

    // Show success message
    setShowSuccess(true);

    // Navigate back to services page after showing success message
    setTimeout(() => {
      navigate('/services');
    }, 1500);
  };

  if (loading) {
    return (
      <DashboardLayout title="Edit Service">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#273480]" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Edit Service">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
          Service updated successfully!
        </div>
      )}

      <div className="max-w-4xl">
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Edit Service</h1>
          <p className="text-gray-600 mb-8">Update service details and features</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Basic Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Service Name *
                  </label>
                  <input
                    type="text"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="VIP Access Package"
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
                    placeholder="Describe your service..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Price (RM) *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="250.00"
                      required
                    />
                  </div>

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
                      <option value="Premium">Premium</option>
                      <option value="Discount">Discount</option>
                      <option value="Group">Group</option>
                      <option value="Add-on">Add-on</option>
                      <option value="Catering">Catering</option>
                      <option value="Merchandise">Merchandise</option>
                      <option value="Accessibility">Accessibility</option>
                      <option value="Family">Family</option>
                      <option value="Transport">Transport</option>
                      <option value="Photography">Photography</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  <div>
                    <span style={{ color: '#273480' }}>Active Service</span>
                    <p className="text-sm text-gray-500">Make this service available for booking</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Service Features */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl" style={{ color: '#273480' }}>Service Features</h2>
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Feature
                </button>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="E.g., Backstage Access"
                    />
                    {features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(index)}
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
                Update Service
              </button>
              <button
                type="button"
                onClick={() => navigate('/services')}
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