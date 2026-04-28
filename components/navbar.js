"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = ["Home", "Admin", "Features", "Services", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-18 flex items-center justify-between px-6 md:px-10 lg:px-12 bg-white/95 transition-all duration-300 ${
          scrolled
            ? "border-b border-neutral-100 backdrop-blur-md shadow-xs"
            : "border-b border-transparent"
        }`}
      >
        <Link href="/" className="font-serif text-xl tracking-tight">
          VedTech
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none pl-8">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href={link === "Admin" ? "/admin" : "/"}
                className="text-sm font-medium text-neutral-800 hover:text-neutral-950 transition-colors duration-200 no-underline"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-800 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200 no-underline"
          >
            Sign Up
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-white bg-neutral-950 px-5 py-2 rounded-lg hover:bg-neutral-800 transition-colors duration-200 no-underline"
          >
            Login
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 p-1.5 rounded-md cursor-pointer bg-transparent border-none"
        >
          <span
            className="block w-full h-px bg-neutral-950 origin-center transition-transform duration-250"
            style={{
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-full h-px bg-neutral-950 transition-opacity duration-250"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-full h-px bg-neutral-950 origin-center transition-transform duration-250"
            style={{
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col px-8 pt-24 pb-12 md:hidden transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen
            ? "translate-y-0 pointer-events-auto"
            : "-translate-y-full pointer-events-none"
        }`}
      >
        <ul className="list-none m-0 p-0 flex-1 flex flex-col">
          {navLinks.map((link, i) => (
            <li
              key={link}
              className="border-b border-neutral-100 transition-all duration-300"
            >
              <Link
                href={link === "Admin" ? "/admin" : "/"}
                onClick={() => setMenuOpen(false)}
                className="block py-5 font-serif text-2xl text-neutral-950 no-underline tracking-tight leading-none"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-950 text-center py-3.5 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors duration-200 no-underline"
          >
            Sign Up
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-white text-center py-3.5 bg-neutral-950 rounded-xl hover:bg-neutral-800 transition-colors duration-200 no-underline"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
