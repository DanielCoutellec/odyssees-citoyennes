"use client";

import { useMemo, useState } from "react";

const pages = [
  {
    title: "Accueil",
    href: "/",
    keywords: "odyssées citoyennes association accueil",
  },
  {
    title: "Association",
    href: "/association",
    keywords: "association loi 1901 jean font histoire mission",
  },
  {
    title: "Maltraitance",
    href: "/maltraitance",
    keywords: "maltraitance jurisprudence signalement droits protection",
  },
  {
    title: "Analyse de l'arrêt de la Cour d'Appel",
    href: "/maltraitance/analyse-arret",
    keywords: "analyse arrêt cour appel paris 2005 jean font",
  },
  {
    title: "Sénat",
    href: "/maltraitance/senat",
    keywords: "sénat andre vantomme maltraitance handicap",
  },
  {
    title: "Cour d'Appel de Paris",
    href: "/maltraitance/cour-appel",
    keywords: "cour appel paris 2005 arrêt jurisprudence",
  },
  {
    title: "Cour de Cassation",
    href: "/maltraitance/cour-cassation",
    keywords: "cour cassation 2007 jurisprudence",
  },
  {
    title: "DGAS",
    href: "/maltraitance/dgas",
    keywords: "dgas direction générale action sociale",
  },
  {
    title: "Cour des Comptes",
    href: "/maltraitance/cour-des-comptes",
    keywords: "cour comptes 2008",
  },

  {
    title: "Évaluation Qualité",
    href: "/evaluation-qualite",
    keywords: "évaluation qualité social medico-social",
  },
  {
    title: "Rapport",
    href: "/evaluation-qualite/rapport",
    keywords: "rapport ctnerhi séminaire étude recherche",
  },
  {
    title: "Loi 2002-2",
    href: "/evaluation-qualite/loi-2002-2",
    keywords: "loi 2002 droits usagers action sociale",
  },
  {
    title: "Usagers",
    href: "/evaluation-qualite/usagers",
    keywords: "michel chauvière usagers client consommateur citoyenneté",
  },
  {
    title: "Objectivité / Subjectivité",
    href: "/evaluation-qualite/objectivite-subjectivite",
    keywords: "marc maudinet objectivité subjectivité évaluation",
  },
  {
    title: "CTNERHI",
    href: "/evaluation-qualite/ctnerhi",
    keywords: "ctnerhi handicap recherche jean font",
  },
  {
    title: "Évaluation externe",
    href: "/evaluation-qualite/evaluation-externe",
    keywords: "évaluation externe anesm habilitation",
  },

  {
    title: "Handicap & Citoyenneté",
    href: "/handicap-citoyennete",
    keywords: "handicap citoyenneté colloque participation",
  },
  {
    title: "Programme du colloque",
    href: "/handicap-citoyennete/programme",
    keywords: "programme colloque handicap citoyenneté",
  },
  {
    title: "Sens des débats",
    href: "/handicap-citoyennete/sens",
    keywords: "sens débats jean font colloque",
  },
  {
    title: "Problématique",
    href: "/handicap-citoyennete/problematique",
    keywords: "serge ebersold problématique handicap citoyenneté",
  },
  {
    title: "Intervenants",
    href: "/handicap-citoyennete/intervenants",
    keywords: "intervenants colloque chercheurs personnalités",
  },
  {
    title: "Organisation & accessibilité",
    href: "/handicap-citoyennete/organisation",
    keywords: "organisation accessibilité colloque",
  },
  {
    title: "Un colloque précurseur",
    href: "/handicap-citoyennete/innovation",
    keywords: "innovation visioconférence internet participation distance",
  },
  {
    title: "Partenaires",
    href: "/handicap-citoyennete/partenaires",
    keywords: "partenaires institutions colloque",
  },

  {
    title: "Documents & Archives",
    href: "/documents",
    keywords: "documents archives pdf rapports jurisprudence",
  },
  {
    title: "Contact",
    href: "/contact",
    keywords: "contact message email association",
  },
  {
    title: "Mentions légales",
    href: "/mentions-legales",
    keywords: "mentions légales siren siret éditeur",
  },
  {
    title: "Accessibilité",
    href: "/accessibilite",
    keywords: "accessibilité rgaa handicap site",
  },
  {
    title: "Politique de confidentialité",
    href: "/confidentialite",
    keywords: "confidentialité rgpd données personnelles",
  },
];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function SiteSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = normalize(query.trim());

    if (q.length < 2) {
      return [];
    }

    return pages
      .filter((page) => {
        const searchable = normalize(
          `${page.title} ${page.keywords}`
        );

        return searchable.includes(q);
      })
      .slice(0, 10);
  }, [query]);

  return (
    <div className="site-search">
      <input
        type="search"
        value={query}
        placeholder="Rechercher..."
        aria-label="Rechercher sur le site"
        onChange={(event) => setQuery(event.target.value)}
      />

      {query.trim().length >= 2 && (
        <div className="site-search-results">
          {results.length > 0 ? (
            results.map((result) => (
              <a
                key={result.href}
                href={result.href}
                onClick={() => setQuery("")}
              >
                {result.title}
              </a>
            ))
          ) : (
            <div className="site-search-empty">
              Aucun résultat
            </div>
          )}
        </div>
      )}
    </div>
  );
}