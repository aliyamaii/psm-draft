import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket, Calendar, MapPin, Download, Share2, QrCode, CheckCircle } from 'lucide-react';
import BuyerLayout from './BuyerLayout';

const myTickets = [
  {
    id: 1,
    eventName: 'Summer Music Festival 2026',
    date: '2026-07-15',
    time: '18:00',
    venue: 'National Stadium',
    seat: 'A-12',
    gate: 'Gate 3',
    price: 50.00,
    status: 'active',
    qrCode: 'SMF2026-A12',
    image: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Music'
  },
  {
    id: 2,
    eventName: 'Tech Conference 2026',
    date: '2026-05-20',
    time: '09:00',
    venue: 'Convention Center',
    seat: 'VIP-5',
    gate: 'Main Entrance',
    price: 100.00,
    status: 'active',
    qrCode: 'TC2026-VIP5',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Conference'
  },
  {
    id: 3,
    eventName: 'Championship Final',
    date: '2026-06-10',
    time: '15:00',
    venue: 'Sports Arena',
    seat: 'Section B-24',
    gate: 'Gate 1',
    price: 80.00,
    status: 'used',
    qrCode: 'CF2026-B24',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    category: 'Sports'
  }
];

export default function BuyerMyTickets() {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState<typeof myTickets[0] | null>(null);
  const [showQRModal, setShowQRModal] = useState(false);

  const activeTickets = myTickets.filter(ticket => ticket.status === 'active');
  const usedTickets = myTickets.filter(ticket => ticket.status === 'used');

  const handleViewQR = (ticket: typeof myTickets[0]) => {
    setSelectedTicket(ticket);
    setShowQRModal(true);
  };

  const handleDownloadTicket = (ticket: typeof myTickets[0]) => {
    // Simulate download
    console.log('Downloading ticket:', ticket.qrCode);
  };

  const handleShareTicket = (ticket: typeof myTickets[0]) => {
    // Simulate share
    if (navigator.share) {
      navigator.share({
        title: `My ticket for ${ticket.eventName}`,
        text: `I have a ticket for ${ticket.eventName} on ${new Date(ticket.date).toLocaleDateString()}`,
        url: window.location.href
      });
    }
  };

  return (
    <BuyerLayout title="My Tickets">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>My Tickets</h1>
          <p className="text-gray-600">Manage and view your event tickets</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold" style={{ color: '#273480' }}>{myTickets.length}</div>
                <div className="text-sm text-gray-600">Total Tickets</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold" style={{ color: '#273480' }}>{activeTickets.length}</div>
                <div className="text-sm text-gray-600">Active Tickets</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#A04292' }}>
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold" style={{ color: '#273480' }}>{usedTickets.length}</div>
                <div className="text-sm text-gray-600">Used Tickets</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Tickets */}
        {activeTickets.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Active Tickets</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeTickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={ticket.image}
                        alt={ticket.eventName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#273480', color: 'white' }}>
                            {ticket.category}
                          </span>
                          <h3 className="text-lg font-semibold mt-2" style={{ color: '#273480' }}>{ticket.eventName}</h3>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          Active
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(ticket.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span>{ticket.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{ticket.venue}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600">Seat: <strong style={{ color: '#273480' }}>{ticket.seat}</strong></span>
                          <span className="text-gray-600">Gate: <strong style={{ color: '#273480' }}>{ticket.gate}</strong></span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewQR(ticket)}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white text-sm transition-colors"
                          style={{ backgroundColor: '#E11A27' }}
                        >
                          <QrCode className="w-4 h-4" />
                          View QR
                        </button>
                        <button
                          onClick={() => handleDownloadTicket(ticket)}
                          className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleShareTicket(ticket)}
                          className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Used Tickets */}
        {usedTickets.length > 0 && (
          <div>
            <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Used Tickets</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {usedTickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden opacity-75">
                  <div className="flex">
                    <div className="w-1/3 relative">
                      <img
                        src={ticket.image}
                        alt={ticket.eventName}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <span className="px-2 py-1 rounded text-xs bg-gray-200 text-gray-700">
                            {ticket.category}
                          </span>
                          <h3 className="text-lg font-semibold mt-2 text-gray-700">{ticket.eventName}</h3>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          Used
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(ticket.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span>{ticket.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{ticket.venue}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600">Seat: <strong>{ticket.seat}</strong></span>
                          <span className="text-gray-600">Gate: <strong>{ticket.gate}</strong></span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Paid: RM {ticket.price.toFixed(2)}</span>
                        <button
                          onClick={() => navigate(`/event/${ticket.id}`)}
                          className="text-sm" style={{ color: '#E11A27' }}
                        >
                          View Event →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {showQRModal && selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-semibold" style={{ color: '#273480' }}>Ticket QR Code</h2>
                <button
                  onClick={() => setShowQRModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={selectedTicket.image}
                    alt={selectedTicket.eventName}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#273480' }}>{selectedTicket.eventName}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {new Date(selectedTicket.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>

                <div className="bg-white border-4 border-gray-200 rounded-xl p-6 mb-4 inline-block">
                  <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Seat:</span>
                    <strong style={{ color: '#273480' }}>{selectedTicket.seat}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Gate:</span>
                    <strong style={{ color: '#273480' }}>{selectedTicket.gate}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <strong style={{ color: '#273480' }}>{selectedTicket.time}</strong>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: `My ticket for ${selectedTicket.eventName}`,
                          text: `I have a ticket for ${selectedTicket.eventName} on ${new Date(selectedTicket.date).toLocaleDateString()}`,
                          url: window.location.href
                        });
                      }
                    }}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Share Ticket
                  </button>
                  <button
                    onClick={() => setShowQRModal(false)}
                    className="flex-1 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-colors"
                    style={{ backgroundColor: '#E11A27' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BuyerLayout>
  );
}
