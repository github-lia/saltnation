'use client';
import Button from '../components/Button';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import IcommitSection from '../components/IcommitSection';
import AboutUsSection from '../components/AboutUsSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-primary px-4 py-12 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
          Welcome to Salt Nation
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-body text-primary mb-6 max-w-2xl">
          We are dedicated to building a community of well-rounded individuals with a heart for service, growth, and faith.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button variant="primary" className="w-full sm:w-auto">
            Donate
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Projects / Activities Section */}
      <ProjectsSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Salt App Section */}
      <section id="salt-app" className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary text-center mb-8">
          Salt App
        </h1>
        
        {/* Grid of app images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl w-full">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="aspect-w-9 aspect-h-16 bg-gray-200 rounded-lg overflow-hidden relative">
              <Image
                src={`/salt-app/sa${index}.png`}
                alt={`Salt App Screenshot ${index}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-primary mb-4">Download for</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" className="w-full sm:w-auto">
              iOS
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Android
            </Button>
          </div>
        </div>
      </section>

      {/* Icommit Section */}
      <IcommitSection />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary text-center mb-8">
          Contact Us
        </h1>
        
        <p className="text-primary text-center max-w-2xl mb-8">
          We will love to hear from you! Whether you have questions about our projects, want to get involved, or just want to say hello, do not hesitate to reach out. Connect with us on social media or send us an email directly.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-8">
          <a href="https://facebook.com/saltnation" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-brandOrange transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/saltnation" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-brandOrange transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com/saltnation" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-brandOrange transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/company/saltnation" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-brandOrange transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Contact Button */}
        <Button 
          variant="primary" 
          className="w-full sm:w-auto"
          onClick={() => window.location.href = 'mailto:contact@saltnation.org'}
        >
          Send us an email
        </Button>
      </section>
    </main>
  );
}
