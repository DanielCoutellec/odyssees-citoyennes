export default function RapportPage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">Rapport</h1>

        <div className="content-grid">

          {/* SOUS-MENU */}
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


          {/* CONTENU */}
          <article className="article">

            <h2>
              Évaluation de la qualité dans le secteur social
              et médico-social
            </h2>

            <p>
              Odyssées Citoyennes a participé aux travaux consacrés
              aux démarches et outils d&apos;évaluation de la qualité
              dans les établissements et services sociaux et
              médico-sociaux.
            </p>

            <p>
              Ces travaux se sont inscrits dans le cadre d&apos;un
              séminaire d&apos;étude et de recherche associant
              professionnels, chercheurs, représentants des usagers
              et institutions.
            </p>


            <div className="info-box">
              <h3>Objectifs des travaux</h3>

              <ul>
                <li>
                  Réfléchir aux méthodes d&apos;évaluation de la qualité.
                </li>

                <li>
                  Identifier les critères et outils pouvant être utilisés.
                </li>

                <li>
                  Prendre en compte la place et les droits des usagers.
                </li>

                <li>
                  Contribuer à l&apos;amélioration des pratiques dans
                  les établissements et services.
                </li>
              </ul>
            </div>


            <h2>Des travaux collectifs</h2>

            <p>
              La démarche a conduit à la production de plusieurs documents
              permettant de conserver la trace des réflexions menées et
              des recommandations formulées.
            </p>

            <p>
              Ils constituent aujourd&apos;hui une partie importante de
              la base documentaire historique d&apos;Odyssées Citoyennes
              consacrée à l&apos;évaluation de la qualité.
            </p>


            {/* DOCUMENTS */}
            <div
              style={{
                marginTop: "40px",
                padding: "28px",
                background: "#fff7e2",
                border: "1px solid #ead7aa",
                borderRadius: "14px",
              }}
            >
              <h2 style={{ marginTop: 0 }}>
                Documents associés
              </h2>

              <p>
                Retrouvez les principaux documents conservés dans
                les archives d&apos;Odyssées Citoyennes.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: "22px",
                }}
              >
                <a
                  href="/documents/convention-etude-2001.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Convention d&apos;étude
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
            </div>


            {/* ACCÈS AUX ARCHIVES */}
            <div style={{ marginTop: "35px" }}>
              <a href="/documents" className="text-link">
                Voir l&apos;ensemble de la base documentaire →
              </a>
            </div>


            {/* RETOUR */}
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