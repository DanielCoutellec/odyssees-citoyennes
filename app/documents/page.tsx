export default function DocumentsPage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Documents & Archives
        </h1>

        <div
          className="page-photo"
          style={{
            backgroundImage: 'url("/images/photos/accueil-1.jpg")',
          }}
          role="img"
          aria-label="Documents et archives d'Odyssées Citoyennes"
        />

        <article className="article">

          <h2>Base documentaire</h2>

          <p>
            Cette rubrique rassemble les principaux documents historiques,
            juridiques et institutionnels conservés par Odyssées Citoyennes.
          </p>

          <p>
            Elle permet de retrouver les décisions de justice, analyses,
            contributions, rapports et documents relatifs aux différents
            travaux de l&apos;association.
          </p>

          <h2>Maltraitance & Jurisprudence</h2>

          <div className="home-links">

            <a
              href="/documents/analyse-arrêt-cour-appel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Analyse de l&apos;arrêt de la Cour d&apos;Appel
            </a>

            <a
              href="/documents/cour-appel-2005.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cour d&apos;Appel de Paris – 18 novembre 2005
            </a>

            <a
              href="/documents/cour-cassation-2007.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cour de Cassation – 26 septembre 2007
            </a>

            <a
              href="/documents/dgas-2007.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DGAS
            </a>

            <a
              href="/documents/cour-des-comptes-2008.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cour des Comptes
            </a>

            <a
              href="/documents/senat-andre-vantomme.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sénat – André Vantomme
            </a>

          </div>

          <h2>Évaluation Qualité</h2>

          <div className="home-links">

            <a
              href="/documents/evaluation-loi-2002-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Évaluation et Loi 2002-2
            </a>

            <a
              href="/documents/usagers-michel-chauviere.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Usagers – Michel Chauvière
            </a>

            <a
              href="/documents/objectivite-subjectivite-marc-maudinet.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Objectivité / Subjectivité – Marc Maudinet
            </a>

            <a href="/evaluation-qualite/ctnerhi">
              CTNERHI
            </a>

            <a href="/evaluation-qualite/evaluation-externe">
              Évaluation externe
            </a>

          </div>

          <h2>Handicap & Citoyenneté</h2>

          <div className="home-links">

            <a
              href="/documents/sens-des-debats-jean-font.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sens des débats – Jean Font
            </a>

            <a
              href="/documents/problematique-handicap-citoyennete-serge-ebersold.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Problématique Handicap & Citoyenneté – Serge Ebersold
            </a>

            <a href="/handicap-citoyennete/programme">
              Programme du colloque
            </a>

            <a href="/handicap-citoyennete/intervenants">
              Intervenants
            </a>

            <a href="/handicap-citoyennete/organisation">
              Organisation & accessibilité
            </a>

          </div>

          <div
            className="info-box"
            style={{ marginTop: "45px" }}
          >
            <h3>Archives historiques</h3>

            <p>
              Certains documents proposés dans cette bibliothèque sont des
              archives anciennes. Ils sont conservés et présentés dans leur
              contexte historique et peuvent refléter l&apos;état du droit,
              des institutions ou des pratiques à la date de leur
              publication.
            </p>
          </div>

        </article>
      </div>
    </main>
  );
}