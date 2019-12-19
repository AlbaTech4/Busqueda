function buscar(){

    var palabra=document.getElementById("palabra").value;

    if (palabra == "verde"){
        document.getElementById("mensaje").value = "Palabra encontrada"; 
    }
    else if (palabra == "rojo"){
        document.getElementById("mensaje").value = "Palabra encontrada"; 
    }
    else if (palabra == "azul"){
        document.getElementById("mensaje").value = "Palabra encontrada"; 
    }
    else{
        document.getElementById("mensaje").value = "Palabra NO encontrada";
    }

}

function salir(){
    window.close();
}

function reinicio(){
    document.getElementById("mensaje").value="";
    document.getElementById("palabra").value="";
}