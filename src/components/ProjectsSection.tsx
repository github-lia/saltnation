import ImageCarousel from './ImageCarousel';

const ProjectsSection = () => {
  const saltCampImages = [
    '/images/logo.png',
    '/images/logomain.png',
    '/images/salt.png',
  ];

  const mentorshipImages = [
    '/images/mentorship-1.jpg',
    '/images/mentorship-2.jpg',
    '/images/mentorship-3.jpg',
  ];

  return (
    <section id="projects" className="min-h-screen bg-primary py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading text-center mb-12">Our Projects and Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Salt Camp Description */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Salt Camp</h3>
            <p className="text-gray-700">
              Salt Camp is our flagship annual event that brings together young individuals for a week of personal growth, community service, and spiritual development. Participants engage in workshops, team-building activities, and community outreach projects, fostering leadership skills and a sense of social responsibility.
            </p>
          </div>

          {/* Salt Camp Image Carousel */}
          <div className="bg-white p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
            <ImageCarousel images={saltCampImages} />
          </div>

          {/* Mentorship Program Images */}
          <div className="bg-white p-6 rounded-lg shadow-md aspect-w-16 aspect-h-9">
            <ImageCarousel images={mentorshipImages} />
          </div>

          {/* Mentorship Program Description */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-4">Mentorship Program</h3>
            <p className="text-gray-700">
              Our Mentorship Program pairs experienced professionals with young adults seeking guidance in their personal and professional lives. Through regular one-on-one sessions, group workshops, and networking events, mentees receive valuable insights, support, and opportunities for growth. This program aims to bridge the gap between generations and foster a culture of continuous learning and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
