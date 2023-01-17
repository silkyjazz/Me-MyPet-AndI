
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

var addFavorites = document.querySelector('#favoriteButton-1')

var photoSelected = document.querySelectorAll('#showFavoriteList')
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
	$('images').text("");
	$('h3').text("");

	renderDogSearch();
	renderRandomNames();
})



function renderDogSearch() {


	var breeds = document.querySelector("#searchDog").value;
	var api = "https://dog.ceo/api/breed/" + breeds + "/images";
	console.log(api);

	fetch(api)
		.then(function (response) {
			console.log("response", response)
			return response.json()
		})

		.then(function (data) {

			for (var i = 0; i <= 4; i++) {

				var dogImages = data.message;
				const a = Math.floor(Math.random() * dogImages.length) + 1;

				console.log(a);

				var imageUrl = dogImages[a];

				$('images').append('<img class="" id= image' + i + ' src=' + imageUrl + '></img>');
				$('#contains-photo').append('<button date-index=' + i + '>&#9825</button>');
				$("#favorite").css("background-color", "rgb(226, 220, 220)");
				//$("#favorite").css("visibility", "visible");
			}
		}
		)

}

function renderRandomNames() {

	var nameApi = 'https://api.fungenerators.com/name/generate?category=dog&limit=10';
	console.log(nameApi);

	fetch(nameApi)
		.then(function (response) {
			console.log("response", response)
			return response.json()
		})

		.then(function (data) {

			for (var i = 0; i <= 4; i++) {

				var names = data.contents.names[i];

				$('#contains-photo').append('<p data-index=' + i + ' id=names src= >' + names);

			}
		})

}


$('#contains-photo').on("click", function (event) {
	event.preventDefault();

	console.log("hello")

	var element = event.target;
	var imageUrl = element.src;

	console.log(element.id);
	console.log(imageUrl);
	console.log("I was clicked");

	var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []
	$('#' + element.id).attr("class", 'submitted');

	if (!savedDogs.includes(imageUrl)) {

		savedDogs.push(imageUrl);
	}else{

		$('#' + element.id).attr("class", '');
		
	}

	localStorage.setItem('favDogs', JSON.stringify(savedDogs));

})