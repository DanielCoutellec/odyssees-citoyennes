import type { Metadata } from "next";
import "./globals.css";

import SiteSearch from "../components/SiteSearch";
import MobileNav from "../components/MobileNav";

export const metadata: Metadata = {
  title: {
    default: "Odyssées Citoyennes",
    template: "%s | Odyssées Citoyennes",
  },

  description:
    "Odyssées Citoyennes : handicap, citoyenneté, lutte contre la maltraitance et évaluation de la qualité dans le secteur social et médico-social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>

        {/* =====================================================
            HEADER
            ===================================================== */}

        <header className="site-header">
          <div className="header-inner">

            {/* BANNIÈRE / LOGO */}
            <a href="/" className="logo">
              <img
                src="/logo-odyssees.png"
                alt="Odyssées Citoyennes"
                className="logo-image"
              />
            </a>


            {/* =================================================
                NAVIGATION DESKTOP
                ================================================= */}

            <nav
              className="main-nav desktop-nav"
              aria-label="Navigation principale"
            >
              <a href="/">
                Accueil
              </a>

              <a href="/association">
                Association
              </a>

              <a href="/maltraitance">
                Maltraitance
              </a>

              <a href="/evaluation-qualite">
                Évaluation Qualité
              </a>

              <a href="/handicap-citoyennete">
                Handicap & Citoyenneté
              </a>

              <a href="/documents">
                Documents
              </a>

              <a href="/contact">
                Contact
              </a>
            </nav>


            {/* =================================================
                NAVIGATION MOBILE
                ================================================= */}

            <MobileNav />


            {/* =================================================
                MOTEUR DE RECHERCHE
                ================================================= */}

            <SiteSearch />

          </div>
        </header>


        {/* =====================================================
            CONTENU
            ===================================================== */}

        {children}


        {/* =====================================================
            FOOTER
            ===================================================== */}

        <footer className="site-footer">
          <div className="container footer-grid">

            {/* COLONNE GAUCHE */}

            <div className="footer-info">

              <h3>
                Odyssées Citoyennes
              </h3>

              <p>
                Handicap, citoyenneté, qualité et lutte contre
                la maltraitance.
              </p>

              <p>
                Association déclarée – SIREN 830 751 731
              </p>

              <p>
                L&apos;Hermitage – 21 chemin de la Bigüe
                <br />
                60300 Senlis – France
              </p>

              <p className="footer-copyright">
                © {new Date().getFullYear()} Odyssées Citoyennes
              </p>

            </div>


            {/* COLONNE DROITE */}

            <nav
              className="footer-links"
              aria-label="Informations légales"
            >
              <a href="/mentions-legales">
                Mentions légales
              </a>

              <a href="/accessibilite">
                Accessibilité
              </a>

              <a href="/confidentialite">
                Politique de confidentialité
              </a>

              <a href="/contact">
                Contact
              </a>
            </nav>

          </div>
        </footer>

      </body>
    </html>
  );
}