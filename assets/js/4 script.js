// variables globales: 
let entryColor; // entryColor guardará el color dependiendo de la letra 
let flag = 0;   // flag será booleano para controlar los click cuando la letra != "d", "s" o "a" 

// define función que cambia el color a los DIV
function paint(fColor, fDiv) {
    fDiv.style.backgroundColor = fColor;
    document.getElementById("textentry").value = "";
}

// declara funcion anónima que captura tecla y asocia color
textentry.addEventListener("keydown", function (event) {
    if (event.key == 'a' || event.key == 'A') {
        entryColor = "black";
        document.getElementById("message").innerHTML = "Presionaste la letra '" + event.key + "' y pintará Negro cualquiera de los cuadros al hacer click sobre ellos";
        document.getElementById("textentry").value = "";
        flag = 0;
    } else if (event.key == 's' || event.key == 'S') {
        entryColor = "blue";
        document.getElementById("message").innerHTML = "Presionaste la letra '" + event.key + "' y pintará Azul cualquiera de los cuadros al hacer click sobre ellos";
        document.getElementById("textentry").value = "";
        flag = 0;
    } else if (event.key == "d" || event.key == 'D') {
        entryColor = "pink";
        document.getElementById("message").innerHTML = "Presionaste la letra '" + event.key + "' y pintará Rosado cualquiera de los cuadros al hacer click sobre ellos";
        document.getElementById("textentry").value = "";
        flag = 0;
    }
    else {
        document.getElementById("message").innerHTML = "Lo siento, debes ingresar una de las letras indicadas y no podrás cambiar color...";
        document.getElementById("textentry").value = "";
        flag = 1;
    }
});
//Funciones anónimas relacionadas a cada div
div1.addEventListener("click", function () {
    if (flag == 0) { //control que evita cambiar color de DIV después de apretar tecla distinta a "a", "s" o "d"
        paint(entryColor, div1);
    }
});
div2.addEventListener("click", function () {
    if (flag == 0) { //control que evita cambiar color de DIV después de apretar tecla distinta a "a", "s" o "d"
        paint(entryColor, div2);
    }
});
div3.addEventListener("click", function () {
    if (flag == 0) { //control que evita cambiar color de DIV después de apretar tecla distinta a "a", "s" o "d"
        paint(entryColor, div3);
    }
});
div4.addEventListener("click", function () {
    if (flag == 0) { //control que evita cambiar color de DIV después de apretar tecla distinta a "a", "s" o "d"
        paint(entryColor, div4);
    }
});
