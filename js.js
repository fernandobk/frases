
async function init(){
    // Solicitamos datos al servicio
    let obt = await fetch('https://api.jsonbin.io/b/62008c97f77b236211eeabef');
    if( obt.status === 200 ){
        obt = await obt.json();
        // Si la fecha de los datos locales es distinta a la obtenida actualizamos los datos locales.
        if( localStorage.data_version !== Date.parse(obt.metadata.createdAt) ){
            localStorage.data = JSON.stringify(obt.record);
            localStorage.data_version = Date.parse(obt.metadata.createdAt);
        }
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