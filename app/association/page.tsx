export default function AssociationPage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">L'association</h1>
<div
  className="page-photo"
  style={{
    backgroundImage: 'url("/images/association.jpg")',
  }}
/>
        <p className="page-intro">
          Odyssées Citoyennes est une association loi 1901 créée en 1998.
          Elle agit pour la promotion, l'exercice et la défense des droits
          citoyens des personnes accueillies dans les établissements et
          services sociaux et médico-sociaux.
        </p>

        <div className="article">
          <h2>Notre objet</h2>

          <p>
            L'association a été créée afin de promouvoir les droits,
            la citoyenneté et la qualité des accompagnements dans le
            secteur social et médico-social.
          </p>

          <ul>
            <li>
              Promotion et défense des droits citoyens des personnes
              accueillies.
            </li>

            <li>
              Lutte contre la maltraitance et les violences
              institutionnelles.
            </li>

            <li>
              Étude, recherche et mise en œuvre de dispositifs
              d'évaluation de la qualité.
            </li>

            <li>
              Information et formation des professionnels,
              usagers et citoyens.
            </li>

            <li>
              Développement d'actions favorisant la pleine
              citoyenneté des personnes accompagnées.
            </li>
          </ul>

          <h2>Depuis 1998</h2>

          <p>
            Odyssées Citoyennes développe une réflexion nationale
            sur les droits des usagers, l'évaluation de la qualité,
            la citoyenneté et la participation des personnes.
          </p>

          <p>
            Ses travaux ont contribué à faire évoluer les pratiques
            professionnelles et les politiques publiques dans le
            secteur social et médico-social.
          </p>

          <h2>Reconnaissance</h2>

          <p>
            L'association a obtenu le Label de l'Année Européenne
            des Personnes Handicapées en reconnaissance de son action
            en faveur de la citoyenneté, de la qualité des
            accompagnements et du respect des droits fondamentaux.
          </p>

          <blockquote
            style={{
              marginTop: "40px",
              padding: "24px",
              background: "#fff8e8",
              borderLeft: "5px solid #f28c18",
              fontStyle: "italic",
            }}
          >
            « Cette dimension seule est habilitée à signifier le
            passage de l'individu à la personne, handicapée ou pas,
            citoyenne en tout cas. »
            <br />
            <br />
            <strong>Jean Font</strong>
          </blockquote>
        </div>
      </div>
    </main>
  );
}