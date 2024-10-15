import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-heading mb-2">Salt Nation</h2>
          </div>

          <div>
           <p className="text-sm">&copy; {new Date().getFullYear()} Salt Nation. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <a href="https://facebook.com/saltnation" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-brandOrange transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/saltnation" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-brandOrange transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com/saltnation" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-brandOrange transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com/company/saltnation" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-brandOrange transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
