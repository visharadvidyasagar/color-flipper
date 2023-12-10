const colors = ["green", "red", "rgba(133,122,200)", "#888"];

const btn = document.getElementById("btn");

const btn1 = document.getElementById("btn1");

const btn2=document.getElementById("btn2");

const color = document.querySelector(".color");

const duh=["yellow","goldenrod","pink","indigo"];

const bac=["gold","cyan","lime","#111"];

/* BUTTON BTN CLICK ME */

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});

/* BUTTON BTN1 DONT CLICK ME*/

btn1.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    const randomNumber1 = getRandomNumber();

    // console.log(randomNumber);
  
    document.getElementById("btn").style.backgroundColor = colors[randomNumber];
    document.getElementById("btn").style.color=colors[randomNumber1];

    color.textContent = stat[randomNumber];
  
  });

  /* BUTTON BTN2 NEVERMIND*/

btn2.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    const randomNumber1 = getRandomNumber1();
    const randomNumber2 = getRandomNumber2();
    // console.log(randomNumber);
    
    /*Dont click me*/
    document.getElementById("btn1").style.backgroundColor = colors[randomNumber];
    document.getElementById("btn1").style.color="white";
    
    /*Click me*/
    document.getElementById("btn").style.backgroundColor = duh[randomNumber];
    document.getElementById("btn").style.color="brown";

    /*Background*/
    document.body.style.backgroundColor = bac[randomNumber2];
    color.textContent = colors[randomNumber2];
  
  });

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function getRandomNumber1() {
    return Math.floor(Math.random() * duh.length);
  }

function getRandomNumber2() {
   return Math.floor(Math.random() * bac.length);
}