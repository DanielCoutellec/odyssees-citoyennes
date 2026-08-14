export default function ProblematiquePage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Problématique
        </h1>

        <div className="content-grid">

          {/* MENU LATÉRAL */}
          <aside className="sidebar">
            <a href="/handicap-citoyennete/programme">
              Programme
            </a>

            <a href="/handicap-citoyennete/sens">
              Sens
            </a>

            <a href="/handicap-citoyennete/problematique">
              Problématique
            </a>

            <a href="/handicap-citoyennete/intervenants">
              Intervenants
            </a>

            <a href="/handicap-citoyennete/organisation">
              Organisation
            </a>

            <a href="/handicap-citoyennete/partenaires">
              Partenaires
            </a>
          </aside>


          {/* CONTENU */}
          <article className="article">

            <p className="eyebrow-dark">
              Premier colloque Handicap & Citoyenneté
            </p>

            <h2>
              Problématique et champ de recherche
            </h2>

            <p>
              <strong>Serge Ebersold</strong><br />
              Directeur de Recherches au CERIS, Université de Strasbourg<br />
              Centre d’Études et de Recherches sur l’Intervention Sociale
            </p>

            <p>
              Réunir les notions de handicap et de citoyenneté peut sembler
              paradoxal. La citoyenneté renvoie à la participation de
              l’individu à la vie collective, tandis que le handicap a
              longtemps été associé à l’incapacité, à la dépendance ou
              à l’exclusion.
            </p>

            <p>
              Serge Ebersold montre au contraire que ces deux notions sont
              profondément liées : toutes deux interrogent la place de
              l’individu dans la société, ses droits, sa dignité et ses
              possibilités de participation.
            </p>


            <div className="info-box">
              <h3>Une question centrale</h3>

              <p>
                Comment permettre aux personnes en situation de handicap
                d’exercer pleinement leur citoyenneté et de participer
                réellement à la vie sociale, économique et politique ?
              </p>
            </div>


            <h2>Handicap et citoyenneté</h2>

            <p>
              Handicap et citoyenneté renvoient tous deux au principe de
              cohésion sociale et aux relations entre l’individu et le
              collectif.
            </p>

            <p>
              Ils interrogent également la possession et l’exercice de droits
              sociaux, politiques et économiques ainsi que la possibilité de
              placer sur un pied d’égalité des individus différents.
            </p>


            <h2>De l’intégration à la participation</h2>

            <p>
              Les politiques d’intégration ont progressivement permis de
              remettre en cause la ségrégation et la passivité auxquelles
              les personnes handicapées pouvaient être assignées.
            </p>

            <p>
              Mais un nouveau modèle de citoyenneté apparaît : plus actif,
              plus participatif et davantage centré sur la capacité de
              chaque personne à intervenir dans les décisions qui la
              concernent.
            </p>


            <div className="info-box">
              <h3>Tous égaux, tous différents</h3>

              <p>
                Cette conception de la citoyenneté cherche à garantir les
                mêmes possibilités de participation sociale tout en
                reconnaissant les différences entre les personnes.
              </p>

              <p>
                Elle privilégie notamment l’accès aux dispositifs de droit
                commun et le maintien dans le milieu de vie ordinaire.
              </p>
            </div>


            <h2>Des droits à leur effectivité</h2>

            <p>
              Reconnaître juridiquement des droits ne suffit pas. Encore
              faut-il que les personnes disposent de possibilités réelles
              de les exercer.
            </p>

            <p>
              Accessibilité, éducation, formation, emploi, information et
              participation aux décisions constituent autant de domaines
              dans lesquels peuvent subsister des obstacles.
            </p>


            <h2>La personne comme acteur de son devenir</h2>

            <p>
              Penser la citoyenneté des personnes handicapées conduit à
              dépasser une approche centrée uniquement sur la déficience.
            </p>

            <p>
              Il s’agit de reconnaître la personne et son entourage comme
              les sujets de leur devenir et non comme de simples objets
              d’intervention.
            </p>

            <p>
              Le handicap peut alors être compris comme le résultat d’une
              interaction entre une personne, les conséquences d’une
              déficience et la capacité de son environnement à prendre
              en compte ses besoins et ses particularités.
            </p>


            <h2>Transformer également l’environnement</h2>

            <p>
              L’ambition citoyenne ne consiste donc pas uniquement à demander
              à la personne de s’adapter à la société.
            </p>

            <p>
              Elle implique aussi d’agir sur les conditions sociales,
              institutionnelles et environnementales afin que chacun puisse
              exercer les mêmes droits et réaliser ses projets de vie.
            </p>


            <div className="info-box">
              <h3>Un enjeu démocratique</h3>

              <p>
                La citoyenneté des personnes handicapées n’est pas une
                question concernant uniquement le secteur du handicap.
              </p>

              <p>
                Elle interroge plus largement les formes de solidarité,
                d’égalité et de participation que la société souhaite
                construire pour tous.
              </p>
            </div>


            {/* DOCUMENT COMPLET */}
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
                Retrouvez l’intervention complète de Serge Ebersold,
                « Problématique et champ de recherche », présentée dans
                le cadre du premier colloque Handicap & Citoyenneté.
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
                  href="/documents/problematique-handicap-citoyennete-serge-ebersold.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Consulter le PDF
                </a>

                <a
                  href="/documents/problematique-handicap-citoyennete-serge-ebersold.pdf"
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
                href="/handicap-citoyennete"
                className="text-link"
              >
                ← Retour à Handicap & Citoyenneté
              </a>
            </div>

          </article>
        </div>
      </div>
    </main>
  );
}