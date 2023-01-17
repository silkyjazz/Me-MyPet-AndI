
var search = document.querySelector('#search')
var breeds = "chow"
var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
var showFavorites = document.querySelector('#showFavoriteList')
var clearFavorites = document.querySelector('#clearFavorites')

showFavoriteDogs();

function showFavoriteDogs() {

	var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []

	for (var i = 0; i < savedDogs.length; i++) {
		console.log(i);
		var a = i + 1

		$('body').append('<img class= id=favorites src=' + savedDogs[i] + '></img>')
		$("#showFavoriteList").css("visibility", "hidden");

	}
}

clearFavorites.addEventListener("click", function (event) {
	event.preventDefault();

	console.log('clear');

	localStorage.clear();
	document.location.reload(true);

})