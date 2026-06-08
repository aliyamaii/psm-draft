import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Share2, Heart, Ticket, Minus, Plus, QrCode, Check, ArrowLeft } from 'lucide-react';

interface EventDetailProps {
  isLoggedIn: boolean;
  userType: 'organizer' | 'buyer';
}

const mockEventData = {
  1: {
    name: 'Summer Music Festival 2026',
    date: '2026-07-15',
    time: '18:00',
    venue: 'National Stadium',
    location: 'Kuala Lumpur, Malaysia',
    image: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Experience the biggest music festival of summer featuring world-class artists, multiple stages, and unforgettable performances. Join thousands of music lovers for a night of incredible live music, food, and entertainment.',
    organizer: 'Perbadanan Stadium Malaysia',
    capacity: 15000,
    ticketsSold: 8543,
    hasSeats: true,
    hasSessions: false,
    sessions: [],
    tiers: [
      { id: 1, name: 'General Admission', price: 50, available: 3457, hasSeats: false },
      { id: 2, name: 'VIP Standing', price: 120, available: 850, hasSeats: false },
      { id: 3, name: 'Premium Seating', price: 200, available: 150, hasSeats: true }
    ]
  },
  2: {
    name: 'Tech Conference 2026',
    date: '2026-05-20',
    time: '09:00',
    venue: 'Convention Center',
    location: 'Kuala Lumpur, Malaysia',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Join industry leaders and innovators for a day of inspiring talks, workshops, and networking opportunities.',
    organizer: 'Perbadanan Stadium Malaysia',
    capacity: 2000,
    ticketsSold: 1250,
    hasSeats: false,
    hasSessions: true,
    sessions: [
      { id: 1, name: 'Morning Session (9:00 AM - 12:00 PM)', available: true },
      { id: 2, name: 'Afternoon Session (2:00 PM - 5:00 PM)', available: true },
      { id: 3, name: 'Full Day Pass (9:00 AM - 5:00 PM)', available: true }
    ],
    tiers: [
      { id: 1, name: 'Standard Pass', price: 100, available: 600, hasSeats: false },
      { id: 2, name: 'Pro Pass', price: 250, available: 150, hasSeats: false }
    ]
  },
  3: {
    name: 'Championship Final',
    date: '2026-06-10',
    time: '20:00',
    venue: 'Sports Arena',
    location: 'Kuala Lumpur, Malaysia',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Witness history in the making at the championship final.',
    organizer: 'Perbadanan Stadium Malaysia',
    capacity: 12000,
    ticketsSold: 12000,
    hasSeats: false,
    hasSessions: false,
    sessions: [],
    tiers: []
  }
};

const mockSeats = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  section: String.fromCharCode(65 + Math.floor(i / 10)),
  row: Math.floor(i % 10) + 1,
  seat: (i % 5) + 1,
  available: Math.random() > 0.3
}));

