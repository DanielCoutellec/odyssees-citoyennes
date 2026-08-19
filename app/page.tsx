import HomeSlider from "../components/HomeSlider";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="home-v3-hero home-v3-hero-with-slider">

        <HomeSlider />

        <div className="container home-v3-hero-grid">
          <div className="home-v3-hero-content">
            <p className="home-v3-kicker">
              Association loi 1901 • Depuis 1998
            </p>

            <h1>Odyssées Citoyennes</h1>

            <p className="home-v3-lead">
              Défendre les droits, promouvoir la citoyenneté et contribuer
              à l&apos;amélioration de la qualité des accompagnements dans le
              secteur social et médico-social.
            </p>

            <div className="home-v3-actions">
              <a href="/association" className="btn btn-light">
                Découvrir l&apos;association
              </a>

              <a href="/documents" className="btn btn-outline">
                Consulter les archives
              </a>
            </div>

            <div className="home-v3-meta">
              <span>Jurisprudence</span>
              <span>Évaluation</span>
              <span>Citoyenneté</span>
              <span>Droits des usagers</span>
            </div>
          </div>

          <div className="home-v3-feature">
            <p className="home-v3-feature-label">
              Références majeures
            </p>

            <h2>
              Une action reconnue
              <br />
              par les institutions
            </h2>

            <div className="home-v3-feature-list">
              <a href="/maltraitance/cour-appel">
                <strong>2005</strong>
                <span>Cour d&apos;Appel de Paris</span>
              </a>

              <a href="/maltraitance/cour-cassation">
                <strong>2007</strong>
                <span>Cour de Cassation</span>
              </a>

              <a href="/evaluation-qualite/evaluation-externe">
                <strong>2009</strong>
                <span>Évaluation externe</span>
              </a>
            </div>

            <a href="/documents" className="home-v3-feature-link">
              Voir les documents de référence →
            </a>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="home-v3-intro">
        <div className="container home-v3-intro-grid">
          <div>
            <p className="home-v3-section-kicker">
              Notre mission
            </p>

            <h2>
              Faire de la citoyenneté une réalité concrète
            </h2>
          </div>

          <p>
            Odyssées Citoyennes agit pour la promotion, l&apos;exercice et la
            défense des droits citoyens des personnes accueillies et
            accompagnées dans les établissements et services sociaux et
            médico-sociaux.
          </p>
        </div>
      </section>


      {/* 3 AXES */}
      <section className="home-v3-axes">
        <div className="container">
          <div className="home-v3-section-heading">
            <p className="home-v3-section-kicker">
              Nos travaux
            </p>

            <h2>
              Trois grands axes d&apos;action
            </h2>
          </div>

          <div className="home-v3-cards">

            <a href="/maltraitance" className="home-v3-card">
              <span className="home-v3-card-number">01</span>

              <h3>Maltraitance</h3>

              <p>
                Protection des personnes accueillies, signalement des faits
                de maltraitance et jurisprudence relative à la protection
                des professionnels.
              </p>

              <span className="home-v3-card-link">
                Découvrir la rubrique →
              </span>
            </a>


            <a
              href="/evaluation-qualite"
              className="home-v3-card"
            >
              <span className="home-v3-card-number">02</span>

              <h3>Évaluation Qualité</h3>

              <p>
                Loi 2002-2, droits des usagers, CTNERHI, réflexion sur
                l&apos;évaluation et habilitation à l&apos;évaluation externe.
              </p>

              <span className="home-v3-card-link">
                Découvrir la rubrique →
              </span>
            </a>


            <a
              href="/handicap-citoyennete"
              className="home-v3-card"
            >
              <span className="home-v3-card-number">03</span>

              <h3>Handicap & Citoyenneté</h3>

              <p>
                Participation, accessibilité, citoyenneté, colloque,
                intervenants, innovation et réflexion sur la place
                de la personne dans la société.
              </p>

              <span className="home-v3-card-link">
                Découvrir la rubrique →
              </span>
            </a>

          </div>
        </div>
      </section>


      {/* JURISPRUDENCE */}
      <section className="home-v3-reference">
        <div className="container home-v3-reference-grid">

          <div>
            <p className="home-v3-section-kicker">
              Jurisprudence
            </p>

            <h2>
              Cour d&apos;Appel de Paris 2005
              <br />
              Cour de Cassation 2007
            </h2>

            <p>
              Les décisions rendues dans l&apos;affaire Jean Font ont
              contribué à renforcer la protection des salariés signalant
              des actes de maltraitance dans les établissements sociaux
              et médico-sociaux.
            </p>

            <div className="home-v3-actions">
              <a
                href="/maltraitance/cour-appel"
                className="btn btn-light"
              >
                Cour d&apos;Appel
              </a>

              <a
                href="/maltraitance/cour-cassation"
                className="btn btn-light"
              >
                Cour de Cassation
              </a>
            </div>
          </div>


          <div className="home-v3-docbox">
            <h3>Documents de référence</h3>

            <ul>
              <li>
                <a
                  href="/documents/analyse-arrêt-cour-appel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Analyse juridique de l&apos;arrêt
                </a>
              </li>

              <li>
                <a
                  href="/documents/cour-appel-2005.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arrêt de la Cour d&apos;Appel de Paris
                </a>
              </li>

              <li>
                <a
                  href="/documents/cour-cassation-2007.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arrêt de la Cour de Cassation
                </a>
              </li>

              <li>
                <a
                  href="/documents/dgas-2007.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Note de la DGAS
                </a>
              </li>

              <li>
                <a
                  href="/documents/cour-des-comptes-2008.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cour des Comptes
                </a>
              </li>
            </ul>

            <a href="/documents" className="text-link">
              Voir toute la bibliothèque →
            </a>
          </div>

        </div>
      </section>


      {/* QUALITE */}
      <section className="home-v3-quality">
        <div className="container">

          <div className="home-v3-section-heading">
            <p className="home-v3-section-kicker">
              Qualité & droits des usagers
            </p>

            <h2>
              Une réflexion nationale sur l&apos;évaluation
            </h2>
          </div>

          <p className="home-v3-quality-text">
            Les travaux d&apos;Odyssées Citoyennes ont porté sur les droits
            des usagers, la loi 2002-2, la place de la subjectivité dans
            l&apos;évaluation, les travaux du CTNERHI et l&apos;évaluation
            externe des établissements sociaux et médico-sociaux.
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


      {/* CITATION */}
      <section className="home-v3-quote">
        <div className="container">

          <blockquote>
            « Cette dimension seule est habilitée à signifier le passage
            de l&apos;individu à la personne, handicapée ou pas, citoyenne
            en tout cas. »
          </blockquote>

          <p>Jean Font</p>

        </div>
      </section>


      {/* CONTACT */}
      <section className="home-v3-contact">
        <div className="container home-v3-contact-inner">

          <div>
            <p className="home-v3-section-kicker home-v3-section-kicker-light">
              Contact
            </p>

            <h2>
              Une question ou un document à consulter ?
            </h2>

            <p>
              Retrouvez les coordonnées de l&apos;association ou
              adressez-nous directement votre message.
            </p>
          </div>

          <a href="/contact" className="btn btn-light">
            Nous contacter
          </a>

        </div>
      </section>

    </main>
  );
}