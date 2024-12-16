import CardWithForm from "@/app/component/contectus/card";
import React from "react";

export default function Example() {
  return (
    <div
      id="example"
      className="relative flex justify-center items-center min-h-screen px-4 py-8">
      {/* Content Section with Background Video */}
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-4xl">
        {/* Background Video */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <video
            src="/assets/exampleTwo.mp4" // Replace with your video path
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="relative bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-10 rounded-3xl z-10">
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-200">
              Have questions about AI or want to collaborate? Fill out the form
              below, and we’ll get back to you!
            </p>
          </div>
          <CardWithForm />
        </div>
      </div>
    </div>
  );
}
