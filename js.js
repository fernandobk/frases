
async function init(){
    // Solicitamos datos al servicio
    let obt = await fetch('https://api.jsonbin.io/b/62009b6b4ce71361b8d1266b');
    if( obt.status === 200 ){
        localStorage.data = await obt.text();
    }

    window.data = JSON.parse(localStorage.data);
    mostrar_frase();
}

function mostrar_frase(n){
    if( n === 0 ){
        let i = Math.floor(Math.random() * window.data.length );
    } else {
        let i = parseInt(localStorage.index) || 0;
            i = i + n;
        if( i >= window.data.length ){ i = 0; }
    }
    // Almacenamos nuevo índice
    localStorage.index = i;
    
    // Imprimir frase
    frase.innerText = window.data[i].frase;
    autor.innerText = window.data[i].autor;
    libro.innerText = window.data[i].libro;
    otrainfo.innerText = window.data[i].otrainfo;
}

function enviar_frase(){
    prompt();
}