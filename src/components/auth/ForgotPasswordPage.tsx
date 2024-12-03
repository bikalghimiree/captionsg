import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import PageBackground from '../Common/PageBackground';
import AuthCard from './AuthCard';
import AuthButton from './AuthButton';

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
    <PageBackground>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <AuthCard>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text-primary mb-2">
              Reset your password
            </h2>
            <p className="text-dark-text-secondary">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                />
              </div>
            </div>

            <AuthButton type="submit">
              Send reset link
            </AuthButton>

            <div className="text-center">
              <Link
                to="/login"
                className="text-dark-accent hover:text-dark-accent/80 text-sm font-medium"
              >
                Back to login
              </Link>
            </div>
          </form>
        </AuthCard>
      </div>
    </PageBackground>
  );
};

export default ForgotPasswordPage;