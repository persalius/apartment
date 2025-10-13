"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedTestimonialsProps {
  images: string[];
  autoplay?: boolean;
  className?: string;
}

const randomRotateY = () => {
  return Math.floor(Math.random() * 21) - 10;
};

export const AnimatedTestimonials = ({
  images,
  autoplay = false,
  className,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  return (
    <div className={cn("mx-auto max-w-sm px-3 py-6 md:max-w-4xl", className)}>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {images.map((image, index) => (
                <motion.div
                  key={image}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    if (info.offset.x < -50) {
                      handleNext();
                    } else if (info.offset.x > 50) {
                      handlePrev();
                    }
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : images.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={image}
                    alt="apartment"
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
