import { useRef, useEffect, useState } from 'react';
import type { Caption } from '../types';

interface VideoPlayerProps {
  videoFile: File;
  captions: Caption[];
}

const VideoPlayer = ({ videoFile, captions }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentCaption, setCurrentCaption] = useState<Caption | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = URL.createObjectURL(videoFile);
    }
  }, [videoFile]);

  useEffect(() => {
    const updateCaption = () => {
      const time = currentTime;
      const caption = captions.find(
        cap => time >= cap.start && time <= cap.end
      );
      setCurrentCaption(caption || null);
    };

    updateCaption();
  }, [currentTime, captions]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full"
          controls
          onTimeUpdate={handleTimeUpdate}
        />
        {currentCaption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
            {currentCaption.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;