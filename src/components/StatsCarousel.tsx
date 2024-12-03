import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Users, Video, Globe, Star } from 'lucide-react';

const stats = [
  {
    number: "18M+",
    label: "Monthly Active Users",
    icon: Users,
  },
  {
    number: "300K+",
    label: "Videos Captioned",
    icon: Video,
  },
  {
    number: "50+",
    label: "Languages Supported",
    icon: Globe,
  },
  {
    number: "99.9%",
    label: "Accuracy Rate",
    icon: Star,
  },
];

const StatsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 px-4 py-6 cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-none w-full sm:w-1/2 md:w-1/4 snap-center"
          >
            <div className="stats-card p-6 dark-glass rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-dark-accent/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300">
                <stat.icon className="h-6 w-6 text-dark-accent transition-all duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-dark-text-primary mb-2 text-center">
                {stat.number}
              </h3>
              <p className="text-dark-text-secondary text-sm text-center">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCarousel;