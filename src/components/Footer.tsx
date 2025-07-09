"use client";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full">
      <div className="w-full max-w-[1440px] min-h-[567px] mx-auto relative px-4 md:px-6 lg:px-8">
        <div
          className="absolute 
          w-full md:w-[90%] lg:w-[1234px] 
          min-h-[332px] 
          top-[104px] 
          left-0 md:left-[5%] lg:left-[103px] 
          p-6 md:p-12 lg:p-[88px_75px_88px_76px]
          bg-[#D45500] 
          rounded-[40px_40px_40px_40px] lg:rounded-[80px_80px_80px_80px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 font-body">
            {/* Column 1 - Logo and text */}
            <div className="col-span-1 lg:col-span-5 text-center md:text-left">
              <Image
                src="/images/logo/whitelogo.png"
                alt="Salt Nation Logo"
                width={320}
                height={38.53}
                className="w-[200px] md:w-[250px] lg:w-[320px] mx-auto md:mx-0"
              />
              <p className="mt-4 text-white">Shaping Lives, Building Futures</p>
            </div>
            {/* Column 2 - Links */}
            <div className="col-span-1 lg:col-span-4 flex flex-col space-y-4 text-center md:text-left">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/#Our Projects"
                    className="text-white hover:text-gray-200"
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
                    className="text-white hover:text-gray-200"
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
                    className="text-white hover:text-gray-200"
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
                    className="text-white hover:text-gray-200"
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
                <div className="flex flex-col space-y-4 mt-4 lg:mt-0">
                  <Link
                    href="mailto:saltnation.org@gmail.com"
                    passHref
                    legacyBehavior
                  >
                    <a className="text-white hover:text-gray-200">Contact Us</a>
                  </Link>

                  <Link
                    href="/#icommit"
                    className="text-white hover:text-gray-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("icommit")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
            {/* Column 3 - Social Media */}
            <div className="col-span-1 lg:col-span-3 text-center md:text-left">
              <h3 className="text-white mb-4">Stay In Touch</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/wearesaltnationusa?igsh=MW9zMjJmd2Z4MGQ1bA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="text-white text-2xl hover:text-gray-200" />
                </a>
                <a
                  href="https://www.facebook.com/share/16JTZECar2/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook className="text-white text-2xl hover:text-gray-200" />
                </a>
                <a
                  href="https://www.tiktok.com/@wearesaltnation?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on TikTok"
                >
                  <FaTiktok className="text-white text-2xl hover:text-gray-200" />
                </a>
                <a
                  href="https://x.com/wearesaltnation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X (Twitter)"
                >
                  <FaTwitter className="text-white text-2xl hover:text-gray-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#D45500] text-white p-3 rounded-full shadow-lg hover:bg-[#B34600] transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
