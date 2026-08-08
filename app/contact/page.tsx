export default function ContactPage() {
  return (
    <main className="page-section">
      <div className="container">
        <h1 className="page-title">Contact</h1>

        <div className="article">
          <h2>Odyssées Citoyennes</h2>

          <p>
            Pour toute question relative aux travaux de l'association,
            aux documents historiques, à la citoyenneté, à l'évaluation
            de la qualité ou à la lutte contre la maltraitance, vous pouvez
            nous contacter aux coordonnées ci-dessous.
          </p>

          <div className="info-box">
            <p>
              <strong>Adresse</strong>
              <br />
              21 chemin de la Bigüe
              <br />
              L'Ermitage
              <br />
              60300 Senlis
            </p>

            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:contact@odyssees-citoyennes.org">
                contact@odyssees-citoyennes.org
              </a>
            </p>
          </div>

          <h2>Nous écrire</h2>

          <form
            action="mailto:contact@odyssees-citoyennes.org"
            method="post"
            encType="text/plain"
            className="contact-form"
          >
            <label>
              Nom
              <input type="text" name="Nom" required />
            </label>

            <label>
              Email
              <input type="email" name="Email" required />
            </label>

            <label>
              Sujet
              <input type="text" name="Sujet" />
            </label>

            <label>
              Message
              <textarea name="Message" rows={7} required />
            </label>

            <button type="submit" className="btn btn-light">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}