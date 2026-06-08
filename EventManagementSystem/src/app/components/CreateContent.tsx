import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Globe } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

export default function CreateContent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (name: string) => {
    setTitle(name);
    if (!url && name) {
      const slug = generateSlug(name);
      setUrl(slug);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!title || !content || !type || !author) {
      alert('Please fill in all required fields');
      return;
    }

    // Generate a mock content ID and create content data
    const contentId = Date.now();
    const contentData = {
      id: contentId,
      title,
      type,
      status,
      lastUpdated: new Date().toISOString().split('T')[0],
      views: 0,
      clicks: 0,
      version: 'v1.0',
      author,
      content,
      url: url || generateSlug(title)
    };

    // Save content data to localStorage for demo purposes
    const existingContent = JSON.parse(localStorage.getItem('content') || '[]');
    localStorage.setItem('content', JSON.stringify([...existingContent, contentData]));

    // Show success message
    setShowSuccess(true);

    // Navigate back to content page after showing success message
    setTimeout(() => {
      navigate('/protected-content');
    }, 1500);
  };

  return (
    <DashboardLayout title="Create New Content">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
          Content created successfully!
        </div>
      )}

      <div className="max-w-4xl">
        <button
          onClick={() => navigate('/protected-content')}
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Content
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Create New Content</h1>
          <p className="text-gray-600 mb-8">Create new content page for your platform</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Basic Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="Event Terms and Conditions"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Content Body *
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 h-48"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="Write your content here..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Content Type *
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a type</option>
                      <option value="Policy">Policy</option>
                      <option value="Company">Company Info</option>
                      <option value="FAQ">FAQ</option>
                      <option value="Guideline">Guideline</option>
                      <option value="Guide">Guide</option>
                      <option value="Health">Health & Safety</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Status *
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Author *
                    </label>
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="Marketing Team"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      URL Slug
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                        eventhub.com/
                      </span>
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full pl-28 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                        style={{ '--tw-ring-color': '#273480' } as any}
                        placeholder="terms-conditions"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-lg text-white transition-colors"
                style={{ backgroundColor: '#E11A27' }}
              >
                <Save className="w-5 h-5" />
                Create Content
              </button>
              <button
                type="button"
                onClick={() => navigate('/protected-content')}
                className="px-8 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors"
                style={{ borderColor: '#273480', color: '#273480' }}
              >
                <Globe className="w-4 h-4" />
                Preview
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}