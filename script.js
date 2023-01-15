let listOfAllBreed=[];
var search = document.querySelector('#search')
var breeds = "chow" // do we need this?
var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
var favorites = document.querySelector('#showFavoriteList')
var clearFavorites = document.querySelector('#clearFavList')
var welcome = document.getElementById("welcome")
// create the name generator
const nameGenerator_box = $(".nameGenerator-Box")[0]
const nameGenerator = ()=>{
	const baseUrl = `https://api.fungenerators.com`; // using the name generator api
	const url = `${baseUrl}/name/generate?category=dog&limit=10`; // generating a list of 10 random names
	petsName.innerHTML=""
	fetch(url).then((res)=>{
		return res.json();
	}).then((data)=>{
		console.log(data.contents.names);
		let {names} = data.contents;
		for(let i=0;i<names.length;i++){ 
			const html = ` 
			<div class='list-item'>
				<li>
					<b>${i+1}.</b> ${names[i]} 
				</li>
		    </div>`
			petsName.insertAdjacentHTML('beforeend', html); // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
		}
	})

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
}
