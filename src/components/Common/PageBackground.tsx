import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

const PageBackground = ({ children }: PageBackgroundProps) => {
  return (
    <div className="pattern-bg min-h-screen w-full flex flex-col">
      <div className="flex-grow container-custom pt-24 pb-16 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;