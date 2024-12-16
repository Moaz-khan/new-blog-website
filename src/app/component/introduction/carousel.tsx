"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  // Updated books array with images, names, and authors
  const books = [
    {
      name: "Artificail Intelligence Basic",
      author: "Tom Tulli",
      image: "/assets/books1.jpeg",
    },
    {
      name: "Best Blog On The Planet",
      author: "DataBase",
      image: "/assets/ai.jpg",
    },
    {
      name: "Revolution Of Ai",
      author: "revo.Ai",
      image: "/assets/images.jpeg",
    },
    {
      name: "How Smart Ai Today",
      author: "Muhammad Moaz",
      image: "/assets/HowSmartAi.jpeg",
    },
    { name: "Robots Worlds", author: "Rohan", image: "/assets/robotsWorl.jpg" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {books.map((book, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  {/* Image */}
                  <Image
                    src={book.image}
                    alt={book.name}
                    width={300}
                    height={300}
                    className="object-cover rounded"
                  />

                  {/* Description on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-all duration-300 rounded">
                    <h3 className="font-semibold text-lg">{book.name}</h3>
                    <p className="text-sm">{book.author}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
