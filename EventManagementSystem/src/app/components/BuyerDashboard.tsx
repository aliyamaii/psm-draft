import { Link, useNavigate } from 'react-router-dom';
import { Ticket, Calendar, Heart, Search } from 'lucide-react';
import EventCalendar from './EventCalendar';
import BuyerLayout from './BuyerLayout';

const upcomingEvents = [
  {
    id: 1,
    name: 'Summer Music Festival 2026',
    date: '2026-07-15',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Music',
    price: 50
  },
  {
    id: 2,
    name: 'Tech Conference 2026',
    date: '2026-05-20',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Conference',
    price: 100
  },
  {
    id: 3,
    name: 'Championship Final',
    date: '2026-06-10',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Sports',
    price: 80
  }
];

const myTicketsCount = 2;

export default function BuyerDashboard() {
  const navigate = useNavigate();

  const calendarEvents = upcomingEvents.map(event => ({
    id: event.id,
    name: event.name,
    date: event.date,
    color: event.category === 'Music' ? '#E11A27' : event.category === 'Sports' ? '#A04292' : '#273480'
  }));

  const handleEventClick = (event: any) => {
    navigate(`/event/${event.id}`);
  };

  return (
    <BuyerLayout title="Welcome">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Welcome Back!</h1>
          <p className="text-gray-600">Discover and book tickets to amazing events</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/my-tickets"
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Ticket className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl mb-1" style={{ color: '#273480' }}>{myTicketsCount}</div>
            <div className="text-sm text-gray-600">My Tickets</div>
          </Link>

          <Link
            to="/buyer-dashboard"
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl mb-1" style={{ color: '#273480' }}>1</div>
            <div className="text-sm text-gray-600">Upcoming Events</div>
          </Link>

          <Link
            to="/saved-events"
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A04292' }}>
                <Heart className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl mb-1" style={{ color: '#273480' }}>5</div>
            <div className="text-sm text-gray-600">Saved Events</div>
          </Link>
        </div>

        {/* Calendar */}
        <div className="mb-8">
          <EventCalendar events={calendarEvents} onEventClick={handleEventClick} />
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for events, venues, or categories..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            />
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl" style={{ color: '#273480' }}>Upcoming Events</h2>
            <button
              onClick={() => navigate('/buyer-dashboard')}
              className="text-sm" style={{ color: '#E11A27' }}
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow text-left"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-white text-gray-700">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="mb-2" style={{ color: '#273480' }}>{event.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{event.venue}</span>
                    <span className="font-medium" style={{ color: '#E11A27' }}>
                      From RM {event.price}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl mb-6" style={{ color: '#273480' }}>Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Music & Concerts', 'Sports', 'Conference', 'Arts & Culture'].map((category) => (
              <button
                key={category}
                onClick={() => navigate('/buyer-dashboard')}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-lg mb-1" style={{ color: '#273480' }}>{category}</div>
                <div className="text-sm text-gray-600">Browse events</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
}
