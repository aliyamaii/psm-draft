import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
  setUserType: (value: 'organizer' | 'buyer' | 'admin') => void;
}

// Mock accounts for testing
const mockAccounts = [
  {
    email: 'organizer@test.com',
    password: '123456',
    name: 'Event Organizer',
    type: 'organizer' as const
  },
  {
    email: 'buyer@test.com',
    password: '123456',
    name: 'Test Buyer',
    type: 'buyer' as const
  },
  {
    email: 'admin@test.com',
    password: '123456',
    name: 'System Administrator',
    type: 'admin' as const
  }
];

export default function Login({ setIsLoggedIn, setUserType }: LoginProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [accountType, setAccountType] = useState<'organizer' | 'buyer' | 'admin'>('organizer');

  // Check for signup query parameter
  useEffect(() => {
    if (searchParams.get('signup') === 'true') {
      setIsSignup(true);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || (isSignup && !name)) {
      alert('Please fill in all required fields');
      return;
    }

    // Simple email validation
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }

    // Password length validation
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    if (isSignup) {
      // For signup, just create the account
      setIsLoggedIn(true);
      setUserType(accountType);
      navigate('/dashboard');
    } else {
      // For login, check against mock accounts
      const account = mockAccounts.find(
        acc => acc.email === email && acc.password === password
      );

      if (account) {
        setIsLoggedIn(true);
        setUserType(account.type);
        navigate('/dashboard');
      } else {
        alert('Invalid email or password. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 mb-8 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-white">
              <img
                src="https://vectorise.net/logo/wp-content/uploads/2015/07/Kompleks-Sukan-Negara.png"
                alt="Perbadanan Stadium Malaysia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold" style={{ color: '#273480' }}>Perbadanan Stadium Malaysia</span>
          </div>

          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="text-gray-600 mb-8">
            {isSignup
              ? 'Start creating and managing your events'
              : 'Login to access your dashboard'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignup && (
              <div>
                <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#273480' } as any}
                  placeholder="John Doe"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#273480' } as any}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#273480' } as any}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {isSignup && (
              <div>
                <label className="block text-sm mb-3" style={{ color: '#273480' }}>
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAccountType('organizer')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      accountType === 'organizer'
                        ? 'border-[#273480] bg-[#273480] text-white'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="text-sm font-medium">
                      Event Organizer
                    </div>
                    <div className={`text-xs mt-1 ${accountType === 'organizer' ? 'text-white' : 'text-gray-500'}`}>
                      Create events
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType('buyer')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      accountType === 'buyer'
                        ? 'border-[#273480] bg-[#273480] text-white'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="text-sm font-medium">
                      Buyer
                    </div>
                    <div className={`text-xs mt-1 ${accountType === 'buyer' ? 'text-white' : 'text-gray-500'}`}>
                      Buy tickets
                    </div>
                  </button>
                </div>
              </div>
            )}

            {!isSignup && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm" style={{ color: '#E11A27' }}>
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white transition-colors"
              style={{ backgroundColor: '#E11A27' }}
            >
              {isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-sm text-gray-600"
            >
              {isSignup ? 'Already have an account? ' : "Don't have an account? "}
              <span style={{ color: '#E11A27' }}>
                {isSignup ? 'Sign in' : 'Sign up'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1666306769697-b1d57b1bb4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3NjI0MDI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Event"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(39, 52, 128, 0.8) 0%, rgba(225, 26, 39, 0.6) 100%)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white p-12">
          <div className="max-w-md">
            <h2 className="text-4xl mb-4">
              Join thousands of event organizers
            </h2>
            <p className="text-lg opacity-90">
              Create beautiful event pages, manage tickets, and grow your audience with Perbadanan Stadium Malaysia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
