import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, MapPin, Heart, Filter, SlidersHorizontal, Ticket, Star, Clock } from 'lucide-react';
import BuyerLayout from './BuyerLayout';

const events = [
  {
    id: 1,
    name: 'Summer Music Festival 2026',
    date: '2026-07-15',
    time: '18:00',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Music',
    price: 50.00,
    rating: 4.8,
    ticketsSold: 8543,
    capacity: 15000,
    status: 'active'
  },
  {
    id: 2,
    name: 'Tech Conference 2026',
    date: '2026-05-20',
    time: '09:00',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Conference',
    price: 100.00,
    rating: 4.6,
    ticketsSold: 1250,
    capacity: 2000,
    status: 'active'
  },
  {
    id: 3,
    name: 'Championship Final',
    date: '2026-06-10',
    time: '15:00',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Sports',
    price: 80.00,
    rating: 4.9,
    ticketsSold: 12000,
    capacity: 12000,
    status: 'soldout'
  },
  {
    id: 4,
    name: 'Jazz Night Live',
    date: '2026-08-20',
    time: '20:00',
    venue: 'City Jazz Club',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxqYXp6JTIwY29uY2VydHxlbmF8MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Music',
    price: 35.00,
    rating: 4.5,
    ticketsSold: 234,
    capacity: 300,
    status: 'limited'
  },
  {
    id: 5,
    name: 'Stand-up Comedy Night',
    date: '2026-09-15',
    time: '19:30',
    venue: 'Comedy Central',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjb21lZHklMjBjbHVifGVufDB8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Comedy',
    price: 25.00,
    rating: 4.3,
    ticketsSold: 156,
    capacity: 200,
    status: 'active'
  },
  {
    id: 6,
    name: 'Food Festival',
    date: '2026-10-05',
    time: '11:00',
    venue: 'Central Park',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmb29kJTIwZmVzdGl2YWx8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Food',
    price: 15.00,
    rating: 4.7,
    ticketsSold: 2341,
    capacity: 5000,
    status: 'active'
  },
  {
    id: 7,
    name: 'Rock Concert 2026',
    date: '2026-08-12',
    time: '19:30',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNnx8Y29uY2VydCUyMHBlbnZvbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Music',
    price: 75.00,
    rating: 4.7,
    ticketsSold: 8923,
    capacity: 25000,
    status: 'active'
  },
  {
    id: 8,
    name: 'Business Networking Event',
    date: '2026-06-22',
    time: '17:00',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8Y29uZmVyZW5jZSUyMHBlbnZlbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Conference',
    price: 45.00,
    rating: 4.4,
    ticketsSold: 567,
    capacity: 800,
    status: 'active'
  },
  {
    id: 9,
    name: 'Art Exhibition Opening',
    date: '2026-07-28',
    time: '14:00',
    venue: 'Art Gallery KL',
    image: 'https://images.unsplash.com/photo-1577720643271-66f541818a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkcnQlMjBhcnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Arts',
    price: 20.00,
    rating: 4.6,
    ticketsSold: 234,
    capacity: 400,
    status: 'limited'
  },
  {
    id: 10,
    name: 'Kids Fun Fair',
    date: '2026-09-30',
    time: '10:00',
    venue: 'Family Park',
    image: 'https://images.unsplash.com/photo-1560341347-951896e6909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxr2lkcyUyMHVuJTIwZmFucmF8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Family',
    price: 30.00,
    rating: 4.8,
    ticketsSold: 4567,
    capacity: 8000,
    status: 'active'
  },
  {
    id: 11,
    name: 'Gaming Tournament',
    date: '2026-11-15',
    time: '13:00',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxqYW1pbmclMjB0b3VybWFtbWV8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Sports',
    price: 25.00,
    rating: 4.5,
    ticketsSold: 789,
    capacity: 1500,
    status: 'active'
  },
  {
    id: 12,
    name: 'Wine Tasting Event',
    date: '2026-08-25',
    time: '16:30',
    venue: 'City Hotel',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3aW5lJTIwdGFzdGluZ3xlbnwwfHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Food',
    price: 85.00,
    rating: 4.9,
    ticketsSold: 123,
    capacity: 150,
    status: 'soldout'
  }
];

const categories = [
  { id: 'all', name: 'All Events', icon: '🎯' },
  { id: 'music', name: 'Music & Concerts', icon: '🎵' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'conference', name: 'Conferences', icon: '🎤' },
  { id: 'comedy', name: 'Comedy', icon: '😂' },
  { id: 'food', name: 'Food & Drinks', icon: '🍽️' },
  { id: 'arts', name: 'Arts & Culture', icon: '🎨' },
  { id: 'family', name: 'Family Events', icon: '👨‍👩‍👧‍👦' }
];

