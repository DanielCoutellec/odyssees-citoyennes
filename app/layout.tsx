import "./globals.css";

export const metadata = {
  title: "Odyssées Citoyennes",
  description:
    "Association loi 1901 - Citoyenneté, qualité, droits des usagers et lutte contre la maltraitance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo" aria-label="Accueil Odyssées Citoyennes">
              <img
                src="/logo-odyssees.png"
                alt="Odyssées Citoyennes"
                className="logo-image"
              />
            </a>

            <nav className="main-nav">
              <a href="/association">Association</a>
              <a href="/maltraitance">Maltraitance</a>
              <a href="/evaluation-qualite">Évaluation Qualité</a>
              <a href="/handicap-citoyennete">Handicap & Citoyenneté</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container">
            <h3>Odyssées Citoyennes</h3>
            <p>
              Association engagée pour les droits, la citoyenneté et
              l'amélioration de la qualité des accompagnements.
            </p>
            <p>21 chemin de la Bigüe • 60300 Senlis</p>
          </div>
        </footer>
      </body>
    </html>
  );
}