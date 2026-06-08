import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, MapPin, Trash2, Ticket, ExternalLink } from 'lucide-react';
import BuyerLayout from './BuyerLayout';

const savedEvents = [
  {
    id: 4,
    name: 'Jazz Night Live',
    date: '2026-08-20',
    venue: 'City Jazz Club',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxqYXp6JTIwY29uY2VydHxlbmF8MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Music',
    price: 35.00,
    ticketStatus: 'available',
    savedDate: '2026-04-10'
  },
  {
    id: 5,
    name: 'Stand-up Comedy Night',
    date: '2026-09-15',
    venue: 'Comedy Central',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjb21lZHklMjBjbHVifGVufDB8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Comedy',
    price: 25.00,
    ticketStatus: 'limited',
    savedDate: '2026-04-08'
  },
  {
    id: 6,
    name: 'Food Festival',
    date: '2026-10-05',
    venue: 'Central Park',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmb29kJTIwZmVzdGl2YWx8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Food',
    price: 15.00,
    ticketStatus: 'available',
    savedDate: '2026-04-05'
  },
  {
    id: 7,
    name: 'Art Exhibition Opening',
    date: '2026-07-28',
    venue: 'Art Gallery KL',
    image: 'https://images.unsplash.com/photo-1577720643271-66f541818a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkcnQlMjBhcnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Arts',
    price: 20.00,
    ticketStatus: 'available',
    savedDate: '2026-04-12'
  },
  {
    id: 8,
    name: 'Kids Fun Fair',
    date: '2026-09-30',
    venue: 'Family Park',
    image: 'https://images.unsplash.com/photo-1560341347-951896e6909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxr2lkcyUyMHVuJTIwZmFucmF8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Family',
    price: 30.00,
    ticketStatus: 'available',
    savedDate: '2026-04-02'
  },
  {
    id: 9,
    name: 'Gaming Tournament',
    date: '2026-11-15',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxqYW1pbmclMjB0b3VybWFtbWV8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Sports',
    price: 25.00,
    ticketStatus: 'limited',
    savedDate: '2026-04-01'
  },
  {
    id: 10,
    name: 'Tech Conference 2026',
    date: '2026-05-20',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Conference',
    price: 100.00,
    ticketStatus: 'soldout',
    savedDate: '2026-03-28'
  },
  {
    id: 11,
    name: 'Championship Final',
    date: '2026-06-10',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Sports',
    price: 80.00,
    ticketStatus: 'soldout',
    savedDate: '2026-03-25'
  }
];

export default function BuyerSavedEvents() {
  const navigate = useNavigate();
  const [savedEventsList, setSavedEventsList] = useState(savedEvents);
  const [filter, setFilter] = useState<'all' | 'available' | 'limited' | 'soldout'>('all');

  const handleRemoveFromSaved = (eventId: number) => {
    setSavedEventsList(savedEventsList.filter(event => event.id !== eventId));
  };

  const filteredEvents = savedEventsList.filter(event => {
    if (filter === 'all') return true;
    return event.ticketStatus === filter;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      available: 'bg-green-100 text-green-700',
      limited: 'bg-yellow-100 text-yellow-700',
      soldout: 'bg-red-100 text-red-700'
    };
    const labels = {
      available: 'Available',
      limited: 'Limited',
      soldout: 'Sold Out'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <BuyerLayout title="Saved Events">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Saved Events</h1>
          <p className="text-gray-600">Events you've saved for later</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold" style={{ color: '#273480' }}>{savedEventsList.length}</div>
                <div className="text-sm text-gray-600">Total Saved</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold" style={{ color: '#273480' }}>
                  {savedEventsList.filter(e => e.ticketStatus !== 'soldout').length}
                </div>
                <div className="text-sm text-gray-600">Available Events</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A04292' }}>
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold" style={{ color: '#273480' }}>
                  {savedEventsList.filter(e => e.ticketStatus === 'limited').length}
                </div>
                <div className="text-sm text-gray-600">Limited Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Filter by status:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === 'all'
                    ? 'bg-[#273480] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All ({savedEventsList.length})
              </button>
              <button
                onClick={() => setFilter('available')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === 'available'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Available ({savedEventsList.filter(e => e.ticketStatus === 'available').length})
              </button>
              <button
                onClick={() => setFilter('limited')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === 'limited'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Limited ({savedEventsList.filter(e => e.ticketStatus === 'limited').length})
              </button>
              <button
                onClick={() => setFilter('soldout')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === 'soldout'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Sold Out ({savedEventsList.filter(e => e.ticketStatus === 'soldout').length})
              </button>
            </div>
          </div>
        </div>

        {/* Saved Events List */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No saved events</h3>
            <p className="text-gray-600 mb-4">Start exploring and save events you're interested in!</p>
            <button
              onClick={() => navigate('/buyer-dashboard')}
              className="px-6 py-3 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              Browse Events
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
                      onClick={() => handleRemoveFromSaved(event.id)}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-red-50 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-white text-gray-700">
                      {event.category}
                    </span>
                    {getStatusBadge(event.ticketStatus)}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#273480' }}>{event.name}</h3>
                  <div className="space-y-2 mb-4">
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
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Saved on {new Date(event.savedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">From RM {event.price.toFixed(2)}</span>
                    <button
                      onClick={() => navigate(`/event/${event.id}`)}
                      className="px-4 py-2 rounded-lg text-sm text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: event.ticketStatus === 'soldout' ? '#9CA3AF' : '#E11A27'
                      }}
                      disabled={event.ticketStatus === 'soldout'}
                    >
                      {event.ticketStatus === 'soldout' ? 'Sold Out' : 'View Details'}
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
