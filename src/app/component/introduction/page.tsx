import React from "react";
import { CarouselPlugin } from "./carousel";

export default function Explore() {
  return (
    <div className="relative flex justify-center items-center min-h-screen px-4 py-8">
      {/* Content Section with Background Video */}
      <div className="relative w-full max-w-4xl bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-10 rounded-3xl z-10">
        {/* Background Video */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <video
            src="/assets/explore.mp4" // Replace with your video path
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>

        <div className="relative z-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Explore Blogs
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-200">
            Explore the evolving landscape of artificial intelligence with our
            insightful blog posts
          </p>
          <div className="mt-6">
            <CarouselPlugin />
          </div>
        </div>
      </div>
    </div>
  );
}
