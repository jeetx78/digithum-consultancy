"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        <span /><span />
      </button>
      {open && (
        <div className="mobile-menu">
          <Link onClick={close} href="#home">Home</Link>
          <Link onClick={close} href="#projects">Projects</Link>
          <Link onClick={close} href="#markets">Markets</Link>
          <Link onClick={close} href="#about">About</Link>
          <Link onClick={close} href="#contact">Contact</Link>
          <Link onClick={close} className="button button-orange" href="#contact">Enquire Now</Link>
        </div>
      )}
    </>
  );
}
