const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('generate-quote');


// let apiQuotes = [];

// Show New Quote
function newQuote(){
	// Pick a random quote
	const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
	// check if author null
	if (!quote.author) {
		authorText.textContent = 'Unknown'
	} else {
		authorText.textContent = quote.author;
	}
	// Check Quote length to determine styling
	if (quote.quote.length > 50) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	quoteText.textContent = quote.quote;
}

// Get Quotes From API
// async function getQuotes() {
// 	const apiUrl = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
// 	try {
// 		const response = await fetch(apiUrl);
// 		apiQuotes = await response.json();
// 		newQuote();
// 	} catch (error) {
// 		// Catch Error Here
// 	}

// }

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

//Even Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load
// getQuotes();
newQuote();