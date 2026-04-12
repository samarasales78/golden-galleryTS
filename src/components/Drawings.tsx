import { useState } from "react";

/* TIPAGEM */
type Drawing = {
  title?: string;
  image: string;
  category?: string;
  year?: string;
};

const drawings: Drawing[] = [
  {
    title: "Basílica de Santa Maria della Salute - Veneza, Itália",
    image: "/img/arquitetura.jpeg",
    category: "arquitetura",
    year: "2024"
  },
  {
    title: "Lua Inferior Cinco e Muzan Kibutsuji",
    image: "/img/demonslayer.jpeg",
    category: "anime",
    year: "2024"
  },
  {
    title: "St. Paul's Cathedral - Londres, Inglaterra",
    image: "/img/catedral.jpeg",
    category: "arquitetura",
    year: "2026"
  },
  {
    title: "El Pilar, Zaragoza - Espanha",
    image: "img/arquiteturaazul.jpeg",
    category: "arquitetura",
    year: "2024"
  },
  {
    title: "Zenitsu Fanart",
    image: "/img/zenitsu.jpeg",
    category: "anime",
    year: "2024"
  },
  {
    title: "Amelie de Xsbel",
    image: "/img/amelie.jpeg",
    category: "realismo",
    year: "2025"
  }
];

/* EVOLUÇÃO */
const evolucaoDrawings: Drawing[] = [
  { image: "/img/2019.jpeg", title: "2019" },
  { image: "/img/2020.jpeg", title: "2020" },
  { image: "/img/2021.jpeg", title: "2021" },
  { image: "/img/2022.jpeg", title: "2022" },
  { image: "/img/2023.jpeg", title: "2023" },
  { image: "/img/2024.jpeg", title: "2024" },
  { image: "/img/2025.jpeg", title: "2025" }
];

function Drawings() {
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [selectedImage, setSelectedImage] = useState<Drawing | null>(null);

  /* FILTRO */
  const filteredDrawings =
    category === "evolucao"
      ? evolucaoDrawings
      : drawings.filter((item) => {
          return (
            (category === "all" || item.category === category) &&
            (year === "all" || item.year === year)
          );
        });

  return (
    <>
      {/* TÍTULO */}
      <section id="desenhos" className="explore-categories">
        <span className="explore-top">GALLERY</span>
        <h2 className="explore-title">Explore por categorias</h2>
      </section>

      {/* FILTROS */}
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Todos os estilos</option>
          <option value="anime">Anime</option>
          <option value="arquitetura">Arquitetura</option>
          <option value="aquarela">Aquarela</option>
          <option value="evolucao">Evolução</option>
          <option value="ilustracao">Ilustração</option>
          <option value="realismo">Realismo</option>
        </select>

        <select onChange={(e) => setYear(e.target.value)}>
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
        {filteredDrawings.map((item, index) => (
          <div className="drawing-card" key={index}>
            <div className="drawing-image-wrapper">
              <div
                className="drawing-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <button
                className="expand-btn"
                onClick={() => setSelectedImage(item)}
              >
                ⤢
              </button>
            </div>

            <span className="drawing-caption">{item.title}</span>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="image-modal active"
          onClick={() => setSelectedImage(null)}
        >
          <span className="close-modal">&times;</span>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Drawings;