// Variables and Constants
let url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eeaa494368cf4022838e8e6ec29b9843';
let myData;
let cardsBox = document.getElementById('cardsBox');
let news;

// GET request
function getData() {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        myData = data.articles
        displayData();
    }).catch(() => console.log("Some Error occured"));
}

// Functions
function displayData() {
    Array.from(myData).forEach((elem, index) => {
        let html = `
    <div class="cards" id='${index}'>
        <img src="${myData[index].urlToImage}">
        <h2>${myData[index].title}</h2>
        <p>${myData[index].content}</p>
        <a href="${myData[index].url}" target="_blank">Read More</a>
    </div>
    `
        news += html;
        let newNews = news.slice(9);
        cardsBox.innerHTML = newNews;
        index++;
    });
}

// navBar scrolling effect
window.addEventListener('scroll', () => {
    let navBar = document.querySelector('nav');
    navBar.classList.toggle('stickyNav', window.scrollY > 0);
})

// Main Logic 
getData();