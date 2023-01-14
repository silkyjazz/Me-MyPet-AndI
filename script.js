
var search = document.querySelector('#search')
var breeds = "australian"
var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";


search.addEventListener("click", function (event) {
	event.preventDefault();


	fetch(api)
		.then(function (response) {
			console.log("response", response)
			return response.json()
		})
		.then(function (data) {
			console.log("data", data)
			console.log(data);
			var dogImages = data.message;

			//$('body').append(' <button class=""  id="favorite">Add to favorites</button>');
			$('#images').attr('src', dogImages);
			$("#favorite").css("visibility", "visible");


			var imageUrl;

			$('#favorite').on("click", function (event) {

				event.preventDefault();

				var imageUrl = dogImages
				var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []

				if (!savedDogs.includes(imageUrl)) {

					savedDogs.push(imageUrl);
			
				}

				localStorage.setItem('favDogs', JSON.stringify(savedDogs));
			
			


					console.log(imageUrl);



			})

		})

})

