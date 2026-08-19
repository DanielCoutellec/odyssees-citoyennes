export default function MaltraitancePage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Maltraitance & Jurisprudence
        </h1>

        <div
          className="page-photo"
          style={{
            backgroundImage: 'url("/images/photos/accueil-2.jpg")',
          }}
          role="img"
          aria-label="Accompagnement et protection des personnes"
        />

        <article className="article">

          <h2>
            Protéger les personnes et ceux qui signalent les faits
          </h2>

          <p>
            Odyssées Citoyennes s&apos;est engagée dans la lutte contre les
            actes de maltraitance dans les établissements sociaux et
            médico-sociaux.
          </p>

          <p>
            Les actions menées ont notamment contribué à faire reconnaître
            la nécessité de protéger les professionnels qui signalent des
            faits susceptibles de porter atteinte aux personnes accueillies.
          </p>

          <div className="info-box">
            <h3>Une jurisprudence importante</h3>

            <p>
              Les décisions rendues par la Cour d&apos;Appel de Paris en 2005
              puis par la Cour de Cassation en 2007 dans l&apos;affaire Jean
              Font constituent des références importantes dans ce domaine.
            </p>
          </div>

          <h2>Jurisprudence & documents</h2>

          <div className="home-links">

            <a href="/maltraitance/analyse-arret">
              Analyse de l&apos;arrêt
            </a>

            <a href="/maltraitance/cour-appel">
              Cour d&apos;Appel de Paris
            </a>

            <a href="/maltraitance/cour-cassation">
              Cour de Cassation
            </a>

            <a href="/maltraitance/dgas">
              DGAS
            </a>

            <a href="/maltraitance/cour-des-comptes">
              Cour des Comptes
            </a>

            <a href="/maltraitance/senat">
              Sénat
            </a>

          </div>

          <h2>Une reconnaissance institutionnelle</h2>

          <p>
            Les problématiques soulevées par Odyssées Citoyennes ont été
            reprises dans différents travaux institutionnels consacrés à la
            protection des personnes vulnérables et au signalement des actes
            de maltraitance.
          </p>

          <p>
            Les documents conservés permettent de retracer cette évolution
            juridique et institutionnelle.
          </p>

          <div style={{ marginTop: "35px" }}>
            <a href="/documents" className="text-link">
              Voir les documents de référence →
            </a>
          </div>

        </article>
      </div>
    </main>
  );
}