
var search = document.querySelector('#search')
var breeds = "chow" // this needs to be directed to the dropdown of the html
var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
var favorites = document.querySelectorAll('#showFavoriteList')
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
			$("#favorite").css("background-color", "rgb(226, 220, 220)");
			$("#favorite").css("visibility", "visible");

			var imageUrl;

			$('#favorite').on("click", function (event) {

				event.preventDefault();

				var imageUrl = dogImages
				var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []
				$("#favorite").css("background-color", "red");
				


				if (!savedDogs.includes(imageUrl)) {

					savedDogs.push(imageUrl);
				}
				localStorage.setItem('favDogs', JSON.stringify(savedDogs));

			})
		})



	})




