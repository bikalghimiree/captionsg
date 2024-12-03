import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut, UserPlus } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const location = useLocation();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 backdrop-blur-lg bg-dark-background/80">
      <div className="container-custom">
        <div className="dark-glass rounded-2xl shadow-lg shadow-black/5">
          <div className="px-4">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 interactive"
                >
                  <span className="font-bold text-lg text-dark-text-primary gradient-text">
                    CaptionsG
                  </span>
                </Link>
              </div>
              
              <nav className="flex items-center gap-2">
                {isAuthenticated ? (
                  <>
                    <div className="hidden md:block px-3 py-2 text-sm text-dark-text-secondary">
                      {user?.name || user?.email}
                    </div>
                    <button
                      onClick={() => logout({ returnTo: window.location.origin })}
                      className="px-3 py-2 rounded-lg flex items-center space-x-2 text-red-400 hover:bg-red-950/30 transition-all duration-200 interactive"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="hidden md:inline text-sm">Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-3 py-2 rounded-lg flex items-center space-x-2 text-dark-accent hover:bg-dark-surface/50 transition-all duration-200 interactive"
                    >
                      <LogIn className="h-4 w-4" />
                      <span className="hidden md:inline text-sm">Login</span>
                    </Link>
                    <Link
                      to="/signup"
                      className="px-3 py-2 rounded-lg flex items-center space-x-2 text-dark-accent hover:bg-dark-surface/50 transition-all duration-200 interactive"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span className="hidden md:inline text-sm">Sign Up</span>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;