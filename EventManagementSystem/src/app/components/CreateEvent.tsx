import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Plus, Trash2, AlertCircle, Check, FileText, X } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  url?: string;
}

// Perbadanan Stadium Malaysia stadiums
const stadiums = [
  { id: 1, name: 'Stadium Nasional Bukit Jalil', location: 'Kuala Lumpur', capacity: 87411 },
  { id: 2, name: 'Stadium Shah Alam', location: 'Shah Alam, Selangor', capacity: 80372 },
  { id: 3, name: 'Stadium Hang Jebat', location: 'Melaka', capacity: 40000 },
  { id: 4, name: 'Stadium Darul Makmur', location: 'Kuantan, Pahang', capacity: 40000 },
  { id: 5, name: 'Stadium Perak', location: 'Ipoh, Perak', capacity: 40000 },
  { id: 6, name: 'Stadium Sultan Muhammad IV', location: 'Kota Bharu, Kelantan', capacity: 25000 },
  { id: 7, name: 'Stadium Tuanku Abdul Rahman', location: 'Paroi, Negeri Sembilan', capacity: 20000 },
  { id: 8, name: 'Stadium Larkin', location: 'Johor Bahru, Johor', capacity: 30000 },
  { id: 9, name: 'Stadium Hang Tuah', location: 'Malacca City', capacity: 15000 },
  { id: 10, name: 'Stadium Sultan Mizan Zainal Abidin', location: 'Kuala Terengganu', capacity: 50000 }
];

// Mock bookings for availability check
const mockBookings = [
  { stadiumId: 1, date: '2026-07-15', time: '18:00' },
  { stadiumId: 2, date: '2026-05-20', time: '14:00' }
];

