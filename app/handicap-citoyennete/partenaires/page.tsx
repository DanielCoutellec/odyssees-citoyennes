export default function PartenairesPage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">
          Handicap & Citoyenneté – Partenaires
        </h1>

        <div className="article">
          <p>
            Le colloque Handicap & Citoyenneté a été rendu possible grâce
            au concours de plusieurs partenaires institutionnels,
            universitaires, associatifs et techniques.
          </p>

          <h2>Partenaires institutionnels et scientifiques</h2>

          <div className="cards">
            <div className="card">
              <h3>Conseil Régional d'Île-de-France</h3>
              <p>
                Partenaire majeur de la manifestation et lieu d'accueil
                du colloque.
              </p>
            </div>

            <div className="card">
              <h3>CTNERHI</h3>
              <p>
                Centre Technique National d'Études et de Recherches sur
                les Handicaps et les Inadaptations.
              </p>
            </div>

            <div className="card">
              <h3>IUP Ville et Santé</h3>
              <p>
                Partenaire universitaire associé aux travaux et aux débats
                du colloque.
              </p>
            </div>

            <div className="card">
              <h3>Institut Suzanne Fouché</h3>
              <p>
                Partenaire engagé dans le champ du handicap et de
                l'accompagnement des personnes.
              </p>
            </div>

            <div className="card">
              <h3>VVF Vacances</h3>
              <p>
                Partenaire associé à l'organisation de la manifestation.
              </p>
            </div>

            <div className="card">
              <h3>ASI Santé International</h3>
              <p>
                Partenaire mentionné parmi les soutiens du colloque.
              </p>
            </div>
          </div>

          <h2 style={{ marginTop: "45px" }}>
            Soutiens et coopérations
          </h2>

          <p>
            Le colloque a également bénéficié de soutiens institutionnels
            et de coopérations permettant d'accueillir des intervenants
            français et étrangers et de rendre la manifestation accessible
            au plus grand nombre.
          </p>

          <p>
            L'Ambassade des États-Unis a notamment contribué à la venue
            de Frédric Schröeder, tandis que les équipes techniques et
            associatives mobilisées ont permis la mise en place du dispositif
            de traduction, de retransmission Internet et d'accessibilité.
          </p>

          <blockquote>
            Le partenariat faisait partie intégrante de la démarche :
            réunir institutions, chercheurs, associations et citoyens
            autour d'un même objectif de participation et de citoyenneté.
          </blockquote>

          <div style={{ marginTop: "35px" }}>
            <a href="/handicap-citoyennete" className="btn btn-light">
              ← Retour à Handicap & Citoyenneté
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}