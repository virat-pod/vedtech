"use client";
import Link from "next/link";

const navLinks = ["Home", "About", "Features", "Services", "Contact"];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-100 bg-white px-6 md:px-10 lg:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xs">
            <Link
              href="/"
              className="font-serif text-xl tracking-tight text-neutral-950"
            >
              VedTech
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Smart business solutions built for modern companies that want to
              grow faster.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors duration-200 no-underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Legal
            </p>
            <ul className="flex flex-col gap-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors duration-200 no-underline"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Get Started
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm font-medium text-neutral-950 text-center px-5 py-2.5 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors duration-200 no-underline"
              >
                Sign Up
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-white text-center px-5 py-2.5 bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors duration-200 no-underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 border-t border-neutral-100">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} VedTech. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <Link
                key={s}
                href="/"
                className="text-xs text-neutral-400 hover:text-neutral-950 transition-colors duration-200 no-underline"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
