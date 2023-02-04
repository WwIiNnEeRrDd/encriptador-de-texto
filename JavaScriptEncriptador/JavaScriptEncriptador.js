
//mostrar imagenes y textos de espera

function espera(){
    
    var texto = document.getElementById('texto').value;
    
    if(texto == "")
    {
        document.getElementById('imagendeespera').style.display = 'block';
        document.getElementById('imagendeespera2').style.display = 'block';
        document.getElementById('mensajetitulo').style.display = 'block';
        document.getElementById('mensaje').style.display = 'block';
        document.getElementById('botoncopiar').style.display = 'none';
        function mensaje()
        {
            return "";
        }
        document.getElementById('marco').innerHTML = mensaje();
        return;
    }
    else
    {
        return;
    }
    
}

//encriptar texto

function encriptar(){

    var textoencriptar = document.getElementById('texto').value;

    function mensaje() {
        
        var textoencriptado = textoencriptar.replaceAll('e', 'enter');
        var textoencriptado = textoencriptado.replaceAll('i', 'imes');
        var textoencriptado = textoencriptado.replaceAll('a', 'ai');
        var textoencriptado = textoencriptado.replaceAll('o', 'ober');
        var textoencriptado = textoencriptado.replaceAll('u', 'ufat');
        return textoencriptado;

    }

    if(textoencriptar == "")
    {
        return;
    }
    else
    {
        document.getElementById('imagendeespera').style.display = 'none';
        document.getElementById('imagendeespera2').style.display = 'none';
        document.getElementById('mensajetitulo').style.display = 'none';
        document.getElementById('mensaje').style.display = 'none';
        document.getElementById('botoncopiar').style.display = 'block';
        document.getElementById('marco').innerHTML = mensaje();
    }
}

//desencriptar texto

function desencriptar(){
    var textodesencriptar = document.getElementById('texto').value;

    function mensaje() {
        
        var textodesencriptado = textodesencriptar.replaceAll('enter', 'e');
        var textodesencriptado = textodesencriptado.replaceAll('imes', 'i');
        var textodesencriptado = textodesencriptado.replaceAll('ai', 'a');
        var textodesencriptado = textodesencriptado.replaceAll('ober', 'o');
        var textodesencriptado = textodesencriptado.replaceAll('ufat', 'u');
        return textodesencriptado;
    }

    if(textodesencriptar == "")
    {
        return;
    }
    else
    {
        document.getElementById('imagendeespera').style.display = 'none';
        document.getElementById('imagendeespera2').style.display = 'none';
        document.getElementById('mensajetitulo').style.display = 'none';
        document.getElementById('mensaje').style.display = 'none';
        document.getElementById('botoncopiar').style.display = 'block';
        document.getElementById('marco').innerHTML = mensaje();
    }

}

//mostrar y dejar de mostrar reglas

function reglasover(){
    document.getElementById('imagenreglas').style.display = 'none';
    document.getElementById('reglas').style.display="block";
}

function reglasout(){
    document.getElementById('imagenreglas').style.display = 'block';
    document.getElementById('reglas').style.display="none";
}

//copiar texto

function copiartexto(){

    let mensaje = document.querySelector("#marco");
    mensaje.select();
    if(mensaje == "")
    {
        return;
    }
    else
    {
        document.execCommand("copy");
        return;
    }
}