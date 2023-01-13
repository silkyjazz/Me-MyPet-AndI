
// var apiURL = 'https://api.petfinder.com/v2/animals'
// var APIkey = '5KcB72XZqeGdiWVCIV7Xz3Q9xVboTNG3E9viUIJanHJwLBath9'
// var secret = "";


// fetch('https://api.petfinder.com/v2/animals')
// .then(function (response){
//     console.log("response", response)
//     return response.json()
// })
// .then (function(data){
//     console.log("data",data)
// })

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '62d7415d28msh34e78526b275038p148501jsn6b562ffd43ea',
// 		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
// 	}
// };

fetch('https://www.googleapis.com/books/v1/volumes/?q=John+Green')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));