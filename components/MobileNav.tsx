'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  ['About', '#about'],
  ['Who I Help', '#who'],
  ['Services', '#services'],
  ['Our Office', '#office'],
  ['FAQs', '#faq'],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="md:hidden p-2"
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-cream p-7">
          <div className="flex justify-between items-center">
            <span className="serif text-2xl">Maya Reynolds</span>

            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          <nav className="mt-20 flex flex-col gap-7 serif text-3xl">
            {links.map(([label, href]) => (
              <a
                onClick={() => setOpen(false)}
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}

            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="text-base font-sans font-semibold"
            >
              Book a session →
            </a>
          </nav>
        </div>
      )}
    </>
  );
}