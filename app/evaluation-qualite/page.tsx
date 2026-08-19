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
    backgroundImage: 'url("/images/evaluation-qualite.jpg")',
  }}
/>
        <div className="article">

          <p>
            Odyssées Citoyennes a participé aux travaux nationaux consacrés
            à l&apos;évaluation de la qualité dans les établissements et
            services sociaux et médico-sociaux.
          </p>

          <h2>
            Les travaux d&apos;Odyssées Citoyennes
          </h2>

          <p>
            Cette rubrique rassemble les principaux travaux, contributions
            et documents relatifs à l&apos;évaluation de la qualité, à la
            loi 2002-2 et à l&apos;évaluation externe des établissements
            et services sociaux et médico-sociaux.
          </p>


          {/* CARTES */}
          <div
            className="cards"
            style={{ marginTop: "30px" }}
          >

            {/* RAPPORT */}
            <a
              href="/evaluation-qualite/rapport"
              className="card"
            >
              <h3>Rapport</h3>

              <p>
                Le séminaire d&apos;étude et de recherche consacré aux
                démarches et outils d&apos;évaluation de la qualité dans
                le secteur social et médico-social.
              </p>
            </a>


            {/* LOI 2002-2 */}
            <a
              href="/evaluation-qualite/loi-2002-2"
              className="card"
            >
              <h3>Loi 2002-2</h3>

              <p>
                Les droits des personnes accueillies et l&apos;évolution
                du secteur social et médico-social.
              </p>
            </a>


            {/* USAGERS */}
            <a
              href="/evaluation-qualite/usagers"
              className="card"
            >
              <h3>Usagers</h3>

              <p>
                Réflexion de Michel Chauvière sur la place de l&apos;usager,
                ses droits, sa participation et sa citoyenneté.
              </p>
            </a>


            {/* OBJECTIVITÉ / SUBJECTIVITÉ */}
            <a
              href="/evaluation-qualite/objectivite-subjectivite"
              className="card"
            >
              <h3>Objectivité / Subjectivité</h3>

              <p>
                Contribution de Marc Maudinet sur la place de la
                subjectivité dans les processus d&apos;évaluation.
              </p>
            </a>


            {/* CTNERHI */}
            <a
              href="/evaluation-qualite/ctnerhi"
              className="card"
            >
              <h3>CTNERHI</h3>

              <p>
                Travaux menés avec le Centre Technique National
                d&apos;Études et de Recherches sur les Handicaps
                et les Inadaptations.
              </p>
            </a>


            {/* ÉVALUATION EXTERNE */}
            <a
              href="/evaluation-qualite/evaluation-externe"
              className="card"
            >
              <h3>Évaluation externe</h3>

              <p>
                Habilitation ANESM et travaux relatifs à
                l&apos;évaluation externe des établissements et services
                sociaux et médico-sociaux.
              </p>
            </a>

          </div>


          {/* DOCUMENTS */}
          <div
            style={{
              marginTop: "45px",
              padding: "28px",
              background: "#fff7e2",
              border: "1px solid #ead7aa",
              borderRadius: "14px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              Documents & archives
            </h2>

            <p>
              Les principaux documents historiques liés aux travaux
              d&apos;Odyssées Citoyennes sur l&apos;évaluation et la
              qualité sont regroupés dans la bibliothèque documentaire.
            </p>

            <a
              href="/documents"
              className="btn btn-light"
            >
              Consulter les documents
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}