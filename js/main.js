// Create an array to hold your products
var artArray = [];

// Each item in the array must be an object that contains the following information: name, description, price, and URL for product image
var artistArt0 = {
	name: "Midnight Escapade",
	description: "This could be the theme for a hit movie! A great way to the find yourself in the void.",
	price: 10,
	url: "www.midnight.com",
	artist: "Randy Jackson Bollocks Mongoose",
	image: "img"
};

artArray.push(artistArt0);

var artistArt1 = {
	name: "Rose Garden Munchies",
	description: "One of those experiments in urban agriculture of which we’ve sung praises in the past!",
	price: 20,
	url: "www.midnight.com",
	artist: "Randy Jackson Bollocks Mongoose",
	image: "Jackson Bollocks"
};

artArray.push(artistArt1);

var artistArt2 = {
	name: "Angry Bees",
	description: "These bugs are on the march. Get ready for a pint-sized battle of epic proportions!",
	price: 24,
	url: "www.midnight.com",
	artist: "Randy Jackson Bollocks Mongoose",
	image: "Jackson Bollocks"
};

artArray.push(artistArt2);

var artistArt3 = {
	name: "Friend Zone",
	description: "What you attain after you fail to impress a woman you're attracted to.",
	price: 10,
	url: "www.midnight.com",
	artist: "Henry and Laura Mongoose",
	image: "Jackson Bollocks"
};

artArray.push(artistArt3);

var artistArt4 = {
	name: "Jamaican Cobra",
	description: "That Cobra is at it again, attention seeking and trying to show off infront of her.",
	price: 10,
	url: "www.midnight.com",
	artist: "Henry and Laura Mongoose",
	image: "Jackson Bollocks"
};

artArray.push(artistArt4);

var artistArt5 = {
	name: "Scurry",
	description: "A story about a colony of mice struggling to survive all manner of beast during a long and strange winter.",
	price: 10,
	url: "www.midnight.com",
	artist: "Henry and Laura Mongoose",
	image: "Jackson Bollocks"
};

artArray.push(artistArt5);

var artistArt6 = {
	name: "Catnip Robbery",
	description: "A kitty jonesing for catnip broke into a Dutch pet store and went wild.",
	price: 10,
	url: "www.midnight.com",
	artist: "Bill Mongoose",
	image: "Jackson Bollocks"
};

artArray.push(artistArt6);

var artistArt7 = {
	name: "Sophisticated Enemy",
	description: "A very sophisticated enemy.",
	price: 10,
	url: "www.midnight.com",
	artist: "Bill Mongoose",
	image: "Jackson Bollocks"
};

artArray.push(artistArt7);

console.log(artArray.length);

// The team will use JavaScript to add each product to the DOM.
var card = document.getElementById("card");

for (var i = 0; i < artArray.length; i++) {
	var currentArt = artArray[i];
	var name = "<h1>" + currentArt.name + "</h1>";
	card.innerHTML += name;
	var description = "<h1>" + currentArt.description + "</h1>";
	card.innerHTML += description;
	var price = "<h1>" + currentArt.price + "</h1>";
	card.innerHTML += price;
	var url = "<h1>" + currentArt.url + "</h1>";
	card.innerHTML += url;
	var artist = "<h1>" + currentArt.artist + "</h1>";
	card.innerHTML += artist;
	var image = "<h1>" + currentArt.image + "</h1>";
	card.innerHTML += image;
}




