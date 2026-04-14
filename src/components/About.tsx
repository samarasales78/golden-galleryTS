import { useEffect, useRef } from "react";

function About() {
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = aboutRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    // limpeza (boa prática)
    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={aboutRef} id="sobre" className="about">
      <div className="about-frame">

        <div className="about-text">
          <span className="about-subtitle">SOBRE</span>

          <h2>
            Arte como<br />
            expressão silenciosa
          </h2>

          <p>
            Este espaço é um diário visual. Aqui reúno meus desenhos favoritos,
            entre realismo, anime, arquitetura e aquarelas.
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
          <img src="/img/about.png" alt="Árvore" />
        </div>

      </div>
    </section>
  );
}

export default About;