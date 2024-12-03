import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-dark-surface/30 backdrop-blur-lg border-t border-white/10 py-8 mt-auto relative z-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-dark-text-secondary text-sm">
            © 2024 Copyright | CaptionsG All Rights Reserved
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link
              to="/privacy"
              className="text-dark-text-secondary hover:text-dark-accent text-sm transition-colors nav-link"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-dark-text-secondary hover:text-dark-accent text-sm transition-colors nav-link"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contact"
              className="text-dark-text-secondary hover:text-dark-accent text-sm transition-colors nav-link"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="text-dark-text-secondary hover:text-dark-accent text-sm transition-colors nav-link"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;