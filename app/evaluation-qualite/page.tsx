export default function EvaluationQualitePage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">Évaluation Qualité</h1>

        <div className="article">
          <p>
            Odyssées Citoyennes a participé aux travaux nationaux consacrés
            à l'évaluation de la qualité dans les établissements et services
            sociaux et médico-sociaux.
          </p>

          <h2>Les travaux d'Odyssées Citoyennes</h2>

          <p>
            Cette rubrique rassemble les principaux travaux, contributions
            et documents relatifs à l'évaluation de la qualité, à la loi
            2002-2 et à l'évaluation externe des établissements et services
            sociaux et médico-sociaux.
          </p>

          <div className="cards">
            <a href="/evaluation-qualite/loi-2002-2" className="card">
              <h3>Loi 2002-2</h3>
              <p>
                Les droits des personnes accueillies et l'évolution du
                secteur social et médico-social.
              </p>
            </a>

            <a href="/evaluation-qualite/usagers" className="card">
              <h3>Usagers</h3>
              <p>
                Réflexion de Michel Chauvière sur la place de l'usager,
                ses droits, sa participation et sa citoyenneté.
              </p>
            </a>

            <a
              href="/evaluation-qualite/objectivite-subjectivite"
              className="card"
            >
              <h3>Objectivité / Subjectivité</h3>
              <p>
                Contribution de Marc Maudinet sur la place de la subjectivité
                dans les processus d'évaluation.
              </p>
            </a>

            <a href="/evaluation-qualite/ctnerhi" className="card">
              <h3>CTNERHI</h3>
              <p>
                Travaux menés avec le Centre Technique National d'Études
                et de Recherches sur les Handicaps et les Inadaptations.
              </p>
            </a>

            <a
              href="/evaluation-qualite/evaluation-externe"
              className="card"
            >
              <h3>Évaluation externe</h3>
              <p>
                Habilitation ANESM et travaux relatifs à l'évaluation externe
                des établissements et services sociaux et médico-sociaux.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}