
let APP_ID = "0676e5c1";
let API_KEY = "8397c2a14bde62e0f1d68fc1990cdddb";

var x = Math.floor(Math.random() * 20);
var y = Math.floor(Math.random() * 20);
var z = Math.floor(Math.random() * 20);

let results;


const search_function = (tag) => {
    const term = document.querySelector('#term').value;
    let url = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + term + '&app_id=0676e5c1&app_key=8397c2a14bde62e0f1d68fc1990cdddb';
    if (tag != '') {
      url += '&health=' + tag;
    }
    fetch(url)
        .then(response => {
            return response.json()
        })

        .then(return_data);   
}

let searchButton = document.querySelector("#standard");

const return_data = (data) => {
    console.log(data);
    results = data;
    
    document.querySelector("#content").innerHTML = `

    <div class="card-group">
  <div class="card">
    <img src="${results.hits[x].recipe.images.REGULAR.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${results.hits[x].recipe.label}</h5>
      <p class="card-text">Calories: ${results.hits[x].recipe.calories}</p>
      <a href="${results.hits[x].recipe.url}" class="btn btn-primary">Recipe</a>
    </div>
  </div>
  <div class="card">
  <img src="${results.hits[y].recipe.images.REGULAR.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${results.hits[y].recipe.label}</h5>
    <p class="card-text">Calories: ${results.hits[y].recipe.calories}</p>
    <a href="${results.hits[y].recipe.url}" class="btn btn-primary">Recipe</a>
    </div>
  </div>
  <div class="card">
  <img src="${results.hits[z].recipe.images.REGULAR.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${results.hits[z].recipe.label}</h5>
    <p class="card-text">Calories: ${results.hits[z].recipe.calories}</p>
    <a href="${results.hits[z].recipe.url}" class="btn btn-primary">Recipe</a>
    </div>
  </div>
</div>    
    `



}
