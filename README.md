# Me, My Pet, And I

# <Your-Project-Title>

## Description

We wanted to help our users connect with shelter dogs waiting to be adopted. Our users are able to search for any dog breed and add their potential pet to their favorites. They will also be able to generate a list of 10 random pet names.

On this site we are using Bulma.io as our CSS Framework.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

[!View the live site on Github](https://silkyjazz.github.io/Me-MyPet-AndI/)

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![Navigation](./assets/image1.png)
The user can use the navigation bar to get to and from their favorites list.

![Search Bar and Button](./assets/image2.png)
Once the user beings to type out the dog breed, we are using jQuery to autocomplete the input field and listening for a keyDown and keyUp keypress event to allow the user to select a dog breed with the arrow keys.

![Fetching Dog Images](./assets/image3.png)
On page load we are fetching a list of dog breeds from the Dog CEO Api. From there, we are saving the users input as a variable named 'breeds' and using the variable as a parameter in the next API call that is going to retrieve for us a list of dog images that we are appending to the page and displaying in cards.

![Saving to Favorites](./assets/image4.png)
The user will have the option to add or remove favorites from both the home page and their favorite's page. We are saving the dog image url to local storage.

![Generate a Random Name](./assets/image5.png)
FunGenerators API will retrieve for us a list of 10 random names.

## Credits

[Team Contributors]
1. ![DarrenWatanabe](https://github.com/Darrenkwatanabe)
2. ![JasmineUlloa](https://github.com/Silkyjazz)
3. ![RoksolanaOdynak](https://github.com/poucoLouco)
4. ![EmilRonquillo](https://github.com/Emil1577)


![Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
![Bulma CSS Framework](https://bulma.io/documentation/)
![insertAdjacent](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
![Dog CEO API](https://dog.ceo/dog-api/documentation)
![Fun Name Generator](https://dog.ceo/dog-api/documentation)
![Font Awesome Icons](https://dog.ceo/dog-api/documentation)
![jQuery UI](https://jqueryui.com/autocomplete/)

## License

MIT License

Copyright (c) [year] [fullname]

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
