import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="min-h-screen bg-primary py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading text-center mb-12">About Us</h2>

        {/* Video Section */}
        <div className="mb-16">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/pb4KwPKJoFM?si=zQOw-8MYJzIn5PIu"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-heading mb-4">Our Mission</h3>
            <p className="text-primary">
              To build a community of well-rounded individuals dedicated to service, growth, and faith, making a positive impact in the world around us.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-heading mb-4">Our Vision</h3>
            <p className="text-primary">
              A world where every individual is empowered to reach their full potential, contributing to a society of compassion, innovation, and sustainable progress.
            </p>
          </div>
        </div>

        {/* Founder */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading text-center mb-8">Meet Our Founder</h3>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <Image 
                src="/images/logo.png" 
                alt="Founder Name" 
                width={300} 
                height={300} 
                className="rounded-full"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h4 className="text-2xl font-heading mb-4">Founder Name</h4>
              <p className="text-primary mb-4">
                Brief biography of the founder, highlighting their vision, experience, and commitment to Salt Nations mission.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-heading text-center mb-8">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Repeat this block for each team member */}
            <div className="text-center">
              <Image 
                src="/images/logo.png" 
                alt="Team Member Name" 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-heading mb-2">Team Member Name</h4>
              <p className="text-primary">Position</p>
            </div>
            {/* End of team member block */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
