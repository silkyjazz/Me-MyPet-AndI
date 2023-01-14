
var search = document.querySelector('#search')
var breeds = "chow"
var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
var favorites = document.querySelector('#showFavoriteList')
var clearFavorites = document.querySelector('#clearFavList')


search.addEventListener("click", function (event) {
	event.preventDefault();

	fetch(api)
		.then(function (response) {
			console.log("response", response)
			return response.json()
		})
		.then(function (data) {

			var dogImages = data.message;

			$('#images').attr('src', dogImages);
			$("#favorite").css("visibility", "visible");


			var imageUrl;

			$('#favorite').on("click", function (event) {

				event.preventDefault();

				var imageUrl = dogImages
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
