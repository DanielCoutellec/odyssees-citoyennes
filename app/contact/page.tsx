export default function ContactPage() {
  return (
    <main className="page-section">
      <div className="container">

        <h1 className="page-title">
          Contact
        </h1>

        <div className="article">

          <h2>
            Contacter Odyssées Citoyennes
          </h2>

          <p>
            Vous souhaitez obtenir une information, nous signaler un
            problème concernant un document ou échanger avec
            Odyssées Citoyennes ?
          </p>

          <p>
            Vous pouvez nous adresser votre demande à l&apos;aide du
            formulaire ci-dessous.
          </p>


          {/* FORMULAIRE */}
          <form
            className="contact-form"
            action="mailto:"
            method="post"
            encType="text/plain"
          >

            <label>
              Nom
              <input
                type="text"
                name="nom"
                required
                autoComplete="name"
              />
            </label>


            <label>
              Adresse e-mail
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
              />
            </label>


            <label>
              Sujet
              <input
                type="text"
                name="sujet"
                required
              />
            </label>


            <label>
              Message
              <textarea
                name="message"
                rows={8}
                required
              />
            </label>


            <button
              type="submit"
              className="btn btn-light"
              style={{
                border: "none",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              Envoyer le message
            </button>


            {/* INFORMATION RGPD */}
            <p
              style={{
                marginTop: "5px",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                color: "#666",
              }}
            >
              Les informations transmises via ce formulaire sont utilisées
              uniquement pour répondre à votre demande.{" "}

              <a
                href="/confidentialite"
                className="text-link"
              >
                En savoir plus sur la protection de vos données.
              </a>
            </p>

          </form>


          {/* COORDONNÉES */}
          <div
            style={{
              marginTop: "50px",
              paddingTop: "30px",
              borderTop: "1px solid #ead7aa",
            }}
          >
            <h2>
              Odyssées Citoyennes
            </h2>

            <p>
              L&apos;Hermitage<br />
              21 chemin de la Bigüe<br />
              60300 Senlis<br />
              France
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}