import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import OrganizerDashboard from './components/OrganizerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import BuyerBrowse from './components/BuyerBrowse';
import BuyerMyTickets from './components/BuyerMyTickets';
import BuyerSavedEvents from './components/BuyerSavedEvents';
import CreateEvent from './components/CreateEvent';
import EquipmentBooking from './components/EquipmentBooking';
import EditEvent from './components/EditEvent';
import Analytics from './components/Analytics';
import EventDetail from './components/EventDetail';
import MyTickets from './components/MyTickets';
import LandingPageBuilder from './components/LandingPageBuilder';
import EventLandingPage from './components/EventLandingPage';
import Profile from './components/Profile';
import EventDrafts from './components/EventDrafts';
import Transactions from './components/Transactions';
import ForgotPassword from './components/ForgotPassword';
import Settings from './components/Settings';
import HelpCenter from './components/HelpCenter';
import Features from './components/Features';
import Booking from './components/Booking';
import QRPayments from './components/QRPayments';
import Contact from './components/Contact';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import AutomationWorkflow from './components/AutomationWorkflow';
import MarketingTracking from './components/MarketingTracking';
import PaymentLink from './components/PaymentLink';
import LandingPage from './components/LandingPage';
import EventManagement from './components/EventManagement';
import ContactUs from './components/ContactUs';
import PaymentLinkManager from './components/PaymentLinks/PaymentLinkManager';
import CreatePaymentLink from './components/PaymentLinks/CreatePaymentLink';
import DashboardLayout from './components/DashboardLayout';
import Bookings from './components/Bookings';
import Marketing from './components/Marketing';
import Services from './components/Services';
import CreateService from './components/CreateService';
import EditService from './components/EditService';
import Employees from './components/Employees';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import Content from './components/Content';
import CreateContent from './components/CreateContent';
import EditContent from './components/EditContent';
import Reports from './components/Reports';
import Automations from './components/Automations';
import Payments from './components/Payments';
import CreateCampaign from './components/CreateCampaign';
import EditCampaign from './components/EditCampaign';
import CreateAutomation from './components/CreateAutomation';
import EditAutomation from './components/EditAutomation';

// Admin components
import AdminDashboard from './components/AdminDashboard';
import EventApprovals from './components/EventApprovals';
import UsersManagement from './components/UsersManagement';
import AdminEventManagement from './components/AdminEventManagement';
import SystemStats from './components/SystemStats';
import AdminSettings from './components/AdminSettings';

// Mock data utilities
import { initializeLocalStorage } from '../utils/mockData';

// Mock data for placeholder pages
const mockEvents = [
  { id: 1, name: 'Summer Music Festival 2026', date: '2026-07-15', venue: 'National Stadium', ticketsSold: 8543, capacity: 15000, revenue: 427150, status: 'active' },
  { id: 2, name: 'Tech Conference 2026', date: '2026-05-20', venue: 'Convention Center', ticketsSold: 1250, capacity: 2000, revenue: 125000, status: 'active' },
  { id: 3, name: 'Championship Final', date: '2026-06-10', venue: 'Sports Arena', ticketsSold: 12000, capacity: 12000, revenue: 960000, status: 'sold-out' },
  { id: 4, name: 'Rock Festival 2027', date: '2027-08-20', venue: 'Stadium Nasional Bukit Jalil', ticketsSold: 4500, capacity: 25000, revenue: 225000, status: 'active' },
  { id: 5, name: 'Gaming Convention', date: '2026-09-05', venue: 'Stadium Shah Alam', ticketsSold: 2800, capacity: 5000, revenue: 84000, status: 'active' },
  { id: 6, name: 'Food & Wine Festival', date: '2026-10-12', venue: 'Convention Center', ticketsSold: 1200, capacity: 3000, revenue: 36000, status: 'active' },
  { id: 7, name: 'Tech Startup Summit', date: '2026-11-15', venue: 'National Stadium', ticketsSold: 800, capacity: 1000, revenue: 80000, status: 'active' },
  { id: 8, name: 'Comedy Night Special', date: '2026-08-22', venue: 'Sports Arena', ticketsSold: 350, capacity: 500, revenue: 17500, status: 'active' },
  { id: 9, name: 'Art Exhibition', date: '2026-09-25', venue: 'Convention Center', ticketsSold: 450, capacity: 800, revenue: 9000, status: 'active' },
  { id: 10, name: 'Charity Gala Dinner', date: '2026-12-10', venue: 'National Stadium', ticketsSold: 600, capacity: 800, revenue: 60000, status: 'active' },
  { id: 11, name: 'Jazz & Blues Night', date: '2026-07-28', venue: 'City Jazz Club', ticketsSold: 150, capacity: 200, revenue: 7500, status: 'sold-out' },
  { id: 12, name: 'Sustainable Business Expo', date: '2026-10-20', venue: 'Convention Center', ticketsSold: 900, capacity: 1500, revenue: 27000, status: 'active' },
  { id: 13, name: 'Digital Marketing Summit', date: '2026-11-05', venue: 'National Stadium', ticketsSold: 750, capacity: 1200, revenue: 56250, status: 'active' },
  { id: 14, name: 'Cultural Dance Festival', date: '2026-09-15', venue: 'Sports Arena', ticketsSold: 500, capacity: 1000, revenue: 15000, status: 'active' },
  { id: 15, name: 'Science Fair', date: '2026-08-10', venue: 'Convention Center', ticketsSold: 800, capacity: 1500, revenue: 8000, status: 'active' },
  { id: 16, name: 'Fashion Show Malaysia', date: '2026-10-05', venue: 'National Stadium', ticketsSold: 400, capacity: 600, revenue: 20000, status: 'active' },
  { id: 17, name: 'Health & Wellness Expo', date: '2026-11-20', venue: 'Convention Center', ticketsSold: 1100, capacity: 2000, revenue: 33000, status: 'active' },
  { id: 18, name: 'Automotive Tech Show', date: '2026-09-30', venue: 'Stadium Shah Alam', ticketsSold: 2200, capacity: 4000, revenue: 110000, status: 'active' },
  { id: 19, name: 'Book Festival', date: '2026-08-15', venue: 'National Stadium', ticketsSold: 650, capacity: 1000, revenue: 9750, status: 'active' },
  { id: 20, name: 'Film Festival', date: '2026-10-25', venue: 'Sports Arena', ticketsSold: 550, capacity: 800, revenue: 16500, status: 'active' }
];

