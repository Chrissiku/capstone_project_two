/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import _ from "lodash";
import "./css/style.css";

fetch('https://api.tvmaze.com/seasons/1/episodes').then((data) => {
    return data.json();
}).then((completedata) => {
    let data1="";
    completedata.map((values) => {
        data1+= `
        <div class="main" id="main">
        <img src=${values.image.medium} alt="img">
        <h2 class="title">${values.name}</h2>
        <button>comments</button>
        <button>Reservation</button>
      </div>`
    }); 
    document.getElementById('popup').innerHTML= data1;
}).catch((err) => {
    console.log(err);
})

