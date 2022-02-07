
async function init(){
    // Solicitamos datos al servicio
    let obt = await fetch('https://api.jsonbin.io/b/6200b76cf77b236211eeedde');
    if( obt.status === 200 ){
        localStorage.data = await obt.text();
    }

    window.data = JSON.parse(localStorage.data);
    mostrar_frase();
}

function mostrar_frase(n){
    let i = parseInt(localStorage.index) || 0;
    
    if( isFinite(n) ) {
        i = i + n;
        if( i < 0 ){ i = 0; }
        if( i >= window.data.length ){ i = 0; }
    }
    if( n === 0 ){
        i = Math.floor(Math.random() * window.data.length );
    }
    // Almacenamos nuevo índice
    localStorage.index = i;
    
    // Imprimir frase
    frase.innerText = window.data[i].frase;
    pie.innerText = window.data[i].pie;
}

function enviar_frase(){
    prompt();
}