const mockBookings = [
  { id: 1, customerName: 'Ahmad Razak', email: 'ahmad.razak@email.com', phone: '+60 12-345-6789', eventName: 'Summer Music Festival 2026', eventDate: '2026-07-15', eventVenue: 'National Stadium', tickets: 4, ticketType: 'VIP Access', totalPrice: 1000.00, status: 'confirmed', bookingDate: '2026-04-15', paymentMethod: 'Credit Card', specialRequests: 'Wheelchair access required', qrCode: 'QR001', hasReview: false, checkedIn: false },
  { id: 2, customerName: 'Sarah Lim', email: 'sarah.lim@email.com', phone: '+60 13-456-7890', eventName: 'Tech Conference 2026', eventDate: '2026-05-20', eventVenue: 'Convention Center', tickets: 2, ticketType: 'Regular', totalPrice: 160.00, status: 'confirmed', bookingDate: '2026-04-14', paymentMethod: 'Online Banking', specialRequests: 'None', qrCode: 'QR002', hasReview: false, checkedIn: false },
  { id: 3, customerName: 'Mohd. Ali', email: 'mohd.ali@email.com', phone: '+60 14-567-8901', eventName: 'Championship Final', eventDate: '2026-06-10', eventVenue: 'Sports Arena', tickets: 8, ticketType: 'Premium', totalPrice: 2400.00, status: 'confirmed', bookingDate: '2026-04-13', paymentMethod: 'Touch n Go', specialRequests: 'Group seating needed', qrCode: 'QR003', hasReview: false, checkedIn: false },
  { id: 4, customerName: 'Jennifer Wong', email: 'jennifer.wong@email.com', phone: '+60 15-678-9012', eventName: 'Jazz Night Live', eventDate: '2026-08-20', eventVenue: 'City Jazz Club', tickets: 2, ticketType: 'Regular', totalPrice: 170.00, status: 'pending', bookingDate: '2026-04-15', paymentMethod: 'GrabPay', specialRequests: 'Dietary restrictions', qrCode: 'QR004', hasReview: false, checkedIn: false },
  { id: 5, customerName: 'Tan Wei Ling', email: 'tan.weiling@email.com', phone: '+60 16-789-0123', eventName: 'Gaming Convention', eventDate: '2026-09-05', eventVenue: 'Convention Center', tickets: 3, ticketType: 'Regular', totalPrice: 540.00, status: 'confirmed', bookingDate: '2026-04-12', paymentMethod: 'ShopeePay', specialRequests: 'None', qrCode: 'QR005', hasReview: false, checkedIn: false },
  { id: 6, customerName: 'David Chen', email: 'david.chen@email.com', phone: '+60 17-890-1234', eventName: 'Rock Concert', eventDate: '2026-07-28', eventVenue: 'National Stadium', tickets: 6, ticketType: 'VIP Access', totalPrice: 1500.00, status: 'confirmed', bookingDate: '2026-04-11', paymentMethod: 'Credit Card', specialRequests: 'Parking needed', qrCode: 'QR006', hasReview: true, checkedIn: false },
  { id: 7, customerName: 'Aisha Binti', email: 'aisha.binti@email.com', phone: '+60 18-901-2345', eventName: 'Business Summit', eventDate: '2026-10-15', eventVenue: 'National Stadium', tickets: 4, ticketType: 'Corporate', totalPrice: 1200.00, status: 'confirmed', bookingDate: '2026-04-10', paymentMethod: 'Bank Transfer', specialRequests: 'Meeting room access', qrCode: 'QR007', hasReview: false, checkedIn: false },
  { id: 8, customerName: 'Kumar Rajesh', email: 'kumar.rajesh@email.com', phone: '+60 19-012-3456', eventName: 'Comedy Show', eventDate: '2026-08-22', eventVenue: 'Comedy Central', tickets: 2, ticketType: 'Regular', totalPrice: 240.00, status: 'cancelled', bookingDate: '2026-04-09', paymentMethod: 'Online Banking', specialRequests: 'None', qrCode: 'QR008', hasReview: false, checkedIn: false },
  { id: 9, customerName: 'Fatimah Zahra', email: 'fatimah.zahra@email.com', phone: '+60 10-123-4567', eventName: 'Food Festival', eventDate: '2026-10-05', eventVenue: 'Central Park', tickets: 5, ticketType: 'Family', totalPrice: 750.00, status: 'confirmed', bookingDate: '2026-04-08', paymentMethod: 'Boost', specialRequests: 'Vegetarian options', qrCode: 'QR009', hasReview: false, checkedIn: false },
  { id: 10, customerName: 'John Smith', email: 'john.smith@email.com', phone: '+60 11-234-5678', eventName: 'Charity Gala', eventDate: '2026-09-20', eventVenue: 'National Stadium', tickets: 2, ticketType: 'VIP Access', totalPrice: 500.00, status: 'confirmed', bookingDate: '2026-04-07', paymentMethod: 'Credit Card', specialRequests: 'None', qrCode: 'QR010', hasReview: false, checkedIn: false },
  { id: 11, customerName: 'Siti Nurhaliza', email: 'siti.nurhaliza@email.com', phone: '+60 12-345-6789', eventName: 'Kids Fun Fair', eventDate: '2026-09-30', eventVenue: 'Family Park', tickets: 6, ticketType: 'Family', totalPrice: 900.00, status: 'confirmed', bookingDate: '2026-04-06', paymentMethod: 'Online Banking', specialRequests: 'Childcare services', qrCode: 'QR011', hasReview: false, checkedIn: false },
  { id: 12, customerName: 'Michael Lee', email: 'michael.lee@email.com', phone: '+60 13-456-7890', eventName: 'Art Exhibition', eventDate: '2026-11-12', eventVenue: 'Art Gallery KL', tickets: 3, ticketType: 'Regular', totalPrice: 195.00, status: 'confirmed', bookingDate: '2026-04-05', paymentMethod: 'Atome', specialRequests: 'Accessibility needed', qrCode: 'QR012', hasReview: false, checkedIn: false },
  { id: 13, customerName: 'Emma Wilson', email: 'emma.wilson@email.com', phone: '+60 14-567-8901', eventName: 'Summer Music Festival 2026', eventDate: '2026-07-15', eventVenue: 'National Stadium', tickets: 2, ticketType: 'Premium', totalPrice: 600.00, status: 'confirmed', bookingDate: '2026-04-04', paymentMethod: 'Credit Card', specialRequests: 'Early entry requested', qrCode: 'QR013', hasReview: false, checkedIn: false },
  { id: 14, customerName: 'Ramesh Nair', email: 'ramesh.nair@email.com', phone: '+60 15-678-9012', eventName: 'Tech Conference 2026', eventDate: '2026-05-20', eventVenue: 'Convention Center', tickets: 4, ticketType: 'Corporate', totalPrice: 800.00, status: 'confirmed', bookingDate: '2026-04-03', paymentMethod: 'Online Banking', specialRequests: 'Networking events access', qrCode: 'QR014', hasReview: false, checkedIn: false },
  { id: 15, customerName: 'Chong Wei Ming', email: 'chong.weiling@email.com', phone: '+60 16-789-0123', eventName: 'Championship Final', eventDate: '2026-06-10', eventVenue: 'Sports Arena', tickets: 10, ticketType: 'Premium', totalPrice: 3000.00, status: 'confirmed', bookingDate: '2026-04-02', paymentMethod: 'Credit Card', specialRequests: 'Group transportation', qrCode: 'QR015', hasReview: false, checkedIn: false },
  { id: 16, customerName: 'Maria Garcia', email: 'maria.garcia@email.com', phone: '+60 17-890-1234', eventName: 'Jazz Night Live', eventDate: '2026-08-20', eventVenue: 'City Jazz Club', tickets: 1, ticketType: 'VIP Access', totalPrice: 250.00, status: 'pending', bookingDate: '2026-04-01', paymentMethod: 'GrabPay', specialRequests: 'Table reservation', qrCode: 'QR016', hasReview: false, checkedIn: false },
  { id: 17, customerName: 'Layla Hassan', email: 'layla.hassan@email.com', phone: '+60 18-901-2345', eventName: 'Gaming Convention', eventDate: '2026-09-05', eventVenue: 'Convention Center', tickets: 5, ticketType: 'Regular', totalPrice: 900.00, status: 'confirmed', bookingDate: '2026-03-31', paymentMethod: 'ShopeePay', specialRequests: 'Merchandise bundle', qrCode: 'QR017', hasReview: false, checkedIn: false },
  { id: 18, customerName: 'Kevin Tan', email: 'kevin.tan@email.com', phone: '+60 19-012-3456', eventName: 'Rock Concert', eventDate: '2026-07-28', eventVenue: 'National Stadium', tickets: 4, ticketType: 'Regular', totalPrice: 1000.00, status: 'confirmed', bookingDate: '2026-03-30', paymentMethod: 'Touch n Go', specialRequests: 'Backstage tour', qrCode: 'QR018', hasReview: false, checkedIn: false },
  { id: 19, customerName: 'Priya Sharma', email: 'priya.sharma@email.com', phone: '+60 10-123-4567', eventName: 'Business Summit', eventDate: '2026-10-15', eventVenue: 'National Stadium', tickets: 3, ticketType: 'VIP Access', totalPrice: 750.00, status: 'confirmed', bookingDate: '2026-03-29', paymentMethod: 'Credit Card', specialRequests: 'Executive lounge access', qrCode: 'QR019', hasReview: false, checkedIn: false },
  { id: 20, customerName: 'Ahmad Bin Ali', email: 'ahmad.binali@email.com', phone: '+60 11-234-5678', eventName: 'Food Festival', eventDate: '2026-10-05', eventVenue: 'Central Park', tickets: 8, ticketType: 'Group', totalPrice: 1200.00, status: 'confirmed', bookingDate: '2026-03-28', paymentMethod: 'Boost', specialRequests: 'Group seating, dietary restrictions', qrCode: 'QR020', hasReview: false, checkedIn: false }
];

