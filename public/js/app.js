var marginTop = -200;
const btnFondoA = document.getElementById('fondoA');
const btnFondoB = document.getElementById('fondoB');
const btnPlanetaA= document.getElementById('plA');
const btnPlanetaB= document.getElementById('plB');
const cajaPlaneta = document.getElementById('planeta');
const titulo = document.getElementById('titulo');
const arriba = document.getElementById('arriba');
const abajo = document.getElementById('abajo');
const rotar = document.getElementById('rotar');
//  ++++++++++++++++++++++++++++
//  +++++++ STYLE ++++++++++
//  ++++++++++++++++++++++++++++

const style = {
    "background-image" : "url(public/images/bg1.jpg)",
    "background-image2": "url(public/images/bg2.jpg)",
    "planeta": "display: block; margin-top: -150px; transition: all .3s ease-in",
    "src": {
        "planeta1": 'public/images/planet1.gif',
        "planeta2": 'public/images/planet2.gif'
    },
    "clasePlaneta": "col-8 col-sm-4 offset-sm-4 col-md-1"
}


//  ++++++++++++++++++++++++++++
//  +++++++ LISTENERS ++++++++++
//  ++++++++++++++++++++++++++++

abajo.addEventListener('click', () =>  moverAbajo())
arriba.addEventListener('click', () => moverArriba())
rotar.addEventListener('click', () => {rotacion()})


btnFondoA.addEventListener("click", () =>{
    titulo.setAttribute('class', 'text-light');
    let body = document.querySelector('body');
    body.setAttribute('style', `background-image: ${style["background-image"]}; background-size: cover; height: 100vh;`);
});
btnFondoB.addEventListener("click", () =>{
    titulo.setAttribute('class', 'text-light');
    let body = document.querySelector('body');
    body.setAttribute('style', `background-image: ${style["background-image2"]}; background-size: cover; height: 100vh;`);
});
btnPlanetaA.addEventListener("click", () => {
    marginTop = -200
    let img = document.querySelector('img');
    if(img != null){
        img.remove();
        let planeta = document.createElement('img');
        planeta.setAttribute('class', `${style.clasePlaneta}`);
        planeta.setAttribute('src', `${style.src.planeta1}`);
        planeta.setAttribute('style', `${style.planeta}`);
        planeta.setAttribute('id', 'img');
        cajaPlaneta.appendChild(planeta)
    }else{
        let planeta = document.createElement('img');
        planeta.setAttribute('class', `${style.clasePlaneta}`);
        planeta.setAttribute('src', `${style.src.planeta1}`);
        planeta.setAttribute('style', `${style.planeta}`);
        planeta.setAttribute('id', 'img');
        cajaPlaneta.appendChild(planeta)
    }
    
})
btnPlanetaB.addEventListener("click", () => {
    marginTop = -200
    let img = document.querySelector('img');
    if(img != null){
        img.remove();
        let planeta = document.createElement('img');
        planeta.setAttribute('class', `${style.clasePlaneta}`);
        planeta.setAttribute('src', `${style.src.planeta2}`);
        planeta.setAttribute('style', `${style.planeta}`);
        planeta.setAttribute('id', 'img');
        cajaPlaneta.appendChild(planeta)
    }else {
        let planeta = document.createElement('img');
        planeta.setAttribute('class', `${style.clasePlaneta}`);
        planeta.setAttribute('src', `${style.src.planeta2}`);
        planeta.setAttribute('style', `${style.planeta}`);
        planeta.setAttribute('id', 'img');
        cajaPlaneta.appendChild(planeta)
    }
})


//  ++++++++++++++++++++++++++++
//  +++++++ FUNCIONES ++++++++++
//  ++++++++++++++++++++++++++++


function moverArriba(){
    if(marginTop <= -200){
        console.log('Es igual a: ', marginTop)
        let planeta = document.querySelector('img');
        planeta.setAttribute('style', `margin-top: ${marginTop}px; transition: all .3s ease-in`);
    }else{
        let planeta = document.querySelector('img');
        marginTop = marginTop - 40
        console.log('Margen:', marginTop)
        planeta.setAttribute('style', `margin-top: ${marginTop}px; transition: all .3s ease-in`);
    }
}

function moverAbajo(){
    let planeta = document.querySelector('img');
    if(marginTop === -200){
        console.log('MarginTop esta en: ', marginTop)
        marginTop = marginTop + 100
        console.log(marginTop)
        planeta.setAttribute('style', `margin-top: ${marginTop}px; transition: all .3s ease-in`);
    }else{
        if(marginTop >= 300){
            console.log('Llego al limite:', marginTop)
            marginTop = 320
        }
        marginTop = marginTop + 40
        console.log('MarginTop: ', marginTop)
        planeta.setAttribute('style', `margin-top: ${marginTop}px; transition: all .3s ease-in`);
    }
}

function rotacion(){
    let planeta = document.getElementById('img');
    if(!planeta){return alert('Seleccione un planeta para activar rotación')}
    if(!planeta.classList.contains("rotacion")){
        planeta.classList.add('rotacion');
    }else{
        planeta.classList.remove('rotacion');
    }
}