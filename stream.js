// untuk stream
const listsemuaanime = [
    {
      title: "Death Note",
      image: "../images/death note poster.jpg",
      link: "../html/nonton.html?slug=death-note",
      rating: "9",
      sinopsis: "Seorang siswa SMA menemukan buku misterius yang memberinya kekuatan untuk membunuh siapa saja yang namanya ditulis di dalamnya. Dengan kemampuan ini, ia berusaha menciptakan dunia baru yang lebih baik, tetapi menghadapi konsekuensi yang tak terduga.",
      slug: "death-note",
      linkvideo: "https://www.blogger.com/video.g?token=AD6v5dyqjuI313SD6wLdJ1LeW_iAjZgmBAhqWuRS5PTpSN3sKYdzyqSWVFFfepi5vqABEUlOp5rt1Vdc5fQkqn_6BR23HVTovKDy7olWdt1nPqbEZ3erRGxNtr0kY-iwRv2ddVIC4Pqg",
    },
    {
      title: "Demon Slayer",
      image: "../images/demon.jpg",
      link: "../html/nonton.html?slug=demon-slayer",
      rating: "8.7",
      sinopsis: "Setelah keluarganya dibantai oleh demon, Tanjiro Kamado berusaha melindungi adiknya yang berubah menjadi demon dan mencari cara untuk mengembalikannya ke bentuk manusia.",
      slug: "demon-slayer",
      linkvideo: "https://www.blogger.com/video.g?token=AD6v5dx6QsVeieLDM3snM96NFXd2MOWJjkEmMU-2xOQ4APFnfI2x3-OH8i596gvprbZ9NQo4Orl33Rv1yWUk4LqrhdfkLbLgtz8lSA3wKkKxb-q6PM2HMzYviO1EGFr3GN29ScBQlnE ",
    },
    {
      title: "Dragon Ball Z",
      image: "../images/dragon-ball-z-anime-wallpaper-preview.jpg",
      link: "../html/nonton.html?slug=dragon-ball-z",
      rating: "8.5",
      sinopsis: "Goku dan teman-temannya berjuang untuk melindungi Bumi dari berbagai ancaman musuh kuat. Mereka juga mencari Bola Naga, yang dapat mengabulkan keinginan apapun, sambil menghadapi pertarungan besar yang menentukan nasib dunia.",
      slug: "dragon-ball-z",
      linkvideo:"https://www.blogger.com/video.g?token=AD6v5dxWvWwd9DHD1dzMT2Qliy109gn267QASrpa_ZgV4KkAowIuPCjhkOJlF5qesM1Q7-_DLRqDhgbLzSUAA0RBE_dygwT9nu-klT9wglIl-QvvATlQzSnkhJiy6jTTO5zo-08wB8M",
    },
    {
      title: "My Hero Academia",
      image: "../images/mha poster.webp",
      link: "../html/nonton.html?slug=my-hero-academia",
      rating: "8.4",
      sinopsis: "Di dunia di mana hampir setiap orang memiliki kekuatan super, seorang pemuda bernama Izuku Midoriya yang tidak memiliki kekuatan berjuang untuk menjadi pahlawan terbesar dengan cara masuk ke Akademi Pahlawan.",
      slug: "my-hero-academia",
      linkvideo:"https://www.blogger.com/video.g?token=AD6v5dwxWS07upn9yaNDBRNSEl83nfg4UPfyUswK5ig11uhdcAoKfVouj8tl8E3XBuPR2BcUyhugeu76cMG388MGHEKnjkijR2N1BgJ4ih31bo09QIw1gkhqIUxvwTS-gv-M6tFSN_E",
    },
    {
      title: "Naruto",
      image: "../images/naruto poster.jpg",
      link: "../html/nonton.html?slug=naruto",
      rating: "8.7",
      sinopsis: "Naruto Uzumaki adalah seorang ninja muda yang bertekad untuk menjadi Hokage, pemimpin desa, meskipun ia memiliki kekuatan rubah berekor sembilan di dalam dirinya yang mengasingkannya dari orang-orang di sekitarnya.",
      slug: "naruto",
      linkvideo:"https://www.blogger.com/video.g?token=AD6v5dwPUFp71YJaug0IdYK2s1Ak52EnOb9pr1ntLTiFruZiM9g284pl1vfEAG3Jl064xuEZRiu_kGrfsG7L878Xikycbguhk7h2Nvoo-t7slW6KTlC1tHrFqgFnk5jHcVAKfYVNvAs",
    },
    {
      title: "Swords Art Online: Gun Gale Online",
      image: "../images/ggo.jpeg",
      link: "../html/nonton.html?slug=swords-art-online-ggo",
      rating: "8.8",
      sinopsis: "Manusia bertahan hidup dalam tembok besar yang melindungi mereka dari makhluk raksasa yang dikenal sebagai Titan. Eren Jaeger, yang kehilangan keluarganya akibat serangan Titan, bertekad untuk membalas dendam dan membebaskan dunia dari ancaman ini.",
      slug: "swords-art-online-ggo",
      linkvideo:"https://www.blogger.com/video.g?token=AD6v5dyGIIq1fPtqR1lftERbOJU_yixtNi0oofK8b_HqNwOoIshUWQHi2LhVUiH0BPoroJXk7unaDA4iu3lgWl81H3wkwSgz003MVLxBlEQ8IynDo_x69yst0l_zUVDATTQtNsUYb0Aj",
    },
    {
      title: "One Piece",
      image: "../images/onepiece.jpg",
      link: "../html/nonton.html?slug=one-piece",
      rating: "8.9",
      sinopsis: "Monkey D. Luffy dan kru bajak lautnya mencari harta karun legendaris, One Piece, di lautan yang penuh petualangan, persahabatan, dan musuh-musuh kuat. Luffy bercita-cita menjadi Raja Bajak Laut.",
      slug: "one-piece",
      linkvideo:"https://rr1---sn-npoe7nek.googlevideo.com/videoplayback?expire=1732468257&ei=oe1CZ6D7Jqya2OMPoL3hoQw&ip=2a04:3543:1000:2310:30da:13ff:fead:6be6&id=3a05a9f1423f0dfe&itag=18&source=blogger&xpc=Egho7Zf3LnoBAQ%3D%3D&met=1732439457,&mh=EM&mm=31&mn=sn-npoe7nek&ms=au&mv=m&mvi=1&pl=32&rms=au,au&susc=bl&eaua=HfpOZAbedhs&mime=video/mp4&vprv=1&rqh=1&dur=1437.315&lmt=1678581243561640&mt=1732439135&txp=1311224&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRgIhAKN_SdtoFXWg_Gx0mU45G1Cw2kj0go1gIZzc-kQ7U13QAiEAyxTPGKLYUnS5WLdtXdUPo9flDqbfT8JFSXzPznynK7Y%3D&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRgIhAP4mlWDwkIasEz000VgzYfL2Knk9jkhtugTkrsbVmWcfAiEAhxxr5VomdNjQc_Iw6d9f7aG50yB8mttmmfyKocZv9OY%3D",
    },
    {
      title: "Bleach",
      image: "../images/bleach.jpg",
      link: "../html/nonton.html?slug=bleach",
      rating: "8.1",
      sinopsis: "Ichigo Kurosaki, seorang remaja dengan kemampuan melihat roh, mendapatkan kekuatan sebagai Soul Reaper, seorang pejuang yang bertugas melindungi dunia manusia dari roh jahat yang dikenal sebagai Hollow.",
      slug: "bleach",
      linkvideo:"https://www.blogger.com/video.g?token=AD6v5dwxWS07upn9yaNDBRNSEl83nfg4UPfyUswK5ig11uhdcAoKfVouj8tl8E3XBuPR2BcUyhugeu76cMG388MGHEKnjkijR2N1BgJ4ih31bo09QIw1gkhqIUxvwTS-gv-M6tFSN_E",
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      image: "../images/alc.jpg",
      link: "../html/nonton.html?slug=fullmetal-alchemist-brotherhood",
      rating: "10",
      sinopsis: "Dua saudara, Edward dan Alphonse Elric, melakukan perjalanan untuk mencari Batu Filsuf yang legendaris guna mengembalikan tubuh mereka yang hilang setelah eksperimen alkimia yang gagal.",
      slug: "fullmetal-alchemist-brotherhood",
      linkvideo:"https://rr1---sn-npoe7nek.googlevideo.com/videoplayback?expire=1732468257&ei=oe1CZ6D7Jqya2OMPoL3hoQw&ip=2a04:3543:1000:2310:30da:13ff:fead:6be6&id=3a05a9f1423f0dfe&itag=18&source=blogger&xpc=Egho7Zf3LnoBAQ%3D%3D&met=1732439457,&mh=EM&mm=31&mn=sn-npoe7nek&ms=au&mv=m&mvi=1&pl=32&rms=au,au&susc=bl&eaua=HfpOZAbedhs&mime=video/mp4&vprv=1&rqh=1&dur=1437.315&lmt=1678581243561640&mt=1732439135&txp=1311224&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRgIhAKN_SdtoFXWg_Gx0mU45G1Cw2kj0go1gIZzc-kQ7U13QAiEAyxTPGKLYUnS5WLdtXdUPo9flDqbfT8JFSXzPznynK7Y%3D&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRgIhAP4mlWDwkIasEz000VgzYfL2Knk9jkhtugTkrsbVmWcfAiEAhxxr5VomdNjQc_Iw6d9f7aG50yB8mttmmfyKocZv9OY%3D",
    },
    {
      title: "Tokyo Ghoul",
      image: "../images/tg.jpg",
      link: "../html/nonton.html?slug=tokyo-ghoul",
      rating: "8.2",
      sinopsis: "Ken Kaneki, seorang pemuda yang berubah menjadi hibrida manusia-ghoul setelah kecelakaan, berjuang untuk bertahan hidup di dunia yang dipenuhi dengan ancaman ghoul yang mengancam manusia.",
      slug: "tokyo-ghoul",
      linkvideo:"https://desudrive.com/dstream/playdesu/index.php?id=cHdLMWxkV3dGaTI2N0l4UnZNMWNXYVNZcTdteHE3akl2L1YrcTgxZWh5TT0=",
    },
    {
      title: "One Punch Man",
      image: "../images/op.jpg",
      link: "../html/nonton.html?slug=one-punch-man",
      rating: "8.7",
      sinopsis: "Saitama, seorang pria yang bisa mengalahkan musuh hanya dengan satu pukulan, merasa bosan karena tidak ada tantangan. Ia bergabung dengan Asosiasi Pahlawan untuk mencari lawan yang sebanding.",
      slug: "one-punch-man",
      linkvideo:"https://www.blogger.com/video.g?token=AD6v5dwxWS07upn9yaNDBRNSEl83nfg4UPfyUswK5ig11uhdcAoKfVouj8tl8E3XBuPR2BcUyhugeu76cMG388MGHEKnjkijR2N1BgJ4ih31bo09QIw1gkhqIUxvwTS-gv-M6tFSN_E",
    },
    {
      title: "Code Geass",
      image: "../images/cg.jpg",
      link: "../html/nonton.html?slug=code-geass",
      rating: "8.8",
      sinopsis: "Lelouch vi Britannia, seorang pemuda dengan kekuatan supernatural, berusaha menggulingkan kerajaan Britannia yang kejam untuk membalas dendam atas kejadian yang terjadi pada keluarganya.",
      slug: "code-geass",
      linkvideo:"https://desudrive.com/dstream/moeplay/index.php?id=2019/06/cogeassr2-1",
    },
    {
      title: "Re:Zero − Starting Life in Another World",
      image: "../images/rezero.jpg",
      link: "../html/nonton.html?slug=rezero-starting-life-in-another-world",
      rating: "8.5",
      sinopsis: "Subaru Natsuki tiba-tiba terlempar ke dunia lain dan menyadari bahwa setiap kali ia mati, ia akan terbangun di tempat yang sama dengan kesempatan baru untuk mengubah takdirnya.",
      slug: "rezero-starting-life-in-another-world",
      linkvideo:"https://desudrive.com/dstream/odesu/?id=UlJRYmJpUlNGc3oxUElPS0FBSGJzNXI2VDhHN2hJUmx3T24vVWx5RHFVTT0=",
    },
    {
      title: "Black Clover",
      image: "../images/black_clover.webp",
      link: "../html/nonton.html?slug=black-clover",
      rating: "8.3",
      sinopsis: "Asta, seorang pemuda yang lahir tanpa sihir, bertekad untuk menjadi Raja Penyihir terkuat di dunia. Bersama teman-temannya, ia berjuang melawan musuh dan menjelajahi dunia magis.",
      slug: "black-clover",
      linkvideo:"https://desudrive.com/dstream/otakuplay/index.php?id=dS9IRjN6ajhxaGhOMmFUNGsvcVZaNTAyRmhnek54WXVuRUVvTGZxc0FxUT0=",
    },
    {
      title: "Steins;Gate",
      image: "../images/steins_gate.jpg",
      link: "../html/nonton.html?slug=steins-gate",
      rating: "8.8",
      sinopsis: "Rintarou Okabe, seorang ilmuwan eksentrik, tanpa sengaja menemukan mesin waktu dan terlibat dalam peristiwa berbahaya yang mengancam masa depan. Ia harus mengatasi pilihan-pilihan sulit untuk menyelamatkan dunia.",
      slug: "steins-gate",
      linkvideo:"https://desudrive.com/dstream/odesu1/index.php?id=RWlOcW9UZjJZRlYvL0VONUcwd2FPbVFGbG1DcnhuQ2FyRzd0TnJTalJYND0=",
    },
  ];
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const allanimecontainer = document.querySelector(".anime-list-container");
  
    if (allanimecontainer) {
      // Select the first title-container (template)
      const titleTemplate = document.querySelector(".title-container");
  
      if (titleTemplate) {
        // Remove the first template to avoid cloning an empty one
        titleTemplate.remove();
      }
  
      // Now, loop through the anime list and clone the template
      listsemuaanime.forEach((anime) => {
        // Clone the template
        const animeElement = titleTemplate.cloneNode(true);
  
        // Set values for the elements
        animeElement.querySelector(".allanime-title").textContent = anime.title;
        animeElement.querySelector(".allanime-rating").textContent = "Rating: " + anime.rating;
        animeElement.querySelector(".allanime-sinopsis").textContent = anime.sinopsis;
        animeElement.querySelector(".anime-image").src = anime.image;
        animeElement.querySelector("a").href = anime.link;
  
        // Add the new anime element to the container
        allanimecontainer.appendChild(animeElement);
      });
    } else {
      console.error("Anime container not found");
    }
  });
  
  
