import React from "react";

export default function Testimonials() {
  return (
 <section className="dark-section py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl font-extrabold text-center mb-2">
            Preuve &amp; Action
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Créez votre compte Lorem dolor diam sed do adipiscing...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="tcard">
              <div className="badge-gold">Fond Placé</div>
              <div className="quote">"</div>
              <p className="ttext">
                "Un audit indispensable avant de lancer !"
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="avatar">JB</div>
                <div>
                  <div className="tname">Jean Bertil</div>
                  <div className="trole">Ingénieur de l'entreprise</div>
                </div>
              </div>
              <div className="stars mt-2">★★★★★</div>
            </div>
            <div className="tcard">
              <div className="badge-gold">Fond Placé</div>
              <div className="quote">"</div>
              <p className="ttext">
                "Grâce au test, nous avons validé notre idée dès la phase 1,
                avant qu'il ne soit trop tard."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="avatar">CB</div>
                <div>
                  <div className="tname">Elarif Benlin</div>
                  <div className="trole">Analyste Data</div>
                </div>
              </div>
              <div className="stars mt-2">★★★★★</div>
            </div>
            <div className="tcard">
              <div className="badge-silver">Fond Réalisé</div>
              <div className="quote">"</div>
              <p className="ttext">
                "Grâce au test, nous avons validé notre marché avant qu'il ne
                soit trop tard."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="avatar">FG</div>
                <div>
                  <div className="tname">France Galango</div>
                  <div className="trole">Directrice Stratégie</div>
                </div>
              </div>
              <div className="stars mt-2">★★★★★</div>
            </div>
            <div className="tcard">
              <div className="badge-silver">Fond Réalisé</div>
              <div className="quote">"</div>
              <p className="ttext">
                "Grâce au test, nous aurons évité ce fiasco. On a su pivoter
                avant qu'il ne soit trop tard."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="avatar">VC</div>
                <div>
                  <div className="tname">Kaspar Crous</div>
                  <div className="trole">Fondateur</div>
                </div>
              </div>
              <div className="stars mt-2">★★★★★</div>
            </div>
            <div className="tcard">
              <div className="badge-gold">Fond Placé</div>
              <div className="quote">"</div>
              <p className="ttext">
                "Grâce au test, nous aurons validé notre MVP aujourd'hui et nous
                avons évité le pire."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="avatar">MH</div>
                <div>
                  <div className="tname">Martine Hudson</div>
                  <div className="trole">CEO &amp; Co-fondatrice</div>
                </div>
              </div>
              <div className="stars mt-2">★★★★★</div>
            </div>
            <div className="tcard">
              <div className="badge-silver">Fond Réalisé</div>
              <div className="quote">"</div>
              <p className="ttext">
                "Whan au test, nous avons validé notre pitch auprès des
                investisseurs dès la phase 3."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="avatar">PG</div>
                <div>
                  <div className="tname">Pierre Garneau</div>
                  <div className="trole">Business Developer</div>
                </div>
              </div>
              <div className="stars mt-2">★★★★★</div>
            </div>
          </div>

          <div className="orange-banner p-8 text-center mb-14">
            <h3 className="text-white text-2xl font-extrabold leading-tight">
              Sécurisez votre trajectoire.
              <br />
              Testez votre solution maintenant.
            </h3>
          </div>
        </div>
      </section>
  );
}
