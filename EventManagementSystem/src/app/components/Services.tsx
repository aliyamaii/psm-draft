import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Users, Calendar, TrendingUp, Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockServices = [
  {
    id: 1,
    name: 'VIP Access Package',
    description: 'Premium access with exclusive benefits including backstage tours, meet & greet, and priority seating.',
    price: 250.00,
    currency: 'MYR',
    category: 'Premium',
    isActive: true,
    bookingsCount: 156,
    revenueGenerated: 39000.00,
    createdAt: '2026-01-15',
    features: ['Backstage Access', 'Priority Seating', 'Meet & Greet', 'Complimentary Drinks', 'Exclusive Merchandise']
  },
  {
    id: 2,
    name: 'Early Bird Special',
    description: 'Limited time early bird tickets with 20% discount for early purchasers.',
    price: 40.00,
    currency: 'MYR',
    category: 'Discount',
    isActive: true,
    bookingsCount: 892,
    revenueGenerated: 35680.00,
    createdAt: '2026-02-01',
    features: ['20% Discount', 'Priority Entry', 'Early Access to Venue', 'Digital Welcome Pack']
  },
  {
    id: 3,
    name: 'Group Bundle Package',
    description: 'Special pricing for groups of 5 or more with additional perks and coordination.',
    price: 180.00,
    currency: 'MYR',
    category: 'Group',
    isActive: true,
    bookingsCount: 234,
    revenueGenerated: 42120.00,
    createdAt: '2026-01-20',
    features: ['Group Rate', 'Seating Together', 'Group Photo Session', 'Group Check-in', 'Group Discount']
  },
  {
    id: 4,
    name: 'Premium Parking Pass',
    description: 'Reserved parking spot close to venue entrance with security monitoring.',
    price: 25.00,
    currency: 'MYR',
    category: 'Add-on',
    isActive: true,
    bookingsCount: 567,
    revenueGenerated: 14175.00,
    createdAt: '2026-02-10',
    features: ['Reserved Spot', 'Close to Entrance', 'Security Monitoring', 'Valet Option Available']
  },
  {
    id: 5,
    name: 'Food & Beverage Package',
    description: 'All-inclusive food and beverage package with premium options and priority service.',
    price: 85.00,
    currency: 'MYR',
    category: 'Catering',
    isActive: true,
    bookingsCount: 123,
    revenueGenerated: 10455.00,
    createdAt: '2026-03-05',
    features: ['Premium Meals', 'Beverages Included', 'Priority Service', 'Vegetarian Options', 'Halal Certified']
  },
  {
    id: 6,
    name: 'Merchandise Bundle',
    description: 'Exclusive event merchandise bundle with t-shirt, poster, and collectible items.',
    price: 65.00,
    currency: 'MYR',
    category: 'Merchandise',
    isActive: true,
    bookingsCount: 345,
    revenueGenerated: 22425.00,
    createdAt: '2026-03-15',
    features: ['Event T-Shirt', 'Signed Poster', 'Collectible Pin', 'Digital Artwork', 'Exclusive Badge']
  },
  {
    id: 7,
    name: 'Accessibility Services',
    description: 'Enhanced accessibility support including wheelchair access, sign language interpreters, and assistance.',
    price: 0.00,
    currency: 'MYR',
    category: 'Accessibility',
    isActive: true,
    bookingsCount: 89,
    revenueGenerated: 0.00,
    createdAt: '2026-02-20',
    features: ['Wheelchair Access', 'Sign Language', 'Personal Assistance', 'Elevated Seating', 'Audio Description']
  },
  {
    id: 8,
    name: 'Childcare Services',
    description: 'Professional childcare services during events with supervised activities and meals.',
    price: 45.00,
    currency: 'MYR',
    category: 'Family',
    isActive: true,
    bookingsCount: 167,
    revenueGenerated: 7515.00,
    createdAt: '2026-03-01',
    features: ['Supervised Activities', 'Meals Included', 'Safe Environment', 'Age-Appropriate Activities', 'Parental Access']
  },
  {
    id: 9,
    name: 'Transportation Package',
    description: 'Shuttle service to and from venue with multiple pickup points and schedules.',
    price: 30.00,
    currency: 'MYR',
    category: 'Transport',
    isActive: true,
    bookingsCount: 234,
    revenueGenerated: 7020.00,
    createdAt: '2026-02-15',
    features: ['Shuttle Service', 'Multiple Pickup Points', 'Multiple Schedules', 'Luggage Storage', 'Real-time Tracking']
  },
  {
    id: 10,
    name: 'Photography Package',
    description: 'Professional event photography with digital copies, prints, and exclusive access.',
    price: 120.00,
    currency: 'MYR',
    category: 'Photography',
    isActive: false,
    bookingsCount: 78,
    revenueGenerated: 9360.00,
    createdAt: '2026-03-20',
    features: ['Professional Photos', 'Digital Copies', 'Prints Included', 'Exclusive Access', 'Same Day Delivery']
  },
  {
    id: 11,
    name: 'Priority Check-in',
    description: 'Skip the regular queues with dedicated priority check-in lanes and staff assistance.',
    price: 35.00,
    currency: 'MYR',
    category: 'Premium',
    isActive: true,
    bookingsCount: 445,
    revenueGenerated: 15575.00,
    createdAt: '2026-01-25',
    features: ['Dedicated Lane', 'Staff Assistance', 'Fast Track Entry', 'Welcome Kit', 'Priority Access']
  },
  {
    id: 12,
    name: 'Corporate Seating',
    description: 'Premium corporate seating areas with amenities and networking opportunities.',
    price: 300.00,
    currency: 'MYR',
    category: 'Group',
    isActive: true,
    bookingsCount: 156,
    revenueGenerated: 46800.00,
    createdAt: '2026-02-05',
    features: ['Premium Seating', 'Corporate Lounge', 'Networking Area', 'Catering Included', 'VIP Treatment']
  },
  {
    id: 13,
    name: 'Souvenir Package',
    description: 'Event-specific souvenir items including magnets, keychains, and memorabilia.',
    price: 25.00,
    currency: 'MYR',
    category: 'Merchandise',
    isActive: true,
    bookingsCount: 678,
    revenueGenerated: 16950.00,
    createdAt: '2026-03-10',
    features: ['Event Magnet', 'Custom Keychain', 'Event Program', 'Sticker Set', 'Certificate']
  },
  {
    id: 14,
    name: 'Audio Guide Rental',
    description: 'Multilingual audio guides with detailed event information and commentary.',
    price: 15.00,
    currency: 'MYR',
    category: 'Add-on',
    isActive: true,
    bookingsCount: 234,
    revenueGenerated: 3510.00,
    createdAt: '2026-02-25',
    features: ['Multilingual Support', 'Detailed Commentary', 'Event Information', 'User Friendly', 'Hygiene Assured']
  },
  {
    id: 15,
    name: 'Family Package Deal',
    description: 'Special family pricing with activities and entertainment for children.',
    price: 150.00,
    currency: 'MYR',
    category: 'Family',
    isActive: true,
    bookingsCount: 289,
    revenueGenerated: 43350.00,
    createdAt: '2026-03-25',
    features: ['Family Pricing', 'Kids Activities', 'Entertainment', 'Safety Features', 'Family Amenities']
  },
  {
    id: 16,
    name: 'Student Discount Package',
    description: 'Discounted pricing for students with valid ID including study materials.',
    price: 25.00,
    currency: 'MYR',
    category: 'Discount',
    isActive: true,
    bookingsCount: 567,
    revenueGenerated: 14175.00,
    createdAt: '2026-02-18',
    features: ['Student Pricing', 'Study Materials', 'Educational Content', 'Student Lounge', 'Networking']
  },
  {
    id: 17,
    name: 'Private VIP Room',
    description: 'Private VIP room with dedicated service and exclusive amenities.',
    price: 500.00,
    currency: 'MYR',
    category: 'Premium',
    isActive: false,
    bookingsCount: 45,
    revenueGenerated: 22500.00,
    createdAt: '2026-04-01',
    features: ['Private Space', 'Dedicated Service', 'Premium Amenities', 'Security', 'Customization']
  },
  {
    id: 18,
    name: 'Equipment Rental',
    description: 'Rent event equipment including cameras, binoculars, and accessories.',
    price: 40.00,
    currency: 'MYR',
    category: 'Add-on',
    isActive: true,
    bookingsCount: 123,
    revenueGenerated: 4920.00,
    createdAt: '2026-03-18',
    features: ['Camera Rental', 'Binoculars', 'Accessories', 'Insurance Included', 'Technical Support']
  },
  {
    id: 19,
    name: 'Group Dining Experience',
    description: 'Organized group dining with curated menus and reserved seating.',
    price: 75.00,
    currency: 'MYR',
    category: 'Catering',
    isActive: true,
    bookingsCount: 167,
    revenueGenerated: 12525.00,
    createdAt: '2026-03-08',
    features: ['Curated Menu', 'Reserved Seating', 'Group Service', 'Special Requests', 'Halal Options']
  },
  {
    id: 20,
    name: 'Live Streaming Access',
    description: 'Live streaming access for remote viewing with recording capability.',
    price: 55.00,
    currency: 'MYR',
    category: 'Premium',
    isActive: true,
    bookingsCount: 345,
    revenueGenerated: 18975.00,
    createdAt: '2026-04-10',
    features: ['Live Stream', 'Recording Access', 'HD Quality', 'Multiple Devices', 'Chat Feature']
  }
];

