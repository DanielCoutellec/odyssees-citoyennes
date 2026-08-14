export default function AnalyseArretPage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Analyse de l’arrêt de la Cour d’Appel
        </h1>

        <div className="content-grid">

          {/* MENU LATÉRAL */}
          <aside className="sidebar">
            <a href="/maltraitance/analyse-arret">
              Analyse Arrêt Cour d’Appel
            </a>

            <a href="/maltraitance/senat">
              Sénat
            </a>

            <a href="/maltraitance/cour-appel">
              Arrêt Cour d’Appel
            </a>

            <a href="/maltraitance/cour-cassation">
              Arrêt Cour de Cassation
            </a>

            <a href="/maltraitance/dgas">
              D.G.A.S.
            </a>

            <a href="/maltraitance/cour-des-comptes">
              Cour des Comptes
            </a>
          </aside>


          {/* CONTENU */}
          <article className="article">

            <h2>
              Cour d’Appel de Paris – 18 novembre 2005
            </h2>

            <p>
              Cette décision constitue une étape importante dans la
              protection des professionnels ayant signalé des faits de
              maltraitance envers des personnes accueillies dans les
              établissements sociaux et médico-sociaux.
            </p>

            <p>
              L’affaire concernait Jean Font, licencié après avoir témoigné
              de faits de maltraitance dans le cadre de son activité
              professionnelle.
            </p>


            <div className="info-box">
              <h3>À retenir</h3>

              <ul>
                <li>
                  Protection du professionnel ayant signalé des faits de
                  maltraitance.
                </li>

                <li>
                  Nullité du licenciement lorsqu’il est fondé sur ce
                  signalement.
                </li>

                <li>
                  Possibilité de réintégration du salarié.
                </li>

                <li>
                  Reconnaissance de la portée protectrice de l’article
                  L.313-24 du Code de l’action sociale et des familles.
                </li>
              </ul>
            </div>


            <h2>
              Le fondement juridique
            </h2>

            <p>
              L’article L.313-24 du Code de l’action sociale et des familles
              prévoit qu’un salarié ou un agent ayant témoigné de mauvais
              traitements ou de privations infligés à une personne accueillie
              ne peut faire l’objet de mesures défavorables en raison de ce
              témoignage.
            </p>

            <p>
              En cas de licenciement, le juge peut notamment prononcer la
              réintégration du salarié concerné s’il la demande.
            </p>


            <h2>
              Portée de l’arrêt
            </h2>

            <p>
              L’arrêt de la Cour d’Appel de Paris du 18 novembre 2005
              contribue à renforcer la protection des professionnels
              signalant des actes de maltraitance.
            </p>

            <p>
              Il s’inscrit dans un combat plus large en faveur des droits
              des personnes accueillies et de la responsabilité des
              institutions sociales et médico-sociales.
            </p>


            {/* DOCUMENT PDF */}
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
                Document d’archive
              </h2>

              <p>
                Retrouvez l’analyse complète de l’arrêt de la Cour d’Appel
                de Paris du 18 novembre 2005 conservée dans la base
                documentaire d’Odyssées Citoyennes.
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
                  href="/documents/analyse-arrêt-cour-appel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Consulter le PDF
                </a>

                <a
                  href="/documents/analyse-arrêt-cour-appel.pdf"
                  download
                  className="btn btn-light"
                >
                  Télécharger le PDF
                </a>
              </div>
            </div>


            {/* RETOUR */}
            <div style={{ marginTop: "45px" }}>
              <a
                href="/maltraitance"
                className="text-link"
              >
                ← Retour à Maltraitance
              </a>
            </div>

          </article>
        </div>
      </div>
    </main>
  );
}