export default function CreateEvent() {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [slug, setSlug] = useState('');
  const [hasSessions, setHasSessions] = useState(false);
  const [hasSeats, setHasSeats] = useState(false);
  const [sessions, setSessions] = useState([{ name: '', available: true }]);
  const [ticketTiers, setTicketTiers] = useState([
    { name: 'General Admission', price: '', quantity: '', hasSeats: false }
  ]);
  const [availabilityStatus, setAvailabilityStatus] = useState<'checking' | 'available' | 'unavailable' | null>(null);

  // Supporting Documents
  const [eventContract, setEventContract] = useState<UploadedFile | null>(null);
  const [vipGuestConfirmation, setVipGuestConfirmation] = useState<UploadedFile | null>(null);
  const [presenterDetails, setPresenterDetails] = useState<UploadedFile | null>(null);
  const [eventProgramme, setEventProgramme] = useState<UploadedFile | null>(null);
  const [eventImage, setEventImage] = useState<UploadedFile | null>(null);
  const fileInputRefs = {
    eventContract: useRef<HTMLInputElement>(null),
    vipGuestConfirmation: useRef<HTMLInputElement>(null),
    presenterDetails: useRef<HTMLInputElement>(null),
    eventProgramme: useRef<HTMLInputElement>(null),
    eventImage: useRef<HTMLInputElement>(null),
  };

  const checkAvailability = () => {
    if (!venue || !date || !time) return;

    setAvailabilityStatus('checking');

    // Simulate API call
    setTimeout(() => {
      const isBooked = mockBookings.some(
        booking => booking.stadiumId.toString() === venue && booking.date === date && booking.time === time
      );
      setAvailabilityStatus(isBooked ? 'unavailable' : 'available');
    }, 1000);
  };

  const handleAddTier = () => {
    setTicketTiers([...ticketTiers, { name: '', price: '', quantity: '', hasSeats: false }]);
  };

  const handleRemoveTier = (index: number) => {
    setTicketTiers(ticketTiers.filter((_, i) => i !== index));
  };

  const handleTierChange = (index: number, field: string, value: string | boolean) => {
    const newTiers = [...ticketTiers];
    newTiers[index] = { ...newTiers[index], [field]: value };
    setTicketTiers(newTiers);
  };

  const handleAddSession = () => {
    setSessions([...sessions, { name: '', available: true }]);
  };

  const handleRemoveSession = (index: number) => {
    setSessions(sessions.filter((_, i) => i !== index));
  };

  const handleSessionChange = (index: number, value: string) => {
    const newSessions = [...sessions];
    newSessions[index] = { ...newSessions[index], name: value };
    setSessions(newSessions);
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleEventNameChange = (name: string) => {
    setEventName(name);
    if (!slug) {
      setSlug(generateSlug(name));
    }
  };

  const handleSubmit = (e: React.FormEvent, isDraft: boolean = false) => {
    e.preventDefault();

    // Basic validation
    if (!eventName || !description || !venue || !date) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate required supporting documents
    if (!isDraft) {
      const missingDocuments = [];
      if (!eventContract) missingDocuments.push('Event Contract');
      if (!vipGuestConfirmation) missingDocuments.push('VIP Guest Confirmation');
      if (!presenterDetails) missingDocuments.push('Presenter Details');
      if (!eventProgramme) missingDocuments.push('Event Programme');

      if (missingDocuments.length > 0) {
        alert(`Please upload the following required document(s):\n• ${missingDocuments.join('\n• ')}`);
        return;
      }
    }

    if (availabilityStatus !== 'available' && !isDraft) {
      alert('Please check venue availability before creating the event');
      return;
    }

    // Generate a mock event ID and create event data
    const eventId = Math.random().toString(36).substring(2, 9);
    const eventData = {
      id: eventId,
      name: eventName,
      description,
      venue,
      date,
      time,
      category,
      slug,
      hasSessions,
      hasSeats,
      sessions,
      ticketTiers,
      supportingDocuments: {
        eventContract: eventContract ? { name: eventContract.name, size: eventContract.size } : null,
        vipGuestConfirmation: vipGuestConfirmation ? { name: vipGuestConfirmation.name, size: vipGuestConfirmation.size } : null,
        presenterDetails: presenterDetails ? { name: presenterDetails.name, size: presenterDetails.size } : null,
        eventProgramme: eventProgramme ? { name: eventProgramme.name, size: eventProgramme.size } : null,
      },
      status: isDraft ? 'draft' : 'pending',
      organizerId: 'organizer-1', // In a real app, this would come from the logged-in user
      organizerName: 'Event Organizer', // In a real app, this would come from the logged-in user
      createdAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
      reviewedAt: null,
      reviewedBy: null,
      rejectionReason: null
    };

    // Save event data to localStorage for demo purposes
    const existingEvents = JSON.parse(localStorage.getItem('events') || '[]');
    localStorage.setItem('events', JSON.stringify([...existingEvents, eventData]));

    // Simulate event creation
    const message = isDraft ? 'Event saved as draft successfully!' : 'Event submitted for approval! Your event will be reviewed by an administrator.';
    setSuccessMessage(message);
    setShowSuccess(true);

    // Navigate to equipment booking after showing success message
    setTimeout(() => {
      if (!isDraft) {
        navigate(`/equipment-booking/${eventId}`);
      } else {
        navigate('/dashboard');
      }
    }, 1500);
  };

  const handleSaveAsDraft = () => {
    handleSubmit(new Event('submit'), true);
  };

  // File handling functions
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: (file: UploadedFile | null) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create object URL for preview
      const url = URL.createObjectURL(file);
      setter({
        name: file.name,
        size: file.size,
        type: file.type,
        url
      });
    }
  };

  const handleRemoveFile = (
    setter: (file: UploadedFile | null) => void
  ) => {
    setter(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const FileUploadCard = ({
    title,
    description,
    file,
    onUpload,
    onRemove,
    inputRef,
    required = false
  }: {
    title: string;
    description: string;
    file: UploadedFile | null;
    onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemove: () => void;
    inputRef: React.RefObject<HTMLInputElement>;
    required?: boolean;
  }) => (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-medium" style={{ color: '#273480' }}>
            {title}
            {required && <span className="text-red-500 ml-1">*</span>}
          </h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {!file ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#273480] transition-colors"
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Click to upload</p>
          <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{file.name}</p>
              <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        onChange={onUpload}
      />
    </div>
  );

  return (
    <DashboardLayout title="Create New Event">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center gap-2">
          <Check className="w-5 h-5" />
          {successMessage}
        </div>
      )}

      <div className="max-w-4xl">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Create New Event</h1>
          <p className="text-gray-600 mb-8">Fill in the details to create your event page</p>

          <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Basic Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Event Name *
                  </label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => handleEventNameChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="Summer Music Festival 2026"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Landing Page Slug *
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 whitespace-nowrap">eventhub.com/e/</span>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(generateSlug(e.target.value))}
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="summer-music-festival-2026"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">This will be your event's custom URL</p>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Description *
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 h-32"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="Describe your event..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="music">Music & Concerts</option>
                      <option value="sports">Sports</option>
                      <option value="conference">Conference & Business</option>
                      <option value="arts">Arts & Culture</option>
                      <option value="food">Food & Drink</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Stadium (Perbadanan Stadium Malaysia) *
                    </label>
                    <select
                      value={venue}
                      onChange={(e) => {
                        setVenue(e.target.value);
                        setAvailabilityStatus(null);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a stadium</option>
                      {stadiums.map((stadium) => (
                        <option key={stadium.id} value={stadium.id}>
                          {stadium.name} - {stadium.location} (Capacity: {stadium.capacity.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Date *
                    </label>
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setAvailabilityStatus(null);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Time *
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value);
                        setAvailabilityStatus(null);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>
                </div>

                {/* Availability Check */}
                {venue && date && time && (
                  <div>
                    <button
                      type="button"
                      onClick={checkAvailability}
                      className="px-6 py-2 rounded-lg border-2 transition-colors"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      Check Availability
                    </button>

                    {availabilityStatus === 'checking' && (
                      <div className="mt-3 flex items-center gap-2 text-gray-600">
                        <div className="w-4 h-4 border-2 border-gray-300 border-t-[#273480] rounded-full animate-spin" />
                        <span className="text-sm">Checking availability...</span>
                      </div>
                    )}

                    {availabilityStatus === 'available' && (
                      <div className="mt-3 flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                        <Check className="w-5 h-5" />
                        <span className="text-sm">Stadium is available for this date and time!</span>
                      </div>
                    )}

                    {availabilityStatus === 'unavailable' && (
                      <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-red-600 mb-3">
                          <AlertCircle className="w-5 h-5" />
                          <span className="font-medium">Stadium is not available for this date and time</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Here are your options to proceed:</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              setAvailabilityStatus(null);
                              // Suggest next available date
                              const nextDay = new Date(date);
                              nextDay.setDate(nextDay.getDate() + 1);
                              setDate(nextDay.toISOString().split('T')[0]);
                            }}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors text-left"
                          >
                            <span className="text-xl">📅</span>
                            <div>
                              <div className="font-medium text-sm" style={{ color: '#273480' }}>Choose Alternative Date</div>
                              <div className="text-xs text-gray-500">Find the next available date</div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setAvailabilityStatus(null);
                              // Reset time to suggest different time
                              setTime('');
                            }}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors text-left"
                          >
                            <span className="text-xl">🕐</span>
                            <div>
                              <div className="font-medium text-sm" style={{ color: '#273480' }}>Choose Different Time</div>
                              <div className="text-xs text-gray-500">Try a different time slot on same date</div>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setAvailabilityStatus(null);
                              setVenue('');
                            }}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors text-left"
                          >
                            <span className="text-xl">🏟️</span>
                            <div>
                              <div className="font-medium text-sm" style={{ color: '#273480' }}>Select Different Venue</div>
                              <div className="text-xs text-gray-500">Browse other available stadiums</div>
                            </div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Event Configuration */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Event Configuration</h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasSessions}
                    onChange={(e) => setHasSessions(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  <div>
                    <span style={{ color: '#273480' }}>This event has multiple sessions/slots</span>
                    <p className="text-sm text-gray-500">E.g., Morning/Afternoon sessions for conferences</p>
                  </div>
                </label>

                {hasSessions && (
                  <div className="ml-8 space-y-3">
                    {sessions.map((session, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <input
                          type="text"
                          value={session.name}
                          onChange={(e) => handleSessionChange(index, e.target.value)}
                          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                          style={{ '--tw-ring-color': '#273480' } as any}
                          placeholder="E.g., Morning Session (9:00 AM - 12:00 PM)"
                          required={hasSessions}
                        />
                        {sessions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveSession(index)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddSession}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                      style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                    >
                      <Plus className="w-4 h-4" />
                      Add Session
                    </button>
                  </div>
                )}

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasSeats}
                    onChange={(e) => setHasSeats(e.target.checked)}
                    className="w-5 h-5 rounded"
                  />
                  <div>
                    <span style={{ color: '#273480' }}>This event has assigned seating</span>
                    <p className="text-sm text-gray-500">Enable seat selection for ticket buyers</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Event Image */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Event Image</h2>
              {!eventImage ? (
                <div
                  onClick={() => fileInputRefs.eventImage.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#273480] transition-colors"
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  <button
                    type="button"
                    className="mt-4 px-6 py-2 rounded-lg border-2 transition-colors"
                    style={{ borderColor: '#273480', color: '#273480' }}
                  >
                    Choose File
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={eventImage.url}
                    alt="Event preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(setEventImage)}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                    {eventImage.name}
                  </div>
                </div>
              )}
              <input
                ref={fileInputRefs.eventImage}
                type="file"
                className="hidden"
                accept="image/png,image/jpeg,image/jpg"
                onChange={(e) => handleFileUpload(e, setEventImage)}
              />
            </div>

            {/* Ticket Tiers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl" style={{ color: '#273480' }}>Ticket Tiers</h2>
                <button
                  type="button"
                  onClick={handleAddTier}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Tier
                </button>
              </div>

              <div className="space-y-4">
                {ticketTiers.map((tier, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                              Tier Name
                            </label>
                            <input
                              type="text"
                              value={tier.name}
                              onChange={(e) => handleTierChange(index, 'name', e.target.value)}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                              style={{ '--tw-ring-color': '#273480' } as any}
                              placeholder="VIP, General, etc."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                              Price (RM)
                            </label>
                            <input
                              type="number"
                              value={tier.price}
                              onChange={(e) => handleTierChange(index, 'price', e.target.value)}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                              style={{ '--tw-ring-color': '#273480' } as any}
                              placeholder="50"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                              Quantity
                            </label>
                            <input
                              type="number"
                              value={tier.quantity}
                              onChange={(e) => handleTierChange(index, 'quantity', e.target.value)}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                              style={{ '--tw-ring-color': '#273480' } as any}
                              placeholder="100"
                              required
                            />
                          </div>
                        </div>

                        {hasSeats && (
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={tier.hasSeats}
                              onChange={(e) => handleTierChange(index, 'hasSeats', e.target.checked)}
                              className="w-4 h-4 rounded"
                            />
                            <span className="text-sm text-gray-600">This tier requires seat selection</span>
                          </label>
                        )}
                      </div>

                      {ticketTiers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTier(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg mt-7"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Documents */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Supporting Documents</h2>
              <p className="text-sm text-gray-600 mb-6">
                Please upload all the required documents to support your event application. All documents are mandatory for approval.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUploadCard
                  title="Event Contract"
                  description="Official contract or agreement for the event venue"
                  file={eventContract}
                  onUpload={(e) => handleFileUpload(e, setEventContract)}
                  onRemove={() => handleRemoveFile(setEventContract)}
                  inputRef={fileInputRefs.eventContract}
                  required={true}
                />

                <FileUploadCard
                  title="VIP Guest Confirmation"
                  description="Confirmation letters for VIP guests or special attendees"
                  file={vipGuestConfirmation}
                  onUpload={(e) => handleFileUpload(e, setVipGuestConfirmation)}
                  onRemove={() => handleRemoveFile(setVipGuestConfirmation)}
                  inputRef={fileInputRefs.vipGuestConfirmation}
                  required={true}
                />

                <FileUploadCard
                  title="Presenter Details"
                  description="Bios, CVs, or profiles of speakers/presenters"
                  file={presenterDetails}
                  onUpload={(e) => handleFileUpload(e, setPresenterDetails)}
                  onRemove={() => handleRemoveFile(setPresenterDetails)}
                  inputRef={fileInputRefs.presenterDetails}
                  required={true}
                />

                <FileUploadCard
                  title="Event Programme"
                  description="Detailed schedule, agenda, or programme of the event"
                  file={eventProgramme}
                  onUpload={(e) => handleFileUpload(e, setEventProgramme)}
                  onRemove={() => handleRemoveFile(setEventProgramme)}
                  inputRef={fileInputRefs.eventProgramme}
                  required={true}
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={availabilityStatus !== 'available'}
                className={`px-8 py-3 rounded-lg text-white transition-colors ${
                  availabilityStatus !== 'available' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ backgroundColor: '#E11A27' }}
              >
                Confirm Booking
              </button>
              <button
                type="button"
                onClick={handleSaveAsDraft}
                className="px-8 py-3 rounded-lg border-2 transition-colors"
                style={{ borderColor: '#273480', color: '#273480' }}
              >
                Save as Draft
              </button>
              <Link
                to="/dashboard"
                className="px-8 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
