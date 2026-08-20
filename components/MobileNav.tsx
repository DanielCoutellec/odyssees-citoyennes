"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        ☰ Menu
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav-menu"
          aria-label="Navigation mobile"
        >
          <a href="/">Accueil</a>
          <a href="/association">Association</a>
          <a href="/maltraitance">Maltraitance</a>
          <a href="/evaluation-qualite">Évaluation Qualité</a>
          <a href="/handicap-citoyennete">
            Handicap & Citoyenneté
          </a>
          <a href="/documents">Documents</a>
          <a href="/contact">Contact</a>
        </nav>
      )}
    </div>
  );
}