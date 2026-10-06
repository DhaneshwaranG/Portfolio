import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border border-white/10"
          : "bg-black/30 backdrop-blur-md"
      }
      rounded-full px-8 py-4 w-[90%] max-w-6xl`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">
          Dhaneshwaran<span className="text-red-500">.</span>G
        </h1>

        {/* Menu */}
        <nav className="hidden lg:flex gap-8 text-white">
          <a href="#home" className="hover:text-red-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-red-500 transition">
            About
          </a>

          <a href="#process" className="hover:text-red-500 transition">
            Process
          </a>

          <a href="#projects" className="hover:text-red-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-red-500 transition">
            Contact
          </a>
        </nav>

        {/* Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Button */}
          <a
            href="https://www.linkedin.com/in/dhaneshwaran-g"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full text-white font-medium"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-white text-center bg-black/90 backdrop-blur-xl rounded-2xl py-6">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <button className="mx-auto bg-red-500 px-5 py-2 rounded-full">
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
