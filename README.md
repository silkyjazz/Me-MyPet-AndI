# Me, My Pet, And I


## Description

We wanted to help our users connect with shelter dogs waiting to be adopted. Our users are able to search for any dog breed and add their potential pet to their favorites. They will also be able to generate a list of 10 random pet names.

On this site we are using Bulma.io as our CSS Framework.

## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
- [Code Snippets] (#code snippets)
- [Credits](#credits)
- [License](#license)

---
## Installation

[View the live site](https://silkyjazz.github.io/Me-MyPet-AndI/)

---
## Usage

To complete the project we followed our user story.

As a user...
I want to..
So that...

1. As a user looking to adopt a rescue dog. I want to click a button and receive images of avaiable dogs in the shelter. So that I can find a new pet.
2. As a user browsing through dog images. I want to save my favorite dog to a list. So that I can reference the dog at another time.
3. As a user looking to adopt. I want to navigate to the favorites page and see all of my favorited dogs. So that I can add or remove dogs I do not wish to adopt.

4. As a user looking to adopt a dog. I want to be able to generate a list of names. So that I can name my future dog.

## Code Snippets

### Function to fetch information from Dog.Api

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
            
### Function to fetch information from FunGenerators

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

### Storing Favorite Dogs

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



## Credits

[Team Contributors]
- [DarrenWatanabe](https://github.com/Darrenkwatanabe)
- [JasmineUlloa](https://github.com/Silkyjazz)
- [RoksolanaOdynak](https://github.com/poucoLouco)
- [EmilRonquillo](https://github.com/Emil1577)


[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
[Bulma CSS Framework](https://bulma.io/documentation/)
[insertAdjacent](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
[Dog CEO API](https://dog.ceo/dog-api/documentation)
[Fun Name Generator](https://dog.ceo/dog-api/documentation)
[Font Awesome Icons](https://dog.ceo/dog-api/documentation)
[jQuery UI](https://jqueryui.com/autocomplete/)

## License

MIT License

Copyright (c) [2023] [SilkyJazz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
