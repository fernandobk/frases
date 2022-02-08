
async function init(){
    await obt_datos();
    mostrar_frase();
}

async function obt_datos(){
    // Solicitamos datos al servicio
    let obt = await fetch('https://api.jsonbin.io/v3/b/6200bb9bf77b236211eef335/latest', {headers: {'X-Bin-Meta':false}});
    if( obt.status === 200 ){
        localStorage.data = await obt.text();
    } else {
        alert('No se pudo obtener información de internet correctamente. Error '+obt.status+': '+obt.statusText);
    }
}

async function enviar_datos(){
    let obt = await fetch(
        'https://api.jsonbin.io/v3/b/6200bb9bf77b236211eef335',
        {
            method: 'PUT',
            body: localStorage.data,
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2b$10$e9hka2uXqiI51ffQjR2zj.x.RW11VhFa7yJ5Ydu4x0z58ap1MKsLi', // Aclaración: Esta clave debería estar oculta o en el backend en un proyecto serio.
                'X-Bin-Versioning': true
            }
        }
    );

    if( obt.status === 200 ){
        obt = await obt.json();
        localStorage.data = JSON.stringify(obt.record);
    } else {
        console.error(obt.json());
        alert(`Error ${obt.status}: ${obt.statusText} \n Ver consola.`);
    }
}

function mostrar_frase(n){
    let data = JSON.parse(localStorage.data);
    let i = parseInt(localStorage.index);
    if( isNaN(i) || i>=data.length ){ i = data.length - 1; }
    
    if( isFinite(n) ){
        i = i + n;
        if( i === -1 ){ i = data.length - 1; }
        if( i === data.length ){ i = 0; }
    }
    if( n === 0 ){
        i = Math.floor(Math.random() * data.length );
    }
    // Almacenamos nuevo índice
    localStorage.index = i;
    
    // Imprimir frase
    frase.innerText = data[i].frase;
    pie.innerText = data[i].pie;
}

async function enviar_frase(){
    let p_frase = prompt('Escribir frase: (cuidar ortografía)');
    if( !p_frase ){ return; }
    let p_pie = prompt('Escribir pie de la frase: (cuidar ortografía)');
    if( !p_pie ){ return; }
    
    let data = JSON.parse(localStorage.data);
        data.push( {frase: p_frase.trim(),pie: p_pie.trim()} );
    localStorage.data = JSON.stringify(data);
    frase.innerText = '...';
    pie.innerText = '...'
    await enviar_datos();
    localStorage.removeItem('index');
    mostrar_frase();
}

async function eliminar_frase(){
    let i = parseInt(localStorage.index);
    if( confirm('Se eliminará la frase mostrada actualmente: '+frase.innerText )){
        let data = JSON.parse(localStorage.data);
            data.splice(i,1);
        localStorage.data = JSON.stringify(data);
        frase.innerText = '...';
        pie.innerText = '...';
        await enviar_datos();
        mostrar_frase();
    }
}