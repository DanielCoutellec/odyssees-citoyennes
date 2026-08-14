export default function ObjectiviteSubjectivitePage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Objectivité / Subjectivité
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
              La place de la subjectivité dans l’évaluation
            </h2>

            <p>
              <strong>Marc Maudinet</strong><br />
              Directeur du CTNERHI
            </p>

            <p>
              Dans cette contribution, Marc Maudinet interroge la recherche
              d’objectivité dans les démarches d’évaluation du secteur social
              et médico-social.
            </p>

            <p>
              La loi de janvier 2002 renforce les exigences en matière
              d’évaluation. Mais rechercher une objectivité absolue ne doit
              pas conduire à nier la part de jugement nécessairement présente
              dans tout processus d’évaluation.
            </p>


            <div className="info-box">
              <h3>Une idée centrale</h3>

              <p>
                La subjectivité n’est pas ce qu’il faut supprimer de
                l’évaluation. Ce qu’il faut éviter, c’est
                <strong> l’arbitraire</strong>.
              </p>

              <p>
                L’évaluation doit donc reposer sur une démarche rigoureuse,
                explicite et transparente.
              </p>
            </div>


            <h2>Évaluer n’est pas contrôler</h2>

            <p>
              Évaluer consiste à produire une estimation et un jugement.
              L’interprétation d’une réalité dépend nécessairement de valeurs,
              de représentations et du contexte dans lequel l’évaluation
              intervient.
            </p>

            <p>
              C’est précisément cette dimension qui distingue l’évaluation
              du contrôle : le contrôle vérifie la conformité à une norme,
              tandis que l’évaluation conduit à porter un jugement et à
              donner du sens aux informations recueillies.
            </p>


            <h2>Les cinq étapes de l’évaluation</h2>

            <p>
              Marc Maudinet montre que la subjectivité intervient à chaque
              étape du processus d’évaluation.
            </p>

            <div className="info-box">
              <h3>1. Définir l’objectif</h3>

              <p>
                Il faut déterminer la nature de l’évaluation et les types
                de décisions susceptibles d’être prises à son terme.
              </p>
            </div>

            <div className="info-box">
              <h3>2. Choisir les critères</h3>

              <p>
                Les critères doivent être pertinents, indépendants,
                peu nombreux et pondérés. Leur sélection influence
                directement le résultat de l’évaluation.
              </p>
            </div>

            <div className="info-box">
              <h3>3. Choisir les indicateurs</h3>

              <p>
                Les indicateurs permettent d’apprécier les critères retenus.
                Ils peuvent être qualitatifs ou quantitatifs et doivent
                apporter une information réellement pertinente.
              </p>
            </div>

            <div className="info-box">
              <h3>4. Recueillir l’information</h3>

              <p>
                Interviews, questionnaires, analyse documentaire ou grilles :
                les méthodes retenues doivent permettre d’obtenir une
                information valide et fiable.
              </p>
            </div>

            <div className="info-box">
              <h3>5. Interpréter les résultats</h3>

              <p>
                L’évaluateur doit mettre en relation critères, indicateurs
                et informations recueillies afin de donner du sens aux
                résultats et de préparer la décision.
              </p>
            </div>


            <h2>Subjectivité, mais pas arbitraire</h2>

            <p>
              La conclusion de Marc Maudinet est particulièrement claire :
              vouloir supprimer toute subjectivité de l’évaluation est
              illusoire.
            </p>

            <p>
              En revanche, les choix réalisés tout au long du processus
              doivent pouvoir être expliqués, argumentés et rendus
              transparents.
            </p>

            <p>
              La rigueur de l’évaluation repose donc moins sur une prétendue
              neutralité absolue que sur la capacité de l’évaluateur à
              justifier ses choix.
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
                Retrouvez le texte complet de Marc Maudinet,
                « La place de la subjectivité dans l’évaluation »,
                conservé dans la base documentaire d’Odyssées Citoyennes.
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
                  href="/documents/objectivite-subjectivite-marc-maudinet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Consulter le PDF
                </a>

                <a
                  href="/documents/objectivite-subjectivite-marc-maudinet.pdf"
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