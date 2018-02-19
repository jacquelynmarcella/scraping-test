var request = require('request');
var cheerio = require('cheerio');
var async = require('async');

// Import previously scraped urls
var productUrls = require("./productUrls.js");

// When the user searches, scrape all data from cosdna
var search = "glossier milky jelly"

// request('http://www.cosdna.com/eng/product.php?q=' + search + '&s=3', function(error, response, data){
// 	var $ = cheerio.load(data);
// 		var products = $('.ProdName a').map(function(index, element){
// 			return {
// 				name: $(element).text(),
// 				url: $(element).attr('href')
// 			}
// 		}).get();		
// 		console.log(products)
// });


var searchUrl = "cosmetic_7b39298861.html"
// Then once the user selects the product, show those details
request('http://www.cosdna.com/eng/' + searchUrl, function(error, response, data){
	var $ = cheerio.load(data);
	var ingredientsTable = [];
	var resultsTable = $('.iStuffTable tbody tr');
	for (var i=2; i<=resultsTable.length; i++) {
		var tableRow = '#pagebase > div.IngContent > div.IngResult > table > tbody > tr:nth-child(' + i + ')'
		let ingredient = {
			name: $(tableRow + ' > td.iStuffETitle > a').text(),
			ingredientFunction: $(tableRow + ' > td:nth-child(2)').text(),
			acne: $(tableRow + ' > td:nth-child(3)').text(),
			irritant: $(tableRow + ' > td:nth-child(4)').text(),
			safety: $(tableRow + ' > td:nth-child(5) > div').text()
		}
		ingredientsTable.push(ingredient);
		console.log(ingredientsTable);
	}	
});
