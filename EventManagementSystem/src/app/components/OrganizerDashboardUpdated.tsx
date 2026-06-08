import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus, Calendar, Users, DollarSign, TrendingUp, MoreVertical,
  Eye, Activity, Settings, LogOut, Bell, Search, User,
  FileText, MessageSquare, Clock, CheckCircle, XCircle,
  LayoutDashboard, Calendar as CalendarIcon, CreditCard,
  Users as UsersIcon, FileText as FileTextIcon,
  Shield, Zap, BarChart3, Menu
} from 'lucide-react';
import EventCalendar from './EventCalendar';

// Expanded Mock Data - 12 Events
const mockEvents = [
  {
    id: 1,
    name: 'Summer Music Festival 2026',
    date: '2026-07-15',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 8543,
    capacity: 15000,
    revenue: 427150,
    status: 'active'
  },
  {
    id: 2,
    name: 'Tech Conference 2026',
    date: '2026-05-20',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1666306775349-0646fa4c3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 1250,
    capacity: 2000,
    revenue: 125000,
    status: 'active'
  },
  {
    id: 3,
    name: 'Championship Final',
    date: '2026-06-10',
    venue: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1770129768815-29a98e02d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb2R8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 12000,
    capacity: 12000,
    revenue: 960000,
    status: 'sold-out'
  },
  {
    id: 4,
    name: 'Jazz Night Live',
    date: '2026-08-20',
    venue: 'City Jazz Club',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxqYXp6JTIwY29uY2VydHxlbmF8MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 234,
    capacity: 300,
    revenue: 8190,
    status: 'active'
  },
  {
    id: 5,
    name: 'Gaming Convention',
    date: '2026-09-05',
    venue: 'Convention Center',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMHx8b21lZHklMjBjbHVifGVufDB8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 567,
    capacity: 1000,
    revenue: 28350,
    status: 'active'
  },
  {
    id: 6,
    name: 'Rock Concert',
    date: '2026-07-28',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNnx8Y29uY2VydCUyMHBlbnZvbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 8923,
    capacity: 25000,
    revenue: 669225,
    status: 'active'
  },
  {
    id: 7,
    name: 'Business Summit',
    date: '2026-10-15',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8Y29uZmVyZW5jZSUyMHBlbnZlbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 378,
    capacity: 800,
    revenue: 113400,
    status: 'active'
  },
  {
    id: 8,
    name: 'Comedy Show',
    date: '2026-08-22',
    venue: 'Comedy Central',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjb21lZHklMjBjbHVifGVufDB8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 156,
    capacity: 200,
    revenue: 7800,
    status: 'active'
  },
  {
    id: 9,
    name: 'Food Festival',
    date: '2026-10-05',
    venue: 'Central Park',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmb29kJTIwZmVzdGl2YWx8ZW58MHx8fHwxNzc2MjQwMjc4fDA&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 2341,
    capacity: 5000,
    revenue: 35115,
    status: 'active'
  },
  {
    id: 10,
    name: 'Charity Gala',
    date: '2026-09-20',
    venue: 'National Stadium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8Y29uZmVyZW5jZSUyMHBlbnZlbnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 850,
    capacity: 1000,
    revenue: 127500,
    status: 'active'
  },
  {
    id: 11,
    name: 'Kids Fun Fair',
    date: '2026-09-30',
    venue: 'Family Park',
    image: 'https://images.unsplash.com/photo-1560341347-951896e6909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxr2lkcyUyMHVuJTIwZmFucmF8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 4567,
    capacity: 8000,
    revenue: 137010,
    status: 'active'
  },
  {
    id: 12,
    name: 'Art Exhibition',
    date: '2026-11-12',
    venue: 'Art Gallery KL',
    image: 'https://images.unsplash.com/photo-1577720643271-66f541818a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkcnQlMjBhcnR8ZW58MHx8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=400',
    ticketsSold: 234,
    capacity: 400,
    revenue: 4680,
    status: 'active'
  }
];