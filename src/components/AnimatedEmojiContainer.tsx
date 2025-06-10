"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Animated Emoji Container Component
const AnimatedEmojiContainer = () => {
  const [count, setCount] = useState(100);
  const targetCount = 1000;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  // Counter animation effect
  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds for the count animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (targetCount - 100) + 100);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView]);

  // Emoji animation variants
  const emojiContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const emojiVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: -10,
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#FFFFFF] bg-opacity-10 rounded-full px-3 py-2 mb-8 w-auto max-w-[95%]"
    >
      <div className="flex items-center">
        <motion.div
          className="flex -space-x-2"
          variants={emojiContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={emojiVariants} className="z-50">
            <Image
              src="/images/bg arts/emo1.png"
              alt="emo"
              width={32}
              height={32}
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            />
          </motion.div>
          <motion.div variants={emojiVariants} className="z-40">
            <Image
              src="/images/bg arts/emo2.png"
              alt="emo"
              width={32}
              height={32}
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            />
          </motion.div>
          <motion.div variants={emojiVariants} className="z-30">
            <Image
              src="/images/bg arts/emo3.png"
              alt="emo"
              width={32}
              height={32}
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            />
          </motion.div>
          <motion.div variants={emojiVariants} className="z-20">
            <Image
              src="/images/bg arts/emo4.png"
              alt="emo"
              width={32}
              height={32}
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            />
          </motion.div>
          <motion.div variants={emojiVariants} className="z-10">
            <Image
              src="/images/bg arts/emo5.png"
              alt="emo"
              width={32}
              height={32}
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            />
          </motion.div>
        </motion.div>
        <motion.p
          className="text-white ml-4 text-xs sm:text-sm md:text-base"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          reached{" "}
          <i>
            <b>over {count}+</b>
          </i>{" "}
          young people
        </motion.p>
      </div>
    </div>
  );
};

export default AnimatedEmojiContainer;
