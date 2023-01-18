let cards = $(".cards-container")[0]; //getting the card container
let savedDogs = JSON.parse(localStorage.getItem("favoriteDogs")) || []; //retreving data from local storage

//checking if the user does not have items stored in local storage
if (savedDogs.length === 0) {
  cards.innerHTML = `<h1>No pets in your favorites list</h1>`;
}

//looping through the saved dogs and using string iterpolation
for (let i = 0; i < savedDogs.length; i++) {
  const testhtml =
    cards.innerHTML +
    `<div class="card-image"><img class="is-256x256" id="img-${i}" src="${savedDogs[i].imageUrl}" alt="img"> <button class=" button is-normal favorite button-${i} liked" id="favorite-img"><span class="icon is-medium">&#9825; </span></button>
    <nav class="level box">
		<div class="level-left">
			<div class="level-item">
				<p><strong>Breed:</strong>${savedDogs[i].breeds}</p>
			</div>
		</div> 
	</nav>
    </div>`;
  cards.innerHTML = testhtml;
}

let imageUrl;
if (savedDogs.length > 0) {
  $(".favorite").on("click", function (e) {
    e.preventDefault();
    let classListSize = this.classList.length;
    let imageNumber;

    imageNumber = this.classList[classListSize - 2].split("-")[1];

    imageUrl = $(`#img-${imageNumber}`)[0].currentSrc;
    let savedDogs = JSON.parse(localStorage.getItem("favoriteDogs")) || [];

    let indxOfImg = savedDogs.findIndex((obj) => obj.imageUrl === imageUrl);
    if (indxOfImg > -1) {
      savedDogs.splice(indxOfImg, 1);
    }
    localStorage.setItem("favoriteDogs", JSON.stringify(savedDogs));
    // e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);

    
    if (e.target.parentNode.classList.contains("card-image")) {
      console.log(e.target.parentNode);
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    } else {
      console.log(e.target.parentNode.parentNode);
      e.target.parentNode.parentNode.parentNode.removeChild(
        e.target.parentNode.parentNode
      );
    }
    if (savedDogs.length === 0) {
      cards.innerHTML = `<h1>No pets in favourite list</h1>`;
    }
    console.log(savedDogs);
  });
}
