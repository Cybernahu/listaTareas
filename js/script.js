//variables

var lista = document.getElementById("lista"),
tareaInput = document.getElementById("tareaInput"),
btnNuevaTarea = document.getElementById("btnAgregar");

//funciones
var agregarTarea = function(){
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);
    if( tarea === "" ){
        tareaInput.setAttribute("placeholder", "La tarea no es valida");
        tareaInput.className = "error";
        return false;
    }
    //colocamos la nueva tarea dentro del a elemento
    enlace.appendChild(contenido);
    //le colocamos un href atributo
    enlace.setAttribute("href", "#");
    //agregamos el enlace al li elemento
    nuevaTarea.appendChild(enlace);
    //colocamos al final de la lista,la nueva tarea
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for( var i = 0; i <= lista.children.length -1; i++ ){
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
    }
};


var comprobarInput = function(){
    tareaInput.className = "input-agregar";
    tareaInput.setAttribute("placeholder", "Agrega una nueva tarea");
};
var eliminarTarea = function(){
    this.parentNode.removeChild(this);
};
//eventos

//agregar tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//comprobar input
tareaInput.addEventListener("click", comprobarInput);
//borrando elementos de la lista

for( var i = 0; i <= lista.children.length -1; i++){
    lista.children[i].addEventListener("click", eliminarTarea);
    }


