export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Association loi 1901</p>

          <h1>Odyssées Citoyennes</h1>

          <p className="hero-text">
            Défendre les droits, promouvoir la citoyenneté, améliorer la
            qualité des accompagnements et lutter contre la maltraitance
            dans le secteur social et médico-social.
          </p>

          <div className="hero-actions">
            <a href="/association" className="btn btn-light">
              Découvrir l'association
            </a>

            <a href="/contact" className="btn btn-outline">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>Depuis 1998</h2>

          <p>
            Odyssées Citoyennes agit pour la promotion, l'exercice et la
            défense des droits citoyens des personnes accueillies et
            accompagnées dans les établissements et services sociaux et
            médico-sociaux.
          </p>
        </div>
      </section>

      <section className="cards-section">
        <div className="container">
          <h2 className="home-section-title">Nos principaux travaux</h2>

          <div className="cards">
            <a href="/maltraitance" className="card">
              <h3>Maltraitance</h3>

              <p>
                Protection des personnes accueillies, signalement des faits
                de maltraitance et jurisprudence relative à la protection
                des professionnels lanceurs d'alerte.
              </p>

              <span className="card-link">Découvrir la rubrique →</span>
            </a>

            <a href="/evaluation-qualite" className="card">
              <h3>Évaluation Qualité</h3>

              <p>
                Loi 2002-2, droits des usagers, travaux avec le CTNERHI,
                réflexion sur l'évaluation et habilitation à l'évaluation
                externe.
              </p>

              <span className="card-link">Découvrir la rubrique →</span>
            </a>

            <a href="/handicap-citoyennete" className="card">
              <h3>Handicap & Citoyenneté</h3>

              <p>
                Participation, accessibilité, citoyenneté, colloque,
                intervenants, innovations et réflexion sur la place de la
                personne dans la société.
              </p>

              <span className="card-link">Découvrir la rubrique →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="home-highlight">
        <div className="container">
          <div className="home-highlight-grid">
            <div>
              <p className="eyebrow-dark">Jurisprudence</p>

              <h2>
                Cour d'Appel de Paris 2005
                <br />
                Cour de Cassation 2007
              </h2>

              <p>
                Les décisions rendues dans l'affaire Jean Font ont contribué
                à renforcer la protection des salariés signalant des actes de
                maltraitance dans les établissements sociaux et
                médico-sociaux.
              </p>

              <div className="hero-actions">
                <a
                  href="/maltraitance/cour-appel"
                  className="btn btn-light"
                >
                  Cour d'Appel
                </a>

                <a
                  href="/maltraitance/cour-cassation"
                  className="btn btn-light"
                >
                  Cour de Cassation
                </a>
              </div>
            </div>

            <div className="home-highlight-card">
              <h3>Documents de référence</h3>

              <ul>
                <li>Analyse juridique de l'arrêt</li>
                <li>Arrêt de la Cour d'Appel de Paris</li>
                <li>Arrêt de la Cour de Cassation</li>
                <li>Note de la DGAS</li>
                <li>Cour des Comptes</li>
              </ul>

              <a href="/maltraitance" className="text-link">
                Accéder aux documents →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-quality">
        <div className="container">
          <p className="eyebrow-dark">Qualité & droits des usagers</p>

          <h2 className="home-section-title">
            Une réflexion nationale sur l'évaluation
          </h2>

          <p className="home-center-text">
            Les travaux d'Odyssées Citoyennes ont porté sur les droits des
            usagers, la loi 2002-2, la place de la subjectivité dans
            l'évaluation, les travaux du CTNERHI et l'évaluation externe des
            établissements sociaux et médico-sociaux.
          </p>

          <div className="home-links">
            <a href="/evaluation-qualite/loi-2002-2">
              Loi 2002-2
            </a>

            <a href="/evaluation-qualite/usagers">
              Usagers
            </a>

            <a href="/evaluation-qualite/objectivite-subjectivite">
              Objectivité / Subjectivité
            </a>

            <a href="/evaluation-qualite/ctnerhi">
              CTNERHI
            </a>

            <a href="/evaluation-qualite/evaluation-externe">
              Évaluation externe
            </a>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <blockquote>
            « Cette dimension seule est habilitée à signifier le passage de
            l'individu à la personne, handicapée ou pas, citoyenne en tout
            cas. »
          </blockquote>

          <p>Jean Font</p>
        </div>
      </section>

      <section className="home-contact">
        <div className="container home-contact-inner">
          <div>
            <h2>Odyssées Citoyennes</h2>

            <p>
              Vous souhaitez consulter un document, obtenir une information
              ou entrer en contact avec l'association ?
            </p>
          </div>

          <a href="/contact" className="btn btn-light">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}