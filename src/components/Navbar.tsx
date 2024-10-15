import Image from 'next/image';
import NavbarClient from './NavbarClient';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary py-4 px-8 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Salt Nation Logo"
            width={50}
            height={50}
          />
        </div>
        <NavbarClient />
      </div>
    </nav>
  );
};

export default Navbar;