export default function EventDetail({ isLoggedIn, userType }: EventDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = mockEventData[id as keyof typeof mockEventData] || mockEventData[1];

  const [bookingStep, setBookingStep] = useState(1);
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const isSoldOut = event.ticketsSold >= event.capacity;
  const selectedTierData = event.tiers.find(t => t.id === selectedTier);
  const needsSeats = selectedTierData?.hasSeats;

  const handleSeatToggle = (seatId: number) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else if (selectedSeats.length < quantity) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const canProceed = () => {
    if (bookingStep === 1 && event.hasSessions) return selectedSession !== null;
    if (bookingStep === 2) return selectedTier !== null;
    if (bookingStep === 3 && needsSeats) return selectedSeats.length === quantity;
    return true;
  };

  const handleNextStep = () => {
    if (bookingStep === 1 && !event.hasSessions) {
      setBookingStep(2);
    } else if (bookingStep === 2 && !needsSeats) {
      setBookingStep(4);
    } else if (bookingStep < 4) {
      setBookingStep(bookingStep + 1);
    }
  };

  const handleConfirmBooking = () => {
    setShowConfirmation(true);
  };

  const resetBooking = () => {
    setBookingStep(1);
    setSelectedSession(null);
    setSelectedTier(null);
    setQuantity(1);
    setSelectedSeats([]);
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://vectorise.net/logo/wp-content/uploads/2015/07/Kompleks-Sukan-Negara.png"
                alt="Perbadanan Stadium Malaysia Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {isLoggedIn ? (
              <>
                {userType === 'organizer' && (
                  <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                )}
                {userType === 'buyer' && (
                  <Link to="/buyer-dashboard" className="text-gray-600 hover:text-gray-900">Browse Events</Link>
                )}
                {userType === 'buyer' && (
                  <Link to="/my-tickets" className="text-gray-600 hover:text-gray-900">My Tickets</Link>
                )}
                <Link to="/profile" className="w-8 h-8 rounded-full flex items-center justify-center hover:ring-2 hover:ring-[#273480] hover:ring-offset-2 transition-all" style={{ backgroundColor: '#273480' }}>
                  <span className="text-white text-sm">JD</span>
                </Link>
              </>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96">
        <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-20 relative z-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl mb-4" style={{ color: '#273480' }}>{event.name}</h1>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{event.venue}, {event.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl mb-4" style={{ color: '#273480' }}>About This Event</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Organizer</div>
                    <div style={{ color: '#273480' }}>{event.organizer}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Capacity</div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" style={{ color: '#273480' }} />
                      <span style={{ color: '#273480' }}>{event.capacity.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              {isSoldOut ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E11A27' }}>
                    <Ticket className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl mb-2" style={{ color: '#273480' }}>Sold Out</h4>
                  <p className="text-gray-600">This event is fully booked</p>
                </div>
              ) : (
                <>
                  {/* Progress Indicator */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      {[1, 2, 3, 4].map((step) => {
                        const isActive = bookingStep === step;
                        const isComplete = bookingStep > step;
                        const shouldShow =
                          (step === 1 && event.hasSessions) ||
                          (step === 2) ||
                          (step === 3 && needsSeats) ||
                          (step === 4);

                        if (!shouldShow) return null;

                        return (
                          <div key={step} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isComplete ? 'bg-green-500' : isActive ? 'bg-[#273480]' : 'bg-gray-300'
                            }`}>
                              {isComplete ? (
                                <Check className="w-4 h-4 text-white" />
                              ) : (
                                <span className="text-white text-sm">{step}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      {event.hasSessions && <span>Session</span>}
                      <span>Tickets</span>
                      {needsSeats && <span>Seats</span>}
                      <span>Confirm</span>
                    </div>
                  </div>

                  {/* Step 1: Session Selection */}
                  {bookingStep === 1 && event.hasSessions && (
                    <div>
                      <h3 className="text-lg mb-4" style={{ color: '#273480' }}>Select Session</h3>
                      <div className="space-y-3 mb-6">
                        {event.sessions.map((session) => (
                          <button
                            key={session.id}
                            onClick={() => setSelectedSession(session.id)}
                            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                              selectedSession === session.id
                                ? 'border-[#273480] bg-[#273480] text-white'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div>{session.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Ticket Selection */}
                  {bookingStep === 2 && (
                    <div>
                      <h3 className="text-lg mb-4" style={{ color: '#273480' }}>Select Tickets</h3>
                      <div className="space-y-3 mb-4">
                        {event.tiers.map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => setSelectedTier(tier.id)}
                            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                              selectedTier === tier.id
                                ? 'border-[#273480] bg-[#273480] text-white'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium">{tier.name}</span>
                              <span className="font-semibold">RM {tier.price}</span>
                            </div>
                            <div className="text-sm">{tier.available} available</div>
                          </button>
                        ))}
                      </div>

                      {selectedTier && (
                        <div className="mt-4">
                          <label className="block text-sm mb-2" style={{ color: '#273480' }}>Quantity</label>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="w-10 h-10 rounded-lg border-2 flex items-center justify-center"
                              style={{ borderColor: '#273480', color: '#273480' }}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              value={quantity}
                              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                              className="flex-1 text-center px-4 py-2 rounded-lg border border-gray-300"
                              min="1"
                            />
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="w-10 h-10 rounded-lg border-2 flex items-center justify-center"
                              style={{ borderColor: '#273480', color: '#273480' }}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Seat Selection */}
                  {bookingStep === 3 && needsSeats && (
                    <div>
                      <h3 className="text-lg mb-4" style={{ color: '#273480' }}>
                        Select Seats ({selectedSeats.length}/{quantity})
                      </h3>
                      <div className="grid grid-cols-5 gap-2 mb-4 max-h-64 overflow-y-auto">
                        {mockSeats.map((seat) => {
                          const isSelected = selectedSeats.includes(seat.id);
                          const isAvailable = seat.available;

                          return (
                            <button
                              key={seat.id}
                              onClick={() => isAvailable && handleSeatToggle(seat.id)}
                              disabled={!isAvailable && !isSelected}
                              className={`p-2 rounded text-xs transition-all ${
                                isSelected
                                  ? 'bg-[#273480] text-white'
                                  : isAvailable
                                  ? 'border border-gray-300 hover:border-[#273480]'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {seat.section}{seat.row}-{seat.seat}
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex items-center gap-4 text-xs mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border border-gray-300 rounded" />
                          <span>Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#273480' }} />
                          <span>Selected</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gray-100 rounded" />
                          <span>Taken</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {bookingStep === 4 && selectedTierData && (
                    <div>
                      <h3 className="text-lg mb-4" style={{ color: '#273480' }}>Review Booking</h3>
                      <div className="space-y-3 mb-4 text-sm">
                        {selectedSession && event.hasSessions && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Session:</span>
                            <span style={{ color: '#273480' }}>
                              {event.sessions.find(s => s.id === selectedSession)?.name}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ticket Type:</span>
                          <span style={{ color: '#273480' }}>{selectedTierData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quantity:</span>
                          <span style={{ color: '#273480' }}>{quantity}</span>
                        </div>
                        {needsSeats && selectedSeats.length > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Seats:</span>
                            <span style={{ color: '#273480' }}>
                              {selectedSeats.map(id => {
                                const seat = mockSeats.find(s => s.id === id);
                                return `${seat?.section}${seat?.row}-${seat?.seat}`;
                              }).join(', ')}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="border-t border-gray-200 pt-4 mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600">Subtotal</span>
                          <span style={{ color: '#273480' }}>RM {(selectedTierData.price * quantity).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600">Service Fee</span>
                          <span style={{ color: '#273480' }}>RM {(selectedTierData.price * quantity * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                          <span className="font-medium" style={{ color: '#273480' }}>Total</span>
                          <span className="text-xl font-semibold" style={{ color: '#273480' }}>
                            RM {(selectedTierData.price * quantity * 1.1).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {bookingStep > 1 && !showConfirmation && (
                      <button
                        onClick={() => setBookingStep(bookingStep - 1)}
                        className="flex-1 py-3 rounded-lg border-2"
                        style={{ borderColor: '#273480', color: '#273480' }}
                      >
                        Back
                      </button>
                    )}
                    {bookingStep < 4 ? (
                      <button
                        onClick={handleNextStep}
                        disabled={!canProceed()}
                        className={`flex-1 py-3 rounded-lg text-white ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
                        style={{ backgroundColor: '#E11A27' }}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleConfirmBooking}
                        className="flex-1 py-3 rounded-lg text-white"
                        style={{ backgroundColor: '#E11A27' }}
                      >
                        {isLoggedIn ? 'Confirm Booking' : 'Login to Book'}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal with QR Code */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-500">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-2" style={{ color: '#273480' }}>Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">Your tickets have been successfully booked</p>

              {/* QR Code */}
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center" style={{ backgroundColor: 'white' }}>
                  <QrCode className="w-40 h-40" style={{ color: '#273480' }} />
                </div>
                <p className="text-sm text-gray-600 mt-4">Scan this code at venue</p>
                <p className="text-xs text-gray-500 mt-1">Ticket ID: #TKT-{Date.now()}</p>
              </div>

              <div className="space-y-3">
                <Link
                  to="/my-tickets"
                  className="block w-full py-3 rounded-lg text-white text-center"
                  style={{ backgroundColor: '#E11A27' }}
                >
                  View My Tickets
                </Link>
                <button
                  onClick={resetBooking}
                  className="block w-full py-3 rounded-lg border-2 text-center"
                  style={{ borderColor: '#273480', color: '#273480' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
