export default function AssociationPage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">L&apos;association</h1>

        <div
          className="page-photo"
          style={{
            backgroundImage: 'url("/images/photos/accueil-1.jpg")',
          }}
          role="img"
          aria-label="Échanges et participation citoyenne"
        />

        <article className="article">

          <h2>Odyssées Citoyennes</h2>

          <p>
            Odyssées Citoyennes est une association loi 1901 créée en 1998.
          </p>

          <p>
            Elle agit pour la promotion, l&apos;exercice et la défense des
            droits citoyens des personnes accueillies ou accompagnées dans
            les établissements et services sociaux et médico-sociaux.
          </p>

          <h2>Une démarche citoyenne</h2>

          <p>
            L&apos;association place la personne, ses droits, sa parole et sa
            participation au centre de ses réflexions et de ses actions.
          </p>

          <p>
            Ses travaux ont notamment porté sur la lutte contre la
            maltraitance, la protection des professionnels qui signalent des
            faits de maltraitance, l&apos;évaluation de la qualité et la
            citoyenneté des personnes en situation de handicap.
          </p>

          <div className="info-box">
            <h3>Trois grands axes</h3>

            <ul>
              <li>
                La prévention et le signalement de la maltraitance.
              </li>

              <li>
                L&apos;évaluation de la qualité et les droits des usagers.
              </li>

              <li>
                Le handicap, la participation et la citoyenneté.
              </li>
            </ul>
          </div>

          <h2>Des travaux et des archives</h2>

          <p>
            Le site rassemble également les principaux documents,
            interventions, décisions de justice et travaux historiques
            conservés par Odyssées Citoyennes.
          </p>

          <p>
            Cette base documentaire permet de conserver la mémoire des
            actions conduites par l&apos;association et de rendre accessibles
            des documents de référence.
          </p>

          <div style={{ marginTop: "35px" }}>
            <a href="/documents" className="text-link">
              Consulter la base documentaire →
            </a>
          </div>

        </article>
      </div>
    </main>
  );
}