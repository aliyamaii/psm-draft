import { Event } from '../types/event.types';
import { User, OrganizerStats, BuyerStats } from '../types/user.types';

// Mock users data
export const mockUsers: User[] = [
  {
    id: 'admin-1',
    email: 'admin@test.com',
    password: '123456',
    name: 'System Administrator',
    type: 'admin',
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    status: 'active'
  },
  {
    id: 'organizer-1',
    email: 'organizer@test.com',
    password: '123456',
    name: 'Event Organizer',
    type: 'organizer',
    createdAt: '2026-01-15T00:00:00Z',
    lastLogin: new Date().toISOString(),
    status: 'active'
  },
  {
    id: 'organizer-2',
    email: 'organizer2@test.com',
    password: '123456',
    name: 'Second Event Organizer',
    type: 'organizer',
    createdAt: '2026-02-20T00:00:00Z',
    lastLogin: '2026-04-20T14:15:00Z',
    status: 'active'
  },
  {
    id: 'buyer-1',
    email: 'buyer@test.com',
    password: '123456',
    name: 'Test Buyer',
    type: 'buyer',
    createdAt: '2026-01-20T00:00:00Z',
    lastLogin: new Date().toISOString(),
    status: 'active'
  },
  {
    id: 'buyer-2',
    email: 'john@example.com',
    password: '123456',
    name: 'John Smith',
    type: 'buyer',
    createdAt: '2026-02-15T00:00:00Z',
    lastLogin: '2026-04-20T16:30:00Z',
    status: 'active'
  }
];

// Mock events with status for hybrid approach
const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Summer Music Festival 2026',
    description: 'A massive music festival featuring local and international bands. Three stages, food vendors, and merchandise.',
    venue: 'National Stadium',
    date: '2026-07-15',
    time: '18:00',
    category: 'Music & Concerts',
    slug: 'summer-music-festival-2026',
    hasSessions: false,
    hasSeats: true,
    sessions: [],
    ticketTiers: [
      { name: 'General Admission', price: 'RM 150', quantity: '5000', hasSeats: false },
      { name: 'VIP', price: 'RM 350', quantity: '1000', hasSeats: true }
    ],
    status: 'approved', // Older event - auto-approved
    organizerId: 'organizer-1',
    organizerName: 'Event Organizer',
    createdAt: '2026-03-15T00:00:00Z',
    submittedAt: '2026-03-15T00:00:00Z',
    reviewedAt: '2026-03-16T10:00:00Z',
    reviewedBy: 'admin-1',
    rejectionReason: null
  },
  {
    id: '2',
    name: 'Rock Festival 2026',
    description: 'A massive rock music festival featuring local and international bands.',
    venue: 'National Stadium',
    date: '2026-08-15',
    time: '18:00',
    category: 'Music & Concerts',
    slug: 'rock-festival-2026',
    hasSessions: false,
    hasSeats: true,
    sessions: [],
    ticketTiers: [
      { name: 'General Admission', price: 'RM 180', quantity: '8000', hasSeats: false },
      { name: 'VIP', price: 'RM 400', quantity: '1500', hasSeats: true }
    ],
    status: 'pending', // Newer event - requires admin review
    organizerId: 'organizer-1',
    organizerName: 'Event Organizer',
    createdAt: '2026-04-20T00:00:00Z',
    submittedAt: '2026-04-20T14:30:00Z',
    reviewedAt: null,
    reviewedBy: null,
    rejectionReason: null
  },
  {
    id: '3',
    name: 'Business Summit 2026',
    description: 'Annual business conference bringing together industry leaders, entrepreneurs, and investors.',
    venue: 'Bukit Jalil Stadium',
    date: '2026-09-20',
    time: '09:00',
    category: 'Conference',
    slug: 'business-summit-2026',
    hasSessions: true,
    hasSeats: false,
    sessions: [
      { name: 'Morning Sessions', available: true },
      { name: 'Afternoon Sessions', available: true }
    ],
    ticketTiers: [
      { name: 'Early Bird', price: 'RM 200', quantity: '300', hasSeats: false },
      { name: 'Regular', price: 'RM 300', quantity: '500', hasSeats: false },
      { name: 'VIP', price: 'RM 500', quantity: '100', hasSeats: false }
    ],
    status: 'pending', // Newer event - requires admin review
    organizerId: 'organizer-2',
    organizerName: 'Second Event Organizer',
    createdAt: '2026-04-19T00:00:00Z',
    submittedAt: '2026-04-19T10:15:00Z',
    reviewedAt: null,
    reviewedBy: null,
    rejectionReason: null
  },
  {
    id: '4',
    name: 'Food Festival Malaysia',
    description: 'Celebration of Malaysian cuisine with food stalls, cooking demonstrations, and live entertainment.',
    venue: 'National Stadium',
    date: '2026-10-05',
    time: '11:00',
    category: 'Food',
    slug: 'food-festival-malaysia',
    hasSessions: false,
    hasSeats: false,
    sessions: [],
    ticketTiers: [
      { name: 'Day Pass', price: 'RM 50', quantity: '10000', hasSeats: false },
      { name: 'Weekend Pass', price: 'RM 80', quantity: '5000', hasSeats: false }
    ],
    status: 'pending', // Newer event - requires admin review
    organizerId: 'organizer-1',
    organizerName: 'Event Organizer',
    createdAt: '2026-04-18T00:00:00Z',
    submittedAt: '2026-04-18T16:45:00Z',
    reviewedAt: null,
    reviewedBy: null,
    rejectionReason: null
  },
  {
    id: '5',
    name: 'Sports Day Championship',
    description: 'Inter-school sports competition',
    venue: 'Bukit Jalil Stadium',
    date: '2026-05-20',
    time: '08:00',
    category: 'Sports',
    slug: 'sports-day-championship',
    hasSessions: false,
    hasSeats: true,
    sessions: [],
    ticketTiers: [
      { name: 'Adult', price: 'RM 25', quantity: '8000', hasSeats: false },
      { name: 'Child', price: 'RM 15', quantity: '2000', hasSeats: false }
    ],
    status: 'rejected', // Rejected event
    organizerId: 'organizer-2',
    organizerName: 'Second Event Organizer',
    createdAt: '2026-04-15T00:00:00Z',
    submittedAt: '2026-04-15T09:00:00Z',
    reviewedAt: '2026-04-16T14:30:00Z',
    reviewedBy: 'admin-1',
    rejectionReason: 'Venue conflict with existing event'
  }
];

