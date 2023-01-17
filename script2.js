
var search = document.querySelector('#search')


var clearFavorites = document.querySelector('#clearFavorites')

showFavoriteDogs();

function showFavoriteDogs() {

	var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []

	for (var i = 0; i < savedDogs.length; i++) {
		console.log(i);
		var a = i + 1

		$('images').append('<img id=favorites'+i+' src=' + savedDogs[i] + '></img>')
		$("#showFavoriteList").css("visibility", "hidden");

	}
}

$('#contains-favorites').on("click", function (event) {
	event.preventDefault();

	var element = event.target;
	var imageUrl = element.src;

	console.log(element);
	console.log(imageUrl);

	var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []
	
	if (savedDogs.includes(imageUrl)) {

	var index=savedDogs.indexOf(imageUrl);
	console.log(index);
	savedDogs.splice(index, 1);
	$('#' + element.id).attr("class", '#removeDog');

}

localStorage.setItem('favDogs', JSON.stringify(savedDogs));
document.location.reload(true);
})


clearFavorites.addEventListener("click", function (event) {
	event.preventDefault();

	console.log('clear');

	localStorage.clear();
	document.location.reload(true);

})