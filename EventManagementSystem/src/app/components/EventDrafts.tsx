import { Link } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2, Clock, Calendar } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockDrafts = [
  {
    id: 1,
    name: 'Rock Festival 2027',
    description: 'A massive rock music festival featuring top bands from around the world...',
    venue: 'Stadium Nasional Bukit Jalil',
    category: 'music',
    lastEdited: '2026-04-15 14:30',
    slug: 'rock-festival-2027',
    progress: 75
  },
  {
    id: 2,
    name: 'Gaming Convention',
    description: 'The largest gaming convention in Southeast Asia with tournaments and exhibitions',
    venue: 'Stadium Shah Alam',
    category: 'conference',
    lastEdited: '2026-04-14 09:15',
    slug: 'gaming-convention',
    progress: 45
  },
  {
    id: 3,
    name: 'Food & Wine Festival',
    description: 'Culinary experience featuring local and international cuisine',
    venue: 'Convention Center',
    category: 'food',
    lastEdited: '2026-04-10 16:45',
    slug: 'food-wine-festival',
    progress: 20
  },
  {
    id: 4,
    name: 'Tech Startup Summit',
    description: 'Connecting investors with innovative startups',
    venue: 'National Stadium',
    category: 'conference',
    lastEdited: '2026-04-12 11:20',
    slug: 'tech-startup-summit',
    progress: 90
  },
  {
    id: 5,
    name: 'Comedy Night Special',
    description: 'Stand-up comedy featuring regional comedians',
    venue: 'Sports Arena',
    category: 'entertainment',
    lastEdited: '2026-04-08 15:00',
    slug: 'comedy-night-special',
    progress: 60
  },
  {
    id: 6,
    name: 'Art Exhibition',
    description: 'Contemporary art showcase and workshops',
    venue: 'Convention Center',
    category: 'arts',
    lastEdited: '2026-04-05 10:30',
    slug: 'art-exhibition',
    progress: 35
  },
  {
    id: 7,
    name: 'Charity Gala Dinner',
    description: 'Annual fundraising event for education programs',
    venue: 'National Stadium',
    category: 'charity',
    lastEdited: '2026-04-03 16:45',
    slug: 'charity-gala-dinner',
    progress: 85
  },
  {
    id: 8,
    name: 'Jazz & Blues Night',
    description: 'Evening of smooth jazz and blues performances with dinner',
    venue: 'City Jazz Club',
    category: 'music',
    lastEdited: '2026-04-17 12:45',
    slug: 'jazz-blues-night',
    progress: 50
  },
  {
    id: 9,
    name: 'Sustainable Business Expo',
    description: 'Green business solutions and eco-friendly product showcase',
    venue: 'Convention Center',
    category: 'business',
    lastEdited: '2026-04-16 10:15',
    slug: 'sustainable-business-expo',
    progress: 40
  },
  {
    id: 10,
    name: 'Digital Marketing Summit',
    description: 'Latest trends in digital marketing, SEO, and social media strategy',
    venue: 'National Stadium',
    category: 'business',
    lastEdited: '2026-04-15 14:30',
    slug: 'digital-marketing-summit',
    progress: 65
  },
  {
    id: 11,
    name: 'Cultural Dance Festival',
    description: 'Traditional Malaysian and international dance performances',
    venue: 'Sports Arena',
    category: 'culture',
    lastEdited: '2026-04-14 11:00',
    slug: 'cultural-dance-festival',
    progress: 30
  },
  {
    id: 12,
    name: 'Science Fair',
    description: 'Interactive science exhibits and hands-on learning activities',
    venue: 'Convention Center',
    category: 'education',
    lastEdited: '2026-04-13 09:30',
    slug: 'science-fair',
    progress: 55
  },
  {
    id: 13,
    name: 'Fashion Show Malaysia',
    description: 'Emerging designers showcase their collections on the runway',
    venue: 'National Stadium',
    category: 'fashion',
    lastEdited: '2026-04-12 16:45',
    slug: 'fashion-show-malaysia',
    progress: 25
  },
  {
    id: 14,
    name: 'Health & Wellness Expo',
    description: 'Products and services for healthy living and wellness',
    venue: 'Convention Center',
    category: 'health',
    lastEdited: '2026-04-11 13:15',
    slug: 'health-wellness-expo',
    progress: 70
  },
  {
    id: 15,
    name: 'Automotive Tech Show',
    description: 'Latest automotive technology and electric vehicle displays',
    venue: 'Stadium Shah Alam',
    category: 'technology',
    lastEdited: '2026-04-10 10:00',
    slug: 'automotive-tech-show',
    progress: 80
  },
  {
    id: 16,
    name: 'Book Festival',
    description: 'Literary festival with authors, readings, and book signings',
    venue: 'National Stadium',
    category: 'literature',
    lastEdited: '2026-04-09 14:00',
    slug: 'book-festival',
    progress: 45
  },
  {
    id: 17,
    name: 'Film Festival',
    description: 'Independent films from across Southeast Asia and beyond',
    venue: 'Sports Arena',
    category: 'film',
    lastEdited: '2026-04-08 11:30',
    slug: 'film-festival',
    progress: 60
  },
  {
    id: 18,
    name: 'Photography Workshop',
    description: 'Hands-on photography classes with industry professionals',
    venue: 'Convention Center',
    category: 'education',
    lastEdited: '2026-04-07 12:15',
    slug: 'photography-workshop',
    progress: 35
  },
  {
    id: 19,
    name: 'E-Sports Tournament',
    description: 'Professional gaming tournaments with live streaming and prize pools',
    venue: 'Stadium Shah Alam',
    category: 'gaming',
    lastEdited: '2026-04-06 15:45',
    slug: 'esports-tournament',
    progress: 55
  },
  {
    id: 20,
    name: 'Culinary Competition',
    description: 'Chef competitions, cooking demos, and food sampling',
    venue: 'Convention Center',
    category: 'food',
    lastEdited: '2026-04-05 10:30',
    slug: 'culinary-competition',
    progress: 40
  }
];

