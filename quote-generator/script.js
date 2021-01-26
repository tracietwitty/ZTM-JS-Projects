const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// Shows loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hides loading
function loadComplete() {
    if(!loader.hidden) {
        quoteContainer.hidden = false
        loader.hidden = true
    }
}

// Gets quote from API:
async function getQuote() {
    loading()
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"

    try{
        const response = await fetch(proxyUrl + apiUrl)
        const data = await response.json()

        // If author is blank, adds 'Author Unknown':
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Author Unknown'
        } else {
            authorText.innerText = data.quoteAuthor
        }

        // Reduces font size for larger quotes:
        if (data.quoteText.length > 50) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }

        quoteText.innerText = data.quoteText

        // Loader stops here and shows the quote:
        loadComplete()

    } catch (error) {
        getQuote()
    }
}

// Puts the current quote into a tweet:
function tweetQuote() {
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`

    window.open(twitterUrl, '_blank')
}

// Event listeners:
newQuoteButton.addEventListener('click', getQuote)
twitterButton.addEventListener('click', tweetQuote)

// On load:
getQuote()
