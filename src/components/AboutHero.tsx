"use client";

import { useState, useRef, useEffect } from 'react';

// Helper function to format time
const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return "00:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

type LikeAnimation = {
  id: number;
  x: number;
};

const AboutHero = () => {
  // Player state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Like & View state
  const [views, setViews] = useState(25734); // Initial mock views
  const [likes, setLikes] = useState(3891);  // Initial mock likes
  const [likeAnimations, setLikeAnimations] = useState<LikeAnimation[]>([]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);

  // On mount, load from localStorage and update views/likes
  useEffect(() => {
    // Likes: Load from cache or use initial state
    const storedLikes = localStorage.getItem('nalati-video-likes');
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }

    // Views: Load from cache, increment, and save back
    const storedViews = localStorage.getItem('nalati-video-views');
    const initialViews = storedViews ? JSON.parse(storedViews) : views;
    const newViews = initialViews + 1;
    setViews(newViews);
    localStorage.setItem('nalati-video-views', JSON.stringify(newViews));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect for handling play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => console.error("Autoplay was prevented: ", error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleLike = () => {
    setLikes(prevLikes => {
      const newLikes = prevLikes + 1;
      localStorage.setItem('nalati-video-likes', JSON.stringify(newLikes));
      return newLikes;
    });

    const newAnimation = {
      id: Date.now(),
      x: Math.random() * 40 - 20, // Random horizontal position between -20px and 20px
    };
    setLikeAnimations(prev => [...prev, newAnimation]);
    setTimeout(() => {
      setLikeAnimations(prev => prev.filter(anim => anim.id !== newAnimation.id));
    }, 2000); // Remove animation after 2 seconds
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };
  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };
  const handleProgressChange = () => {
    if (videoRef.current && progressRef.current) {
      videoRef.current.currentTime = Number(progressRef.current.value);
    }
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold tracking-wider mb-6 text-gray-800">
        我们的故事
      </h1>
      <div 
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          poster="/media/about-hero.jpeg"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onClick={() => setIsPlaying(!isPlaying)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src="/media/about-hero.mp4" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
        
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-black bg-opacity-50 flex items-center justify-between px-4 transition-opacity duration-300 pointer-events-none">
            {/* Left Controls */}
            <div className="flex items-center space-x-3 pointer-events-auto">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                )}
              </button>
              <span className="text-white text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Center Progress Bar */}
            <div className="flex-grow mx-4 pointer-events-auto">
              <input
                ref={progressRef}
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #ffffff ${progressPercentage}%, #ffffff33 ${progressPercentage}%)`
                }}
              />
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-3 pointer-events-auto">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white"
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c3.89-.91 7-4.49 7-8.77s-3.11-7.86-7-8.77z"></path></svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full max-w-4xl flex justify-end items-center space-x-6 mt-3 text-gray-600">
        <span>播放: {views.toLocaleString()}</span>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button 
              onClick={handleLike} 
              className="text-gray-500 hover:text-red-500 transition-colors duration-200"
              aria-label="点赞"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            </button>
            {likeAnimations.map(anim => (
              <div
                key={anim.id}
                className="absolute bottom-full left-1/2 -translate-x-1/2 text-2xl pointer-events-none"
                style={{
                  transform: `translateX(${anim.x}px)`,
                  animation: `float-up 2s ease-out forwards`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>
          <span>{likes.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 