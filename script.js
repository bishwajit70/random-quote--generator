var quotes = [
	'The Way Get Started is to quit talking and begin Dong. - Walt Disney',
	'The Pessimist Sees Difficulty in Every Opportunity. The Optimist Sees the Opportunity in every Difficulty. -Winston Churchil',
	'Don\'t let Yesterday Take Up Top Much of Today. Will Rogers',
	'You Learn More from Failure than From Success. Don\'t Let it Stop You. Failure Builds Character. - Unknown',
	'It\'s Not Whethere You Get Knocked Down, It\s Whether You Get Up.  Vince Lombardi',
	'If you are working on something that you really care abut, You don\'t have to be pushed. The Vision Pulls you. - Steve Jobs.',
	'People Who are Crazy Enought to Think They can Change the World, Are the Ones Who do. - Rob Siltanen',
	'Failure will never overtake me if my determination to succeed is strong enough,- Og Mandino',
	'Entrepreneures Are great at dealing with uncertainy and also very good at minimizing Risk. That\'s the Classic Entrepreneur. - Monish Pabrai',
	'We May encounter Many Defeats But we must not be Defeated. - Maya Angelou'
]
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99"]


function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomColor = Math.floor(Math.random() * (colors.length));
	document.getElementById ('quoteDisplay').innerHTML = quotes[randomNumber];
	document.getElementById ('container').backgroundColor = colors.randomColor;

}
