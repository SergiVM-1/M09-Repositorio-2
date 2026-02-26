//El fichero jquery.js debe comenzar con un comentario de cabecera con:
//Sergio Valenzuela Martel
//Las misiones completadas - M1, M2, M3, M4, M5
//Una línea explicando qué hace cada bloque de código

//Esperar el DOM
$(document).ready(function(){

    //Misión 1 Selección de Elementos:
    //1.1 = Selección por etiqueta html:
    //Cambia el color de los h2 y le añade un borde abajo
    $("h2").css({
        "color": "#00A676",
        "border-bottom": "2px solid #0057B7"
    });

    //1.2 = Selección por clase CSS:
    //Cambia el color de fondo de la "tarjeta" de activiades
    $(".actividad").css({
        "background-color": "#75c382",
        "transition": "0.3s"
    });

    //1.3 = Selección por ID: 
    //Aumenta el tamaño de la fuente del id seleccionado
    $("#idi-visita").css({
        "font-size": "30px",
        "letter-spacing": "2px"
    });

    //1.4 = Uso de al menos 1 selector avanzado:
    //Seleccionamos solo las actividades impares y les cambiamos el color del fondo
    $(".actividad:odd").css({
        "background-color": "#e6f7ff"
    });

    //Misión 2 Adición y Supresión del DOM
    //2.1 = Añadir elemento al DOM con append o prepend:
    //Añadimos un texto que anima al usuario a seguir en la página
    $("#idi-visita").append(" - Vamos allá");


    //2.2 = Eliminar del DOM con remove o empty:
    //Elimina un texto inecesario antes del botón del horario
    $("#idi-horario").remove();

    //2.3 = Tiene sentido

    //Misión 3 Gestión de Eventos
    //3.1 = Evento de raton capturado con .on() y visible:
    //Cada vez que hacemos click en una actividad se cambia el fondo a blanco
    $(".actividad").on("click", function() {
        $(this).css("background", "white");
        alert("Clase clickada")
    });

    //3.2 = Evento de teclado con .on() y visible:
    //Hacemos que el video se active o pause con el evento del espaciado
    $(document).on("keydown", function(e){

        //No se ejecuta si estamos escribiendo en un input o textarea (para los formularios de contacto)
        if ($(e.target).is("input, textarea")) {
            return;
        }

        if(e.code === "Space") {
            e.preventDefault();

            const video = $(".video_fondo")[0];
            if(video){
                if(video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        }
    });
    
    //3.3 = Tercer evento de otro tipo:
    //Básicamente remarcamos el cuadro de texto del forulario en contactos
    $("input, textarea").focus(function(){
        $(this).css({
            "border": "3px solid #00A676",
            "box-shadow": "0 0 5px #00A676"
        });
    }).blur(function(){
        $(this).css({
            "border": "1px solid #ccc",
            "box-shadow": "none"
        });
    });

//3.4 = Uso correcto del $(this):
    

//Misión 4 Animaciones y Transiciones
    //4.1 = Uso de fadeIn()/fadeOut/show()/hide() en alguna interacción:
    //las actividades aparecen en un fundido.
    $(".actividad").hide().fadeIn(2000);

    //4.2 = Uso de slideDown/slideUp en alguna interacción:
    //Al clicar el video este desaparece, ya que para darle al play solo hace falta el space
    $(".video_fondo").parent().on("mousedown", function(){
    $(this).slideUp(600);
    });

    //4.3 = Uso de .animate() con al menos 2 propiedades CSS:
    //Al pasar el ratón por encima el contenido de la tarjeta se centra y se
    //vuelve algo más opaco, al sacar el ratón el contenido vuelve a su posición original
    $(".actividad").on("mouseenter", function(){
    $(this).animate({
        paddingLeft: "30px",
        opacity: 0.8
    }, 300);
    });

    $(".actividad").on("mouseleave", function(){
    $(this).animate({
        paddingLeft: "0px",
        opacity: 1
    }, 300);
    });

//4.4 = Las animaciones encajan con el diseño


//Misión 5 Conectores
//5.1 = jQuery UI correctamente incluido:


    //5.2 = plug-in elegido implementado y funcionando:
    $(".boton-idioma").button(); 
    $("#selector-idiomas").controlgroup();

    //5.3 = plug-in elegido tiene sentido:
    //Mejora la interfaz del selector de idiomas haciéndolo consistente
    //Agrupa los botones visualmente
    $("#selector-idiomas").css({
            "display": "flex",
            "justify-content": "center",
            "margin-bottom": "20px"
    });
});
