import { ReactNode } from 'react';

interface AuthButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
}

const AuthButton = ({ children, type = 'button', onClick, disabled }: AuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-dark-accent to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-accent disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default AuthButton;