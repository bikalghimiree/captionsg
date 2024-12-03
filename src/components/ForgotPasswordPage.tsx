import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithRedirect({
        appState: { returnTo: window.location.pathname },
        authorizationParams: {
          screen_hint: 'reset_password',
        },
      });
      toast.success('Password reset email sent. Please check your inbox.');
    } catch (error) {
      toast.error('Failed to send reset email. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-text-primary">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-dark-text-secondary">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
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
                className="appearance-none rounded-md relative block w-full px-12 py-3 border border-dark-surface placeholder-dark-text-secondary text-dark-text-primary bg-dark-surface/30 focus:outline-none focus:ring-dark-accent focus:border-dark-accent focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark-accent hover:bg-dark-accent/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-accent"
            >
              Send reset link
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-dark-accent hover:text-dark-accent/80 text-sm"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;