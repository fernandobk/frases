
async function init(){
    // 
    window.onload = function() { document.body.classList.remove('is-preload'); }
    window.ontouchmove = function() { return false; }
    window.onorientationchange = function() { document.body.scrollTop = 0; }

    window.d = await fetch('frases.json');
    window.d = await d.json();
    
    mostrar_frase();
}

function mostrar_frase(){
    let i = parseInt(localStorage.i) || 0;
    if( i => window.d.length ){ i = 0; }
    
    // Imprimir frase
    frase.innerText = d[i].frase;
    autor.innerText = d[i].autor;
    libro.innerText = d[i].libro;
    otrainfo.innerText = d[i].otrainfo;

    localStorage.i = i + 1;
}