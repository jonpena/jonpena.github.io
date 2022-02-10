// const scrollreveal = require("./scrollreveal");

const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu-container .navbar');

const menuItems = document.querySelectorAll('.navbar a');
const menuContainer = document.querySelector('.menu-container');

const spans = document.querySelectorAll('.navbar span');


// LINKS OF NAVIGATION MENU
menuItems.forEach(item => 
{
  item.addEventListener('click', (e) =>
  { 
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
})

// BUTTON OF BURGER
menuToggle.addEventListener('click', () =>
{  
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});

// Efecto de colores en scrollBar y Efecto de menu con Scroll
let progress = document.getElementById('progressbar');

document.addEventListener('scroll', () => 
  {
    let scrollPosition = window.scrollY;
    let progressHeight = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    progress.style.height = progressHeight + '%';
    
    if(scrollPosition > 50) 
    {
      menuContainer.style.backgroundColor = '#1e1e1e';
      menuContainer.style.borderBottom = "1px solid var(--blue-1)";
    } 
    else 
    {
      menuContainer.style.backgroundColor = 'transparent';
      menuContainer.style.borderBottom = "none";
    }
  });


// EFECTO DE LLUVIA CON CANVAS
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let drops = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const Random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const drawLine = function(ctx, x1, y1, x2, y2, color) {
  ctx.beginPath();
	ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.stroke();
}

class drop {
  constructor(x, y, c = "#fff") {
    this.x = x;
    this.y = y;
    this.c = c; 
    this.v = Random(3, 4);
  }
}

for(let i = 0; i < 50; i++)
{
  const color = i & 2 ? "#00a2f2" : "#e1148b";
  const initialPosition = Random(-1800, 0);
  drops.push(new drop(Random(2, canvas.width), initialPosition, color));
}

window.onload = () => 
{
  requestAnimationFrame(update);
  
  function update(time) 
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const drop of drops) {
    
      drawLine(ctx, drop.x, drop.y, drop.x, drop.y + 15, drop.c);
      
      drop.y += drop.v;

      if(drop.y > canvas.height) {
        drop.y = 0;
        drop.v = Random(3, 4);
      }
    }
    requestAnimationFrame(update);
  }
};


window.addEventListener('scroll', event => 
{
  let fromTop = window.scrollY;
  let offset = 400;

  spans.forEach(item =>  {
    
    let tag = document.querySelector(item.dataset.id);
    
    if(tag.offsetTop <= fromTop - offset) 
    {
      item.classList.add('active');
    }
    else 
    {
      item.classList.remove('active');
    }
  })
});

// EFECTO DE TRANSICIONES con SrollReveal
window.sr = ScrollReveal();

sr.reveal('.navbar-container', {
  duration: 1500,
  origin: 'top',
  distance: '60px',
  mobile: false
});

sr.reveal('.move-right', {
  duration: 2000,
  origin: 'right',
  distance: '-100px'
});

sr.reveal('.move-left', {
  duration: 2000,
  origin: 'right',
  distance: '100px'
});

sr.reveal('.move-top', {
  duration: 2000,
  origin: 'bottom',
  distance: '60px'
});