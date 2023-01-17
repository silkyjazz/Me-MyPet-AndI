
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



//var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
// var favorites = ;


var favorites = document.querySelector('#showFavoriteList')

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


//this function fetch dog images then displays them on the screen
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
				var a = Math.floor(Math.random() * dogImages.length) + 1; //grabs a random numbers 
				var imageUrl = dogImages[a]; //the random number from above is then aused here to get a random image

				$('images').append('<img class="" id= image' + i + ' src=' + imageUrl + '></img>');

			}
		}
		)
}

//this function is to grab random names from fungenerators then displays them on the screen
function renderRandomNames() {

	var nameApi = 'https://api.fungenerators.com/name/generate?category=dog&limit=10';

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

//this event is to add and delete the selected dog image to the local storage and mark the image as selected.

$('#contains-photo').on("click", function (event) {
	event.preventDefault();

	var element = event.target;
	var imageUrl = element.src;

	console.log(element.id);
	console.log(imageUrl);

	var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []
	$('#' + element.id).attr("class", 'favorited');

	if (!savedDogs.includes(imageUrl)) {

		savedDogs.push(imageUrl);
	} else {

		$('#' + element.id).attr("class", '');
		console.log(index);
		var index = savedDogs.indexOf(imageUrl);
		savedDogs.splice(index, 1);

	}
	localStorage.setItem('favDogs', JSON.stringify(savedDogs));
})