// Initialize localStorage with mock data
export const initializeLocalStorage = () => {
  // Initialize users if not exists
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(mockUsers));
  }

  // Initialize events if not exists
  if (!localStorage.getItem('events')) {
    localStorage.setItem('events', JSON.stringify(mockEvents));
  }
};

// Get all events from localStorage
export const getEvents = (): Event[] => {
  try {
    const events = localStorage.getItem('events');
    return events ? JSON.parse(events) : [];
  } catch (error) {
    console.error('Error getting events from localStorage:', error);
    return [];
  }
};

// Get events by status
export const getEventsByStatus = (status: 'pending' | 'approved' | 'rejected'): Event[] => {
  const events = getEvents();
  return events.filter(event => event.status === status);
};

// Get pending events
export const getPendingEvents = (): Event[] => {
  return getEventsByStatus('pending');
};

// Get approved events (for buyers)
export const getApprovedEvents = (): Event[] => {
  return getEventsByStatus('approved');
};

// Get events by organizer
export const getEventsByOrganizer = (organizerId: string): Event[] => {
  const events = getEvents();
  return events.filter(event => event.organizerId === organizerId);
};

// Approve an event
export const approveEvent = (eventId: string, adminId: string): boolean => {
  try {
    const events = getEvents();
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          status: 'approved' as const,
          reviewedAt: new Date().toISOString(),
          reviewedBy: adminId
        };
      }
      return event;
    });
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    return true;
  } catch (error) {
    console.error('Error approving event:', error);
    return false;
  }
};

