
let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu-container .navbar .menu');

let marker = document.querySelector('#marker'); 
let item = document.querySelectorAll('.navbar .menu a'); 

let relocate = item[0];

// EFECTO DE LLUVIA PARA EL HERO

const rain = function() 
{
  let amount = 70;
  let header = document.querySelector("#header");

  if(header.children.length < amount) 
  {
    let drop = document.createElement('div')
    drop.classList.add('drop');
    let size = Math.random() * 3;
    let posX = Math.floor(Math.random() * window.innerWidth * 0.95);
    let delay = Math.random() * -amount;
    let duratiom = Math.random * 5;

    drop.style.width = size + "px";
    drop.style.left = posX + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = 1 + duratiom + "s";
    
    header.appendChild(drop);
  }
}


const indicator = function(e) 
{
  marker.style.top = e.offsetTop + "px";
  marker.style.left = e.offsetLeft + "px";  
  marker.style.width = e.offsetWidth + "px";  
}



window.onresize = () =>
{
  indicator(relocate);

  let header = document.querySelector("#header");
  let remove = false;
  
  do
  {
    remove = false;

    for(let i = 0; i < header.children.length; i++)
    {
      if(header.children[i].classList[0] === 'drop') 
      {
        remove = true;
        header.removeChild(header.children[i]);
      }
    }

  } while(remove == true);
};

setInterval(rain, 100);

// EFECTO DE MOVIMIENTO EN EL INDICADOR DEL MENU

indicator(item[0]);

item.forEach(link => 
{
  link.addEventListener('mousemove', (e) =>
  {
    indicator(e.target);
    relocate = e.target;
  });
})

item.forEach(link => 
{
  link.addEventListener('click', (e) =>
  { 
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
})
  
  
// HAMBURGUESA DEL MENU

menuToggle.addEventListener('click', () =>
{  
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});

// Efecto de colores en scroll bar 

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + '%';
}

// efecto de scroll en scroll bar

document.addEventListener('scroll', () => 
{
	let scrollPosition = window.scrollY;

  let menuContainer = document.querySelector('.menu-container');

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

// TODO NO ES LISTO
