let currentQuote = "";
let currentAuthor = "";
const generator = () => {
    
    const qoute = document.getElementById("Quote");
    const author= document.getElementById("author");
    const api_url = "https://api.quotable.io/random";
    const tweetButton = document.getElementById("tweet-button");
    
    async function getQoute(url){
        const response = await fetch(url);
        var data = await response.json();
        
        qoute.innerHTML = data.content;
        author.innerHTML = data.author;

        quoteElement.innerHTML = currentQuote;
        authorElement.innerHTML = currentAuthor;
    };
    
    getQoute(api_url);

    tweetButton.addEventListener("click", () => {
        const tweetText = `"${qoute.innerHTML}" - ${author.innerHTML}`;
        const encodedText = encodeURIComponent(tweetText);
        const twitterUrl = `https://twitter.com/intent/tweet?text=Quote for the day:%0A${encodedText}`;
        window.open(twitterUrl, "Tweet Window", "width=auto,height=auto");
    });
};

export default generator;
