import { Link } from 'react-router-dom';
import { Calendar, MapPin, Download, Ticket, QrCode } from 'lucide-react';

const mockTickets = [
  {
    id: 1,
    eventId: 1,
    eventName: 'Summer Music Festival 2026',
    date: '2026-07-15',
    time: '18:00',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'VIP Standing',
    quantity: 2,
    price: 120,
    bookingDate: '2026-04-01',
    status: 'confirmed'
  },
  {
    id: 2,
    eventId: 2,
    eventName: 'Tech Conference 2026',
    date: '2026-05-20',
    time: '09:00',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'Pro Pass',
    quantity: 1,
    price: 250,
    bookingDate: '2026-03-15',
    status: 'confirmed'
  },
  {
    id: 3,
    eventId: 3,
    eventName: 'Championship Final',
    date: '2026-06-10',
    time: '15:00',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'Premium Seating',
    quantity: 4,
    price: 85,
    bookingDate: '2026-04-10',
    status: 'confirmed'
  },
  {
    id: 4,
    eventId: 4,
    eventName: 'Jazz Night',
    date: '2026-08-22',
    time: '20:00',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxqXp6eiUyMG9yZWNydHxlbnwwfHx8fHwxNzc2MjQwMjc4fA&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'Standard',
    quantity: 1,
    price: 45,
    bookingDate: '2026-04-12',
    status: 'pending'
  },
  {
    id: 5,
    eventId: 5,
    eventName: 'Startup Expo 2026',
    date: '2026-09-05',
    time: '10:00',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'Exhibitor Pass',
    quantity: 2,
    price: 180,
    bookingDate: '2026-04-08',
    status: 'confirmed'
  },
  {
    id: 6,
    eventId: 6,
    eventName: 'Rock Concert',
    date: '2026-07-28',
    time: '19:30',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNnx8Y29uY2VydCUyMHBlbnZvbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'General Admission',
    quantity: 3,
    price: 75,
    bookingDate: '2026-04-05',
    status: 'confirmed'
  },
  {
    id: 7,
    eventId: 7,
    eventName: 'Business Summit',
    date: '2026-10-15',
    time: '08:30',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8Y29uZmVyZW5jZSUyMHBlbnZlbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'VIP Package',
    quantity: 1,
    price: 350,
    bookingDate: '2026-04-02',
    status: 'confirmed'
  },
  {
    id: 8,
    eventId: 8,
    eventName: 'Comedy Show',
    date: '2026-06-18',
    time: '21:00',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsaXZlJTIwcGVyZm9ybWFuY2V8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    tier: 'Balcony Seating',
    quantity: 2,
    price: 55,
    bookingDate: '2026-04-14',
    status: 'pending'
  }
];

export default function MyTickets() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#273480' }} />
            <span className="font-semibold" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link to="/profile" className="w-8 h-8 rounded-full flex items-center justify-center hover:ring-2 hover:ring-[#273480] hover:ring-offset-2 transition-all" style={{ backgroundColor: '#273480' }}>
              <span className="text-white text-sm">JD</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>My Tickets</h1>
          <p className="text-gray-600">View and manage your event tickets</p>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex">
                {/* Left Side - Event Info */}
                <div className="flex-1 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={ticket.image}
                      alt={ticket.eventName}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="mb-2" style={{ color: '#273480' }}>{ticket.eventName}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(ticket.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })} at {ticket.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{ticket.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1">Ticket Type</div>
                        <div style={{ color: '#273480' }}>{ticket.tier}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Quantity</div>
                        <div style={{ color: '#273480' }}>{ticket.quantity}x</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Price per Ticket</div>
                        <div style={{ color: '#273480' }}>RM {ticket.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Total Paid</div>
                        <div style={{ color: '#273480' }}>
                          RM {(ticket.price * ticket.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-700"
                    >
                      {ticket.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </span>
                    <span className="text-xs text-gray-500">
                      Booked on {new Date(ticket.bookingDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      className="flex-1 px-4 py-2 rounded-lg text-white transition-colors text-sm"
                      style={{ backgroundColor: '#E11A27' }}
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download Ticket
                    </button>
                    <Link
                      to={`/event/${ticket.eventId}`}
                      className="px-4 py-2 rounded-lg border-2 transition-colors text-sm"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      View Event
                    </Link>
                  </div>
                </div>

                {/* Right Side - QR Code */}
                <div className="w-32 flex flex-col items-center justify-center border-l-2 border-dashed border-gray-200 p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: 'white' }}>
                    <QrCode className="w-16 h-16" style={{ color: '#273480' }} />
                  </div>
                  <div className="text-xs text-gray-500 text-center">Scan at venue</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no tickets) */}
        {mockTickets.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f3f3f5' }}>
              <Ticket className="w-8 h-8" style={{ color: '#273480' }} />
            </div>
            <h3 className="text-xl mb-2" style={{ color: '#273480' }}>No Tickets Yet</h3>
            <p className="text-gray-600 mb-6">
              You haven't booked any tickets. Explore upcoming events and get your tickets now!
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 rounded-lg text-white"
              style={{ backgroundColor: '#E11A27' }}
            >
              Browse Events
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
