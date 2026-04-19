function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">

        <div className="hero-content">
          <span className="hero-top">VISUAL DIARY</span>

          <h1 className="hero-title">The Art of Life</h1>

          <p className="hero-subtitle">Sketches</p>
        </div>

        <img
          src={import.meta.env.BASE_URL + "img/desenhoprincipal.jpeg"}
          alt="Desenho principal"
        />

      </div>
    </section>
  );
}

export default Hero;