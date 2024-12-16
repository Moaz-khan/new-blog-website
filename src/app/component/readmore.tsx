"use client";
import { useState } from "react";

export default function Readmore({ text }: { text: string }) {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleToggle = () => {
    setShowFullContent(!showFullContent);
  };

  const fullText = `${text}`;

  const previewText = `${fullText.substring(0, 150)}...`; // Preview first 150 characters

  return (
    <div className="blog-post">
      <p className="mt-4 text-lg">{showFullContent ? fullText : previewText}</p>
      <button onClick={handleToggle} className="mt-4 text-white underline">
        {showFullContent ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
