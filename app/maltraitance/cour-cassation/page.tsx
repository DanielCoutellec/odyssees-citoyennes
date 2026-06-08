export default function CourCassationPage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">
          Cour de Cassation – 26 septembre 2007
        </h1>

        <div className="article">
          <p>
            Par son arrêt du 26 septembre 2007, la Chambre sociale de la
            Cour de Cassation confirme définitivement l'arrêt rendu par la
            Cour d'Appel de Paris le 18 novembre 2005 dans l'affaire opposant
            Jean Font à l'Association Entraide Universitaire.
          </p>

          <div style={{ margin: "30px 0" }}>
            <a
              href="/documents/cour-cassation-2007.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              📄 Ouvrir la décision complète (PDF)
            </a>

            <a
              href="#texte-integral"
              className="btn btn-outline"
              style={{ marginLeft: "12px" }}
            >
              Lire les extraits
            </a>
          </div>

          <h2>Résumé</h2>

          <p>
            La Cour confirme que l'article L.313-24 du Code de l'Action
            Sociale et des Familles protège les salariés qui signalent ou
            témoignent de mauvais traitements infligés à des personnes
            accueillies dans les établissements sociaux et médico-sociaux.
          </p>

          <p>
            Dès lors que la lettre de licenciement fait référence à un
            signalement de maltraitance, le licenciement est nul.
          </p>

          <blockquote>
            « Le pouvoir reconnu au juge de prononcer la réintégration du
            salarié implique nécessairement que le licenciement est nul. »
          </blockquote>

          <h2>Principes retenus par la Cour</h2>

          <ul>
            <li>Protection du salarié ayant signalé des faits de maltraitance.</li>
            <li>Nullité du licenciement fondé même partiellement sur ce signalement.</li>
            <li>Possibilité de réintégration du salarié.</li>
            <li>Droit à indemnisation en cas de non-réintégration.</li>
            <li>Protection renforcée des personnes accueillies.</li>
          </ul>

          <section id="texte-integral" style={{ marginTop: "50px" }}>
            <h2>Extraits significatifs</h2>

            <p>
              La Cour de Cassation rappelle que selon l'article L.313-24 du
              Code de l'Action Sociale et des Familles, l'employeur ne peut
              prendre en considération le fait qu'un salarié témoigne de
              mauvais traitements ou de privations infligés à une personne
              accueillie.
            </p>

            <p>
              La Haute Juridiction considère que le pouvoir reconnu au juge de
              prononcer la réintégration du salarié implique nécessairement que
              le licenciement est nul.
            </p>

            <p>
              Ayant constaté que la lettre de licenciement reprochait au salarié
              d'avoir dénoncé des actes de maltraitance, la Cour d'Appel avait
              exactement déduit que le licenciement était nul sans avoir à
              examiner les autres griefs invoqués.
            </p>

            <p>
              En conséquence, la Cour de Cassation rejette le pourvoi formé par
              l'Association Entraide Universitaire et confirme intégralement la
              solution retenue par la Cour d'Appel.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}