export default function BuyerBrowse() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<'all' | 'free' | 'under50' | '50to100' | 'over100'>('all');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month' | 'future'>('all');
  const [venueFilter, setVenueFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [savedEvents, setSavedEvents] = useState<number[]>([]);

  const venues = Array.from(new Set(events.map(event => event.venue)));

  const filteredEvents = events.filter(event => {
    const matchesSearch = searchQuery === '' ||
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || event.category.toLowerCase() === selectedCategory;

    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'free' && event.price === 0) ||
      (priceRange === 'under50' && event.price < 50) ||
      (priceRange === '50to100' && event.price >= 50 && event.price <= 100) ||
      (priceRange === 'over100' && event.price > 100);

    const matchesDate = dateFilter === 'all' ||
      (dateFilter === 'future' && new Date(event.date) > new Date());

    const matchesVenue = venueFilter === 'all' || event.venue === venueFilter;

    return matchesSearch && matchesCategory && matchesPrice && matchesDate && matchesVenue;
  });

  const handleToggleSaved = (eventId: number) => {
    setSavedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      limited: 'bg-yellow-100 text-yellow-700',
      soldout: 'bg-red-100 text-red-700'
    };
    const labels = {
      active: 'Available',
      limited: 'Limited',
      soldout: 'Sold Out'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const getEventProgress = (sold: number, capacity: number) => {
    const percentage = (sold / capacity) * 100;
    return Math.min(percentage, 100);
  };

  return (
    <BuyerLayout title="Browse Events">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Browse Events</h1>
          <p className="text-gray-600">Discover and book tickets to amazing events</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for events, venues, or categories..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">Price Range</label>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: 'free', label: 'Free' },
                    { id: 'under50', label: 'Under RM50' },
                    { id: '50to100', label: 'RM50 - RM100' },
                    { id: 'over100', label: 'Over RM100' }
                  ].map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id as any)}
                      className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                        priceRange === range.id
                          ? 'bg-[#273480] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">Date</label>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { id: 'all', label: 'All Dates' },
                    { id: 'future', label: 'Upcoming' }
                  ].map((date) => (
                    <button
                      key={date.id}
                      onClick={() => setDateFilter(date.id as any)}
                      className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                        dateFilter === date.id
                          ? 'bg-[#273480] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {date.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">Venue</label>
                <select
                  value={venueFilter}
                  onChange={(e) => setVenueFilter(e.target.value)}
                  className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#273480' } as any}
                >
                  <option value="all">All Venues</option>
                  {venues.map(venue => (
                    <option key={venue} value={venue}>{venue}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Categories</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-3 rounded-xl border transition-all text-center ${
                  selectedCategory === category.id
                    ? 'bg-[#273480] text-white border-[#273480]'
                    : 'bg-white border-gray-200 hover:border-[#273480]'
                }`}
              >
                <div className="text-2xl mb-1">{category.icon}</div>
                <div className="text-xs">{category.name.split(' ')[0]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>
            {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Found
          </h2>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setPriceRange('all');
              setDateFilter('all');
              setVenueFilter('all');
            }}
            className="text-sm text-gray-600 hover:text-[#E11A27] transition-colors"
          >
            Clear Filters
          </button>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No events found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
                setDateFilter('all');
                setVenueFilter('all');
              }}
              className="px-6 py-3 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => handleToggleSaved(event.id)}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-red-50 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${savedEvents.includes(event.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
                      />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-white text-gray-700">
                      {event.category}
                    </span>
                    {getStatusBadge(event.status)}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{event.rating}</span>
                      </div>
                      <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>{event.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  {/* Ticket Progress */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>{event.ticketsSold.toLocaleString()} tickets sold</span>
                      <span>{getEventProgress(event.ticketsSold, event.capacity).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{
                          width: `${getEventProgress(event.ticketsSold, event.capacity)}%`,
                          backgroundColor: getEventProgress(event.ticketsSold, event.capacity) > 80 ? '#E11A27' : '#273480'
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">From </span>
                      <span className="font-semibold" style={{ color: '#E11A27' }}>
                        RM {event.price.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => navigate(`/event/${event.id}`)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: event.status === 'soldout' ? '#9CA3AF' : '#E11A27'
                      }}
                      disabled={event.status === 'soldout'}
                    >
                      {event.status === 'soldout' ? (
                        'Sold Out'
                      ) : (
                        <>
                          <Ticket className="w-4 h-4" />
                          Book Now
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </BuyerLayout>
  );
}
