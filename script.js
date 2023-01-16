
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


let listOfAllBreed=[];
var search = document.querySelector('#search')

var breeds = "chow" // this needs to be directed to the dropdown of the html
var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
var favorites = document.querySelectorAll('#showFavoriteList')
// var breeds = "chow" // do we need this?

var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
// var favorites = ;

 
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

<<<<<<< HEAD
	var dogImages = data.message;

			var imageUrl = dogImages;
			console.log(dogImages);
=======
            console.log('data', data);
>>>>>>> 2cb382c6579b9ca1f121ca0089e42e8935d03da3

			$('#images').attr('src', dogImages);
			$("#favorite").css("background-color", "rgb(226, 220, 220)");
			$("#favorite").css("visibility", "visible");
			$('#favorite').on("click", function (event) {

				event.preventDefault();

<<<<<<< HEAD
				console.log(imageUrl);
=======
				var imageUrl = dogImages;
>>>>>>> 2cb382c6579b9ca1f121ca0089e42e8935d03da3
				var savedDogs = JSON.parse(localStorage.getItem('favDogs')) || []
				$("#favorite").css("background-color", "red");
				
				if (!savedDogs.includes(imageUrl)) {

					savedDogs.push(imageUrl);
				}
				localStorage.setItem('favDogs', JSON.stringify(savedDogs));

			})
		})

	})
<<<<<<< HEAD
=======

}


>>>>>>> 2cb382c6579b9ca1f121ca0089e42e8935d03da3
