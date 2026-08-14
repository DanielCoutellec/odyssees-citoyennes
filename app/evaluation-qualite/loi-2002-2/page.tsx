export default function Loi2002Page() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Évaluation et Loi du 2 janvier 2002
        </h1>

        <div className="content-grid">

          {/* MENU LATÉRAL */}
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
              La qualité au cœur de la loi du 2 janvier 2002
            </h2>

            <p>
              La loi du 2 janvier 2002 rénovant l'action sociale et
              médico-sociale a profondément renforcé la place des personnes
              accueillies et accompagnées dans les établissements et services
              sociaux et médico-sociaux.
            </p>

            <p>
              Elle affirme notamment des principes essentiels concernant
              l'autonomie, la protection des personnes, l'exercice de la
              citoyenneté, les droits des usagers et l'évaluation de la
              qualité des accompagnements.
            </p>


            <h2>
              Une évaluation continue des besoins
            </h2>

            <p>
              L'article L.116-1 du Code de l'action sociale et des familles
              inscrit l'action sociale et médico-sociale dans une démarche
              d'évaluation continue des besoins et des attentes des personnes.
            </p>

            <div className="info-box">
              <h3>Principes essentiels</h3>

              <ul>
                <li>Promouvoir l'autonomie des personnes.</li>
                <li>Assurer leur protection.</li>
                <li>Favoriser l'exercice de la citoyenneté.</li>
                <li>Prévenir les exclusions.</li>
                <li>
                  Évaluer de manière continue les besoins et les attentes.
                </li>
              </ul>
            </div>


            <h2>
              Les droits des usagers
            </h2>

            <p>
              La loi garantit à toute personne accompagnée par un
              établissement ou un service social ou médico-social le respect
              de ses droits et libertés individuels.
            </p>

            <p>
              Elle prévoit notamment une prise en charge et un accompagnement
              individualisés de qualité, adaptés à l'âge et aux besoins de la
              personne, favorisant son développement, son autonomie et son
              insertion.
            </p>

            <p>
              Le consentement de la personne doit être recherché chaque fois
              qu'elle est en capacité d'exprimer sa volonté et de participer
              aux décisions qui la concernent.
            </p>


            <h2>
              Évaluation et amélioration de la qualité
            </h2>

            <p>
              Ces dispositions ont contribué à placer l'évaluation de la
              qualité au centre du fonctionnement des établissements et
              services sociaux et médico-sociaux.
            </p>

            <p>
              Les travaux auxquels Odyssées Citoyennes a participé se sont
              inscrits dans cette réflexion sur les méthodes, les démarches
              et les outils permettant d'évaluer la qualité des
              accompagnements.
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
                Document d'archive
              </h2>

              <p>
                Consultez les extraits de la loi du 2 janvier 2002 conservés
                dans la base documentaire historique d'Odyssées Citoyennes,
                notamment les dispositions relatives à l'évaluation, aux
                droits des usagers et à la qualité de l'accompagnement.
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
                  href="/documents/evaluation-loi-2002-2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Consulter le PDF
                </a>

                <a
                  href="/documents/evaluation-loi-2002-2.pdf"
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