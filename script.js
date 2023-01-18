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

let listOfAllBreed = [];
let api = "https://dog.ceo/api/";
var search = document.querySelector("#search");
// var api = "https://dog.ceo/api/breed/" + breeds + "/images/random";
let cards = $(".cards")[0];
let petsName = $(".pets-name")[0];
let cards_container = $(".cards-container")[0];
const nameGenerator_box = $(".nameGenerator-Box")[0];

const nameGenerator = () => {
  const baseUrl = `https://api.fungenerators.com`; // using the name generator api
  const url = `${baseUrl}/name/generate?category=dog&limit=10`; // generating a list of 10 random names
  petsName.innerHTML = "";
  fetch(url)
    .then((res) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
      return res.json();
    })
    .then((data) => {
      console.log(data.contents.names);
      let { names } = data.contents;
      for (let i = 0; i < names.length; i++) {
        //for loop to retrieve the random names
        const html = ` 
			<div class='list-item'>
				<li>
					<b>${i + 1}.</b> ${names[i]} 
				</li>
		    </div>`;
        petsName.insertAdjacentHTML("beforeend", html);
      }
    });
};

// create the name generator button with click event
const nameGeneratorButton = $(".nameGenerator-button")[0];
nameGeneratorButton.addEventListener("click", (e) => {
  nameGenerator();
});

search.addEventListener("click", function (event) {
  event.preventDefault();
  var breeds = $("#breed-input")[0].value;
  // when any h1 tag is present then remove it.
  if ($(".breed-heading")[0]) $(".breed-heading")[0].remove();

  // add heading
  var html = `<h1 class="breed-heading">${breeds}</h1>`;
  cards.insertAdjacentHTML("afterbegin", html);

  var url = "https://dog.ceo/api/breed/" + breeds + "/images";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var breedImgData = data.message;
      cards_container.innerHTML = "";
      let savedDogs = JSON.parse(localStorage.getItem("favoriteDogs")) || [];

      for (let i = 0; i < breedImgData.length; i++) {
        const testhtml =
          cards_container.innerHTML +
          `
			<div class="card-image">
				<img class="is-256x256" id="img-${i}" src="${breedImgData[i]}" alt="${breeds}">
					<button class=" button is-normal favorite button-${i}" id="favorite-img">
					 	<span class="icon is-medium">&#9825; </span>
					</button>
					<nav class="level box">
						<div class="level-left">
			 				 <div class="level-item">
								<p><strong>Breed:</strong>${breeds}</p>
							 </div>
						</div> 
					</nav>
			</div>`;
        cards_container.innerHTML = testhtml;

        if (
          savedDogs.findIndex((obj) => obj.imageUrl === breedImgData[i]) >= 0
        ) {
          $(`.button-${i}`)[0].classList.add("liked");
        }
      }
      var dogImages = data.message;

      // 	$('#images').attr('src', dogImages);
      // 	$("#favorite").css("visibility", "visible");

      let imageUrl;
      $(".favorite").on("click", function (event) {
        event.preventDefault();
        let classListSize = this.classList.length;
        let imageNumber;

        if (this.classList[classListSize - 1] != "liked") {
          imageNumber = this.classList[classListSize - 1].split("-")[1];
          this.classList.add("liked");
        } else {
          imageNumber = this.classList[classListSize - 2].split("-")[1];
        }

        imageUrl = $(`#img-${imageNumber}`)[0].currentSrc;
        let savedDogs = JSON.parse(localStorage.getItem("favoriteDogs")) || [];
        // if image is not already saved in local storage then save it or remove it if it is saved.
        if (savedDogs.findIndex((obj) => obj.imageUrl === imageUrl) == -1) {
          console.log(imageUrl);
          savedDogs.push({ imageUrl, breeds });
        } else {
          let indxOfImg = savedDogs.findIndex(
            (obj) => obj.imageUrl === imageUrl
          );
          if (indxOfImg > -1) {
            savedDogs.splice(indxOfImg, 1);
          }
          this.classList.remove("liked");
        }
        localStorage.setItem("favoriteDogs", JSON.stringify(savedDogs));
        console.log(savedDogs);
      });
    });
});

function autocomplete(inp, arr) {
  console.log(arr);
  /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    var a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items ");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        var b = document.createElement("DIV");
        b.setAttribute("class", "has-text-black");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

  //fetchlistofbreeds
  function fetchListOfAllBreeds(){
    let url = api+"breeds/list/all";
	fetch(url).then((res)=>{
		return res.json();
	}).then((data)=>{
      listOfAllBreed = Object.keys(data.message);

	   /*initiate the autocomplete function on the "breed-input" element, and pass along the listOfAllBreed array as possible autocomplete values:*/
       autocomplete(document.getElementById("breed-input"), listOfAllBreed);
	})
   
}

fetchListOfAllBreeds();

