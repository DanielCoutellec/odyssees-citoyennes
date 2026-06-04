export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-5xl font-bold mb-6">
            Odyssées Citoyennes
          </h1>

          <p className="text-xl max-w-3xl mb-8">
            Association loi 1901 engagée pour les droits des personnes,
            la citoyenneté, la qualité des accompagnements et la lutte
            contre la maltraitance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/association"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-orange-600"
            >
              Découvrir l'association
            </a>

            <a
              href="/maltraitance"
              className="rounded-lg border border-white px-6 py-3 font-semibold"
            >
              Nos travaux
            </a>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="bg-[#efe3c2] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-center">
            Depuis 1998
          </h2>

          <p className="mx-auto max-w-4xl text-center text-lg leading-8">
            Odyssées Citoyennes agit en faveur de la pleine citoyenneté
            des personnes accueillies dans les établissements et services
            sociaux et médico-sociaux.
          </p>
        </div>
      </section>

      {/* 3 AXES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-xl border p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-orange-600">
                Maltraitance
              </h3>

              <p>
                Jurisprudence fondatrice, protection des lanceurs
                d'alerte et défense des droits fondamentaux.
              </p>
            </div>

            <div className="rounded-xl border p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-orange-600">
                Évaluation Qualité
              </h3>

              <p>
                Travaux nationaux sur l'évaluation, la loi 2002-2,
                le CTNERHI et l'évaluation externe.
              </p>
            </div>

            <div className="rounded-xl border p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-orange-600">
                Handicap & Citoyenneté
              </h3>

              <p>
                Participation citoyenne, inclusion, qualité de vie
                et reconnaissance de la personne.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-2xl italic">
            « Cette dimension seule est habilitée à signifier
            le passage de l'individu à la personne,
            handicapée ou pas, citoyenne en tout cas. »
          </blockquote>

          <p className="mt-6 font-semibold">
            Jean Font
          </p>
        </div>
      </section>
    </main>
  );
}