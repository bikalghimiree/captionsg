import { useState } from 'react';
import VideoUploader from './VideoUploader';
import VideoPlayer from './VideoPlayer';
import CaptionEditor from './CaptionEditor';
import type { Video, Caption } from '../types';
import { v4 as uuidv4 } from 'uuid';

const VideoEditorPage = () => {
  const [video, setVideo] = useState<Video | null>(null);

  const handleVideoSelect = async (file: File) => {
    const newVideo: Video = {
      id: uuidv4(),
      file,
      captions: [],
      status: 'uploading',
    };
    setVideo(newVideo);

    // Simulate transcription process
    setTimeout(() => {
      setVideo(prev => {
        if (!prev) return null;
        return {
          ...prev,
          status: 'transcribing',
        };
      });

      setTimeout(() => {
        setVideo(prev => {
          if (!prev) return null;
          return {
            ...prev,
            status: 'ready',
            captions: [
              {
                id: uuidv4(),
                start: 0,
                end: 3,
                text: 'This is a sample caption.',
              },
              {
                id: uuidv4(),
                start: 3,
                end: 6,
                text: 'You would replace these with real captions from Deepgram.',
              },
            ],
          };
        });
      }, 2000);
    }, 1500);
  };

  const handleCaptionsUpdate = (newCaptions: Caption[]) => {
    if (video) {
      setVideo({
        ...video,
        captions: newCaptions,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Video Caption Editor
      </h1>

      {!video && (
        <div className="flex justify-center">
          <VideoUploader onVideoSelect={handleVideoSelect} />
        </div>
      )}

      {video && (
        <div className="space-y-8">
          {video.status === 'uploading' && (
            <div className="text-center text-gray-600">
              Uploading video...
            </div>
          )}

          {video.status === 'transcribing' && (
            <div className="text-center text-gray-600">
              Generating captions...
            </div>
          )}

          {video.status === 'ready' && (
            <>
              <div className="flex justify-center">
                <VideoPlayer videoFile={video.file} captions={video.captions} />
              </div>
              <div className="flex justify-center">
                <CaptionEditor
                  captions={video.captions}
                  onCaptionsUpdate={handleCaptionsUpdate}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoEditorPage;