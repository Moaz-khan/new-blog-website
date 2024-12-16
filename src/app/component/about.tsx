import { ButtonOutline } from "@/components/button";
import { TypographyH1 } from "@/components/typography";
import React from "react";
import Readmore from "./readmore";

export default function About() {
  return (
    <div
      id="about"
      className="relative flex justify-center items-center min-h-screen px-4 py-8">
      {/* Content Section with Background Video */}
      <div className="relative w-full max-w-4xl bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-10 rounded-3xl z-10">
        {/* Background Video */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <video
            src="/assets/example.mp4" // Replace with your video path
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>

        <section className="relative z-20">
          <div className="container px-5 py-5 mx-auto flex flex-wrap">
            {/* About Our Mission */}
            <div className="sm:text-3xl text-2xl text-white font-medium title-font mb-4 md:w-2/5">
              <TypographyH1 text="About Our Mission" />
            </div>
            <div className="md:w-3/5 md:pl-6 w-full">
              <Readmore text="Our mission is to revolutionize the way people access and understand AI by delivering the most cutting-edge, insightful content on the latest advancements, breakthrough technologies, and emerging trends. We aim to empower individuals, professionals, and businesses by keeping them informed and ahead of the curve, unlocking the potential of artificial intelligence for a brighter, smarter future. With in-depth research, expert perspectives, and real-time updates, we strive to be the go-to source for everything AI, inspiring innovation and fostering a global community of forward-thinking minds." />
            </div>

            {/* About Our Vision */}
            <div className="sm:text-3xl text-2xl text-white font-medium title-font mb-4 md:w-2/5 mt-6 md:mt-0">
              <TypographyH1 text="About Our Vision" />
            </div>
            <div className="md:w-3/5 md:pl-6 w-full">
              <Readmore text="Our vision is to be the leading platform that empowers the world with the knowledge and tools to harness the full potential of Artificial Intelligence. We aspire to create a future where AI is accessible, understandable, and seamlessly integrated into everyday life, transforming industries, enhancing human capabilities, and driving positive change. By offering cutting-edge insights, fostering innovation, and facilitating collaboration, we aim to build a global network of AI enthusiasts, professionals, and thought leaders dedicated to shaping a smarter, more connected world." />

              <div className="flex justify-center mt-5">
                <ButtonOutline text="Contact" href="#example" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
