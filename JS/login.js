
//Menu Scroll
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    };

    ubicacionPrincipal = desplazamientoActual;
});



//---Menu Hamburguesa---//
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", () => {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    };

    enlacesHeader.classList.toggle("menudos");

});


// Función para los tab
const tab = document.querySelectorAll('.tab');
const bloque = document.querySelectorAll('.bloque');

//Recorriendo todos los li que tiene clase tab
tab.forEach((cadaTab, i) => {
    //Asignar un Click a cada li
    tab[i].addEventListener('click', () => {

        //Recorre todos los li del arreglo
        tab.forEach((cadaTab, i) => {
            //Quita la clase active a todos los li tab
            tab[i].classList.remove('active');

            //Quita la clase active a cada clase bloque
            bloque[i].classList.remove('active');
        });

        //Añade clase active en el li tab que hicimos click
        tab[i].classList.add('active');

        //Añade clase active en el bloque que hicimos click
        bloque[i].classList.add('active');
    });
});

