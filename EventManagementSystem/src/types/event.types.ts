export interface Event {
  id: string;
  name: string;
  description: string;
  venue: string;
  date: string;
  time: string;
  category: string;
  slug: string;
  hasSessions: boolean;
  hasSeats: boolean;
  sessions: Array<{ name: string; available: boolean }>;
  ticketTiers: Array<{
    name: string;
    price: string;
    quantity: string;
    hasSeats: boolean;
  }>;
  status: EventStatus;
  organizerId: string;
  organizerName: string;
  createdAt: string;
  submittedAt: string;
  reviewedAt: string | null;
  reviewedBy: string | null;
  rejectionReason: string | null;
}

export type EventStatus = 'pending' | 'approved' | 'rejected';

export interface EventStats {
  id: string;
  name: string;
  date: string;
  venue: string;
  status: EventStatus;
  ticketsSold: number;
  capacity: number;
  revenue: number;
  organizerId: string;
  organizerName: string;
}