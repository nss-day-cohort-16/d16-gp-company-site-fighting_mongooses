// Create an array to hold your products
var artArray = [];

// Each item in the array must be an object that contains the following information: name, description, price, and URL for product image
var artistArt0 = {
	name: "Midnight Escapade",
	description: "This could be the theme for a hit movie! A great way to the find yourself in the void.",
	price: 10,
	artist: "Randy <i>'Jackson Bollocks'</i> Mongoose",
	image: "images/art1.jpg"
};

artArray.push(artistArt0);

var artistArt1 = {
	name: "Rose Garden Munchies",
	description: "One of those experiments in urban agriculture of which we’ve sung praises in the past!",
	price: 20,
	artist: "Randy <i>'Jackson Bollocks'</i> Mongoose",
	image: "images/art2.jpg"
};

artArray.push(artistArt1);

var artistArt2 = {
	name: "Angry Bees",
	description: "These bugs are on the march. Get ready for a pint-sized battle of epic proportions!",
	price: 24,
	artist: "Randy <i>'Jackson Bollocks'</i> Mongoose",
	image: "images/art3.jpg"
};

artArray.push(artistArt2);

var artistArt3 = {
	name: "Friend Zone",
	description: "What you attain after you fail to impress a woman you're attracted to.",
	price: 10,
	artist: "Henry and Lara Mongoose",
	image: "images/art4.jpg"
};

artArray.push(artistArt3);

var artistArt4 = {
	name: "Jamaican Cobra",
	description: "That Cobra is at it again, attention seeking and trying to show off infront of her.",
	price: 10,
	artist: "Henry and Lara Mongoose",
	image: "images/art6.jpg"
};

artArray.push(artistArt4);

var artistArt5 = {
	name: "Scurry",
	description: "A story about a colony of mice struggling to survive all manner of beast during a long and strange winter.",
	price: 10,
	artist: "Henry and Lara Mongoose",
	image: "images/art7.jpg"
};

artArray.push(artistArt5);

var artistArt6 = {
	name: "Catnip Robbery",
	description: "A kitty jonesing for catnip broke into a Dutch pet store and went wild.",
	price: 10,
	artist: "Bill Mongoose",
	image: "images/art8.jpg"
};

artArray.push(artistArt6);

var artistArt7 = {
	name: "Sophisticated Enemy",
	description: "A very sophisticated enemy.",
	price: 10,
	artist: "Bill Mongoose",
	image: "images/art9.jpg"
};

artArray.push(artistArt7);

// The team will use JavaScript to add each product to the DOM.

for (var i = 0; i < artArray.length; i++) {
	var card = document.getElementById("card" + i);
	var name = artArray[i].name;
	var description = artArray[i].description;
	var price = artArray[i].price;
	var url = artArray[i].url;
	var artist = artArray[i].artist;
	card.innerHTML += "<h2>" + artArray[i].name + "</h2>";
	card.innerHTML += "<h4><p>By:</p>";
	card.innerHTML += "<h4>" + artArray[i].artist + "</h4>";
	card.innerHTML += "<p><a href='" + artArray[i].image + "'><img src='" + artArray[i].image + "' style='width:200px;height:150px'></a></p>";
	card.innerHTML += "<h4>" + artArray[i].description + "</h4>";
	card.innerHTML += "<h4>$" + artArray[i].price + ",000,000.99</h4>";





}
