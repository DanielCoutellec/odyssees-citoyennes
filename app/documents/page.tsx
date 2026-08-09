export default function DocumentsPage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">Archives & Documents</h1>

        <div className="article">
          <p>
            Cette rubrique rassemble les principaux documents historiques,
            juridiques et techniques d'Odyssées Citoyennes.
          </p>

          <h2>Maltraitance & jurisprudence</h2>

          <div className="cards">
            <a
              href="/documents/analyse-arrêt-cour-appel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Analyse de l'arrêt de la Cour d'Appel</h3>
              <p>Analyse juridique de la décision rendue en 2005.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>

            <a
              href="/documents/cour-appel-2005.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Cour d'Appel de Paris – 2005</h3>
              <p>Décision du 18 novembre 2005.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>

            <a
              href="/documents/cour-cassation-2007.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Cour de Cassation – 2007</h3>
              <p>Arrêt de la Chambre sociale du 26 septembre 2007.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>

            <a
              href="/documents/dgas-2007.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>DGAS – 2007</h3>
              <p>Note relative à la jurisprudence sur le signalement de maltraitance.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>

            <a
              href="/documents/cour-des-comptes-2008.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Cour des Comptes – 2008</h3>
              <p>Courrier institutionnel relatif aux travaux de l'association.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>
          </div>

          <h2 style={{ marginTop: "50px" }}>Évaluation & qualité</h2>

          <div className="cards">
            <a
              href="/documents/convention-etude-2001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Convention d'étude – 2001</h3>
              <p>Document relatif aux travaux engagés avec le CTNERHI.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>

            <a
              href="/documents/annexe-technique.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Annexe technique</h3>
              <p>Document technique associé aux travaux d'évaluation.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>

            <a
              href="/documents/recommandations.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Recommandations</h3>
              <p>Recommandations issues des travaux menés sur l'évaluation.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>

            <a
              href="/documents/evaluation-externe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>Évaluation externe</h3>
              <p>Document relatif à l'habilitation et à l'évaluation externe.</p>
              <span className="card-link">Ouvrir le PDF →</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}