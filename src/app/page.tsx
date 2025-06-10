"use client";
import Button from "../components/Button";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedEmojiContainer from "@/components/AnimatedEmojiContainer";
import ImageSlider from "@/components/ImageSlider";
import TeamSection from "@/components/TeamSection";
import StoreButton from "@/components/StoreButton";
import {
  SiVisa,
  SiStripe,
  SiPaypal,
  SiMastercard,
  SiGooglepay,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-8 mb-16"
      >
        {/* Top Center Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <Image
            src="/images/bg arts/gradient.png"
            alt="Gradient Overlay"
            width={1080}
            height={650}
            priority
            className="max-w-[100vw]"
          />
        </div>

        {/* Left Top Background Art */}
        <div className="absolute top-20 left-0 opacity-75 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/bg art.png"
            alt="Background Pattern Left"
            width={160}
            height={160}
            className="w-full"
          />
        </div>

        {/* Right Bottom Background Art */}
        <div className="absolute bottom-0 right-0 opacity-75 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/bg art2.png"
            alt="Background Pattern Right"
            width={160}
            height={160}
            className="w-full"
          />
        </div>

        {/* Transparent Container with emojis */}
        <AnimatedEmojiContainer />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary mb-4">
          Empowering Youth Through <br className="hidden xs:block" />
          Love, Purpose, Growth, Excellence
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-body text-primary mb-6 max-w-2xl">
          We are a non-profit organization committed to nurturing balanced and
          well-rounded teenagers and young adults.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            variant="orange"
            className="w-full sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("icommit")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Give towards our cause{" "}
            <HiArrowRight className="inline-block ml-2" />
          </Button>
        </div>
      </section>

      {/* Image Slider */}
      <section>
        <ImageSlider />
      </section>

      {/* Projects Section */}
      <section
        id="Our Projects"
        className="min-h-screen relative flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 mt-16 mb-16"
      >
        {/* Left Side Gradient - top layer */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/gradient2.png"
            alt="Gradient Overlay"
            width={236}
            height={299}
            className="w-full"
          />
        </div>
        {/* Background Art 3 - bottom layer */}
        <div className="absolute left-0 bottom-0 opacity-75 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/bg art3.png"
            alt="Background Pattern Right"
            width={160}
            height={160}
            className="w-full"
          />
        </div>
        {/* Right Side Background Art */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-75 -z-10 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/bg art.png"
            alt="Background Pattern Right"
            width={160}
            height={160}
            className="-scale-x-100 w-full"
          />
        </div>
        {/* Content Container */}
        <div className="relative w-[95%] mx-auto">
          {/* Section Title with Line */}
          <div className="flex items-center mt-16 md:mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              Our Projects
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-white ml-4"></div>
          </div>
          {/* Main Content Grid */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12 mt-8 lg:mt-16">
            {/* Text Content - Shows below video on mobile/tablet */}
            <div className="space-y-4 lg:space-y-8 mt-8 lg:mt-0 lg:pr-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Building Futures Together
              </h3>
              <div className="leading-relaxed lg:leading-loose text-sm sm:text-base">
                <p>
                  Salt Nations projects are designed to inspire, equip, and
                  transform young lives. <br />
                  <b>Salt Camps</b> bring teenagers and young adults together in
                  a vibrant environment of growth, skill-building, and
                  community. <br />
                  <br />
                  Through our <b>Mentorship Programs</b>, we connect youth with
                  mentors who provide ongoing guidance and support for
                  purposeful living. <br />
                  <br />
                  The <b>Salt App</b> extends our mission digitally, creating a
                  space for mentorship, resources, and connection anytime,
                  anywhere. <br />
                  <br />
                  Finally, our <b>Salt Hub</b> serves as a central place for
                  young people to gather, grow, and live intentionally.
                </p>
              </div>
            </div>
            {/* Video Container - Shows above text on mobile/tablet */}
            <div className="w-full">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/gYR0xP1j4PY?si=4RrPAPBXMugXXxkJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg sm:h-[350px] md:h-[400px] lg:h-[500px]"
              ></iframe>
            </div>
          </div>
          {/* Activities Container */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Activity 1 */}
            <div className="bg-[#FFFFFF] bg-opacity-10 rounded-full flex items-center px-4 py-3 overflow-hidden">
              <div className="flex-shrink-0">
                <Image
                  src="/images/bg arts/act1.png"
                  alt="Activity Image"
                  width={64}
                  height={64}
                  className="rounded-full w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px]"
                />
              </div>
              <div className="ml-3 min-w-0">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                  Salt Camps
                </h4>
              </div>
            </div>
            {/* Activity 2 */}
            <div className="bg-[#FFFFFF] bg-opacity-10 rounded-full flex items-center px-4 py-3 overflow-hidden">
              <div className="flex-shrink-0">
                <Image
                  src="/images/bg arts/act2.png"
                  alt="Activity Image"
                  width={64}
                  height={64}
                  className="rounded-full w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px]"
                />
              </div>
              <div className="ml-3 min-w-0">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                  Mentorship Programs
                </h4>
              </div>
            </div>
            {/* Activity 3 */}
            <div className="bg-[#FFFFFF] bg-opacity-10 rounded-full flex items-center px-4 py-3 overflow-hidden">
              <div className="flex-shrink-0">
                <Image
                  src="/images/bg arts/act3.png"
                  alt="Activity Image"
                  width={64}
                  height={64}
                  className="rounded-full w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px]"
                />
              </div>
              <div className="ml-3 min-w-0">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                  Salt App
                </h4>
              </div>
            </div>
            {/* Activity 4 */}
            <div className="bg-[#FFFFFF] bg-opacity-10 rounded-full flex items-center px-4 py-3 overflow-hidden">
              <div className="flex-shrink-0">
                <Image
                  src="/images/bg arts/act4.png"
                  alt="Activity Image"
                  width={64}
                  height={64}
                  className="rounded-full w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px]"
                />
              </div>
              <div className="ml-3 min-w-0">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                  Salt Hubs
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-16 md:mb-24 flex justify-start">
            <Button
              variant="orange"
              className="w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("icommit")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Support Our Projects{" "}
              <HiArrowRight className="inline-block ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about us"
        className="min-h-screen relative flex justify-center items-center px-4 sm:px-8 md:px-16 mt-16 mb-16"
      >
        {/* Left Side Gradient*/}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/gradient2.png"
            alt="Gradient Overlay"
            width={236}
            height={299}
            className="w-full"
          />
        </div>
        {/* Right Side Background Art */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-75 -z-10 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/bg art.png"
            alt="Background Pattern Right"
            width={160}
            height={160}
            className="-scale-x-100 w-full"
          />
        </div>
        {/* Content Container */}
        <div className="relative w-[95%] mx-auto">
          {/* Section Title with Line */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center mt-16 md:mt-28"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              About Us
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-white ml-4"></div>
          </motion.div>
          {/* Main Content Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 mt-8 lg:mt-16">
            {/* Video Container - Shows at top on mobile/tablet, right on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:order-2 mb-8 lg:mb-0"
            >
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/pb4KwPKJoFM?si=zQOw-8MYJzIn5PIu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg sm:h-[400px] md:h-[500px] lg:h-[656px]"
              ></iframe>
            </motion.div>
            {/* Left Column - Text and Containers - Shows below video on mobile/tablet */}
            <div className="lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-4 sm:space-y-8"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  Shaping Lives, <br className="hidden sm:block" />
                  Building Futures
                </h3>
              </motion.div>
              <div className="space-y-6 mt-4 sm:mt-8">
                {/* First Container - Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl p-4 sm:p-6 md:p-8 border border-white border-opacity-20 w-full sm:max-w-[445px]"
                >
                  <div className="flex items-center space-x-3 sm:space-x-6 mb-2 sm:mb-4">
                    <Image
                      src="/images/bg arts/lightbulb.png"
                      alt="About Image 1"
                      width={40}
                      height={47}
                      className="rounded-lg w-[30px] h-[35px] sm:w-[40px] sm:h-[47px]"
                    />
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      Our Vision
                    </h4>
                  </div>
                  <p className="text-white text-sm sm:text-base">
                    A nation of balanced, well-rounded teenagers and young
                    adults. <br />
                    Salt Nation envisions a world where every individual knows
                    God, understands their unique purpose, and lives a life
                    marked by balance and purpose.
                  </p>
                </motion.div>
                {/* Second Container - Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl p-4 sm:p-6 md:p-8 border border-white border-opacity-20 w-full sm:max-w-[445px] ml-0 sm:ml-16 md:ml-32"
                >
                  <div className="flex items-center space-x-3 sm:space-x-6 mb-2 sm:mb-4">
                    <Image
                      src="/images/bg arts/rocket.png"
                      alt="About Image 2"
                      width={40}
                      height={47}
                      className="rounded-lg w-[30px] h-[35px] sm:w-[40px] sm:h-[47px]"
                    />
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      Our Mission
                    </h4>
                  </div>
                  <p className="text-white text-sm sm:text-base">
                    To raise individuals who know God, understand their inherent
                    worth, and live purposefully.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Core Team Section */}
      <TeamSection />

      {/* Salt App Section */}
      <section
        id="salt app"
        className="min-h-screen relative flex justify-center items-center px-4 sm:px-8 md:px-16 mt-16 mb-16"
      >
        {/* Left Side Gradient */}
        <div className="absolute left-0 top-1/2 -translate-y-1/3 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/gradient2.png"
            alt="Gradient Overlay"
            width={236}
            height={299}
            className="w-full"
          />
        </div>
        {/* Content Container */}
        <div className="relative w-[95%] mx-auto">
          {/* Section Title with Line */}
          <div className="flex items-center mt-16 md:mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              Salt App
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-white ml-4"></div>
          </div>

          {/* Main Content */}
          <div className="mt-8 lg:mt-16">
            {/* Mobile Layout (flex column) */}
            <div className="block lg:hidden">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Salt App: Mentorship <br className="hidden sm:block" /> Anytime,
                Anywhere!
              </h1>

              {/* App Preview (Phone Mockups) */}
              <div className="relative w-full h-[300px] sm:h-[350px] mb-8">
                {/* Background Art */}
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/bg arts/bg art 4.png"
                    alt="Background Pattern"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Phone Mockups Container */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  {/* Mockup 2 First */}
                  <div className="relative w-[50%] sm:w-[60%]">
                    <Image
                      src="/images/salt-app/Mockup 2.png"
                      alt="Salt App Preview"
                      width={491}
                      height={490}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Mockup 1 Second - Elevated */}
                  <div className="-ml-16 sm:-ml-20 -mt-12 sm:-mt-16 relative z-20 w-[25%] sm:w-[30%]">
                    <Image
                      src="/images/salt-app/Mockup 1.png"
                      alt="Salt App Preview"
                      width={215}
                      height={528}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <p className="text-base sm:text-lg text-primary mb-6">
                The Salt App connects young people with mentors, offering
                guidance, resources, and support for purposeful growth. Built to
                inspire and empower, the app fosters meaningful connections that
                shape lives beyond the screen.
              </p>

              {/* Store Buttons - Always on same line */}
              <div className="flex space-x-2 sm:space-x-4 mb-6">
                <div className="w-1/2 sm:w-auto">
                  <StoreButton
                    icon="/images/apple.png"
                    topText="Download on the"
                    bottomText="App Store"
                    className="w-full"
                  />
                </div>
                <div className="w-1/2 sm:w-auto">
                  <StoreButton
                    icon="/images/playstore.png"
                    topText="GET IT ON"
                    bottomText="Google Play"
                    className="w-full"
                  />
                </div>
              </div>

              {/* App Screenshots */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[152px] md:h-[152px]">
                  <Image
                    src="/images/mockups/iphone 1.png"
                    alt="App Screenshot 1"
                    width={152}
                    height={152}
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[152px] md:h-[152px]">
                  <Image
                    src="/images/mockups/iphone 2.png"
                    alt="App Screenshot 2"
                    width={152}
                    height={152}
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[152px] md:h-[152px]">
                  <Image
                    src="/images/mockups/iphone 3.png"
                    alt="App Screenshot 3"
                    width={152}
                    height={152}
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout (original 2-column grid) - hidden on mobile */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
              {/* Text Content */}
              <div className="space-y-8">
                <h1 className="text-5xl font-bold text-primary">
                  Salt App: Mentorship <br /> Anytime, Anywhere!
                </h1>
                <p className="text-xl text-primary">
                  The Salt App connects young people with mentors, offering
                  guidance, resources, and support for purposeful growth. Built
                  to inspire and empower, the app fosters meaningful connections
                  that shape lives beyond the screen.
                </p>
                <div className="flex space-x-4">
                  <StoreButton
                    icon="/images/apple.png"
                    topText="Download on the"
                    bottomText="App Store"
                  />
                  <StoreButton
                    icon="/images/playstore.png"
                    topText="GET IT ON"
                    bottomText="Google Play"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl w-[152px] h-[152px]">
                    <Image
                      src="/images/mockups/iphone 1.png"
                      alt="App Screenshot 1"
                      width={152}
                      height={152}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl w-[152px] h-[152px]">
                    <Image
                      src="/images/mockups/iphone 2.png"
                      alt="App Screenshot 2"
                      width={152}
                      height={152}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl w-[152px] h-[152px]">
                    <Image
                      src="/images/mockups/iphone 3.png"
                      alt="App Screenshot 3"
                      width={152}
                      height={152}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Column 2 - App Preview */}
              <div className="relative w-full h-full">
                {/* Background Art */}
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/images/bg arts/bg art 4.png"
                    alt="Background Pattern"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Phone Mockups Container */}
                <div className="relative z-10 flex items-center">
                  {/* Mockup 2 First */}
                  <Image
                    src="/images/salt-app/Mockup 2.png"
                    alt="Salt App Preview"
                    width={491}
                    height={490}
                  />
                  {/* Mockup 1 Second - Elevated */}
                  <div className="-ml-40 -mt-32 relative z-20">
                    <Image
                      src="/images/salt-app/Mockup 1.png"
                      alt="Salt App Preview"
                      width={215}
                      height={528}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICommit Section */}
      <section
        id="icommit"
        className="min-h-screen relative flex justify-center items-center px-4 sm:px-8 md:px-16 mt-16 mb-16"
      >
        {/* Left Side Gradient */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-[15vw] sm:max-w-none">
          <Image
            src="/images/bg arts/gradient2.png"
            alt="Gradient Overlay"
            width={236}
            height={299}
            className="w-full"
          />
        </div>
        {/* Content Container */}
        <div className="relative w-[95%] mx-auto">
          {/* Section Title with Line */}
          <div className="flex items-center mt-16 md:mt-28">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              ICommit
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-white ml-4"></div>
          </div>

          {/* Main Content - Restructured for smaller screens */}
          <div className="mt-8 md:mt-16">
            {/* Desktop Layout - Two columns side by side - ONLY on large screens */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
              {/* Left Column - Photo Grid */}
              <div className="flex gap-4">
                {/* First Group - Images 1 & 3 */}
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/icommit1.png"
                    alt="ICommit Image 1"
                    width={274}
                    height={274}
                    className="rounded-xl"
                  />
                  <Image
                    src="/images/icommit3.png"
                    alt="ICommit Image 3"
                    width={274}
                    height={371}
                    className="rounded-xl"
                  />
                </div>
                {/* Second Group - Images 2 & 4 */}
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/icommit2.png"
                    alt="ICommit Image 2"
                    width={274}
                    height={371}
                    className="rounded-xl"
                  />
                  <Image
                    src="/images/icommit4.png"
                    alt="ICommit Image 4"
                    width={274}
                    height={274}
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* Right Column - Payment Information */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-primary">
                  Support Our Mission <br /> By Giving Towards It!
                </h2>
                <div>
                  <h3 className="text-xl text-white mb-4">Payment methods</h3>
                  <div className="flex space-x-4">
                    <SiVisa size={48} />
                    <SiStripe size={48} />
                    <SiPaypal size={48} />
                    <SiMastercard size={48} />
                    <SiGooglepay size={48} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-4">
                    Choose how much you would like to give
                  </h3>
                  <div className="relative w-64">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black bg-white px-1">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      className="w-full pl-8 pr-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                    />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button className="border border-white text-white px-4 py-2 rounded-lg bg-white bg-opacity-20 hover:bg-white hover:text-black transition-all">
                      Just Once
                    </button>
                    <button className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">
                      Once a Month
                    </button>
                    <button className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">
                      Twice a Year
                    </button>
                    <button className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">
                      Once a Year
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-4">Card Details</h3>
                  <div className="space-y-4">
                    {/* Cardholder Name */}
                    <div>
                      <label className="block text-white mb-2">
                        {"Cardholder's Name"}
                      </label>
                      <input
                        type="text"
                        placeholder="Enter name on card"
                        className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                      />
                    </div>
                    {/* Card Number */}
                    <div>
                      <label className="block text-white mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                      />
                    </div>
                    {/* Expiry Date and CVC in one row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                        />
                      </div>
                      <div>
                        <label className="block text-white mb-2">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="orange" className="w-full sm:w-auto">
                  Proceed To The Next Step{" "}
                  <HiArrowRight className="inline-block ml-2" />
                </Button>
              </div>
            </div>

            {/* Smaller Screens Layout - Single column with photo grid under heading */}
            <div className="lg:hidden">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                Support Our Mission <br /> By Giving Towards It!
              </h2>

              {/* Photo Grid - Smaller on mobile, slightly larger on tablets */}
              <div className="flex gap-2 sm:gap-3 md:gap-4 mb-8">
                {/* First Group - Images 1 & 3 */}
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-1/2">
                  <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/images/icommit1.png"
                      alt="ICommit Image 1"
                      width={274}
                      height={274}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full aspect-[274/371] rounded-xl overflow-hidden">
                    <Image
                      src="/images/icommit3.png"
                      alt="ICommit Image 3"
                      width={274}
                      height={371}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Second Group - Images 2 & 4 */}
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-1/2">
                  <div className="w-full aspect-[274/371] rounded-xl overflow-hidden">
                    <Image
                      src="/images/icommit2.png"
                      alt="ICommit Image 2"
                      width={274}
                      height={371}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/images/icommit4.png"
                      alt="ICommit Image 4"
                      width={274}
                      height={274}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">
                    Payment methods
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <SiVisa size={36} className="md:text-5xl" />
                    <SiStripe size={36} className="md:text-5xl" />
                    <SiPaypal size={36} className="md:text-5xl" />
                    <SiMastercard size={36} className="md:text-5xl" />
                    <SiGooglepay size={36} className="md:text-5xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">
                    Choose how much you would like to give
                  </h3>
                  <div className="relative w-full max-w-xs md:max-w-sm">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black bg-white px-1">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      className="w-full pl-8 pr-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                    <button className="border border-white text-white px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-lg bg-white bg-opacity-20 hover:bg-white hover:text-black transition-all">
                      Just Once
                    </button>
                    <button className="border border-white text-white px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-lg hover:bg-white hover:text-black transition-all">
                      Once a Month
                    </button>
                    <button className="border border-white text-white px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-lg hover:bg-white hover:text-black transition-all">
                      Twice a Year
                    </button>
                    <button className="border border-white text-white px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-lg hover:bg-white hover:text-black transition-all">
                      Once a Year
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">
                    Card Details
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {/* Cardholder Name */}
                    <div>
                      <label className="block text-white mb-1 md:mb-2">
                        {"Cardholder's Name"}
                      </label>
                      <input
                        type="text"
                        placeholder="Enter name on card"
                        className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                      />
                    </div>
                    {/* Card Number */}
                    <div>
                      <label className="block text-white mb-1 md:mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                      />
                    </div>
                    {/* Expiry Date and CVC in one row */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-white mb-1 md:mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                        />
                      </div>
                      <div>
                        <label className="block text-white mb-1 md:mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="orange" className="w-full md:w-auto">
                  Proceed To The Next Step{" "}
                  <HiArrowRight className="inline-block ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
