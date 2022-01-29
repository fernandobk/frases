window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

async function init(){
    let i = localStorage.i || 0;

    let d = await fetch('frases.json');
        d = await d.json();
        d = d[i];
    
    frase.innerText = d.frase;
    autor.innerText = d.autor;
    libro.innerText = d.libro;
    otrainfo.innerText = d.otrainfo;

    localStorage.i = i + 1;
}