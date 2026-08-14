export default function AccessibilitePage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">Accessibilité</h1>

        <article className="article">
          <h2>Engagement d’accessibilité</h2>

          <p>
            Odyssées Citoyennes accorde une attention particulière à
            l’accessibilité de ses contenus numériques et à la possibilité
            pour chacun de consulter les informations et documents proposés
            sur ce site.
          </p>

          <p>
            Cette démarche est directement liée aux valeurs de citoyenneté,
            de participation, d’égalité des droits et d’accès à l’information
            défendues par l’association.
          </p>

          <h2>État actuel</h2>

          <p>
            Le site a été conçu avec une attention portée à la lisibilité,
            à la structuration des contenus, à la navigation et à
            l’utilisation sur différents types d’écrans.
          </p>

          <p>
            À ce jour, le site n’a toutefois pas fait l’objet d’un audit
            complet de conformité au Référentiel Général d’Amélioration
            de l’Accessibilité (RGAA).
          </p>

          <div className="info-box">
            <h3>Déclaration</h3>

            <p>
              En l’absence d’audit complet, Odyssées Citoyennes ne revendique
              pas actuellement un niveau officiel de conformité au RGAA.
            </p>
          </div>

          <h2>Améliorations recherchées</h2>

          <ul>
            <li>structure claire des titres et contenus ;</li>
            <li>navigation cohérente entre les différentes rubriques ;</li>
            <li>contraste suffisant entre textes et arrière-plans ;</li>
            <li>adaptation aux écrans mobiles et tablettes ;</li>
            <li>accès aux documents d’archive en formats consultables ;</li>
            <li>amélioration progressive de l’accessibilité clavier.</li>
          </ul>

          <h2>Documents PDF</h2>

          <p>
            Une partie importante du site est constituée de documents
            historiques au format PDF. Certains de ces documents sont des
            archives anciennes ou des reproductions de documents originaux
            et peuvent ne pas être totalement accessibles aux technologies
            d’assistance.
          </p>

          <p>
            Lorsque cela est possible, le site propose également une page
            HTML de présentation ou de synthèse afin de faciliter l’accès
            à leur contenu.
          </p>

          <h2>Signaler une difficulté</h2>

          <p>
            Si vous rencontrez une difficulté d’accès à une page,
            un document ou une fonctionnalité du site, vous pouvez
            nous le signaler.
          </p>

          <p>
            <a href="/contact" className="text-link">
              Signaler un problème d’accessibilité
            </a>
          </p>
        </article>
      </div>
    </main>
  );
}