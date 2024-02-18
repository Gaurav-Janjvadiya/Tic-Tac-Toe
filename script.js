const play = document.querySelector(".play");
const btn = [...document.querySelectorAll(".btn")];
const sameDivs = [...document.querySelectorAll(".sameDiv")];
const Ps = [...document.querySelectorAll("p")];
const popUp = document.querySelector(".massage");
const h1 = document.querySelector("h1");
const unique = [1,2,3,4,5,6,7,8,9];

const restart = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    for(let i=0;i<9;i++)
    {
        Ps[i].innerHTML = unique[i];
        Ps[i].style.opacity = '0';
        if(prefersDarkMode){
            // Ps[i].style.color = '#40A2E3';
            Ps[i].style.color = '#848181';
        }
        if(prefersLightMode){
            Ps[i].style.color = '#40A2E3';
        }
    }
}

btn.forEach(item => item.addEventListener('click',() => {
    restart();
    popUp.style.display = 'none';
}))

let TF = 0;
sameDivs[0].style.border = "2px solid white";

play.addEventListener("click",(e) => {
    e.target.style.opacity = '1';
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

    forPopup(0,1,2);
    forPopup(3,4,5);
    forPopup(6,7,8);
    forPopup(0,3,6);
    forPopup(1,4,7);
    forPopup(2,5,8);
    forPopup(2,4,6);
    forPopup(0,4,8);
})

const forPopup = (one,two,three) => {
    if(Ps[one].innerHTML === Ps[two].innerHTML && Ps[two].innerHTML === Ps[three].innerHTML){
        Ps[one].style.color = '#e79df4'
        Ps[two].style.color = '#e79df4'
        Ps[three].style.color = '#e79df4'
        popUp.style.display = 'flex';
        if(TF == 1){
            h1.innerHTML = 'Player 1 is winner'
        }
        else{
            h1.innerHTML = 'Player 2 is winner' 
        }
    }
}