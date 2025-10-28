import React, { useState, useEffect, useRef } from 'react';
import { setCache, getCache } from '../../utils/localStorage';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Set initial volume to 20% and start position to 52 seconds
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.currentTime = 52;
      
      // Add event listener for when the audio ends to restart from 52 seconds
      const handleEnded = () => {
        audioRef.current.currentTime = 52;
        if (isPlaying) {
          audioRef.current.play();
        }
      };
      
      audioRef.current.addEventListener('ended', handleEnded);
      
      // Cleanup event listener
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
    
    // Check localStorage for saved state using our cache utility
    const savedState = getCache('musicPlayerState');
    if (savedState && savedState.playing) {
      setIsPlaying(savedState.playing);
      
      // If it should be playing, start the audio from 52 seconds
      if (savedState.playing && audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.currentTime = 52;
        audioRef.current.play().catch(error => {
          console.error('Auto-play was prevented:', error);
          setIsPlaying(false);
          saveState(false);
        });
      }
    }
  }, []);
  
  // Save state to localStorage using our cache utility
  const saveState = (playing) => {
    setCache('musicPlayerState', { playing }, 7 * 24 * 60 * 60 * 1000); // Cache for 7 days
  };
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Ensure volume is set to 20% and start from 52 seconds when playing
        audioRef.current.volume = 0.2;
        audioRef.current.currentTime = 52;
        audioRef.current.play().catch(error => {
          console.error('Play was prevented:', error);
        });
      }
      
      const newPlayingState = !isPlaying;
      setIsPlaying(newPlayingState);
      saveState(newPlayingState);
    }
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50 font-roboto-mono">
      <audio 
        ref={audioRef} 
        src="/music.mp3" 
        preload="auto"
      />
      <button 
        onClick={togglePlay}
        className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-gray-500/50 font-roboto-mono border border-gray-600"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          // Pause icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          // Play icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;