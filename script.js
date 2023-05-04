// Declare your genre arrays here
let animated = ["https://www.peacocktv.com/sites/peacock/files/styles/amp_featured_image/public/2023/03/pib_crop_1920x1080.jpg?h=d1cb525dttps://www.peacocktv.com/sites/peacock/files/styles/amp_featured_image/public/2023/03/pib_crop_1920x1080.jpg?h=d1cb525d", 
"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71MrFQnZTXL._AC_UF894,1000_QL80_.jpg","https://upload.wikimedia.org/wikipedia/en/1/1d/Thejunglebook_movieposter.jpg"];
console.log(animated);
let werewolfs = ["https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51V17-HNf7L._AC_UF894,1000_QL80_.jpg", "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/310540_UNDERWORLD%20%282003%29_1400x2100_English_2.jpg?itok=-uqNfinl","https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71k2LP+ehCL._AC_UF1000,1000_QL80_.jpg"];
console.log(werewolfs);
let peopleSuggestlink = [];
// Make sure to declare your HTML elements as variables! 
let result=document.querySelector(".result");
// Submit Button 
let submitButton = document.querySelector(".d1");
submitButton.onclick = function () {
let genreInput= document.querySelector(".input1").value;
    if(genreInput=== "animated") {
    	for (let animatedMovie of animated ) {
       		let img = "<img src=" + animatedMovie + ">";
			result.insertAdjacentHTML("beforeend",img);
    	}}
if(genreInput=== "werewolfs") {
    	for (let werewolfsMovie of werewolfs) {
       		let img = "<img src=" + werewolfsMovie + ">";
			result.insertAdjacentHTML("beforeend",img);
    	}}
};

let peopleSuggest = document.querySelector("#peopleSuggest");
let d2 = document.querySelector(".d2");
d2.onclick = function() {
    let bi = document.querySelector(".bi").value;
    peopleSuggestlink.push(bi);
    let urlsuggest = "<img src=" +bi+ ">";
  peopleSuggest.insertAdjacentHTML("beforeend", urlsuggest);
};