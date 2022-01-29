
async function init(){

    window.d = await fetch('frases.json');
    window.d = await d.json();
    
    mostrar_frase();
}

function mostrar_frase(){
    let i = parseInt(localStorage.i) || 0;
    if( i => window.d.length ){ i = 0; }
    
    // Imprimir frase
    frase.innerText = window.d[i].frase;
    autor.innerText = window.d[i].autor;
    libro.innerText = window.d[i].libro;
    otrainfo.innerText = window.d[i].otrainfo;

    localStorage.i = i + 1;
}