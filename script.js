
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
			var images = data.message;

			//$('body').append(' <button class=""  id="favorite">Add to favorites</button>');
			$('#images').attr('src', images);
			$("#favorite").css("visibility", "visible");


			var imageUrl;

			$('#favorite').on("click", function (event) {

				event.preventDefault();
				for (var i = 0; i <= localStorage.length; i++) {

					var imageUrl = images

					var favDogList = "#favorite" + i

					console.log(favDogList);
					console.log(imageUrl);

					if (!favDogList.includes(imageUrl)) {

						console.log((!favDogList.includes(imageUrl)))

						var x = (localStorage.length);
						console.log(x);
						localStorage.setItem('favDog ' + x, JSON.stringify(imageUrl));
					}
					else{

					console.log('no bueno');
				}
			}})

		})

})

