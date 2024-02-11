
let lista = document.querySelectorAll('.lista');
let hidden = document.querySelectorAll('.hidden');
let image = document.querySelectorAll('.arrow');
let hamb = document.querySelector('.hamb')

/* header side*/ 

lista.forEach((e, i)=>{
  
  let bool = true;

  e.addEventListener('click', ()=>{

    if(bool == true){
      bool = false;
      hidden[i].style.display = 'flex';
      image[i].classList.add('rotate');
    }else{
      bool = true;
      hidden[i].style.display = 'none';
      image[i].classList.remove('rotate');
    }

  });

});

// Responsive nav

let bol = true;

hamb.addEventListener('click', ()=>{

  if(bol == true){

    bol = false;
    hamb.src = "images/icon-close.svg"
    document.querySelector('nav').style.display = 'flex'
    document.querySelectorAll('.arrow').forEach((e)=>{
      e.src = "images/icon-arrow-dark.svg"
    })
  }else{
    bol = true;
    hamb.src = "images/icon-hamburger.svg"
    document.querySelector('nav').style.display = 'none'

  }

})