const mockPayments = [
  { id: 1, date: '2026-04-16', customer: 'John Doe', event: 'Summer Music Festival', amount: 120.00, method: 'Online Banking', status: 'successful' },
  { id: 2, date: '2026-04-16', customer: 'Sarah Johnson', event: 'Tech Conference', amount: 250.00, method: 'Credit Card', status: 'successful' },
  { id: 3, date: '2026-04-15', customer: 'Mike Chen', event: 'Summer Music Festival', amount: 200.00, method: 'eWallet', status: 'failed' }
];

const mockServices = [
  { id: 1, name: 'VIP Parking', category: 'Parking', price: 50.00, bookings: 45, available: true },
  { id: 2, name: 'Standard Parking', category: 'Parking', price: 20.00, bookings: 128, available: true },
  { id: 3, name: 'Catering Package A', category: 'Catering', price: 150.00, bookings: 23, available: true }
];

const mockEmployees = [
  { id: 1, name: 'Ahmad Razak', role: 'Event Manager', department: 'Operations', status: 'active', shifts: 40 },
  { id: 2, name: 'Siti Fatimah', role: 'Customer Support', department: 'Support', status: 'active', shifts: 35 },
  { id: 3, name: 'Raj Kumar', role: 'Sales Representative', department: 'Sales', status: 'active', shifts: 38 }
];

