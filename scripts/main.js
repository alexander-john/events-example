const btn = document.querySelector("button");

function random(num)  {
    return Math.floor(Math.random() * (num + 1));
}

function bgChange(e) {
    const rndColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndColor;
    console.log(e);
}

btn.addEventListener("click", bgChange);