// Reject an event
export const rejectEvent = (eventId: string, adminId: string, reason: string): boolean => {
  try {
    const events = getEvents();
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          status: 'rejected' as const,
          reviewedAt: new Date().toISOString(),
          reviewedBy: adminId,
          rejectionReason: reason
        };
      }
      return event;
    });
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    return true;
  } catch (error) {
    console.error('Error rejecting event:', error);
    return false;
  }
};

// Create a new event
export const createEvent = (eventData: Omit<Event, 'id' | 'createdAt' | 'submittedAt'>): Event => {
  const newEvent: Event = {
    ...eventData,
    id: Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString(),
    submittedAt: new Date().toISOString()
  };

  try {
    const events = getEvents();
    localStorage.setItem('events', JSON.stringify([...events, newEvent]));
    return newEvent;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Update an event
export const updateEvent = (eventId: string, updates: Partial<Event>): boolean => {
  try {
    const events = getEvents();
    const updatedEvents = events.map(event =>
      event.id === eventId ? { ...event, ...updates } : event
    );
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    return true;
  } catch (error) {
    console.error('Error updating event:', error);
    return false;
  }
};

// Delete an event
export const deleteEvent = (eventId: string): boolean => {
  try {
    const events = getEvents();
    const filteredEvents = events.filter(event => event.id !== eventId);
    localStorage.setItem('events', JSON.stringify(filteredEvents));
    return true;
  } catch (error) {
    console.error('Error deleting event:', error);
    return false;
  }
};

// Get all users from localStorage
export const getUsers = (): User[] => {
  try {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting users from localStorage:', error);
    return [];
  }
};

// Get users by type
export const getUsersByType = (type: 'organizer' | 'buyer' | 'admin'): User[] => {
  const users = getUsers();
  return users.filter(user => user.type === type);
};

// Get organizer stats
export const getOrganizerStats = (organizerId: string): OrganizerStats | null => {
  const users = getUsers();
  const events = getEvents();

  const organizer = users.find(u => u.id === organizerId);
  if (!organizer || organizer.type !== 'organizer') {
    return null;
  }

  const organizerEvents = events.filter(e => e.organizerId === organizerId);

  return {
    id: organizer.id,
    name: organizer.name,
    email: organizer.email,
    type: 'organizer',
    status: organizer.status,
    eventsCreated: organizerEvents.length,
    eventsApproved: organizerEvents.filter(e => e.status === 'approved').length,
    eventsPending: organizerEvents.filter(e => e.status === 'pending').length,
    eventsRejected: organizerEvents.filter(e => e.status === 'rejected').length,
    totalRevenue: organizerEvents.reduce((sum, e) => sum + (e.status === 'approved' ? 427150 : 0), 0), // Mock revenue
    totalTicketsSold: organizerEvents.reduce((sum, e) => sum + (e.status === 'approved' ? 1543 : 0), 0), // Mock ticket sales
    createdAt: organizer.createdAt,
    lastLogin: organizer.lastLogin
  };
};

// Get buyer stats
export const getBuyerStats = (buyerId: string): BuyerStats | null => {
  const users = getUsers();

  const buyer = users.find(u => u.id === buyerId);
  if (!buyer || buyer.type !== 'buyer') {
    return null;
  }

  // Mock buyer stats
  return {
    id: buyer.id,
    name: buyer.name,
    email: buyer.email,
    type: 'buyer',
    status: buyer.status,
    ticketsPurchased: Math.floor(Math.random() * 20) + 1,
    totalSpent: Math.floor(Math.random() * 2000) + 100,
    eventsAttended: Math.floor(Math.random() * 15) + 1,
    savedEvents: Math.floor(Math.random() * 10) + 1,
    createdAt: buyer.createdAt,
    lastLogin: buyer.lastLogin
  };
};

// Update user status
export const updateUserStatus = (userId: string, status: 'active' | 'suspended'): boolean => {
  try {
    const users = getUsers();
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, status } : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    return true;
  } catch (error) {
    console.error('Error updating user status:', error);
    return false;
  }
};

// Delete user
export const deleteUser = (userId: string): boolean => {
  try {
    const users = getUsers();
    const filteredUsers = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
};