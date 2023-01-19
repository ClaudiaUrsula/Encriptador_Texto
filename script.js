function encriptar(){
    let texto=document.getElementById("texto_ingresado").value.toLocaleLowerCase();
    const vocales=['a','e','i','o','u'];
    const palabras=['ai','enter','imes','ober','ufat'];
    if(es_Especial(texto)){
        for(let i=0;i<5;i++){
            texto=texto.replace(new RegExp(vocales[i],'igm'),palabras[i]);
        }
        document.getElementById('chica_lupa').style.display="none";
        document.getElementById('h2_chica_lupa').style.display="none";
        document.getElementById('p_chica_lupa').style.display="none";
        document.getElementById("invisible_textarea").style.display="show";
        document.getElementById("invisible_textarea").style.display="initial";
        document.getElementById("copy").style.display='show';
        document.getElementById("copy").style.display='initial';
        document.getElementById("invisible_textarea").innerHTML=texto;
    }else{
        alert('No se permiten caracteres especiales')
    }    
}
function desencriptar(){
    let texto=document.getElementById("texto_ingresado").value.toLowerCase();
    const vocales=['a','e','i','o','u'];
    const palabras=['ai','enter','imes','ober','ufat'];
    if(es_Especial(texto)){
        for(let i=0;i<5;i++){
            texto=texto.replace(new RegExp(palabras[i],'igm'),vocales[i]);
        }
        document.getElementById('chica_lupa').style.display="none";
        document.getElementById('h2_chica_lupa').style.display="none";
        document.getElementById('p_chica_lupa').style.display="none";
        document.getElementById("invisible_textarea").style.display="show";
        document.getElementById("invisible_textarea").style.display="inherit";
        document.getElementById("copy").style.display='show';
        document.getElementById("copy").style.display='initial';
        document.getElementById("invisible_textarea").innerHTML=texto;
    }else{
        alert('No se permiten caracteres especiales')
    } 
}
function copiar(){
    const textarea=document.querySelector('#invisible_textarea');
    navigator.clipboard.write([new ClipboardItem({'text/plain': new Blob([textarea.value],{type: 'text/plain'})
    })
]).then(()=>{
    alert('Texto copiado');
}).catch(err=> {
    alert('Error al copiar texto: '+err);
});
}
function es_Especial(texto){
    const regExp = /[^a-z0-9ñ ]/gm;
    return (texto.match(regExp)==null);
}
window.addEventListener('load',function(){
    this.document.getElementById("texto_ingresado").focus();
});