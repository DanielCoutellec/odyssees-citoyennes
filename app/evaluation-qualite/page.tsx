export default function EvaluationQualitePage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Évaluation Qualité
        </h1>

        <div
          className="page-photo"
          style={{
            backgroundImage: 'url("/images/photos/accueil-3.jpg")',
          }}
          role="img"
          aria-label="Réflexion collective sur la qualité"
        />

        <article className="article">

          <h2>
            Évaluer la qualité dans le secteur social et médico-social
          </h2>

          <p>
            Odyssées Citoyennes a participé aux réflexions consacrées à
            l&apos;évaluation de la qualité dans les établissements et
            services sociaux et médico-sociaux.
          </p>

          <p>
            Ces travaux ont notamment interrogé la place des usagers, les
            méthodes d&apos;évaluation, la notion de qualité et les
            conséquences de la loi du 2 janvier 2002 rénovant l&apos;action
            sociale et médico-sociale.
          </p>

          <div className="info-box">
            <h3>Une question centrale</h3>

            <p>
              Comment évaluer la qualité d&apos;un accompagnement sans réduire
              la personne à une série d&apos;indicateurs et en conservant la
              place de sa parole, de son expérience et de sa subjectivité ?
            </p>
          </div>

          <h2>Les travaux</h2>

          <div className="home-links">

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

          </div>

          <h2>Une réflexion sur les droits des usagers</h2>

          <p>
            La réflexion sur l&apos;évaluation est indissociable de celle
            portant sur les droits des personnes accompagnées et leur
            participation aux décisions qui les concernent.
          </p>

          <p>
            Les différents documents réunis sur ce site permettent de
            retrouver les principales contributions produites ou conservées
            par Odyssées Citoyennes.
          </p>

          <div style={{ marginTop: "35px" }}>
            <a href="/documents" className="text-link">
              Consulter les documents →
            </a>
          </div>

        </article>
      </div>
    </main>
  );
}