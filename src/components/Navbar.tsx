"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Use 1024px as breakpoint for tablet/iPad
    };
    // Set initial state
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed w-full max-w-[1232.23px] h-[64px] top-[40px] left-1/2 -translate-x-1/2 z-50">
      {/* Main navbar container */}
      <div className="flex items-center justify-between w-full relative px-4 lg:px-8">
        {/* Logo - Maintaining spacing */}
        <div className="flex-shrink-0 ml-2 sm:ml-4">
          {isMobile ? (
            // Different logo for tablet/mobile if needed
            <Image
              src="/images/logo/SALT LOGO ICON.png"
              alt="Salt Nation Logo"
              width={56}
              height={56}
              className="w-[36px] h-[40px] xs:w-[40px] xs:h-[45px] sm:w-[45px] sm:h-[50px] md:w-[50px] md:h-[56px]"
              priority
            />
          ) : (
            // Desktop logo
            <Image
              src="/images/logo/SALT LOGO ICON.png"
              alt="Salt Nation Logo"
              width={56}
              height={56}
              className="w-[50px] h-[56px]"
              priority
            />
          )}
        </div>
        {/* Desktop Navigation Links in Transparent Container */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <div className="bg-[#FFFFFF] bg-opacity-10 rounded-full px-16 py-4">
            <div className="flex items-center space-x-12">
              {/* Updated links with smooth scrolling */}
              <Link
                href="/#Our Projects"
                className="text-white whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("Our Projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Our Projects
              </Link>
              <Link
                href="/#about us"
                className="text-white whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about us")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About Us
              </Link>
              <Link
                href="/#salt app"
                className="text-white whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("salt app")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Salt App
              </Link>
              <Link
                href="/#icommit"
                className="text-white whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("icommit")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Icommit
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile/Tablet Menu Button or Contact Button */}
        <div className="mr-2 sm:mr-4">
          {isMobile ? (
            <div className="bg-[#FFFFFF] bg-opacity-10 rounded-full p-3 z-[60] relative">
              <button
                className="text-white flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          ) : (
            /* Contact Button - Only visible on desktop */
            <div className="hidden lg:block">
              <Button variant="white" className="w-full sm:w-auto">
                <a
                  href="mailto:saltnation.org@gmail.com"
                  className="text-inherit no-underline"
                >
                  Contact Us
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Mobile/Tablet Menu Dropdown with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Animated Menu */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-[280px] z-40 overflow-hidden"
            >
              <div className="h-full w-full bg-[#FFFFFF] bg-opacity-10 backdrop-blur-md p-6 pt-24 rounded-l-3xl">
                <div className="flex flex-col space-y-8">
                  {/* Updated mobile menu links with smooth scrolling */}
                  <Link
                    href="/#Our Projects"
                    className="text-white text-lg font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("Our Projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                  >
                    Our Projects
                  </Link>
                  <Link
                    href="/#about us"
                    className="text-white text-lg font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("about us")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/#salt app"
                    className="text-white text-lg font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("salt app")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                  >
                    Salt App
                  </Link>
                  <Link
                    href="/#icommit"
                    className="text-white text-lg font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("icommit")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                  >
                    Icommit
                  </Link>
                  {/* Contact Us button in mobile menu */}
                  <div className="pt-4">
                    <Button variant="white" className="w-full">
                      <a
                        href="mailto:saltnation.org@gmail.com"
                        className="text-inherit no-underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Transparent Overlay - No black background */}
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
