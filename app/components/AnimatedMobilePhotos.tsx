"use client";

import { motion } from "framer-motion";
import { Photo } from "./Photo";
import { useEffect, useState } from "react";

interface AnimatedMobilePhotosProps {
  delay: number;
}

export function AnimatedMobilePhotos({ delay }: AnimatedMobilePhotosProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (delay + 0.4) * 1000,
    ); // Add 0.4s for the opacity transition

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [delay]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: (custom) => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Photo positions - same as desktop but scaled down for mobile
  const photos = [
    {
      id: 1,
      order: 0,
      x: "-160px", // Scaled down from -320px
      y: "8px", // Scaled down from 15px
      zIndex: 50,
      direction: "left" as const,
      src: "/jay_headshot1.jpg",
    },
    {
      id: 2,
      order: 1,
      x: "-80px", // Scaled down from -160px
      y: "16px", // Scaled down from 32px
      zIndex: 40,
      direction: "left" as const,
      src: "/jay_sitting.jpg",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "4px", // Scaled down from 8px
      zIndex: 30,
      direction: "right" as const,
      src: "/jay_sitting2.jpg",
    },
    {
      id: 4,
      order: 3,
      x: "80px", // Scaled down from 160px
      y: "11px", // Scaled down from 22px
      zIndex: 20,
      direction: "right" as const,
      src: "/jay_headshot2.png",
    },
    {
      id: 5,
      order: 4,
      x: "160px", // Scaled down from 320px
      y: "22px", // Scaled down from 44px
      zIndex: 10,
      direction: "left" as const,
      src: "/jay_funny.png",
    },
  ];

  return (
    <div className="relative mb-8 flex h-[175px] w-full items-center justify-center lg:hidden">
      <motion.div
        className="relative mx-auto flex w-full max-w-sm justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="relative flex w-full justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="relative h-[110px] w-[110px]">
            {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
            {[...photos].reverse().map((photo) => (
              <motion.div
                key={photo.id}
                className="absolute left-0 top-0"
                style={{ zIndex: photo.zIndex }}
                variants={photoVariants}
                custom={{
                  x: photo.x,
                  y: photo.y,
                  order: photo.order,
                }}
              >
                <Photo
                  width={110} // Scaled down from 220
                  height={110} // Scaled down from 220
                  src={photo.src}
                  alt="Family photo"
                  direction={photo.direction}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
