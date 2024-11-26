
//Untuk Anime Populer
const popularAnimes = [
    {
      title: "Death Note",
      image: "images/death note poster.jpg",
      link: "https://en.wikipedia.org/wiki/Death_Note",
    },
    {
      title: "Demon Slayer",
      image: "images/demon.jpg",
      link: "https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
    },
    {
      title: "Dragon Ball Z",
      image: "images/dragon-ball-z-anime-wallpaper-preview.jpg",
      link: "https://en.wikipedia.org/wiki/Dragon_Ball_Z",
    },
    {
      title: "My Hero Academia",
      image: "images/mha poster.webp",
      link: "https://en.wikipedia.org/wiki/My_Hero_Academia",
    },
    {
      title: "Naruto",
      image: "images/naruto poster.jpg",
      link: "https://en.wikipedia.org/wiki/Naruto",
    },
  ];
  
  const container = document.querySelector(".popanime-titles-container");
  
  popularAnimes.forEach((anime) => {
    const animeElement = document.createElement("div");
    animeElement.classList.add("title-container");
  
    animeElement.innerHTML = `
      <a href="${anime.link}" target="_blank">
        <img src="${anime.image}" alt="${anime.title}" />
      </a>
      <div>${anime.title}</div>
    `;
  
    container.appendChild(animeElement);
  });
  

// untuk stream
 const slug = new URLSearchParams(window.location.search).get('slug');

 // Cari anime berdasarkan slug
 const anime = listsemuaanime.find(anime => anime.slug === slug);

 if (anime) {
   // Tampilkan detail anime
   document.getElementById('stream-heading').textContent = `Now Streaming: ${anime.title}`;
   document.getElementById('anime-image').src = anime.image;
   document.getElementById('anime-sinopsis').textContent = anime.sinopsis;
   document.getElementById('anime-link').href = anime.link;
 } else {
   // Jika slug tidak ditemukan
   document.querySelector('.stream-container').innerHTML = `<h1>Anime tidak ditemukan</h1>`;
 }
