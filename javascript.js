var quotes = ["Success is most often achieved by those who don't know that failure is inevitable.--Coco Chanel", "Courage is grace under pressure.--Ernest Hemingway", "If you are not willing to risk the usual, you will have to settle for the ordinary.--Jim Rohn", "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.--Albert Einstein", "All our dreams can come true if we have the courage to pursue them.--Walt Disney", "The people who are crazy enough to think they can change the world are the ones who do.--Steve Jobs"];
var randomNum;

function getQuote() {
	randomNum = Math.floor(Math.random() * quotes.length);
	document.getElementById("quotes").innerHTML = quotes[randomNum];
}

function tweet() {
	window.open("https://twitter.com/intent/tweet?text=" + quotes[randomNum]);
}