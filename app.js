let quotesText = document.querySelector(".Quotes__Text");
let authorName = document.querySelector(".Author__name");
let specker = document.querySelector(".speck");
let copyText = document.querySelector(".Copy");
let instagram = document.querySelector(".instagram");
let QuotesBtn = document.querySelector(".Quotes_btn");
let AuthorDate = document.querySelector(".Author__date");

 const fetchData =() =>{
     fetch('https://api.quotable.io/random?minLength=80&maxLength=100').then(res=>res.json()).then(data=>{
         quotesText.innerHTML=data.content;
         authorName.innerHTML=data.author;
         AuthorDate.innerHTML=data.dateAdded;
     })
 }
QuotesBtn.addEventListener("click",fetchData);


const speckQuotes = () =>{
   let speckQuote = new SpeechSynthesisUtterance(`${quotesText.innerHTML} writer by ${authorName.innerHTML}` );
   speechSynthesis.speak(speckQuote)
}
specker.addEventListener("click",speckQuotes);

const copyQuotes = () =>{
  navigator.clipboard.writeText(quotesText.innerHTML);
}
copyText.addEventListener("click",copyQuotes);

const instagramOpen = () =>{
  let webUrl = `https://www.twitter.com/intent/tweet?url=${quotesText.innerHTML}`;
  window.open(webUrl,"__shubuu")
  alert("Post Quotes in twitter");
}
instagram.addEventListener("click",instagramOpen);