export default function EventDrafts() {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this draft?')) {
      // Delete logic here
      console.log('Delete draft:', id);
    }
  };

  return (
    <DashboardLayout title="Event Drafts">
      <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Event Drafts</h1>
            <p className="text-gray-600">Continue working on your saved event drafts</p>
          </div>
          <Link
            to="/create-event"
            className="px-6 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#E11A27' }}
          >
            Create New Event
          </Link>
        </div>

        {mockDrafts.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f3f3f5' }}>
              <Edit className="w-8 h-8" style={{ color: '#273480' }} />
            </div>
            <h3 className="text-xl mb-2" style={{ color: '#273480' }}>No Drafts Yet</h3>
            <p className="text-gray-600 mb-6">
              You haven't saved any event drafts. Start creating an event and save it as a draft.
            </p>
            <Link
              to="/create-event"
              className="inline-block px-6 py-3 rounded-lg text-white"
              style={{ backgroundColor: '#E11A27' }}
            >
              Create Event
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {mockDrafts.map((draft) => (
              <div key={draft.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl" style={{ color: '#273480' }}>{draft.name}</h3>
                      <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                        Draft
                      </span>
                    </div>

                    {draft.description && (
                      <p className="text-gray-600 mb-4 line-clamp-2">{draft.description}</p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {draft.venue && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{draft.venue}</span>
                        </div>
                      )}
                      {draft.category && (
                        <div className="text-sm text-gray-600">
                          Category: <span style={{ color: '#273480' }}>{draft.category}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Last edited: {draft.lastEdited}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Completion Progress</span>
                        <span className="text-sm" style={{ color: '#273480' }}>{draft.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{
                            backgroundColor: draft.progress < 50 ? '#E11A27' : draft.progress < 80 ? '#A04292' : '#273480',
                            width: `${draft.progress}%`
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/edit-event/${draft.id}`}
                        className="px-4 py-2 rounded-lg text-white transition-colors"
                        style={{ backgroundColor: '#E11A27' }}
                      >
                        <Edit className="w-4 h-4 inline mr-2" />
                        Continue Editing
                      </Link>
                      <button
                        onClick={() => handleDelete(draft.id)}
                        className="px-4 py-2 rounded-lg border-2 border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Delete Draft
                      </button>
                      {draft.slug && (
                        <Link
                          to={`/edit-landing/${draft.id}`}
                          className="px-4 py-2 rounded-lg border-2 transition-colors"
                          style={{ borderColor: '#273480', color: '#273480' }}
                        >
                          Edit Landing Page
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Draft Preview Image Placeholder */}
                  <div className="ml-6 w-48 h-32 rounded-lg bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">No image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="mb-2" style={{ color: '#273480' }}>About Drafts</h3>
          <p className="text-sm text-gray-600">
            Drafts are automatically saved when you click "Save as Draft" while creating or editing an event.
            You can return to your drafts anytime to continue editing before publishing.
          </p>
        </div>
    </DashboardLayout>
  );
}