const mockContent = [
  { id: 1, title: 'Event Planning Guide', type: 'PDF', size: '2.4 MB', access: 'free', downloads: 1245 },
  { id: 2, title: 'Marketing Templates', type: 'ZIP', size: '15.8 MB', access: 'premium', downloads: 876 },
  { id: 3, title: 'VIP Training Videos', type: 'Video', size: '456 MB', access: 'premium', downloads: 2341 }
];

const mockLeads = [
  { id: 1, name: 'Company XYZ', email: 'contact@company.com', source: 'Website', stage: 'new', value: 50000, created: '2026-04-10' },
  { id: 2, name: 'Small Business Inc', email: 'info@smallbusiness.com', source: 'Referral', stage: 'contacted', value: 25000, created: '2026-04-12' },
  { id: 3, name: 'Enterprise Corp', email: 'sales@enterprise.com', source: 'LinkedIn', stage: 'converted', value: 150000, created: '2026-04-08' }
];

const mockReports = [
  { id: 1, title: 'Monthly Revenue Report', date: 'April 2026', revenue: 125450, growth: '+15.2%' },
  { id: 2, title: 'Ticket Sales Report', date: 'March 2026', revenue: 45210, growth: '+8.7%' },
  { id: 3, title: 'Attendance Report', date: 'February 2026', revenue: 89200, growth: '+12.3%' }
];

const mockAutomations = [
  { id: 1, name: 'Booking Confirmation Email', trigger: 'After booking', action: 'Send email', status: 'active', lastRun: '2026-04-16 10:00 AM' },
  { id: 2, name: 'Event Reminder', trigger: '24 hours before event', action: 'Send WhatsApp', status: 'active', lastRun: '2026-04-15 09:00 AM' },
  { id: 3, name: 'Payment Failed Notification', trigger: 'Failed payment', action: 'Send SMS', status: 'paused', lastRun: '2026-04-14 02:30 PM' }
];

