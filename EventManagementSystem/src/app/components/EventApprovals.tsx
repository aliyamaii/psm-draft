import AdminLayout from './AdminLayout';
import EventStatusBadge from './EventStatusBadge';
import { Check, X, Eye, Search, Filter, Calendar as CalendarIcon, MapPin, User, AlertTriangle, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function EventApprovals() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [filterVenue, setFilterVenue] = useState<string>('all');

  // Mock pending events data
  const pendingEvents = [
    {
      id: 1,
      name: 'Rock Festival 2026',
      description: 'A massive rock music festival featuring local and international bands. Three stages, food vendors, and merchandise.',
      venue: 'National Stadium',
      date: '2026-08-15',
      time: '18:00',
      category: 'Music & Concerts',
      organizerId: 'organizer-1',
      organizerName: 'Event Organizer',
      organizerEmail: 'organizer@test.com',
      status: 'pending',
      submittedAt: '2026-04-20T14:30:00Z',
      ticketTiers: [
        { name: 'General Admission', price: 'RM 150', quantity: '5000' },
        { name: 'VIP', price: 'RM 350', quantity: '1000' }
      ],
      hasSessions: false,
      hasSeats: true
    },
    {
      id: 2,
      name: 'Business Summit 2026',
      description: 'Annual business conference bringing together industry leaders, entrepreneurs, and investors.',
      venue: 'Bukit Jalil Stadium',
      date: '2026-09-20',
      time: '09:00',
      category: 'Conference',
      organizerId: 'organizer-2',
      organizerName: 'Second Event Organizer',
      organizerEmail: 'organizer2@test.com',
      status: 'pending',
      submittedAt: '2026-04-19T10:15:00Z',
      ticketTiers: [
        { name: 'Early Bird', price: 'RM 200', quantity: '300' },
        { name: 'Regular', price: 'RM 300', quantity: '500' },
        { name: 'VIP', price: 'RM 500', quantity: '100' }
      ],
      hasSessions: true,
      hasSeats: false
    },
    {
      id: 3,
      name: 'Food Festival Malaysia',
      description: 'Celebration of Malaysian cuisine with food stalls, cooking demonstrations, and live entertainment.',
      venue: 'National Stadium',
      date: '2026-10-05',
      time: '11:00',
      category: 'Food',
      organizerId: 'organizer-1',
      organizerName: 'Event Organizer',
      organizerEmail: 'organizer@test.com',
      status: 'pending',
      submittedAt: '2026-04-18T16:45:00Z',
      ticketTiers: [
        { name: 'Day Pass', price: 'RM 50', quantity: '10000' },
        { name: 'Weekend Pass', price: 'RM 80', quantity: '5000' }
      ],
      hasSessions: false,
      hasSeats: false
    },
    {
      id: 4,
      name: 'Tech Conference 2026',
      description: 'Premier technology conference featuring latest innovations in AI, blockchain, and cloud computing.',
      venue: 'KLCC Convention Centre',
      date: '2026-07-10',
      time: '08:00',
      category: 'Conference',
      organizerId: 'organizer-3',
      organizerName: 'Tech Innovator',
      organizerEmail: 'tech@innovator.com',
      status: 'approved',
      submittedAt: '2026-04-15T09:00:00Z',
      ticketTiers: [
        { name: 'Student', price: 'RM 100', quantity: '200' },
        { name: 'Professional', price: 'RM 300', quantity: '800' },
        { name: 'VIP', price: 'RM 600', quantity: '100' }
      ],
      hasSessions: true,
      hasSeats: true
    },
    {
      id: 5,
      name: 'Jazz Night Festival',
      description: 'An evening of smooth jazz performances by renowned artists from around the world.',
      venue: 'Petronas Philharmonic Hall',
      date: '2026-06-22',
      time: '20:00',
      category: 'Music & Concerts',
      organizerId: 'organizer-1',
      organizerName: 'Event Organizer',
      organizerEmail: 'organizer@test.com',
      status: 'approved',
      submittedAt: '2026-04-12T16:30:00Z',
      ticketTiers: [
        { name: 'Balcony', price: 'RM 180', quantity: '300' },
        { name: 'Orchestra', price: 'RM 350', quantity: '200' },
        { name: 'Premium', price: 'RM 500', quantity: '100' }
      ],
      hasSessions: false,
      hasSeats: true
    },
    {
      id: 6,
      name: 'Gaming Expo 2026',
      description: 'Ultimate gaming experience with esports tournaments, VR demos, and game launches.',
      venue: 'Setia City Convention Centre',
      date: '2026-11-15',
      time: '10:00',
      category: 'Gaming',
      organizerId: 'organizer-4',
      organizerName: 'Game Master',
      organizerEmail: 'gaming@master.com',
      status: 'rejected',
      submittedAt: '2026-04-08T11:45:00Z',
      rejectionReason: 'Venue capacity insufficient for expected attendance. Event requires larger space.',
      ticketTiers: [
        { name: 'Day Pass', price: 'RM 80', quantity: '5000' },
        { name: 'Weekend Pass', price: 'RM 150', quantity: '3000' }
      ],
      hasSessions: true,
      hasSeats: false
    },
    {
      id: 7,
      name: 'Art Gallery Opening',
      description: 'Exclusive opening night for contemporary art exhibition featuring local artists.',
      venue: 'National Art Gallery',
      date: '2026-05-30',
      time: '19:00',
      category: 'Art',
      organizerId: 'organizer-5',
      organizerName: 'Art Curator',
      organizerEmail: 'art@curator.com',
      status: 'rejected',
      submittedAt: '2026-04-05T14:20:00Z',
      rejectionReason: 'Event date conflicts with scheduled gallery maintenance. Please reschedule.',
      ticketTiers: [
        { name: 'General', price: 'RM 30', quantity: '500' },
        { name: 'VIP', price: 'RM 100', quantity: '50' }
      ],
      hasSessions: false,
      hasSeats: false
    }
  ];

  const handleApprove = (eventId: number) => {
    const approvedEvent = pendingEvents.find(e => e.id === eventId);
    if (!approvedEvent) return;

    // Find conflicting events (same date, same venue, same time)
    const conflictingEvents = pendingEvents.filter(e =>
      e.id !== eventId &&
      e.status === 'pending' &&
      e.date === approvedEvent.date &&
      e.time === approvedEvent.time &&
      e.venue === approvedEvent.venue
    );

    if (conflictingEvents.length > 0) {
      const conflictMessage = `Warning: This event conflicts with ${conflictingEvents.length} other event(s):\n\n${conflictingEvents.map(e =>
        `• ${e.name} (${e.date} at ${e.time})`
      ).join('\n')}\n\nDo you want to approve this event and automatically reject the conflicting events?`;

      if (confirm(conflictMessage)) {
        alert(`Event "${approvedEvent.name}" has been approved!`);
        alert(`Rejected ${conflictingEvents.length} conflicting event(s) automatically.`);
        // In a real implementation, this would update all event statuses in localStorage
      }
    } else {
      alert(`Event "${approvedEvent.name}" has been approved!`);
      // In a real implementation, this would update the event status to 'approved'
    }
  };

  const handleReject = (eventId: number) => {
    setSelectedEvent(pendingEvents.find(e => e.id === eventId));
    setShowRejectModal(true);
  };

  const confirmReject = () => {
    if (!rejectReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }
    // Update event status and add rejection reason
    const eventIndex = pendingEvents.findIndex(e => e.id === selectedEvent?.id);
    if (eventIndex !== -1) {
      pendingEvents[eventIndex].status = 'rejected';
      pendingEvents[eventIndex].rejectionReason = rejectReason;
    }
    alert(`Event "${selectedEvent?.name}" has been rejected with reason: "${rejectReason}"`);
    setShowRejectModal(false);
    setRejectReason('');
    setSelectedEvent(null);
  };

  // Check for events on the same day
  const getEventsOnSameDay = (currentEvent: any) => {
    return pendingEvents.filter(e =>
      e.id !== currentEvent.id &&
      e.status === 'pending' &&
      e.date === currentEvent.date &&
      e.venue === currentEvent.venue &&
      e.time === currentEvent.time
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleEditEvent = (eventId: number) => {
    // Navigate to edit page - in real implementation this would route to EditEvent
    alert(`Edit functionality for event ${eventId} - would navigate to edit page`);
  };

  const handleDeleteEvent = (eventId: number) => {
    if (confirm(`Are you sure you want to delete this event? This action cannot be undone.`)) {
      // In a real implementation, this would delete the event from localStorage
      alert(`Event ${eventId} deleted successfully`);
    }
  };

  return (
    <AdminLayout title="Event Approvals">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>
                Event Approvals
              </h2>
              <p className="text-gray-600 mt-1">
                Review and approve or reject submitted events
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#FEF3C7' }}>
                <span className="text-2xl font-bold text-orange-700">{pendingEvents.length}</span>
                <span className="text-sm text-orange-700">Pending</span>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by name, organizer, or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="all">All Events</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <select
                value={filterVenue}
                onChange={(e) => setFilterVenue(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="all">All Venues</option>
                <option value="National Stadium">National Stadium</option>
                <option value="Bukit Jalil Stadium">Bukit Jalil Stadium</option>
                <option value="KLCC Convention Centre">KLCC Convention Centre</option>
                <option value="Petronas Philharmonic Hall">Petronas Philharmonic Hall</option>
                <option value="Setia City Convention Centre">Setia City Convention Centre</option>
                <option value="National Art Gallery">National Art Gallery</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {pendingEvents
            .filter((event) => {
              const matchesSearch = searchQuery === '' ||
                event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.organizerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.venue.toLowerCase().includes(searchQuery.toLowerCase());

              const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
              const matchesVenue = filterVenue === 'all' || event.venue === filterVenue;

              return matchesSearch && matchesFilter && matchesVenue;
            })
            .map((event) => {
              const sameDayEvents = getEventsOnSameDay(event);
              return (
                <div key={event.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    {/* Conflict Warning */}
                    {sameDayEvents.length > 0 && (
                      <div className="mb-4 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-yellow-800">
                              {sameDayEvents.length} event(s) scheduled for the same time:
                            </p>
                            <ul className="mt-2 text-sm text-yellow-700 space-y-1">
                              {sameDayEvents.map(conflictEvent => (
                                <li key={conflictEvent.id} className="flex items-center gap-2">
                                  <span className="font-medium">{conflictEvent.name}</span>
                                  <span className="text-yellow-600">
                                    ({conflictEvent.date} at {conflictEvent.time})
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                          <EventStatusBadge status={event.status} />
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" /> {event.organizerName}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" /> {event.date} at {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {event.venue}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#E0E7FF', color: '#3730A3' }}>
                              {event.category}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">View Details</span>
                        </button>
                        <button
                          onClick={() => handleEditEvent(event.id)}
                          className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          <span className="text-sm">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="px-4 py-2 rounded-lg border border-red-300 hover:bg-red-50 text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        {event.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(event.id)}
                              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                            >
                              <Check className="w-4 h-4" />
                              <span className="text-sm">Approve</span>
                            </button>
                            <button
                              onClick={() => handleReject(event.id)}
                              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                            >
                              <X className="w-4 h-4" />
                              <span className="text-sm">Reject</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Ticket Tiers Preview */}
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Ticket Tiers</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.ticketTiers.map((tier, index) => (
                          <span key={index} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#F3F4F6', color: '#374151' }}>
                            {tier.name}: {tier.price} ({tier.quantity} available)
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Submission Info */}
                    <div className="mt-4 text-xs text-gray-500">
                      Submitted: {formatDate(event.submittedAt)}
                    </div>

                    {/* Rejection Reason */}
                    {event.status === 'rejected' && event.rejectionReason && (
                      <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200">
                        <p className="text-xs text-red-800">
                          <span className="font-medium">Rejection Reason:</span> {event.rejectionReason}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

        {/* Event Details Modal */}
        {selectedEvent && !showRejectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                    {selectedEvent.name}
                  </h3>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600">{selectedEvent.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Date & Time</h4>
                    <p className="text-gray-600">{selectedEvent.date} at {selectedEvent.time}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Venue</h4>
                    <p className="text-gray-600">{selectedEvent.venue}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Organizer</h4>
                  <p className="text-gray-600">{selectedEvent.organizerName} ({selectedEvent.organizerEmail})</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Ticket Tiers</h4>
                  <div className="space-y-2">
                    {selectedEvent.ticketTiers.map((tier: any, index: number) => (
                      <div key={index} className="flex justify-between p-3 rounded-lg bg-gray-50">
                        <span className="font-medium">{tier.name}</span>
                        <span className="text-gray-600">{tier.price} - {tier.quantity} tickets</span>
                      </div>
                    ))}
                  </div>
                </div>
                {selectedEvent.status === 'rejected' && selectedEvent.rejectionReason && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <h4 className="font-medium text-red-900 mb-2">Rejection Reason</h4>
                    <p className="text-sm text-red-700">{selectedEvent.rejectionReason}</p>
                  </div>
                )}
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedEvent(null);
                    handleReject(selectedEvent.id);
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Reject
                </button>
                <button
                  onClick={() => {
                    setSelectedEvent(null);
                    handleApprove(selectedEvent.id);
                  }}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reject Confirmation Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>
                  Reject Event
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Please provide a reason for rejecting "<strong>{selectedEvent?.name}</strong>":
                </p>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Enter rejection reason..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#273480] h-32 resize-none"
                />
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowRejectModal(false);
                    setRejectReason('');
                    setSelectedEvent(null);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReject}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Reject Event
                </button>
              </div>
            </div>
          </div>
        )}
    </AdminLayout>
  );
}