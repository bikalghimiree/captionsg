import { ReactNode } from 'react';

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="dark-glass rounded-xl p-8 max-w-md w-full mx-auto">
      {children}
    </div>
  );
};

export default AuthCard;