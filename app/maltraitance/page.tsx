export default function MaltraitancePage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">Maltraitance</h1>

        <p className="page-intro">
          Odyssées Citoyennes a contribué à faire reconnaître la protection
          des salariés signalant des actes de maltraitance dans les
          établissements sociaux et médico-sociaux.
        </p>

        <div className="content-grid" style={{ marginTop: "40px" }}>
          <aside className="sidebar">
            <a href="/maltraitance/analyse-arret">Analyse juridique</a>
            <a href="/maltraitance/cour-appel">Cour d'Appel 2005</a>
            <a href="/maltraitance/cour-cassation">Cour de Cassation 2007</a>
            <a href="/maltraitance/dgas">Note DGAS 2007</a>
            <a href="/maltraitance/cour-des-comptes">Cour des Comptes</a>
          </aside>

          <article className="article">
            <h2>Une jurisprudence fondatrice</h2>

            <p>
              L'arrêt de la Cour d'Appel de Paris du 18 novembre 2005,
              confirmé par la Cour de Cassation le 26 septembre 2007,
              constitue une étape majeure dans la protection des salariés
              ayant signalé ou témoigné de mauvais traitements infligés à
              des personnes accueillies.
            </p>

            <p>
              Ces décisions rappellent que le signalement de faits de
              maltraitance ne peut être pris en considération pour décider
              d'une sanction disciplinaire ou d'un licenciement.
            </p>

            <h2>Article L.313-24 du CASF</h2>

            <p>
              Dans les établissements et services sociaux et médico-sociaux,
              un salarié ou agent qui témoigne de mauvais traitements ou
              privations infligés à une personne accueillie bénéficie d'une
              protection spécifique.
            </p>

            <p>
              En cas de licenciement prononcé en violation de cette
              protection, le juge peut prononcer la réintégration du salarié
              concerné si celui-ci la demande.
            </p>

            <h2>Documents de référence</h2>

            <ul>
              <li>Analyse juridique de l'arrêt de la Cour d'Appel</li>
              <li>Arrêt Cour d'Appel de Paris du 18 novembre 2005</li>
              <li>Arrêt Cour de Cassation du 26 septembre 2007</li>
              <li>Note DGAS du 26 décembre 2007</li>
              <li>Courrier du Premier Président de la Cour des Comptes</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}