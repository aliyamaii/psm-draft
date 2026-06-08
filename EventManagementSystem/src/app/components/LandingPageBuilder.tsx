import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Eye, Save } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function LandingPageBuilder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [heroTitle, setHeroTitle] = useState('Experience the Ultimate Music Festival');
  const [heroSubtitle, setHeroSubtitle] = useState('Join thousands of music lovers for an unforgettable night');
  const [aboutText, setAboutText] = useState('Experience the biggest music festival of the summer featuring world-class artists, multiple stages, and unforgettable performances.');
  const [highlightsTitle, setHighlightsTitle] = useState('Event Highlights');
  const [highlights, setHighlights] = useState([
    { title: 'World-Class Artists', description: '20+ international and local performers' },
    { title: 'Multiple Stages', description: '3 stages with non-stop entertainment' },
    { title: 'Food & Beverages', description: 'Curated selection of food trucks and bars' }
  ]);
  const [ctaText, setCtaText] = useState('Get Your Tickets Now');
  const [primaryColor, setPrimaryColor] = useState('#273480');
  const [accentColor, setAccentColor] = useState('#E11A27');

  const handleSave = () => {
    navigate('/dashboard');
  };

  return (
    <DashboardLayout title="Edit Landing Page">
      <div className="flex items-center gap-4 mb-6">
        <Link
          to={`/edit-event/${id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Edit Event
        </Link>
        <div className="flex-1" />
        <Link
          to={`/e/summer-music-festival-2026`}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2"
          style={{ borderColor: '#273480', color: '#273480' }}
        >
          <Eye className="w-4 h-4" />
          Preview
        </Link>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2 rounded-lg text-white"
          style={{ backgroundColor: '#E11A27' }}
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor Panel */}
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl mb-6" style={{ color: '#273480' }}>Landing Page Editor</h2>

              {/* Hero Section */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <h3 style={{ color: '#273480' }}>Hero Section</h3>

                <div>
                  <label className="block text-sm mb-2 text-gray-600">Hero Title</label>
                  <input
                    type="text"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-600">Hero Subtitle</label>
                  <input
                    type="text"
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-600">Call-to-Action Button Text</label>
                  <input
                    type="text"
                    value={ctaText}
                    onChange={(e) => setCtaText(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                  />
                </div>
              </div>

              {/* About Section */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <h3 style={{ color: '#273480' }}>About Section</h3>

                <div>
                  <label className="block text-sm mb-2 text-gray-600">About Text</label>
                  <textarea
                    value={aboutText}
                    onChange={(e) => setAboutText(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 h-32"
                    style={{ '--tw-ring-color': '#273480' } as any}
                  />
                </div>
              </div>

              {/* Highlights Section */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <h3 style={{ color: '#273480' }}>Highlights Section</h3>

                <div>
                  <label className="block text-sm mb-2 text-gray-600">Section Title</label>
                  <input
                    type="text"
                    value={highlightsTitle}
                    onChange={(e) => setHighlightsTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                  />
                </div>

                {highlights.map((highlight, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                    <input
                      type="text"
                      value={highlight.title}
                      onChange={(e) => {
                        const newHighlights = [...highlights];
                        newHighlights[index].title = e.target.value;
                        setHighlights(newHighlights);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="Highlight title"
                    />
                    <input
                      type="text"
                      value={highlight.description}
                      onChange={(e) => {
                        const newHighlights = [...highlights];
                        newHighlights[index].description = e.target.value;
                        setHighlights(newHighlights);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="Highlight description"
                    />
                  </div>
                ))}
              </div>

              {/* Styling */}
              <div className="space-y-4">
                <h3 style={{ color: '#273480' }}>Styling</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-600">Primary Color</label>
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-full h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-600">Accent Color</label>
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-full h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden sticky top-24">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Live Preview</span>
              </div>

              <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                {/* Preview Hero */}
                <div className="relative h-64 flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
                  <div className="text-center px-6">
                    <h1 className="text-3xl mb-3 text-white">{heroTitle}</h1>
                    <p className="text-white text-opacity-90 mb-6">{heroSubtitle}</p>
                    <button
                      className="px-6 py-3 rounded-lg text-white font-medium"
                      style={{ backgroundColor: accentColor }}
                    >
                      {ctaText}
                    </button>
                  </div>
                </div>

                {/* Preview About */}
                <div className="p-8">
                  <h2 className="text-2xl mb-4" style={{ color: primaryColor }}>About</h2>
                  <p className="text-gray-700">{aboutText}</p>
                </div>

                {/* Preview Highlights */}
                <div className="p-8 bg-gray-50">
                  <h2 className="text-2xl mb-6 text-center" style={{ color: primaryColor }}>{highlightsTitle}</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg">
                        <h3 className="mb-2" style={{ color: primaryColor }}>{highlight.title}</h3>
                        <p className="text-sm text-gray-600">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
  );
}
