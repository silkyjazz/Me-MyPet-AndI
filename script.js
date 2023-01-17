
/*

We need to get breed options to populate in the dropdown

Once the user selects a breed and clicks the button, the dog images and info
should appear on the DOM.

The button is clicked and the user sees cards displaying the dog images in rows and 4 columns.
In each card there is a heart icon with the option of saving the dog to 'favorites' or local storage

When the user navigates to the favorites link they are shown all of their favorites with the option to unfavorite
which will delete the item from local storage

If there are no favorites stored in local storage we want to let the user know 'There are no favorites to display'.
If items exist, we want the dogs displayed in a table 

*/


// var dropdown = document.getElementById('dropdown');
// var breeds = dropdown.value;


let listOfAllBreed = [];
var search = document.querySelector('#search')

var favorites = document.querySelectorAll('#showFavoriteList')
// var breeds = "chow" // do we need this?

//var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
// var favorites = ;


var favorites = document.querySelector('#showFavoriteList')

var clearFavorites = document.querySelector('#clearFavList')
var welcome = document.getElementById("welcome")
// create the name generator
const nameGenerator_box = $(".nameGenerator-Box")[0]


search.addEventListener("click", function (event) {
	event.preventDefault();

	renderDogSearch();

})


function renderDogSearch() {


		var breeds = document.querySelector("#searchDog").value;
		var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
		console.log(api);

	for (var i = 0; i < 5; i++) {


		fetch(api)
			.then(function (response) {
				console.log("response", response)
				return response.json()
			})

			.then(function (data) {

				var dogImages = data.message;
console.log(dogImages);
				var imageUrl = dogImages;
				console.log(imageUrl);


				$('h2').append('<img class= data-index=' + i + 'id=favorites src=' + imageUrl + '></img>');
			
				$('h2').append('<button class= data-index=' + i + 'id=favorite>&#9825 </button>');
				
				
				$("#favorite").css("background-color", "rgb(226, 220, 220)");
				
				$("#favorite").css("visibility", "visible");
			}

			)
	}


}

