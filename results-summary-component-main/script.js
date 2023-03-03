const summaryScore = document.querySelectorAll(".summary__score");
const summaryP = document.querySelectorAll(".summary-p");
const summaryImg = document.querySelectorAll(".summary-icon-p img");
const resultBox = document.querySelector(".result-box__circle-number");



const getResults = ()=>{
    request = fetch("data.json");
    request
        .then(res=>res.json())
        .then(res=>{
            for(i = 0; i < 4; i++) {
                summaryImg[i].src = res[i].icon;
                summaryP[i].innerHTML = res[i].category;
                summaryScore[i].innerHTML = `
                ${res[i].score} <span> / 100</span>
                `;
            }
            let result = Math.round((res[0].score + res[1].score + res[2].score + res[3].score) / 4);
            resultBox.innerHTML = result;
        });
}

getResults();