// Placeholder components with relevant data
const EventsPlaceholder = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [venueFilter, setVenueFilter] = React.useState('all');

  const venues = Array.from(new Set(mockEvents.map(event => event.venue)));

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = searchQuery === '' ||
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesVenue = venueFilter === 'all' || event.venue === venueFilter;

    return matchesSearch && matchesStatus && matchesVenue;
  });

  return (
    <DashboardLayout title="Events">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Events</h1>
            <p className="text-gray-600">Manage and monitor all your events</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/drafts"
              className="px-6 py-3 rounded-lg border-2 transition-colors"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Drafts
            </Link>
            <Link
              to="/create-event"
              className="px-6 py-3 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              Create New Event
            </Link>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold" style={{ color: '#273480' }}>All Events</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#273480]"
                />
              </div>
              <select
                value={venueFilter}
                onChange={(e) => setVenueFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="all">All Venues</option>
                {venues.map(venue => (
                  <option key={venue} value={venue}>{venue}</option>
                ))}
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
              >
                <option value="all">All Events</option>
                <option value="active">Active</option>
                <option value="sold-out">Sold Out</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

        <div className="divide-y divide-gray-200">
          {filteredEvents.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No events match the selected filters. Try clearing the filters to see all events.
            </div>
          ) : (
            filteredEvents.map((event) => (
            <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-6">
                <img
                  src={
                    event.id === 1 ? 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 2 ? 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 3 ? 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 4 ? 'https://images.unsplash.com/photo-1459749411177-287ce3291079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 5 ? 'https://images.unsplash.com/photo-1511882150382-421056c89033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 6 ? 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 7 ? 'https://images.unsplash.com/photo-1544531691-58158a298281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 8 ? 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 9 ? 'https://images.unsplash.com/photo-15312432690587-315d674288f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 10 ? 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 11 ? 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 12 ? 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 13 ? 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 14 ? 'https://images.unsplash.com/photo-1544531691-58158a298281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 15 ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 16 ? 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 17 ? 'https://images.unsplash.com/photo-1544367563-12123d896889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 18 ? 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    event.id === 19 ? 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' :
                    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
                  }
                  alt={event.name}
                  className="w-32 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg mb-1 font-semibold" style={{ color: '#273480' }}>{event.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <span>📅</span>
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <span className="w-5 h-5 text-gray-400">⋮</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Tickets Sold</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              backgroundColor: '#273480',
                              width: `${(event.ticketsSold / event.capacity) * 100}%`
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium" style={{ color: '#273480' }}>
                          {event.ticketsSold}/{event.capacity}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600 mb-1">Revenue</div>
                      <div className="text-lg font-semibold" style={{ color: '#273480' }}>
                        RM {event.revenue.toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600 mb-1">Status</div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          event.status === 'sold-out'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {event.status === 'sold-out' ? 'Sold Out' : 'Active'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <Link
                      to={`/event/${event.id}`}
                      className="px-4 py-2 rounded-lg border-2 transition-colors text-sm font-medium"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      View Event Page
                    </Link>
                    <Link
                      to={`/edit-event/${event.id}`}
                      className="px-4 py-2 rounded-lg text-sm transition-colors font-medium"
                      style={{ backgroundColor: '#f3f4f6', color: '#273480' }}
                    >
                      Edit Event
                    </Link>
                    <Link
                      to="/analytics"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      Analytics
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>
    </div>
  </DashboardLayout>
  );
};

const BookingsPlaceholder = () => (
  <DashboardLayout title="Bookings">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Bookings</h1>
          <p className="text-gray-600">Manage and track all event bookings</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Filter</button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Export</button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Tickets</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium" style={{ color: '#273480' }}>{booking.customer}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{booking.event}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{booking.tickets}x</td>
                <td className="px-6 py-4 text-sm font-semibold" style={{ color: '#273480' }}>RM {booking.amount.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'confirmed'
                      ? 'bg-green-100 text-green-700'
                      : booking.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

const PaymentsPlaceholder = () => (
  <DashboardLayout title="Payments">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Payments</h1>
          <p className="text-gray-600">Track all incoming payments and transactions</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500">
            Total Revenue: RM {mockPayments.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
          </div>
          <Link
            to="/payment-links"
            className="px-6 py-3 rounded-lg border-2 transition-colors"
            style={{ borderColor: '#273480', color: '#273480' }}
          >
            Payment Links
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2" style={{ color: '#273480' }}>{mockPayments.filter(p => p.status === 'successful').length}</div>
          <div className="text-sm text-gray-600 mb-1">Successful Transactions</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2" style={{ color: '#273480' }}>{mockPayments.filter(p => p.status === 'failed').length}</div>
          <div className="text-sm text-gray-600 mb-1">Failed Transactions</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2" style={{ color: '#273480' }}>RM {mockPayments.reduce((sum, p) => sum + (p.status === 'successful' ? p.amount : 0), 0).toFixed(2)}</div>
          <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2" style={{ color: '#273480' }}>{mockPayments.length}</div>
          <div className="text-sm text-gray-600 mb-1">Total Transactions</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Recent Payments</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockPayments.map((payment) => (
            <div key={payment.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-sm font-medium" style={{ color: '#273480' }}>{payment.customer}</div>
                    <div className="text-sm text-gray-500">{payment.event}</div>
                  </div>
                  <div className="text-xs text-gray-500">{new Date(payment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">RM {payment.amount.toFixed(2)}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    payment.status === 'successful'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

const ServicesPlaceholder = () => (
  <DashboardLayout title="Services">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Services</h1>
          <p className="text-gray-600">Manage additional services offered for your events</p>
        </div>
        <button className="px-6 py-3 rounded-lg text-white" style={{ backgroundColor: '#E11A27' }}>
          Add New Service
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Service Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#273480] hover:shadow-md transition-all cursor-pointer">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>🅿️</div>
            <div className="text-sm text-gray-600">Parking</div>
          </div>
          <div className="text-center p-4 border border border-gray-200 rounded-lg hover:border-[#273480] hover:shadow-md transition-all cursor-pointer">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>🍽️</div>
            <div className="text-sm text-gray-600">Catering</div>
          </div>
          <div className="text-center p-4 border border border-gray-200 rounded-lg hover:border-[#273480] hover:shadow-md transition-all cursor-pointer">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>🪑️</div>
            <div className="text-sm text-gray-600">Seating</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockServices.map((service) => (
          <div key={service.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#273480' }}>{service.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="px-2 py-1 rounded bg-gray-100">{service.category}</span>
                  <span>•</span>
                  <span>RM {service.price.toFixed(2)}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                service.available
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {service.available ? 'Available' : 'Unavailable'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Bookings</div>
                <div className="text-lg font-semibold" style={{ color: '#273480' }}>{service.bookings.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Revenue</div>
                <div className="text-lg font-semibold" style={{ color: '#273480' }}>RM {(service.bookings * service.price).toFixed(0)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

const EmployeesPlaceholder = () => (
  <DashboardLayout title="Employees">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Employees</h1>
          <p className="text-gray-600">Manage your staff and team assignments</p>
        </div>
        <button className="px-6 py-3 rounded-lg text-white" style={{ backgroundColor: '#E11A27' }}>
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>Team Overview</h2>
            <div className="text-sm text-gray-500">Total: {mockEmployees.length}</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockEmployees.filter(e => e.status === 'active').length}</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockEmployees.length - mockEmployees.filter(e => e.status === 'on-leave').length}</div>
            <div className="text-sm text-gray-600">On Duty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockEmployees.filter(e => e.status === 'on-leave').length}</div>
            <div className="text-sm text-gray-600">On Leave</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Employee List</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {mockEmployees.map((employee) => (
          <div key={employee.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                  <span className="text-white text-sm font-medium">{employee.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#273480' }}>{employee.name}</div>
                  <div className="text-sm text-gray-500">{employee.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  <div>{employee.department}</div>
                  <div className="text-xs">{employee.shifts} shifts/week</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  employee.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : employee.status === 'on-leave'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {employee.status === 'active' ? 'Active' : employee.status === 'on-leave' ? 'On Leave' : 'Other'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

const ContentPlaceholder = () => (
  <DashboardLayout title="Protected Content">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Protected Content</h1>
          <p className="text-gray-600">Manage members-only digital assets and content</p>
        </div>
        <button className="px-6 py-3 rounded-lg text-white" style={{ backgroundColor: '#E11A27' }}>
          Upload Content
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>Content Overview</h2>
            <div className="text-sm text-gray-500">Total: {mockContent.length}</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockContent.filter(c => c.access === 'free').length}</div>
            <div className="text-sm text-gray-600">Free</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockContent.filter(c => c.access === 'premium').length}</div>
            <div className="text-sm text-gray-600">Premium</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockContent.reduce((sum, c) => sum + c.downloads, 0).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Downloads</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Content Library</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {mockContent.map((content) => (
          <div key={content.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                    <span className="text-white text-xl">{content.type === 'PDF' ? '📄' : content.type === 'ZIP' ? '📁' : '🎬'}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: '#273480' }}>{content.title}</div>
                    <div className="text-xs text-gray-500">{content.size}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{content.access.charAt(0).toUpperCase() + content.access.slice(1)} Access</div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600">{content.downloads.toLocaleString()} downloads</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

const MarketingPlaceholder = () => (
  <DashboardLayout title="Marketing & CRM">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Marketing & CRM</h1>
          <p className="text-gray-600">Manage leads, campaigns, and customer relationships</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Import Leads</button>
          <button className="px-4 py-2 rounded-lg bg-[#273480] text-white hover:opacity-90">Create Campaign</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>Lead Pipeline</h2>
            <div className="text-sm text-gray-500">Total Value: RM {mockLeads.reduce((sum, l) => sum + l.value, 0).toLocaleString()}</div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>Conversion Rate</h2>
            <div className="text-sm text-gray-500">{((mockLeads.filter(l => l.stage === 'converted').length / mockLeads.length) * 100).toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Leads Overview</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockLeads.map((lead) => (
            <div key={lead.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-sm font-medium" style={{ color: '#273480' }}>{lead.name}</div>
                  <div className="text-xs text-gray-500">{lead.email}</div>
                </div>
                <div className="text-xs text-gray-500">{lead.source}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  lead.stage === 'new' ? 'bg-blue-100 text-blue-700'
                  : lead.stage === 'contacted' ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-green-100 text-green-700'
                }`}>
                  {lead.stage.charAt(0).toUpperCase() + lead.stage.slice(1)}
                </span>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600">RM {lead.value.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{new Date(lead.created).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

const ReportsPlaceholder = () => (
  <DashboardLayout title="Reports & Analytics">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Reports & Analytics</h1>
          <p className="text-gray-600">View comprehensive reports and business insights</p>
        </div>
        <button className="px-6 py-3 rounded-lg text-white" style={{ backgroundColor: '#E11A27' }}>
          Generate All Reports
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Booking Reports */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Booking Reports</h3>
              <p className="text-sm text-gray-600">Track ticket sales and booking patterns</p>
            </div>
            <button className="px-4 py-2 rounded-lg text-sm text-white transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Generate Report
            </button>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Daily Bookings</span>
              <span className="font-medium" style={{ color: '#273480' }}>+23.5%</span>
            </div>
            <div className="h-32 flex items-end gap-1">
              {[45, 62, 58, 71, 85, 69, 92, 78, 65, 88, 75, 95].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t transition-all hover:opacity-80"
                  style={{
                    backgroundColor: index === 11 ? '#E11A27' : '#273480',
                    height: `${height}%`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>1,247</div>
              <div className="text-xs text-gray-600">Total Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>RM 24,940</div>
              <div className="text-xs text-gray-600">Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>85%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Payment Reports */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Payment Reports</h3>
              <p className="text-sm text-gray-600">Monitor payment transactions and revenue</p>
            </div>
            <button className="px-4 py-2 rounded-lg text-sm text-white transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Generate Report
            </button>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Payment Methods</span>
              <span className="font-medium" style={{ color: '#273480' }}>Online Banking: 45%</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{ backgroundColor: '#273480', width: '45%' }} />
                </div>
                <span className="text-xs text-gray-600">Online Banking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{ backgroundColor: '#A04292', width: '30%' }} />
                </div>
                <span className="text-xs text-gray-600">Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{ backgroundColor: '#E11A27', width: '25%' }} />
                </div>
                <span className="text-xs text-gray-600">eWallet</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>RM 45,230</div>
              <div className="text-xs text-gray-600">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>98%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>2%</div>
              <div className="text-xs text-gray-600">Failed Rate</div>
            </div>
          </div>
        </div>

        {/* Attendance Reports */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Attendance Reports</h3>
              <p className="text-sm text-gray-600">Analyze event attendance and check-ins</p>
            </div>
            <button className="px-4 py-2 rounded-lg text-sm text-white transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Generate Report
            </button>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Attendance Rate</span>
              <span className="font-medium" style={{ color: '#273480' }}>87.5%</span>
            </div>
            <div className="h-32 flex items-end gap-2">
              {[72, 85, 91, 88, 95, 89, 93, 87, 92, 88, 90, 87].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t transition-all hover:opacity-80"
                  style={{
                    backgroundColor: index === 11 ? '#E11A27' : '#A04292',
                    height: `${height}%`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>8,743</div>
              <div className="text-xs text-gray-600">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>92%</div>
              <div className="text-xs text-gray-600">Check-in Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>15 min</div>
              <div className="text-xs text-gray-600">Avg. Wait Time</div>
            </div>
          </div>
        </div>

        {/* Customer Reports */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: '#273480' }}>Customer Reports</h3>
              <p className="text-sm text-gray-600">Customer demographics and behavior</p>
            </div>
            <button className="px-4 py-2 rounded-lg text-sm text-white transition-colors" style={{ backgroundColor: '#E11A27' }}>
              Generate Report
            </button>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Customer Growth</span>
              <span className="font-medium" style={{ color: '#273480' }}>+18.2%</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{ backgroundColor: '#273480', width: '35%' }} />
                </div>
                <span className="text-xs text-gray-600">New Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{ backgroundColor: '#A04292', width: '45%' }} />
                </div>
                <span className="text-xs text-gray-600">Returning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="h-3 rounded-full" style={{ backgroundColor: '#E11A27', width: '20%' }} />
                </div>
                <span className="text-xs text-gray-600">VIP</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>3,456</div>
              <div className="text-xs text-gray-600">Total Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>4.2</div>
              <div className="text-xs text-gray-600">Avg. Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#273480' }}>78%</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Performance Summary</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockReports.reduce((sum, r) => sum + r.revenue, 0).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{(mockReports.reduce((sum, r) => sum + (r.growth.includes('+') ? parseFloat(r.growth) : -parseFloat(r.growth)), 0) / mockReports.length).toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Avg. Growth</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockReports.length}</div>
            <div className="text-sm text-gray-600">Reports Generated</div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

const AutomationsPlaceholder = () => (
  <DashboardLayout title="Automations">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Automations</h1>
          <p className="text-gray-600">Set up automated workflows for emails, WhatsApp, and notifications</p>
        </div>
        <button className="px-6 py-3 rounded-lg text-white" style={{ backgroundColor: '#E11A27' }}>
          Create Automation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: '#273480' }}>Automation Overview</h2>
            <div className="text-sm text-gray-500">{mockAutomations.filter(a => a.status === 'active').length} Active</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockAutomations.length}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2" style={{ color: '#273480' }}>{mockAutomations.filter(a => a.action.includes('email')).length}</div>
            <div className="text-sm text-gray-600">Email</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Active Automations</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockAutomations.map((automation) => (
            <div key={automation.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="text-sm font-medium" style={{ color: '#273480' }}>{automation.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{automation.trigger}</span>
                    <span>→</span>
                    <span className="text-xs text-gray-500">{automation.action}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    automation.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {automation.status.charAt(0).toUpperCase() + automation.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-4">Last Run: {automation.lastRun}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'organizer' | 'buyer' | 'admin'>('organizer');

  // Initialize localStorage with mock data on app load
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />}
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              userType === 'admin' ? (
                <AdminDashboard />
              ) : userType === 'organizer' ? (
                <OrganizerDashboard />
              ) : (
                <BuyerDashboard />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/buyer-dashboard"
          element={isLoggedIn ? <BuyerBrowse /> : <Navigate to="/login" />}
        />
        <Route
          path="/my-tickets"
          element={isLoggedIn ? <BuyerMyTickets /> : <Navigate to="/login" />}
        />
        <Route
          path="/saved-events"
          element={isLoggedIn ? <BuyerSavedEvents /> : <Navigate to="/login" />}
        />
        <Route
          path="/create-event"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <CreateEvent />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/equipment-booking/:eventId"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EquipmentBooking />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit-event/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EditEvent />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/analytics" element={<Analytics />} /> 
        <Route
          path="/edit-landing/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <LandingPageBuilder />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/landing-page-builder/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <LandingPageBuilder />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/event/:id" element={<EventDetail isLoggedIn={isLoggedIn} userType={userType} />} />
        <Route path="/e/:slug" element={<EventLandingPage />} />
        <Route
          path="/my-tickets"
          element={isLoggedIn ? <MyTickets /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile userType={userType} /> : <Navigate to="/login" />}
        />
        <Route
          path="/drafts"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EventDrafts />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/transactions"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <Transactions />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/settings"
          element={isLoggedIn ? <Settings /> : <Navigate to="/login" />}
        />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/features" element={<Features />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/qr-payments" element={<QRPayments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/automation-workflow" element={<AutomationWorkflow />} />
        <Route path="/marketing-tracking" element={<MarketingTracking />} />
        <Route path="/payment-link" element={<PaymentLink />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/payment-links" element={<PaymentLinkManager />} />
        <Route path="/create-payment-link" element={<CreatePaymentLink />} />
        <Route path="/events" element={<EventsPlaceholder />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/create-service"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <CreateService />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit-service/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EditService />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/employees" element={<Employees />} />
        <Route
          path="/create-employee"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <CreateEmployee />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit-employee/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EditEmployee />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/protected-content" element={<Content />} />
        <Route
          path="/create-content"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <CreateContent />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit-content/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EditContent />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/marketing" element={<Marketing />} />
        <Route
          path="/create-campaign"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <CreateCampaign />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit-campaign/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EditCampaign />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/reports" element={<Reports />} />
        <Route path="/automations" element={<Automations />} />
        <Route
          path="/create-automation"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <CreateAutomation />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/edit-automation/:id"
          element={
            isLoggedIn && userType === 'organizer' ? (
              <EditAutomation />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/event-approvals"
          element={
            isLoggedIn && userType === 'admin' ? (
              <EventApprovals />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/users"
          element={
            isLoggedIn && userType === 'admin' ? (
              <UsersManagement />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/events"
          element={
            isLoggedIn && userType === 'admin' ? (
              <AdminEventManagement />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/stats"
          element={
            isLoggedIn && userType === 'admin' ? (
              <SystemStats />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/settings"
          element={
            isLoggedIn && userType === 'admin' ? (
              <AdminSettings />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
