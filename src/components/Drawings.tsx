function Drawings() {
  return (
    <>
      {/* TÍTULO */}
      <section id="desenhos" className="explore-categories">
        <span className="explore-top">GALLERY</span>
        <h2 className="explore-title">Explore por categorias</h2>
      </section>

      {/* FILTROS */}
      <div className="filters">
        <select>
          <option value="all">Todos os estilos</option>
          <option value="anime">Anime</option>
          <option value="arquitetura">Arquitetura</option>
          <option value="aquarela">Aquarela</option>
          <option value="evolucao">Evolução (2019-2025)</option>
          <option value="ilustracao">Ilustração</option>
          <option value="realismo">Realismo</option>
        </select>

        <select>
          <option value="all">Todos os anos</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      {/* GALERIA */}
      <div className="gallery-grid">
        {/* aqui depois entra os desenhos */}
      </div>

      {/* MODAL */}
      <div className="image-modal">
        <span className="close-modal">&times;</span>
        <img alt="" />
      </div>
    </>
  );
}

export default Drawings;