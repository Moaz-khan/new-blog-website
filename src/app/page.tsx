"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ButtonOutline } from "@/components/button";
import About from "./component/about";
import Footer from "./component/footer";
import Example from "./component/contectus/example";
import Explore from "./component/introduction/page";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Hero Section Scroll Animation
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="relative w-full flex flex-col items-center">
        {/* Hero Section */}
        <motion.div
          className="relative h-screen w-full bg-cover dark:text-white my-4 mx-4 mt-0"
          style={{ opacity: heroOpacity, scale: heroScale }}>
          {/* Background Video */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted>
              <source src="/assets/mainpage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Explore the Future of AI
            </h1>
            <p className="mb-5 text-base sm:text-lg md:text-xl text-gray-300 hover:text-white">
              Unlock the future of technology by staying ahead with the latest
              breakthroughs and game-changing innovations in Artificial
              Intelligence.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <ButtonOutline text="Login to Contribute" href="" />
              <ButtonOutline text="Explore Blogs" href="#explore" />
              <ButtonOutline text="About Us" href="#about" />
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          id="about"
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <About />
        </motion.div>

        {/* Explore Section */}
        <motion.div
          id="explore"
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <Explore />
        </motion.div>

        {/* Example Section */}
        <motion.div
          id="example"
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <Example />
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
