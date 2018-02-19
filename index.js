var request = require('request');
var cheerio = require('cheerio');
var async = require('async');



var getProducts = async function() {
	let productUrls = await scrapeData();
	await console.log("urls is", productUrls);
}



getProducts();



function scrapeData (){

		

		return new Promise((resolve, reject) => {
			let allUrls = [];

			console.log("got to first function");

			request('https://www.sephora.com/shop/foundation-makeup?pageSize=300', function(error, response, data){
					var $ = cheerio.load(data);

					allUrls = $('.css-1tguw7u').map(function(index, element){
						return "https://www.sephora.com" + $(element).attr('href')
					}).get(); 

					resolve(allUrls);
					console.log("within request",allUrls);

			});
					
		});

}





// function getUrls() {
// 	var productUrls;

// 	request('https://www.sephora.com/shop/foundation-makeup?pageSize=300', function(error, response,data){

// 		var $ = cheerio.load(data);

// 		productUrls = $('.css-1tguw7u').map(function(index, element){
// 			return {
// 				link: "https://www.sephora.com" + $(element).attr('href')
// 			}
// 		}).get(); 
// 	})
// 	resolve(productUrls);
// }


// console.log(urls);
	

// function getIngredients(urls, callback) {

// 	console.log(urls);
// 	// var productInfo = urls.map(function(index, element){

// 	// 	console.log(element);

// 	// })

// 	// 	request(element, function(error, response, data){

// 	// 		var $ = cheerio.load(data);

// 	// 		var ingredients = $('body > div.css-68zqxa > div.css-5gcev7 > div > div:nth-child(2) > div:nth-child(1) > div > div > div.css-1103zjq > div.css-x2d2di > div.css-1lqspdf > div > div > div:nth-child(3) > div').text();

// 	// 		ingredients = ingredients.replace(".", ",")
// 	// 		ingredients = ingredients.replace("May Contain (+/-):", "")
// 	// 		ingredients = ingredients.split(',')

// 	// 		var brandName = $('body > div.css-68zqxa > div.css-5gcev7 > div > div:nth-child(2) > div:nth-child(1) > div > div > div.css-1103zjq > div.css-x2d2di > div.css-xp7g4z > div.css-1kaybv4 > h1 > a > span').text();
// 	// 		var productName = $('body > div.css-68zqxa > div.css-5gcev7 > div > div:nth-child(2) > div:nth-child(1) > div > div > div.css-1103zjq > div.css-x2d2di > div.css-xp7g4z > div.css-1kaybv4 > h1 > span').text();

// 	// 		return {
// 	// 			brandName: brandName,
// 	// 			productName: productName,
// 	// 			ingredients: ingredients,
// 	// 			url: element
// 	// 		}

// 	// 	})

// 	// }).get();

// 	callback(null, urls);
// }


