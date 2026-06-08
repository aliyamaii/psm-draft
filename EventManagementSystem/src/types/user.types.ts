export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  createdAt: string;
  lastLogin: string | null;
  status: UserStatus;
}

export type UserType = 'organizer' | 'buyer' | 'admin';

export type UserStatus = 'active' | 'suspended';

export interface OrganizerStats {
  id: string;
  name: string;
  email: string;
  type: 'organizer';
  status: UserStatus;
  eventsCreated: number;
  eventsApproved: number;
  eventsPending: number;
  eventsRejected: number;
  totalRevenue: number;
  totalTicketsSold: number;
  createdAt: string;
  lastLogin: string | null;
}

export interface BuyerStats {
  id: string;
  name: string;
  email: string;
  type: 'buyer';
  status: UserStatus;
  ticketsPurchased: number;
  totalSpent: number;
  eventsAttended: number;
  savedEvents: number;
  createdAt: string;
  lastLogin: string | null;
}

export interface AdminStats {
  id: string;
  name: string;
  email: string;
  type: 'admin';
  status: UserStatus;
  eventsReviewed: number;
  eventsApproved: number;
  eventsRejected: number;
  usersManaged: number;
  createdAt: string;
  lastLogin: string | null;
}