export default function Services() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'Premium' | 'Discount' | 'Group' | 'Add-on' | 'Catering' | 'Merchandise' | 'Accessibility' | 'Family' | 'Transport' | 'Photography'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [services, setServices] = useState(mockServices);

  // Load services from localStorage on component mount
  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services') || '[]');
    if (storedServices.length > 0) {
      setServices([...mockServices, ...storedServices]);
    }
  }, []);

  const filteredServices = services.filter(service => {
    const matchesSearch = searchQuery === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' ||
      (statusFilter === 'active' && service.isActive) ||
      (statusFilter === 'inactive' && !service.isActive);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDeleteService = (serviceId: number) => {
    if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
      const updatedServices = services.filter(service => service.id !== serviceId);
      setServices(updatedServices);

      // Update localStorage
      const storedServices = JSON.parse(localStorage.getItem('services') || '[]');
      const updatedStoredServices = storedServices.filter((s: any) => s.id !== serviceId);
      localStorage.setItem('services', JSON.stringify(updatedStoredServices));
    }
  };

  const handleEditService = (serviceId: number) => {
    navigate(`/edit-service/${serviceId}`);
  };

  const handleCreateService = () => {
    navigate('/create-service');
  };

  const handleToggleServiceStatus = (serviceId: number) => {
    const updatedServices = services.map(service =>
      service.id === serviceId
        ? { ...service, isActive: !service.isActive }
        : service
    );
    setServices(updatedServices);

    // Update localStorage
    const storedServices = JSON.parse(localStorage.getItem('services') || '[]');
    const updatedStoredServices = storedServices.map((s: any) =>
      s.id === serviceId ? { ...s, isActive: !s.isActive } : s
    );
    localStorage.setItem('services', JSON.stringify(updatedStoredServices));
  };

  const totalRevenue = filteredServices.reduce((sum, service) => sum + service.revenueGenerated, 0);
  const totalBookings = filteredServices.reduce((sum, service) => sum + service.bookingsCount, 0);

  const getCategoryBadge = (category: string) => {
    const colors = {
      Premium: 'bg-purple-100 text-purple-700',
      Discount: 'bg-green-100 text-green-700',
      Group: 'bg-blue-100 text-blue-700',
      'Add-on': 'bg-yellow-100 text-yellow-700',
      Catering: 'bg-orange-100 text-orange-700',
      Merchandise: 'bg-pink-100 text-pink-700',
      Accessibility: 'bg-teal-100 text-teal-700',
      Family: 'bg-indigo-100 text-indigo-700',
      Transport: 'bg-cyan-100 text-cyan-700',
      Photography: 'bg-red-100 text-red-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[category as keyof typeof colors]}`}>
        {category}
      </span>
    );
  };

  return (
    <DashboardLayout title="Services">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Services</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredServices.length}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Bookings</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {totalBookings.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Revenue Generated</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                RM {totalRevenue.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Service Packages</h2>
          <button
            onClick={handleCreateService}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#E11A27' }}
          >
            <Plus className="w-5 h-5" />
            Add New Service
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
                placeholder="Search services..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#273480' } as any}
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Categories</option>
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
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
                setStatusFilter('all');
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <DollarSign className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Service Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>{service.name}</h3>
                        {getCategoryBadge(service.category)}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block w-3 h-3 rounded-full ${
                            service.isActive ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        />
                        <span className="text-sm text-gray-600">
                          {service.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#273480' }} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-600">Price per person</div>
                        <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                          RM {service.price.toFixed(2)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Bookings</div>
                        <div className="text-xl font-semibold" style={{ color: '#273480' }}>
                          {service.bookingsCount}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => handleToggleServiceStatus(service.id)}
                        className="flex-1 px-4 py-2 rounded-lg text-white transition-colors text-sm"
                        style={{ backgroundColor: service.isActive ? '#9CA3AF' : '#273480' }}
                      >
                        {service.isActive ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        onClick={() => handleEditService(service.id)}
                        className="px-4 py-2 rounded-lg border-2 transition-colors text-sm"
                        style={{ borderColor: '#273480', color: '#273480' }}
                      >
                        <Edit className="w-4 h-4 inline mr-2" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="px-4 py-2 rounded-lg border-2 border-red-200 text-red-600 hover:bg-red-50 transition-colors text-sm"
                      >
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Delete
                      </button>
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