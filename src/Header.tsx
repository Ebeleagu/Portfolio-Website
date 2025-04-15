import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [stickyhead, setStickyhead] = useState<string>("bg-[whitesmoke] ");

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const controlScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 100) {
        setStickyhead("bg-white");
      } else {
        setStickyhead("bg-[whitesmoke] ");
      }
    };
    window.addEventListener("scroll", controlScroll);
    return () => window.removeEventListener("scroll", controlScroll);
  }, []);
  const handleclick = (): void => {
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 700);
  };
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-10 ${stickyhead} shadow-md `}
    >
      <nav className="flex justify-between items-center h-[12vh] px-5 font-[times-new-roman]">
        <p className="text-4xl text-[#297B67] flex justify-start items-start font-[cursive]">
          DAVID
        </p>
        <div className="hidden lg:flex items-center gap-[50px]">
          <a href="/" className="hover:text-[#297B67]">
            Home
          </a>
          <a href="#about" className="hover:text-[#297B67]">
            About
          </a>
          <a href="#services" className="hover:text-[#297B67]">
            Services
          </a>
          <a href="/Me" className="text-3xl text-[#297B67]">
            Me.
          </a>
          <a href="/Portfolio" className="hover:text-[#297B67]">
            Projects
          </a>
          <a href="#Contact" className="hover:text-[#297B67]">
            Contact
          </a>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="text-[#297B67] focus:outline-none"
            onClick={toggleMobileMenu}
            id="mobile-menu-button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white p-5">
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="mb-4 hover:text-[#297B67]"
              onClick={handleclick}
            >
              Home
            </a>
            <a
              href="#about"
              className="mb-4 hover:text-[#297B67]"
              onClick={handleclick}
            >
              About
            </a>
            <a
              href="#services"
              className="mb-4 hover:text-[#297B67]"
              onClick={handleclick}
            >
              Services
            </a>
            <a
              href="/Me"
              className="mb-4 text-2xl text-[#297B67]"
              onClick={handleclick}
            >
              Me.
            </a>
            <a
              href="#Projects"
              className="mb-4 hover:text-[#297B67]"
              onClick={handleclick}
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="hover:text-[#297B67]"
              onClick={handleclick}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
