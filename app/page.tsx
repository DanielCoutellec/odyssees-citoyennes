export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Association loi 1901</p>
            <h1>Odyssées Citoyennes</h1>
            <p className="hero-text">
              Droits des personnes, citoyenneté, qualité des accompagnements
              et lutte contre la maltraitance.
            </p>

            <div className="hero-actions">
              <a href="/association" className="btn btn-light">
                Découvrir l'association
              </a>
              <a href="/maltraitance" className="btn btn-outline">
                Voir les travaux
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>Depuis 1998</h2>
          <p>
            Odyssées Citoyennes agit en faveur de la pleine citoyenneté des
            personnes accueillies dans les établissements et services sociaux
            et médico-sociaux.
          </p>
        </div>
      </section>

      <section className="cards-section">
        <div className="container cards">
          <a href="/maltraitance" className="card">
            <h3>Maltraitance</h3>
            <p>
              Jurisprudence fondatrice, protection des lanceurs d'alerte et
              défense des droits fondamentaux.
            </p>
          </a>

          <a href="/evaluation-qualite" className="card">
            <h3>Évaluation Qualité</h3>
            <p>
              Travaux nationaux sur l'évaluation, la loi 2002-2, le CTNERHI
              et l'évaluation externe.
            </p>
          </a>

          <a href="/handicap-citoyennete" className="card">
            <h3>Handicap & Citoyenneté</h3>
            <p>
              Participation citoyenne, inclusion, qualité de vie et
              reconnaissance de la personne.
            </p>
          </a>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <blockquote>
            « Cette dimension seule est habilitée à signifier le passage de
            l'individu à la personne, handicapée ou pas, citoyenne en tout cas. »
          </blockquote>
          <p>Jean Font</p>
        </div>
      </section>
    </main>
  );
}