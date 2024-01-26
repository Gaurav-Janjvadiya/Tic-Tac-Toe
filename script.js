const play = document.querySelector(".play");
const btn = document.querySelector("button");
const sameDivs = [...document.querySelectorAll(".sameDiv")];
let Ps = [...document.querySelectorAll("p")];

btn.addEventListener("click",(e) => {
    Ps.forEach((e)=>e.innerHTML = "");
})
let TF = 0;
sameDivs[0].style.border = "2px solid white";

play.addEventListener("click",(e) => {
    if(TF === 0)
    {
        TF = 1;
        sameDivs[1].style.border = "2px solid white";
        sameDivs[0].style.border = "none";

            e.target.innerHTML = "X";

    }else{
        TF = 0;
        sameDivs[0].style.border = "2px solid white";
        sameDivs[1].style.border = "none";

            e.target.innerHTML = "O";

    }
})