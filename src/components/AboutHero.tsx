"use client";

import { useState } from 'react';

const AboutHero = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  return (
    <div className="relative h-96 bg-black">
      <video
        key="/media/about-hero.mp4" // Adding a key can help React re-render correctly
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/media/about-hero.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-extrabold tracking-wider">我们的故事</h1>
      </div>

      <div className="absolute bottom-4 right-4">
        <button 
          onClick={toggleMute}
          className="bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition"
          aria-label={isMuted ? "取消静音" : "静音"}
        >
          {isMuted ? (
            // Unmute Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            ) : (
            // Mute Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default AboutHero; 