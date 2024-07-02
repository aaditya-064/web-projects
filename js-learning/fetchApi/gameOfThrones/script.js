const previousButton = document.querySelector("#prevButton_");
const nextButton = document.querySelector("#nextButton_");
const carouselElement = document.querySelector(".carouselElement_");
const carouselInner = document.querySelector(".carousel-inner");

const imagesGOT = [
  "https://c4.wallpaperflare.com/wallpaper/696/292/11/game-of-thrones-jon-snow-digital-art-fantasy-art-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/952/530/413/tv-show-game-of-thrones-dragon-jon-snow-night-king-game-of-thrones-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/539/250/327/game-of-thrones-daenerys-targaryen-dragon-fire-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/409/399/588/fantasy-art-dark-fantasy-game-of-thrones-the-night-king-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/279/834/461/game-of-thrones-tv-shows-hd-4k-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/135/443/590/game-of-thrones-sigils-house-stark-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/598/92/867/4k-game-of-thrones-artwork-jon-snow-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/568/132/971/game-of-thrones-battle-of-the-bastards-jon-snow-kit-harington-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/44/92/946/dragon-fantasy-art-digital-art-artwork-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/601/175/806/house-targaryen-game-of-thrones-dragon-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/533/111/725/game-of-thrones-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/130/155/832/tv-show-game-of-thrones-night-king-game-of-thrones-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/832/743/692/tv-show-game-of-thrones-arya-stark-maisie-williams-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/797/633/218/tyrion-lannister-game-of-thrones-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/373/952/832/game-of-thrones-kit-harington-jon-snow-4k-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/66/691/581/game-of-thrones-a-song-of-ice-and-fire-house-stark-house-baratheon-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/215/594/373/dragon-daenerys-targaryen-jaime-lannister-game-of-thrones-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/971/510/351/game-of-thrones-ice-dragon-dragon-a-song-of-ice-and-fire-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/110/646/374/game-of-thrones-a-song-of-ice-and-fire-8k-4k-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/639/223/593/tv-show-game-of-thrones-daenerys-targaryen-emilia-clarke-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/262/188/865/new-grand-theft-auto-v-grand-theft-auto-5-game-wallpaper-preview.jpg",
];

// const characterApi = async()=>{
// const req = await fetch('https://thronesapi.com/api/v2/Characters')
// const res = await req.json()
// return res
// }

const quotesAPI = async () => {
  const request = await fetch(
    "https://api.gameofthronesquotes.xyz/v1/random/100"
  );
  const result = await request.json();
  // console.log(await characterApi())
  result.forEach((i, index) => {
    const randomNumbers = Math.ceil(Math.random() * 20);
    // console.log(randomNumbers);
    // console.log(i)
    carouselInner.innerHTML += `
    <div class="carouselElement_ carousel-item ${
      index === 0 ? "active" : ""
    }" data-bs-interval="10000">
            <img id="image_" src=${
              imagesGOT[randomNumbers]
            } alt="..." width="100%" style="height: 100vh;" class="object-fit-cover""/>
            <div class="carouselElement_ carousel-caption d-none d-md-block">
            <div class="bg-secondary">
              <h5 class="heading_ text-light display-4 fw-bold">${
                result[index].character.name
              }</h5>
              <p class="quoteDesc_ text-light fs-3 fst-italic">${
                result[index].sentence
              }</p>
              </div>
            </div>
          </div>
          `;
  });
};

quotesAPI();
