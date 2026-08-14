export default function RapportPage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Rapport
        </h1>

        <div className="content-grid">

          <aside className="sidebar">
            <a href="/evaluation-qualite/rapport">
              Rapport
            </a>

            <a href="/evaluation-qualite/loi-2002-2">
              Évaluation et Loi 2002-2
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
          </aside>

          <article className="article">

            <h2>
              Rapport du séminaire d’étude et de recherche
            </h2>

            <p>
              À la demande de la Direction Générale de l’Action Sociale,
              le CTNERHI a organisé un séminaire consacré aux démarches
              et outils d’évaluation de la qualité dans le secteur social
              et médico-social.
            </p>

            <p>
              Jean Font, président d’Odyssées Citoyennes, en a assuré
              la présidence et le rapport.
            </p>

            <div className="info-box">
              <h3>Travaux associés</h3>

              <ul>
                <li>Convention d’étude</li>
                <li>Annexe technique</li>
                <li>Rapport final</li>
                <li>Recommandations</li>
              </ul>
            </div>

            <h2>
              Une réflexion sur l’évaluation de la qualité
            </h2>

            <p>
              Le séminaire a réuni chercheurs, universitaires,
              professionnels, représentants d’associations d’usagers,
              administration centrale et organismes publics.
            </p>

            <p>
              Les travaux ont notamment porté sur les démarches et outils
              permettant d’évaluer la qualité des activités et prestations
              dans les établissements et services sociaux et médico-sociaux.
            </p>

            <h2>
              Documents disponibles
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              <a
                href="/documents/convention-etude-2001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Convention d’étude
              </a>

              <a
                href="/documents/annexe-technique.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Annexe technique
              </a>

              <a
                href="/documents/recommandations.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Recommandations
              </a>
            </div>

            <p style={{ marginTop: "24px" }}>
              Le rapport complet CTNERHI de décembre 2002 est référencé
              dans les archives historiques, mais son PDF original n’a pas
              encore été récupéré.
            </p>

            <div style={{ marginTop: "45px" }}>
              <a
                href="/evaluation-qualite"
                className="text-link"
              >
                ← Retour à Évaluation Qualité
              </a>
            </div>

          </article>

        </div>
      </div>
    </main>
  );
}