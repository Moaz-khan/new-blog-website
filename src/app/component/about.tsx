import { ButtonOutline } from "@/components/button";
import { TypographyH1 } from "@/components/typography";
import React from "react";
import Readmore from "./readmore";

export default function About() {
  return (
    <div id="about" className="dark:text-white h-full my-4 mx-4 relative">
      {/* Background Video */}
      <video
        src="/assets/example.mp4" // Replace with your video path
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>

      <section className="text-white body-font relative z-10">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          {/* About Our Mission */}
          <div className="sm:text-3xl text-2xl text-white font-medium title-font mb-4 md:w-2/5">
            <TypographyH1 text="About Our Mission" />
          </div>
          <div className="md:w-3/5 md:pl-6 w-full">
            <Readmore
              text="Our mission is to revolutionize the way people access and understand AI by delivering the most cutting-edge, insightful content on the latest advancements, breakthrough technologies, and emerging trends.
      We aim to empower individuals, professionals, and businesses by keeping them informed and ahead of the curve, unlocking the potential of artificial intelligence for a brighter, smarter future. With in-depth research, expert perspectives, and real-time updates, 
      we strive to be the go-to source for everything AI, inspiring innovation and fostering a global community of forward-thinking minds."
            />
          </div>

          {/* About Our Vision */}
          <div className="sm:text-3xl text-2xl text-white font-medium title-font mb-4 md:w-2/5 mt-6 md:mt-0">
            <TypographyH1 text="About Our Vision" />
          </div>
          <div className="md:w-3/5 md:pl-6 w-full">
            <Readmore
              text="Our vision is to be the leading platform that empowers the world with the knowledge and tools to harness the full potential of Artificial Intelligence.
             We aspire to create a future where AI is accessible, understandable, and seamlessly integrated into everyday life, transforming industries, enhancing human capabilities, and driving positive change. 
             By offering cutting-edge insights, fostering innovation, and facilitating collaboration, we aim to build a global network of AI enthusiasts, professionals, and thought leaders dedicated to shaping a smarter, more connected world."
            />

            <div className="flex justify-center m-5">
              <ButtonOutline text="Contact" href="#example" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
