// const accessKey = "moh9ogmpy_MXM_5qAVVC1KHgjEYToM0APrkVaZLnTsk"; //my api
const accessKey = "SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";


// const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector(".search-result");
const searchBtn = document.querySelector(".btn")

let page = 1;

const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputEl.value}&client_id=${accessKey}`;

async function getImg() {
  fetch(url)
    .then((responce) => {
      if(!responce.ok) throw Error (responce.statusText);
      return responce.json();
    })
    .then((data) => {
      console.log(data);
      loadImages(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

loadImages = (data) => {
  for(let i = 0; i < data.results.length; i++){
    let image = document.createElement("div");
    image.className = "search-result";

    let img = document.createElement("img");
    img.style.backgroundImage= "url("+data.results[i].urls.raw +  "&w=1366&h=768" +")";
    image.appendChild(img);

    console.log( "url("+data.results[i].urls.raw + "&w=1366&h=768" +")");

    // image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    image.addEventListener("dblclick", function(){
      window.open(data.results[i].links.download, '_blank');
    })

    searchResults.appendChild(image);
  }
}

searchBtn.addEventListener("click", () => {
  getImg();
  console.log(url)
  console.log(inputEl.value)
});