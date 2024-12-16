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
      name: "Artificial Intelligence Basics",
      author: "Tom Tulli",
      image: "/assets/books1.jpeg",
    },
    {
      name: "Best Blog On The Planet",
      author: "DataBase",
      image: "/assets/ai.jpg",
    },
    {
      name: "Revolution Of AI",
      author: "Revo.AI",
      image: "/assets/images.jpeg",
    },
    {
      name: "How Smart AI Today",
      author: "Muhammad Moaz",
      image: "/assets/HowSmartAi.jpeg",
    },
    { name: "Robots World", author: "Rohan", image: "/assets/robotsWorl.jpg" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {books.map((book, index) => (
          <CarouselItem key={index}>
            <div className="p-2 sm:p-4">
              <Card className="shadow-lg rounded-lg">
                <CardContent className="relative flex aspect-square items-center justify-center p-4 sm:p-6">
                  {/* Image */}
                  <Image
                    src={book.image}
                    alt={book.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                  />

                  {/* Description on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 bg-black bg-opacity-60 transition-opacity duration-300 rounded-lg">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                      {book.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base">
                      {book.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  );
}
