function About() {
  return (
<section id="sobre" className="about">
  <div className="about-frame">

    <div className="about-text">
      <span className="about-subtitle">SOBRE</span>

      <h2>
        Arte como<br />
        expressão silenciosa
      </h2>

      <p>
        Este espaço é um diário visual. Aqui reúno meus desenhos favoritos, entre realismo, anime, arquitetura e aquarelas.
        Percebam que as cores predominantes nos desenhos (branco, preto e vermelho) ressoam no design do site.
        A forma como entendo o desenho se aproxima do que
        Oscar Wilde expressa em <em>O Retrato de Dorian Gray</em>:
      </p>

      <p>
        “Every portrait that is painted with feeling is a portrait of the artist, not of the sitter.”
        (WILDE, 1891).
      </p>

      <p>
        Trad.: Todo retrato pintado com sentimento é um retrato não do modelo, mas do artista.
      </p>

    </div>

    <div className="about-image">
      <img src="img/about.png" alt="Árvore" />
    </div>
    
  </div>
</section>
);
}

export default About;