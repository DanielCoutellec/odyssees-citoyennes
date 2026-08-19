export default function HandicapCitoyennetePage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Handicap & Citoyenneté
        </h1>

        <div
          className="page-photo"
          style={{
            backgroundImage: 'url("/images/photos/accueil-4.jpg")',
          }}
          role="img"
          aria-label="Handicap, participation et citoyenneté"
        />

        <article className="article">

          <p>
            Odyssées Citoyennes a organisé un colloque consacré à la pleine
            et entière citoyenneté des personnes dites handicapées.
          </p>

          <p>
            Cette manifestation a réuni des personnes concernées,
            professionnels, chercheurs, responsables institutionnels et
            politiques autour d&apos;une même question : comment permettre
            à chacun d&apos;exercer pleinement sa citoyenneté, quelles que
            soient ses particularités ?
          </p>

          <h2>Le colloque</h2>

          <p>
            Le principe défendu par Odyssées Citoyennes devait également
            se traduire concrètement dans l&apos;organisation de la
            manifestation.
          </p>

          <p>
            L&apos;accessibilité ne concernait donc pas uniquement les locaux,
            mais l&apos;ensemble des conditions permettant à chacun de
            participer effectivement aux débats.
          </p>

          <div
            className="cards handicap-cards"
            style={{ marginTop: "30px" }}
          >

            <a
              href="/handicap-citoyennete/programme"
              className="card"
            >
              <h3>Programme</h3>

              <p>
                Le programme et les grandes séquences du colloque
                Handicap & Citoyenneté.
              </p>
            </a>

            <a
              href="/handicap-citoyennete/sens"
              className="card"
            >
              <h3>Sens</h3>

              <p>
                Le sens des débats et la démarche participative imaginée
                par Jean Font pour le colloque.
              </p>
            </a>

            <a
              href="/handicap-citoyennete/problematique"
              className="card"
            >
              <h3>Problématique</h3>

              <p>
                Les réflexions et questions ayant conduit à
                l&apos;organisation du colloque.
              </p>
            </a>

            <a
              href="/handicap-citoyennete/intervenants"
              className="card"
            >
              <h3>Intervenants</h3>

              <p>
                Les personnalités, chercheurs, professionnels et personnes
                concernées ayant participé aux débats.
              </p>
            </a>

            <a
              href="/handicap-citoyennete/organisation"
              className="card"
            >
              <h3>Organisation & accessibilité</h3>

              <p>
                Plus de 30 personnes mobilisées et une organisation conçue
                pour rendre toutes les dimensions du colloque accessibles.
              </p>
            </a>

            <a
              href="/handicap-citoyennete/innovation"
              className="card"
            >
              <h3>Un colloque précurseur</h3>

              <p>
                Retransmission en direct sur le web, interprétation,
                participation à distance et dispositifs technologiques
                innovants.
              </p>
            </a>

            <a
              href="/handicap-citoyennete/partenaires"
              className="card"
            >
              <h3>Partenaires</h3>

              <p>
                Les institutions et partenaires associés à cette
                manifestation.
              </p>
            </a>

            <a
              href="/documents"
              className="card"
            >
              <h3>Documents & actes</h3>

              <p>
                Retrouvez les textes, interventions et documents historiques
                du colloque dans la base documentaire d&apos;Odyssées
                Citoyennes.
              </p>
            </a>

          </div>

        </article>

        <div
          style={{
            marginTop: "50px",
            padding: "30px",
            background: "#fff7e2",
            border: "1px solid #ead7aa",
            borderRadius: "14px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Citoyenneté et participation
          </h2>

          <p style={{ marginBottom: 0 }}>
            La citoyenneté concerne tous et chacun, personnes en situation
            de handicap ou pas, citoyens en tout cas.
          </p>
        </div>

      </div>
    </main>
  );
}