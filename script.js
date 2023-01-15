/*

We need to get breed options to populate in the dropdown

Once the user selects a breed and clicks the button, the dog's image and info
should populate on the DOM.

The button is clicked and the user sees cards displaying the dog's image and in rows 4 columns.
In each card there is a heart icon with the option of saving the dog to 'favorites' or local storage

When the user navigates to the favorites link they are shown all of their favorites with the option to unfavorite
which will delete the item from local storage

If there are no favorites stored in local storage we want to let the user know 'There are no favorites to display'.
If items exist, we want the dogs displays with cards in rows and 4 columns

*/

var search = document.querySelector('#search')
var dropdown = document.getElementById('dropdown');
// var selectedBreed = dropdown.value;
var breeds = dropdown.value;

var testApi = 'https://dog.ceo/api/breeds/list/all'
var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
// var favorites = ;

 
var favorites = document.querySelector('#showFavoriteList')
var clearFavorites = document.querySelector('#clearFavList')
var welcome = document.getElementById("welcome")

search.addEventListener("click", function (event) {
	event.preventDefault();

	fetch(api)
		.then(function (response) {
			console.log("response", response)
			return response.json()
		})
		.then(function (data) {

            console.log('data', data);

			$('#images').attr('src', dogImages);
			$("#favorite").css("visibility", "visible");

			var imageUrl;

			$('#favorite').on("click", function (event) {

				event.preventDefault();

				var imageUrl = dogImages;
				var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []
				$("#showFavoriteList").css("visibility", "visible");


				if (!savedDogs.includes(imageUrl)) {

					savedDogs.push(imageUrl);
				}
				localStorage.setItem('favDogs', JSON.stringify(savedDogs));

			})
		})

	})

	favorites.addEventListener("click", function renderFavs(event) {
		event.preventDefault();

		var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []

		for (var i = 0; i < savedDogs.length; i++) {

			console.log(i);
			var a = i + 1

			$('body').append('<img class= id=favorites src=' + savedDogs[i] + '></img>')
			$("#showFavoriteList").css("visibility", "hidden");

		}
	})
