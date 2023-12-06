const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");
const modal7 = document.getElementById("modal7");
const modal8 = document.getElementById("modal8");
const modal9 = document.getElementById("modal9");
const modal10 = document.getElementById("modal10");
const palavra = document.querySelectorAll(".palavra")
const fechar = document.querySelectorAll('.fechar')
 
palavra[0].addEventListener('click',() =>{
    modal.style.visibility = 'visible'
})
 
fechar[0].addEventListener('click', ()=>{
    modal.style.visibility= 'hidden'
})


palavra[1].addEventListener('click',() =>{
    modal1.style.visibility = 'visible'
})
 
fechar[1].addEventListener('click', ()=>{
    modal1.style.visibility= 'hidden'
})

palavra[2].addEventListener('click',() =>{
    modal2.style.visibility = 'visible'
})
 
fechar[2].addEventListener('click', ()=>{
    modal2.style.visibility= 'hidden'
})

palavra[3].addEventListener('click',() =>{
    modal3.style.visibility = 'visible'
})
 
fechar[3].addEventListener('click', ()=>{
    modal3.style.visibility= 'hidden'
})

palavra[4].addEventListener('click',() =>{
    modal4.style.visibility = 'visible'
})
 
fechar[4].addEventListener('click', ()=>{
    modal4.style.visibility= 'hidden'
})

palavra[5].addEventListener('click',() =>{
    modal5.style.visibility = 'visible'
})
 
fechar[5].addEventListener('click', ()=>{
    modal5.style.visibility= 'hidden'
})

palavra[6].addEventListener('click',() =>{
    modal6.style.visibility = 'visible'
})
 
fechar[6].addEventListener('click', ()=>{
    modal6.style.visibility= 'hidden'
})

palavra[7].addEventListener('click',() =>{
    modal7.style.visibility = 'visible'
})
 
fechar[7].addEventListener('click', ()=>{
    modal7.style.visibility= 'hidden'
})

palavra[8].addEventListener('click',() =>{
    modal8.style.visibility = 'visible'
})
 
fechar[8].addEventListener('click', ()=>{
    modal8.style.visibility= 'hidden'
})

palavra[9].addEventListener('click',() =>{
    modal9.style.visibility = 'visible'
})
 
fechar[9].addEventListener('click', ()=>{
    modal9.style.visibility= 'hidden'
})

palavra[10].addEventListener('click',() =>{
    modal10.style.visibility = 'visible'
})
 
fechar[10].addEventListener('click', ()=>{
    modal10.style.visibility= 'hidden'
})
 
 
const audio = document.getElementById("audio1")
const botao = document.getElementById("botao1")

botao.addEventListener('click', (e)=>{
    audio.play
})