// Ambil slug langsung dari URL (dengan cara yang lebih aman)
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug'); // Mengambil nilai 'slug' dari query string

// Cari anime berdasarkan slug
const anime = listsemuaanime.find(anime => anime.slug === slug);
console.log("Slug yang diambil dari URL:", slug);

if (anime) {
  // Tampilkan detail anime
  document.getElementById('stream-heading').textContent = `Sedang Streaming: ${anime.title}`;
  document.getElementById('anime-sinopsis').textContent = anime.sinopsis;
  document.getElementById('anime-link').href = anime.link; // Pastikan 'link' tersedia dalam data

  // Debug: Check the video URL
  console.log("Video URL (linkvideo):", anime.linkvideo);

  if (anime.linkvideo && anime.linkvideo.endsWith('.mp4')) {
    // Use <video> tag for direct video file (e.g., mp4)
    const videoElement = document.getElementById('anime-video');
    const videoSource = document.getElementById('anime-video-source');
    videoSource.src = anime.linkvideo;
    videoElement.load();  // Reload the video element to apply the new source

    // Enable fullscreen on video
    videoElement.setAttribute('allowfullscreen', 'true');  // Make sure allowfullscreen is present for video
} else {
    // Use <iframe> for platforms like YouTube, DoodStream, etc.
    const iframe = document.createElement('iframe');
    
    // Assuming any non-mp4 link is an embed URL (like YouTube, DoodStream, etc.)
    iframe.src = anime.linkvideo;
    
    // Set iframe properties for fullscreen
    iframe.style.width = '100%';
    iframe.style.height = '500px';  // Optional: You can adjust the height as needed
    iframe.frameborder = '0';
    iframe.allowfullscreen = true;  // Allow fullscreen for iframe

    // Replace the video container with the iframe
    document.querySelector('.video-container').innerHTML = '';
    document.querySelector('.video-container').appendChild(iframe);
}


} else {
  // Jika slug tidak ditemukan
  document.querySelector('.stream-container').innerHTML = `<h1>Anime tidak ditemukan</h1>`;
}

