import { Upload } from 'lucide-react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface VideoUploaderProps {
  onVideoSelect: (video: File) => void;
}

const VideoUploader = ({ onVideoSelect }: VideoUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const validateVideo = (file: File): boolean => {
    if (!isAuthenticated) {
      setError('Please login to upload videos');
      loginWithRedirect();
      return false;
    }

    const maxSize = 700 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('Video file is too large. Maximum file size is 700MB.');
      return false;
    }

    if (!file.type.startsWith('video/')) {
      setError('Please upload a valid video file.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const videoFile = files.find(file => file.type.startsWith('video/'));
    
    if (videoFile && validateVideo(videoFile)) {
      onVideoSelect(videoFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0] && validateVideo(files[0])) {
      onVideoSelect(files[0]);
    }
  };

  return (
    <div
      className={`w-full max-w-2xl p-8 border-2 border-dashed rounded-lg ${
        isDragging ? 'border-dark-accent bg-dark-accent/10' : 'border-dark-surface'
      } dark-glass`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <Upload className="w-12 h-12 text-dark-text-secondary" />
        <p className="text-lg font-medium text-dark-text-primary">
          Drag and drop your video here
        </p>
        <p className="text-sm text-dark-text-secondary">or</p>
        <label className="px-4 py-2 text-sm font-medium text-white bg-dark-accent rounded-md cursor-pointer hover:bg-blue-600">
          Select Video
          <input
            type="file"
            className="hidden"
            accept="video/*"
            onChange={handleFileSelect}
          />
        </label>
        <div className="text-center space-y-2">
          <p className="text-xs text-dark-text-secondary">Supported formats: MP4, WebM, MOV</p>
          <p className="text-xs text-dark-text-secondary">Maximum video length: 10 minutes</p>
          <p className="text-xs text-dark-text-secondary">Maximum file size: 700MB</p>
          {!isAuthenticated && (
            <p className="text-xs text-dark-accent">Login required to upload videos</p>
          )}
        </div>
        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}
      </div>
    </div>
  );
};

export default VideoUploader;