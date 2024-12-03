import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import ForgotPasswordPage from './components/auth/ForgotPasswordPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN || "your-auth0-domain";
const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID || "your-auth0-client-id";
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "your-google-client-id";

function App() {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Router>
          <div className="min-h-screen flex flex-col bg-dark-background pattern-bg">
            <Header />
            <main className="flex-grow relative z-10">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster 
              position="top-right" 
              toastOptions={{
                className: 'dark-glass',
                style: {
                  background: '#1E293B',
                  color: '#F1F5F9',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                duration: 4000,
              }}
            />
          </div>
        </Router>
      </GoogleOAuthProvider>
    </Auth0Provider>
  );
}

export default App;