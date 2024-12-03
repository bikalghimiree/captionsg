import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithRedirect({
        appState: { returnTo: window.location.pathname },
        authorizationParams: {
          screen_hint: 'signup',
        },
      });
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    }
  };

  const handleGoogleSuccess = async () => {
    try {
      await loginWithRedirect({
        connection: 'google-oauth2',
        screen_hint: 'signup',
      });
    } catch (error) {
      toast.error('Google signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-text-primary">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-dark-text-secondary">
            Or{' '}
            <Link to="/login" className="font-medium text-dark-accent hover:text-dark-accent/80">
              sign in to your account
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => toast.error('Google signup failed')}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-surface"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-dark-background text-dark-text-secondary">Or continue with</span>
            </div>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <User className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-t-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div className="relative">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Mail className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Lock className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-b-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-dark-text-secondary" />
                ) : (
                  <Eye className="h-5 w-5 text-dark-text-secondary" />
                )}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark-accent hover:bg-dark-accent/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-accent"
            >
              Create account
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-xs text-dark-text-secondary">
          By signing up, you agree to our{' '}
          <Link to="/terms" className="text-dark-accent hover:text-dark-accent/80">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-dark-accent hover:text-dark-accent/80">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;