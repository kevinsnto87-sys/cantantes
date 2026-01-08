const artistas = [
  {
    nombre: "Bad Bunny",
    pais: "Puerto Rico",
    ranking: 1,
    bio: "El artista urbano más escuchado del mundo.",
    imagen: "https://i.scdn.co/image/ab6761610000e5ebc8cbdc3e4b0c6c2d6c8f5f4a",
    spotifyEmbed: "https://open.spotify.com/embed/artist/4q3ewBCX7sLwd24euuV69X"
  },
  {
    nombre: "J Balvin",
    pais: "Colombia",
    ranking: 2,
    bio: "Pionero del reguetón colombiano.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb2b8d9c6f4a9b6e6f8c7a3e6f",
    spotifyEmbed: "https://open.spotify.com/embed/artist/1vyhD5VmyZ7KMfW5gqLgo5"
  },
  {
    nombre: "Karol G",
    pais: "Colombia",
    ranking: 3,
    bio: "Figura clave del movimiento urbano latino.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb7a5c3c4b2f8d9e3b4c5a6f7e",
    spotifyEmbed: "https://open.spotify.com/embed/artist/790FomKkXshlbRYZFtlgla"
  },
  {
    nombre: "Daddy Yankee",
    pais: "Puerto Rico",
    ranking: 4,
    bio: "El rey del reguetón.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb1e5c2d4a9f8b7c6d3e2a1f4",
    spotifyEmbed: "https://open.spotify.com/embed/artist/4VMYDCV2IEDYJArk749S6m"
  },
  {
    nombre: "Rauw Alejandro",
    pais: "Puerto Rico",
    ranking: 5,
    bio: "Innovador del sonido urbano moderno.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb0d8f9c7b6a5e4d3c2b1a9f8",
    spotifyEmbed: "https://open.spotify.com/embed/artist/1mcTU81TzQhprhouKaTkpq"
  },
  {
    nombre: "Feid",
    pais: "Colombia",
    ranking: 6,
    bio: "Reguetón moderno con estilo propio.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb8f7e6d5c4b3a29182736455",
    spotifyEmbed: "https://open.spotify.com/embed/artist/2LRoIwlKmHjgvigdNGBHNo"
  },
  {
    nombre: "Anuel AA",
    pais: "Puerto Rico",
    ranking: 7,
    bio: "Trap latino crudo y real.",
    imagen: "https://i.scdn.co/image/ab6761610000e5ebc1a2b3d4e5f607182736455",
    spotifyEmbed: "https://open.spotify.com/embed/artist/2R21vXR83lH98kGeO99Y66"
  },
  {
    nombre: "Myke Towers",
    pais: "Puerto Rico",
    ranking: 8,
    bio: "Flow melódico y versátil.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb9182736455aabbccddeeff",
    spotifyEmbed: "https://open.spotify.com/embed/artist/7iK8PXO48WeuP03g8YR51W"
  },
  {
    nombre: "Ozuna",
    pais: "Puerto Rico",
    ranking: 9,
    bio: "Uno de los más consistentes del género.",
    imagen: "https://i.scdn.co/image/ab6761610000e5ebffeeddccbbaa998877665544",
    spotifyEmbed: "https://open.spotify.com/embed/artist/1i8SpTcr7yvPOmcqrbnVXY"
  },
  {
    nombre: "Quevedo",
    pais: "España",
    ranking: 10,
    bio: "Fenómeno urbano europeo.",
    imagen: "https://i.scdn.co/image/ab6761610000e5ebaa99887766554433221100ff",
    spotifyEmbed: "https://open.spotify.com/embed/artist/52iwsT98xCoGgiGntTiR7K"
  },
  {
    nombre: "Maluma",
    pais: "Colombia",
    ranking: 11,
    bio: "Estrella global del pop urbano.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb1234567890abcdefabcdef",
    spotifyEmbed: "https://open.spotify.com/embed/artist/1r4hJ1h58CWwUQe3MxPuau"
  },
  {
    nombre: "Nicky Jam",
    pais: "Estados Unidos",
    ranking: 12,
    bio: "Veterano del reguetón.",
    imagen: "https://i.scdn.co/image/ab6761610000e5ebabcdef1234567890abcdef",
    spotifyEmbed: "https://open.spotify.com/embed/artist/1SupJlEpv7RS2tPNRaHViT"
  },
  {
    nombre: "Arcángel",
    pais: "Puerto Rico",
    ranking: 13,
    bio: "Lírica callejera y experiencia.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb99887766554433221100aa",
    spotifyEmbed: "https://open.spotify.com/embed/artist/4SsVbpTthjScTS7U2hmr1X"
  },
  {
    nombre: "Peso Pluma",
    pais: "México",
    ranking: 14,
    bio: "Fusión de urbano y regional.",
    imagen: "https://i.scdn.co/image/ab6761610000e5eb66554433221100aabbccdd",
    spotifyEmbed: "https://open.spotify.com/embed/artist/12GqGscKJx3aE4t07u7eVZ"
  },
  {
    nombre: "Wisin",
    pais: "Puerto Rico",
    ranking: 15,
    bio: "Leyenda del dúo Wisin & Yandel.",
    imagen: "https://i.scdn.co/image/ab6761610000e5ebabcdefabcdef1234567890",
    spotifyEmbed: "https://open.spotify.com/embed/artist/3tJ6l2K4J9L5PpU2IbnmZx"
  }
];

// ===============================
// NO TOCAR NADA DE AQUÍ PARA ABAJO
// ===============================

const contenedor = document.getElementById("contenedor-artistas");
const buscador = document.getElementById("buscador");

function render(lista) {
  contenedor.innerHTML = "";
  lista.forEach((a, i) => {
    contenedor.innerHTML += `
      <article class="card" style="animation-delay:${i * 0.05}s">
        <img src="${a.imagen}" alt="${a.nombre}">
        <div class="card-content">
          <span class="ranking">#${a.ranking}</span>
          <h2>${a.nombre}</h2>
          <p><strong>${a.pais}</strong></p>
          <p>${a.bio}</p>
          <iframe 
            src="${a.spotifyEmbed}" 
            width="100%" 
            height="80" 
            frameborder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
          </iframe>
        </div>
      </article>
    `;
  });
}

render(artistas);

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  render(
    artistas.filter(a =>
      a.nombre.toLowerCase().includes(texto) ||
      a.pais.toLowerCase().includes(texto)
    )
  );
});