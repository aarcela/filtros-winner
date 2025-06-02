"use client";
import ApplicationFilter from "@/app/components/ApplicationFilter";
import React, { useEffect, useState } from "react";

function Page() {

   const [currentIndex, setCurrentIndex] = useState(0);
   const images = [
      '/assets/1.jpg',
      '/assets/2.jpg',
      '/assets/3.jpg',
      '/assets/4.jpg',
   ];
   const imagesMobile = [
      '/assets/mobile/1.jpg',
      '/assets/mobile/2.jpg',
      '/assets/mobile/3.jpg',
      '/assets/mobile/4.jpg',
   ];
   useEffect(() => {


      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
         );
      }, 5000);
      return () => clearInterval(interval);
   }, [images.length]);


   return (
      <>
         <ApplicationFilter />
         <section className="relative w-full h-full md:order-2">
            {/* Carousel container */}
            <div className="hidden md:flex relative w-full h-full overflow-hidden">
               {images.map((image, index) => (
                  <div
                     key={index}
                     className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                  >
                     <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${image})` }}
                     />
                  </div>
               ))}
            </div>
            <div className="md:hidden relative w-full h-full overflow-hidden">
               {imagesMobile.map((image, index) => (
                  <div
                     key={index}
                     className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                  >
                     <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${image})` }}
                     />
                  </div>
               ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
               {images.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => setCurrentIndex(index)}
                     className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                     aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
            </div>

            {/* Optional navigation arrows */}
            <button
               onClick={() => setCurrentIndex(prev =>
                  prev === 0 ? images.length - 1 : prev - 1
               )}
               className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
               aria-label="Previous slide"
            >
               &lt;
            </button>
            <button
               onClick={() => setCurrentIndex(prev =>
                  prev === images.length - 1 ? 0 : prev + 1
               )}
               className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
               aria-label="Next slide"
            >
               &gt;
            </button>
         </section>
      </>
   );
}

export default Page;
