import React from "react";

interface StoryProps {
  imageUrl: string;
  timestamp: string;
  className?: string;
}

export default function Story({
  imageUrl,
  timestamp,
  className = "",
}: StoryProps) {
  return (
    <div
      className={`relative w-full max-w-sm mx-auto bg-black rounded-2xl overflow-hidden ${className}`}
    >
      <div className="aspect-[9/16] relative">
        <img
          src={imageUrl}
          alt="Story"
          className="w-full h-full object-cover"
        />

        {/* Timestamp overlay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="text-yellow-400 font-bold text-lg mb-1">
              суббота
            </div>
            <div className="text-white text-sm font-medium">{timestamp}</div>
          </div>
        </div>

        {/* Optional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
