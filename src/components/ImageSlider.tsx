"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";

const ImageSlider = () => {
  const images = [
    { src: "/images/team/Elizabeth-1.jpg", alt: "Carousel Image 1" },
    { src: "/images/team/Valentine.jpg", alt: "Carousel Image 2" },
    { src: "/images/team/Issaka 1.jpg", alt: "Carousel Image 3" },
    { src: "/images/team/Victory 1.jpg", alt: "Carousel Image 4" },
    { src: "/images/team/faith 3.jpg", alt: "Carousel Image 5" },
    { src: "/images/team/Gloria Gimba.jpg", alt: "Carousel Image 6" },
    { src: "/images/team/Christian 1.jpg", alt: "Carousel Image 7" },
  ];

  // Responsive slide configuration
  const [slideConfig, setSlideConfig] = useState({
    slideSize: 320,
    borderRadius: 60,
    spaceBetween: 16,
    slidesPerView: "auto" as const,
    speed: 5000,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 480) {
        // Small mobile phones
        setSlideConfig({
          slideSize: 180, // Smaller size for mobile
          borderRadius: 20,
          spaceBetween: 8,
          slidesPerView: "auto",
          speed: 3000,
        });
      } else if (width < 640) {
        // Large phones
        setSlideConfig({
          slideSize: 220, // Smaller size for larger phones
          borderRadius: 25,
          spaceBetween: 8,
          slidesPerView: "auto",
          speed: 4000,
        });
      } else if (width < 900) {
        // Increased breakpoint for tablets
        // Small tablets
        setSlideConfig({
          slideSize: 260, // Smaller size for small tablets
          borderRadius: 40,
          spaceBetween: 12,
          slidesPerView: "auto",
          speed: 4500,
        });
      } else if (width < 1200) {
        // Increased breakpoint for larger tablets/iPads
        // Tablets and iPads
        setSlideConfig({
          slideSize: 280, // Smaller size for tablets
          borderRadius: 45,
          spaceBetween: 14,
          slidesPerView: "auto",
          speed: 5000,
        });
      } else {
        // Desktop
        setSlideConfig({
          slideSize: 320,
          borderRadius: 60,
          spaceBetween: 16,
          slidesPerView: "auto",
          speed: 5000,
        });
      }
    };

    // Set initial size
    handleResize();

    // Add event listener with debounce for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);

    // Clean up
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={slideConfig.spaceBetween}
        slidesPerView={slideConfig.slidesPerView}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={slideConfig.speed}
        allowTouchMove={true}
        cssMode={false}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{ width: `${slideConfig.slideSize}px` }}
            className="transition-all duration-300"
          >
            <div
              className="bg-[#FFEFE1] opacity-75 border-2 overflow-hidden transition-all duration-300 hover:opacity-100 hover:shadow-lg"
              style={{
                width: `${slideConfig.slideSize}px`,
                height: `${slideConfig.slideSize}px`,
                borderRadius: `${slideConfig.borderRadius}px`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={slideConfig.slideSize}
                height={slideConfig.slideSize}
                className="object-cover w-full h-full object-top" // Added object-top to show the top part of images
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
