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
    image: "img/arquitetura.jpeg",
    category: "arquitetura",
    year: "2023"
  },
  {
    title: "Lua Inferior Cinco e Muzan Kibutsuji",
    image: "img/demonslayer.jpeg",
    category: "anime",
    year: "2024"
  },
  {
    title: "St. Paul's Cathedral - Londres, Inglaterra",
    image: "img/catedral.jpeg",
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
    image: "img/zenitsu.jpeg",
    category: "anime",
    year: "2024"
  },
  {
    title: "Amelie de Xsbel",
    image: "img/amelie.jpeg",
    category: "realismo",
    year: "2025"
  },
  {
    title: "Carpas (koi) japonesas",
    image: "img/carpas.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "O Estranho Mundo de Jack",
    image: "img/timburton.jpeg",
    category: "ilustracao",
    year: "2025"
  },
  {
    title: "Coliseu - Itália",
    image: "img/arquitetura2.jpeg",
    category: "arquitetura",
    year: "2023"
  },
  {
    title: "I  will always choose you - Damon Salvatore",
    image: "img/tvd.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "Pinheiros sob o Céu Estrelado",
    image: "img/pinheiros.jpeg",
    category: "aquarela",
    year: "2024"
  },
  {
    title: "Última luz",
    image: "img/crepusculo.jpeg",
    category: "aquarela",
    year: "2024"
  },
  {
    title: "Cosmos",
    image: "img/cosmos.jpeg",
    category: "aquarela",
    year: "2026"
  },
  {
    title: "Refúgio",
    image: "img/refugio.jpeg",
    category: "aquarela",
    year: "2026"
  },
  {
    title: "Folhagem em Azul",
    image: "img/folhas.jpeg",
    category: "aquarela",
    year: "2024"
  },
  {
    title: "Espelho da Lua",
    image: "img/mar.jpeg",
    category: "aquarela",
    year: "2024"
  },
  {
    title: "Chama Viva",
    image: "img/capa.jpeg",
    category: "anime",
    year: "2023"
  },
  {
    title: "Whatever our souls are made of, his and mine are the same.",
    image: "img/wuthering.jpeg",
    category: "ilustracao",
    year: "2026"
  },
  {
    title: "Catedral de Notre-Dame de Amiens - França",
    image: "img/amiens.jpeg",
    category: "arquitetura",
    year: "2026"
  },
  {
    title: "Catedral de Berlim - Alemanha",
    image: "img/berlim.jpeg",
    category: "arquitetura",
    year: "2024"
  },
  {
    title: "Kimi no na wa Fanart",
    image: "img/yourname.jpeg",
    category: "anime",
    year: "2025"
  },
  {
    title: "Titanic, 14 de abril de 1912",
    image: "img/japanese.jpeg",
    category: "ilustracao",
    year: "2026"
  },
  {
    title: "Goku e Shenlong fanart",
    image: "img/shenlong.jpeg",
    category: "anime",
    year: "2025"
  },
  {
    title: "Goku e Gohan fanart",
    image: "img/gokuegohan.jpeg",
    category: "anime",
    year: "2024"
  },
  {
    title: "Akaza fanart (Demon Slayer)",
    image: "img/akaza.jpeg",
    category: "anime",
    year: "2025"
  },
  {
    title: "Iguro fanart (Demon Slayer)",
    image: "img/iguro.jpeg",
    category: "anime",
    year: "2025"
  },
  {
    title: "Taehyung",
    image: "img/tae.jpeg",
    category: "realismo",
    year: "2024"
  },
  {
    title: "Criança com capuz",
    image: "img/baby.jpeg",
    category: "realismo",
    year: "2022"
  },
  {
    title: "Anne with an E",
    image: "img/anne.jpeg",
    category: "realismo",
    year: "2022"
  },
  {
    title: "Cameron Boyce",
    image: "img/cameronboyce.jpeg",
    category: "realismo",
    year: "2022"
  },
  {
    title: "Jesus",
    image: "img/jesus.jpeg",
    category: "realismo",
    year: "2025"
  },
  {
    title: "'And it had all what art should be, unconscious, ideal and remote'",
    image: "img/esculturas.jpeg",
    category: "realismo",
    year: "2026"
  },
  {
    title: "Serena",
    image: "img/moça.jpeg",
    category: "realismo",
    year: "2024"
  },
  {
    title: "Mulher Maravilha",
    image: "img/mulhermaravilha.jpeg",
    category: "realismo",
    year: "2022"
  },
  {
    title: "Raposa em Aquarela",
    image: "img/raposa.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "Casa abandonada, céu vermelho",
    image: "img/casaabandonada.jpeg",
    category: "arquitetura",
    year: "2025"
  },
  {
    title: "Thanks for the adventure - now go have a new one!",
    image: "img/up.jpeg",
    category: "arquitetura",
    year: "2026"
  },
  {
    title: "Arquitetura de Veneza",
    image: "img/veneza.jpeg",
    category: "arquitetura",
    year: "2024"
  },
  {
    title: "Alquímia das Almas",
    image: "img/fav.jpeg",
    category: "ilustracao",
    year: "2023"
  },
  {
    title: "Farol",
    image: "img/farol.jpeg",
    category: "arquitetura",
    year: "2024"
  },
  {
    title: "Jisoo (BLACKPINK)",
    image: "img/jisoo.jpeg",
    category: "realismo",
    year: "2022"
  },
  {
    title: "Lord I'm 500 miles from my home",
    image: "img/eren.jpeg",
    category: "anime",
    year: "2026"
  },
  {
    title: "Attack on Titan fanart",
    image: "img/attackontitan.jpeg",
    category: "anime",
    year: "2025"
  },
  {
    title: "Red Hot Chilli Cat",
    image: "img/redhotcat.jpeg",
    category: "ilustracao",
    year: "2025"
  },
  {
    title: "Angra",
    image: "img/angra.jpeg",
    category: "All the heroes go down, shed their blood on the land",
    year: "2025"
  },
  {
    title: "Titanic, 14 de abril de 1912",
    image: "img/titanic.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "O menino, a toupeira, a raposa e o cavalo",
    image: "img/meninoetoupeira.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "Mini Goku fanart",
    image: "img/minigoku.jpeg",
    category: "anime",
    year: "2024"
  },
  {
    title: "Tony Stark",
    image: "img/ironman.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "Hinata Naruto fanart",
    image: "img/hinatanaruto.jpeg",
    category: "anime",
    year: "2023"
  },
  {
    title: "Hinata fanart",
    image: "img/hinata.jpeg",
    category: "anime",
    year: "2022"
  },
  {
    title: "Rapunzel e Flynn Rider",
    image: "img/rapunzel.jpeg",
    category: "ilustracao",
    year: "2022"
  },
  {
    title: "Tinker Bell",
    image: "img/tinker.jpeg",
    category: "ilustracao",
    year: "2026"
  },
  {
    title: "A Caminho da Lua",
    image: "img/feifei.jpeg",
    category: "ilustracao",
    year: "2022"
  },
  {
    title: "Gato",
    image: "img/gato.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "O Pássaro de Agosto",
    image: "img/passaro.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "Alma livre",
    image: "img/moçaborboleta.jpeg",
    category: "realismo",
    year: "2024"
  },
  {
    title: "Chaves",
    image: "img/chaves.jpeg",
    category: "realismo",
    year: "2022"
  },
  {
    title: "Jennie (BLACKPINK)",
    image: "img/jennie.jpeg",
    category: "realismo",
    year: "2022"
  },
];

/* EVOLUÇÃO */
const evolucaoDrawings: Drawing[] = [
  { image: "img/2019.jpeg", title: "2019", category: "evolucao" },
  { image: "img/2020.jpeg", title: "2020", category: "evolucao" },
  { image: "img/2021.jpeg", title: "2021", category: "evolucao" },
  { image: "img/2022.jpeg", title: "2022", category: "evolucao" },
  { image: "img/2023.jpeg", title: "2023", category: "evolucao" },
  { image: "img/2024.jpeg", title: "2024", category: "evolucao" },
  { image: "img/2025.jpeg", title: "2025", category: "evolucao" }
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