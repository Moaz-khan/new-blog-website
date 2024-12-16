import React from "react";
import { CarouselPlugin } from "./carousel";

export default function Explore() {
  return (
    <div className="h-screen my-4 mx-4 relative">
      {/* Background */}
      <video
        src="/assets/explore.mp4" // Replace with your video path
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>

      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center p-4">
        <div className="relative w-full max-w-4xl text-white p-6 md:p-10 rounded-3xl transform transition-transform duration-300 hover:scale-105">
          <div className="mb-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Explore Blogs
            </h1>
            <p className="text-base sm:text-lg mt-3 text-gray-200">
              Explore the evolving landscape of artificial intelligence with our
              insightful blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <CarouselPlugin />
          </div>
        </div>
      </div>
    </div>
  );
}
