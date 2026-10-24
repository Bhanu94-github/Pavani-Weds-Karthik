import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { MusicTrackConfig } from '../types/wedding';

interface Props {
  config: MusicTrackConfig;
}

export const AudioPlayer: React.FC<Props> = ({ config }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.warn('Audio playback was prevented by browser policy:', err);
        });
    }
  };

  if (!config.enabled) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={config.audioSrc}
        preload="metadata"
        loop
        onEnded={() => setIsPlaying(false)}
      />

      <button
        type="button"
        className={`audio-royal-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause celebratory wedding music' : 'Play celebratory wedding music'}
        title={isPlaying ? `Pause: ${config.title}` : `Play: ${config.title}`}
      >
        {isPlaying ? (
          <>
            <span className="audio-disc-indicator" aria-hidden="true"></span>
            <Volume2 size={18} />
            <span className="audio-btn-text">Music On</span>
          </>
        ) : (
          <>
            <Music size={17} />
            <VolumeX size={15} />
            <span className="audio-btn-text">Shehnai Music</span>
          </>
        )}
      </button>

      <style>{`
        .audio-btn-text {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
      `}</style>
    </>
  );
};
