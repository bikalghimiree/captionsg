import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithRedirect({
        appState: { returnTo: window.location.pathname },
        authorizationParams: {
          screen_hint: 'login',
        },
      });
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  const handleGoogleSuccess = async () => {
    try {
      await loginWithRedirect({
        connection: 'google-oauth2',
      });
    } catch (error) {
      toast.error('Google login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-text-primary">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-dark-text-secondary">
            Or{' '}
            <Link to="/signup" className="font-medium text-dark-accent hover:text-dark-accent/80">
              create a new account
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => toast.error('Google login failed')}
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
                className="appearance-none rounded-t-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
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
                autoComplete="current-password"
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-dark-accent focus:ring-dark-accent border-dark-surface rounded bg-dark-surface/30"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-dark-text-secondary">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-dark-accent hover:text-dark-accent/80">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark-accent hover:bg-dark-accent/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-accent"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;