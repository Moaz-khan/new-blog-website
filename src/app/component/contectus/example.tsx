import CardWithForm from "@/app/component/contectus/card";
import React from "react";

export default function Example() {
  return (
    <div id="example" className="relative h-screen my-4 mx-4">
      {/* Background Video */}
      <video
        src="/assets/exampleTwo.mp4" // Replace with your video path
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />

      {/* Content Section */}
      <div className="absolute inset-0 flex justify-center items-center p-4">
        <div className="relative w-full max-w-4xl text-white p-6 md:p-10 rounded-3xl transform transition-transform duration-300 hover:scale-105">
          <div className="mb-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg mt-3 text-gray-200">
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
