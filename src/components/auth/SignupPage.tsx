import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useGoogleLogin } from '@react-oauth/google';
import { Mail, Lock, Eye, EyeOff, User, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import PageBackground from '../Common/PageBackground';
import AuthCard from './AuthCard';
import AuthButton from './AuthButton';
import GoogleButton from './GoogleButton';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginWithRedirect({
        appState: { returnTo: window.location.pathname },
        authorizationParams: {
          screen_hint: 'signup',
        },
      });
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Here you would typically:
        // 1. Send the response.access_token to your backend
        // 2. Verify the token and get user info
        // 3. Create/update user in your database
        // 4. Set your auth state
        
        toast.success('Successfully signed up with Google!');
        navigate('/dashboard');
      } catch (error) {
        toast.error('Google signup failed. Please try again.');
      }
    },
    onError: () => {
      toast.error('Google signup failed. Please try again.');
    }
  });

  return (
    <PageBackground>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <AuthCard>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text-primary mb-2">
              Create your account
            </h2>
            <p className="text-dark-text-secondary">
              Already have an account?{' '}
              <Link to="/login" className="text-dark-accent hover:text-dark-accent/80">
                Sign in
              </Link>
            </p>
          </div>

          {/* Google Sign Up Button */}
          <div className="mb-8">
            <GoogleButton onClick={() => googleLogin()} />
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-surface/60"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-dark-background text-dark-text-secondary">
                or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                  placeholder="Full name"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-dark-text-secondary" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                  placeholder="Password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-dark-text-secondary hover:text-dark-text-primary"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <AuthButton type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </AuthButton>

            <p className="text-center text-xs text-dark-text-secondary">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="text-dark-accent hover:text-dark-accent/80">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-dark-accent hover:text-dark-accent/80">
                Privacy Policy
              </Link>
            </p>
          </form>
        </AuthCard>
      </div>
    </PageBackground>
  );
};

export default SignupPage;