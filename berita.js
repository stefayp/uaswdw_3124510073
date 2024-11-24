document.addEventListener("DOMContentLoaded", function () {
    // Sample data for the anime news
    const animeNewsList = [
      {
        title: "New Demon Slayer Season Announced",
        rating: "9.5/10",
        sinopsis: "Demon Slayer's next season has been officially announced! The new season promises to bring more intense action and deeper character developments.",
        image: "images/news/demon-slayer.jpg",
        link: "https://example.com/demon-slayer-news",
      },
      {
        title: "One Piece 1000th Episode Celebration",
        rating: "10/10",
        sinopsis: "The One Piece series celebrates its 1000th episode with a special episode featuring the Straw Hat Pirates in an epic battle.",
        image: "images/news/one-piece.jpg",
        link: "https://example.com/one-piece-1000-episode",
      },
      {
        title: "Jujutsu Kaisen Season 2 Coming Soon",
        rating: "8.9/10",
        sinopsis: "Season 2 of Jujutsu Kaisen will bring more powerful sorcerers and thrilling battles. Fans are eagerly awaiting its release!",
        image: "images/news/jjk-season2.jpg",
        link: "https://example.com/jjk-season-2-news",
      }
    ];
  
    const animeListContainer = document.querySelector(".anime-list-container");

    // Remove the original placeholder container to avoid duplication
    const originalContainer = document.querySelector(".title-container");
    if (originalContainer) {
      originalContainer.remove();
    }

    // Loop through the anime news list and add them dynamically
    animeNewsList.forEach((anime) => {
      // Clone the title container
      const animeElement = originalContainer.cloneNode(true);
  
      // Set the content for each anime item
      animeElement.querySelector(".allanime-title").textContent = anime.title;
      animeElement.querySelector(".allanime-rating").textContent = "Rating: " + anime.rating;
      animeElement.querySelector(".allanime-sinopsis").textContent = anime.sinopsis;
      animeElement.querySelector(".anime-image").src = anime.image;
      animeElement.querySelector(".anime-link").href = anime.link;
  
      // Add the new anime news element to the container
      animeListContainer.appendChild(animeElement);
    });
});
