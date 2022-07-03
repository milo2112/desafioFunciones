//Se genera archivo script.js: resuelve requerimiento 3.3 

function pintar(color = "green") {
    // Se comenta esta asignación para no tener que seleccionar elemento  
    // nuevamente dentro de la función: resuelve requerimiento 3.1
    // ele = document.getElementById("ele1") 
    
    ele.style.backgroundColor = color;
}

// Se comenta esta asignación para usar función anónima: resuelve requerimiento 3.1
// ele.addEventListener("click", pintar);

ele = document.getElementById("ele1");

//invocando función sin parámetro para activar valor por defecto "green" en la función: resuelve requerimiento 3.2
pintar();

// función anónima: resuelve requerimiento 3.1
ele.addEventListener("click", function () {
    pintar("yellow");
}); 