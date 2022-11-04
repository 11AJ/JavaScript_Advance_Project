// Quote
const quoteCon = document.querySelector('.quote-content');
const quoteAut = document.querySelector('.quote-author');
const refreshButton = document.querySelector('.btn-1');

const getQuote = () =>{
   let quote = new XMLHttpRequest;
   quote.open('GET','https://api.quotable.io/random');

   quote.onload = function(){
    var quoteText = JSON.parse(quote.responseText);
    var quoteContent = quoteText.content; 
    var quoteAuthor = quoteText.author;
    
    quoteCon.innerHTML = quoteContent;
    quoteAut.innerHTML = quoteAuthor;
   }
   quote.send();
}

getQuote();
refreshButton.addEventListener('click',getQuote);

// Time
const timezone = document.querySelector('.area-time');
const AMPM = document.querySelector('.AMPM');

const getTime = () =>{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if(hour<12){
        AMPM.innerHTML = 'AM';
        document.querySelector('.greeting').innerHTML = 'Good Morning';
    }
    else if(hour>12 || hour<16){
        AMPM.innerHTML = 'PM';
        document.querySelector('.greeting').innerHTML = 'Good afternoon';
    }
    if(hour>16){
        AMPM.innerHTML = 'PM';
        document.querySelector('.greeting').innerHTML = 'Good Evening';
    }
    if(hour >12){
        hour = hour-12;
    }
    if(hour <10){
        hour = '0' + hour;
    }
    if(minute <10){
        minute = '0' + minute;
    }
    if(second <10){
        second = '0' + second;
    }
    var currentTime = `${hour}:${minute}:${second}`;
    timezone.innerHTML = currentTime;
} 
setInterval(function(){getTime()},500);


// Abbreviataions for time

const abbrev = document.querySelector('.abbrev');
const ct = document.querySelector('.ct');
const dow = document.querySelector('.dow');
const doy = document.querySelector('.doy');
const wn = document.querySelector('.wn');

const abbreviation = () =>{
    var abb = new XMLHttpRequest();
    abb.open('GET','https://worldtimeapi.org/api/ip');

    abb.onload = function(){
        var abbText = JSON.parse(abb.responseText);
        var abbrevText = abbText.abbreviation;
        abbrev.innerHTML = abbrevText;
        // console.log(abbText);
        ct.innerHTML = abbText.timezone;
        dow.innerHTML = abbText.day_of_week;
        doy.innerHTML = abbText.day_of_year;
        wn.innerHTML = abbText.week_number;
    }
    abb.send();
}
abbreviation();


//Toggle Button
const moreButton = document.querySelector('.btn-2');

function toggleFooter(){
    document.querySelector('.header').classList.toggle('transform');
    document.querySelector('.footer').classList.toggle('transform');
    document.querySelector('.down').classList.toggle('transform');
    document.querySelector('.up').classList.toggle('transform');
}

moreButton.addEventListener('click',toggleFooter);
