export default function SensPage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">Sens</h1>

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

            <h2>Sens des débats</h2>

            <p>
              <strong>Jean Font</strong><br />
              Président d’Odyssées Citoyennes<br />
              Extraits des actes du colloque
            </p>

            <p>
              Le premier colloque Handicap & Citoyenneté n’a pas été conçu
              comme une succession classique d’interventions opposant des
              experts à un public passif.
            </p>

            <p>
              Jean Font le présente comme un espace d’échange permanent,
              fondé sur l’interactivité, la confrontation des points de vue
              et la construction collective de nouvelles perspectives de
              recherche.
            </p>


            <div className="info-box">
              <h3>Une démarche participative</h3>

              <p>
                L’objectif du colloque était de faire vivre concrètement
                les principes de participation et de citoyenneté qu’il
                entendait interroger.
              </p>

              <p>
                Les intervenants, le public et les participants à distance
                étaient tous considérés comme des acteurs du débat.
              </p>
            </div>


            <h2>Deux tables rondes</h2>

            <p>
              Les débats étaient organisés autour de deux tables rondes,
              destinées à faire émerger des questions communes et des pistes
              de réflexion.
            </p>

            <p>
              Parmi les thèmes abordés figuraient notamment :
            </p>

            <ul>
              <li>
                les formes de solidarité et les conditions de la participation ;
              </li>

              <li>
                la qualité de l’organisation institutionnelle et son lien
                avec la qualité de vie ;
              </li>

              <li>
                le projet personnel de vie ;
              </li>

              <li>
                les relations entre normalité, citoyenneté et participation ;
              </li>

              <li>
                la coproduction entre la personne et l’institution.
              </li>
            </ul>


            <h2>Une interactivité permanente</h2>

            <p>
              L’organisation retenue visait à favoriser le débat entre les
              intervenants, entre les intervenants et le public, mais aussi
              avec les personnes participant à distance.
            </p>

            <p>
              Chaque participant disposait d’un micro individuel afin de
              pouvoir intervenir directement dans les échanges.
            </p>


            <div className="info-box">
              <h3>Participation par Internet</h3>

              <p>
                L’intégralité du colloque était également transmise en
                direct sur Internet par visioconférence.
              </p>

              <p>
                Les internautes pouvaient ainsi suivre les débats et
                transmettre leurs propres interventions et contributions.
              </p>
            </div>


            <h2>Une organisation conçue pour le débat</h2>

            <p>
              Serge Ebersold intervenait notamment sur la problématique
              générale, tandis que Marc Maudinet participait à
              l’accompagnement conceptuel des échanges.
            </p>

            <p>
              Les contributions du public étaient recueillies et analysées
              afin d’alimenter les discussions des tables rondes.
            </p>

            <p>
              Bachir Kerroumi participait au dispositif permettant la
              retransmission et la participation des internautes.
            </p>


            <h2>Penser autrement le handicap</h2>

            <p>
              Dans son introduction, Jean Font invite également à dépasser
              les représentations figées du handicap.
            </p>

            <p>
              Il propose de penser la situation de handicap à partir des
              interactions entre la personne, les différentes dimensions
              de son environnement et le monde dans lequel elle évolue.
            </p>

            <p>
              La citoyenneté devient alors un processus vivant, qui suppose
              de reconnaître pleinement la place de l’autre dans la société.
            </p>


            <blockquote>
              « Cette dimension seule est habilitée à signifier le passage
              de l’individu à la personne, handicapée ou pas, citoyenne
              en tout cas. »
            </blockquote>


            <h2>Ouverture du colloque</h2>

            <p>
              Jean Font conclut cette introduction en donnant la parole
              aux personnalités invitées pour l’ouverture officielle du
              colloque, parmi lesquelles Dominique Gillot, Michèle Valladon
              et Pierre Cornillot.
            </p>

            <p>
              Il remercie également les différents soutiens et partenaires
              ayant contribué à l’organisation de la manifestation.
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
                Retrouvez le texte complet de Jean Font,
                « Sens des débats », extrait des actes du premier colloque
                Handicap & Citoyenneté.
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
                  href="/documents/sens-des-debats-jean-font.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Consulter le PDF
                </a>

                <a
                  href="/documents/sens-des-debats-jean-font.pdf"
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