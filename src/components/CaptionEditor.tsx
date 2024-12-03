import { useState } from 'react';
import type { Caption } from '../types';

interface CaptionEditorProps {
  captions: Caption[];
  onCaptionsUpdate: (captions: Caption[]) => void;
}

const CaptionEditor = ({ captions, onCaptionsUpdate }: CaptionEditorProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string, newText: string) => {
    const updatedCaptions = captions.map(caption =>
      caption.id === id ? { ...caption, text: newText } : caption
    );
    onCaptionsUpdate(updatedCaptions);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-2xl space-y-4">
      <h3 className="text-lg font-medium text-dark-text-primary">Edit Captions</h3>
      <div className="space-y-2">
        {captions.map(caption => (
          <div
            key={caption.id}
            className="p-4 dark-glass rounded-lg hover:bg-dark-surface/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-dark-text-secondary">
                {formatTime(caption.start)} - {formatTime(caption.end)}
              </span>
            </div>
            {editingId === caption.id ? (
              <textarea
                className="w-full p-2 bg-dark-surface border border-dark-accent/20 rounded-md text-dark-text-primary focus:border-dark-accent"
                value={caption.text}
                onChange={e => handleEdit(caption.id, e.target.value)}
                onBlur={() => setEditingId(null)}
                autoFocus
              />
            ) : (
              <p
                className="text-dark-text-primary cursor-pointer hover:bg-dark-surface/50 p-2 rounded"
                onClick={() => setEditingId(caption.id)}
              >
                {caption.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaptionEditor;