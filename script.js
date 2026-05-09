// PROFESOR ACTUAL
let profeActual = 0;

// TEXTO ACTUAL
let textoActual = 0;

// CONTRASEÑAS
const passwords = [
    "180485",
    "280823",
    "280824",
    "310823",
    "010925",
    "260824"
];

// FONDOS
const fondos = [
    "assets/historia.jpg",
    "assets/informatica.jpg",
    "assets/quimica.jpg",
    "assets/fisica.jpg",
    "assets/marisela.jpg",
    "assets/amaro.jpg"
];

// TEXTOS
const mensajes = [

    [
        "Ser maestro no debe ser fácil. Todos los días llegan alumnos diferentes, con problemas diferentes, emociones diferentes y maneras distintas de aprender. Y aun así usted siempre encontró la forma de enseñarnos, apoyarnos y hacernos sentir escuchados.",
        "Gracias por su paciencia infinita, por su dedicación y por cada esfuerzo que hacía incluso cuando seguramente estaba cansada. Muchas veces los alumnos no vemos todo lo que hay detrás del trabajo de un maestro, pero con el tiempo uno aprende a valorar cada pequeño detalle.",
        "Me llevo muchos recuerdos bonitos de sus clases. Recuerdo las veces que nos hizo reír, cuando intentaba animarnos y también cuando nos daba consejos que iban mucho más allá de la escuela.",
        "Esta carta también es una despedida. La secundaria termina y cada quien seguirá caminos diferentes, pero quería que supiera que usted dejó una huella muy bonita en mi vida.",
"Tal vez en unos años no recuerde todos los exámenes o tareas, pero sí recordaré a los maestros que hicieron que esta etapa fuera especial, y usted definitivamente es una de esas personas. Gracias por enseñarnos con el corazón. Gracias por preocuparse por nosotros y por darnos mucho más que simples clases."
    ],

    [
        "No quería terminar la secundaria sin darle las gracias por todo lo que hizo durante este tiempo. Aunque muchas veces las clases parecen algo cotidiano, con el tiempo uno entiende que detrás de cada lección hay una persona esforzándose por ayudarnos a crecer.",
        "Gracias por compartir sus conocimientos con nosotros y también por compartir su paciencia, su comprensión y su tiempo. Usted hizo que muchos días difíciles fueran más llevaderos. Sus palabras, su manera de enseñar y su presencia hicieron una diferencia más grande de lo que imagina.",
        "La secundaria fue una etapa llena de cambios, emociones y aprendizajes, y me alegra muchísimo haber coincidido con una maestra como usted durante este camino. Hoy me despido de esta etapa con nostalgia, pero también con gratitud. Porque me llevo recuerdos hermosos, amistades importantes y maestros que dejaron huella en mi vida. Quiero que sepa que siempre recordaré sus clases y todo lo que aprendí con usted.",
        "Gracias por enseñarnos con paciencia incluso cuando nosotros hacíamos difícil el trabajo. Gracias por nunca dejar de intentar ayudarnos. Espero que este pequeño detalle le saque una sonrisa y le recuerde lo importante que es para sus alumnos."
    ],

    [
        "Hoy quiero dedicarle estas palabras porque sinceramente siento que un simple gracias no alcanza para expresar todo lo que siento. Durante estos años usted fue una persona muy importante dentro de mi vida escolar. Sus enseñanzas, consejos y forma de ser hicieron que esta etapa fuera mucho más especial.",
        "Gracias por enseñarnos con paciencia, por intentar comprendernos y por siempre buscar la manera de ayudarnos incluso cuando las cosas se complicaban. Muchas veces los alumnos no sabemos cómo expresar lo mucho que apreciamos a nuestros maestros, pero con el tiempo entendemos el enorme impacto que tienen en nosotros.",
        "Ahora que la secundaria termina, me doy cuenta de cuánto voy a extrañar muchas cosas: los compañeros, los momentos divertidos y también a maestros como usted. Gracias por formar parte de esta etapa tan importante de mi vida. Gracias por cada regaño que nos ayudó a mejorar, por cada consejo sincero y por cada momento en el que nos hizo sentir capaces."
    ],

    [
        "No sabía cómo empezar esta carta porque sinceramente ninguna palabra parece suficiente para agradecerle todo lo que hizo por nosotros. A veces uno piensa que la secundaria será solo tareas, exámenes y clases, pero con maestros como usted se convierte en una etapa llena de recuerdos que jamás se olvidan.",
        "Gracias por tener paciencia conmigo, por explicarnos una y otra vez cuando no entendíamos y por nunca dejarnos sentir menos por equivocarnos. Gracias por enseñarnos que aprender también puede ser divertido y que incluso los días más pesados pueden mejorar con una sonrisa.",
        "Hoy me toca despedirme de esta etapa y también de muchos maestros que formaron parte de ella. Y honestamente me da un poco de nostalgia pensar que ya no volveré a entrar a su salón como antes. Pero también me hace feliz saber que tuve la oportunidad de conocer a una maestra tan dedicada y tan buena persona.",
        "Gracias por cada consejo, por cada momento en el que nos motivó y por ayudarnos a crecer no solo como estudiantes, sino también como personas.",
        "Este detalle quizá sea pequeño comparado con todo lo que usted merece, pero lleva muchísimo cariño y gratitud de mi parte. Espero que cada vez que recuerde a nuestra generación, lo haga con una sonrisa.",
        "Nunca olvidaré todo lo que aprendí con usted."
    ],


    [
        "A veces creemos que un maestro solo enseña una materia, pero usted hizo muchísimo más que eso. Durante este tiempo nos enseñó valores, nos enseñó a esforzarnos y a seguir adelante incluso cuando las cosas parecían difíciles.",
        "Gracias por no rendirse con nosotros. Gracias por buscar siempre la manera de ayudarnos y por tratar de sacar lo mejor de cada alumno. Quiero que sepa que muchas veces sus palabras llegaron más lejos de lo que imagina. En ocasiones un simple consejo suyo podía cambiar completamente el día de alguien.",
        "Gracias por formar parte de mis recuerdos más bonitos de la secundaria. Gracias por cada momento divertido, por cada enseñanza y por toda la paciencia que tuvo con nosotros. Este regalo es mi manera de decirle que valoro muchísimo todo lo que hizo por mí y por mis compañeros."
    ],

    [
        "Quiero comenzar esta carta diciéndole gracias. Gracias por cada palabra, cada enseñanza y cada momento en el que decidió dedicar su tiempo y paciencia a nosotros. A veces como alumnos no nos damos cuenta de todo lo que un maestro hace por nosotros, pero ahora entiendo que detrás de cada clase había esfuerzo, cansancio y también mucho cariño.",
        "Durante estos años usted no solo me enseñó una materia. También me enseñó a confiar más en mí, a seguir adelante aunque las cosas se pusieran difíciles y a no rendirme tan fácil. Tal vez no lo decía todos los días, pero realmente admiré su manera de enseñar y la pasión con la que hacía su trabajo.",
        "Gracias por acompañarme en una parte tan importante de mi crecimiento. Gracias por sus regaños, por las risas, por los consejos y por creer en nosotros incluso cuando nosotros mismos dudábamos.",
        "Espero que nunca olvide lo importante que es para sus alumnos. Tal vez un maestro nunca llega a dimensionar cuánto marca la vida de un estudiante, pero créame que muchas de sus palabras y enseñanzas se quedan para siempre",
        "Le deseo lo mejor hoy y siempre. Ojalá la vida le regrese toda la paciencia, cariño y dedicación que entrega cada día."
    ]
];

// ABRIR MODAL
function abrirModal(numero){

    profeActual = numero;

    document.getElementById("modal").style.display = "flex";

    document.getElementById("password").value = "";

    document.getElementById("error").innerHTML = "";
}

// CERRAR MODAL
function cerrarModal(){

    document.getElementById("modal").style.display = "none";
}

// VERIFICAR
function verificar(){

    let pass = document.getElementById("password").value;

    if(pass === passwords[profeActual]){

        cerrarModal();

        abrirPantalla();

    }else{

        document.getElementById("error").innerHTML =
        "ERROR - Contraseña incorrecta";
    }
}

// ABRIR PANTALLA
function abrirPantalla(){
    
    const musicaMenu =
    document.getElementById("musicaMenu");

    const musicaProfe =
    document.getElementById("musicaProfe");

    if(musicaMenu){

        musicaMenu.pause();

        musicaMenu.currentTime = 0;
    }

    if(musicaProfe){

        musicaProfe.volume = 0.3;

        musicaProfe.play();
    }

    document.getElementById("menu").style.display = "none";

    document.getElementById("pantallaProfe").style.display = "block";

    document.getElementById("fondoProfe").src =
    fondos[profeActual];

    textoActual = 0;

    mostrarTexto();
}

// MOSTRAR TEXTO
function mostrarTexto(){

    document.getElementById("texto").innerHTML =
    mensajes[profeActual][textoActual];

    if(textoActual === mensajes[profeActual].length - 1){

        document.getElementById("siguiente").style.display = "none";

        document.getElementById("gracias").style.display = "block";

    }else{

        document.getElementById("siguiente").style.display = "block";

        document.getElementById("gracias").style.display = "none";
    }
}

// SIGUIENTE
function siguienteTexto(){

    textoActual++;

    mostrarTexto();
}

// VOLVER
function volverMenu(){

    const musicaMenu =
    document.getElementById("musicaMenu");

    const musicaProfe =
    document.getElementById("musicaProfe");

    if(musicaProfe){

        musicaProfe.pause();

        musicaProfe.currentTime = 0;
    }

    if(musicaMenu){

        musicaMenu.play();
    }

    document.getElementById("pantallaProfe").style.display = "none";

    document.getElementById("menu").style.display = "block";
}
// ABRIR INDICACIONES

function abrirIndicaciones(){

    document.getElementById("modalIndicaciones")
    .style.display = "flex";
}

// CERRAR INDICACIONES

function cerrarIndicaciones(){

    document.getElementById("modalIndicaciones")
    .style.display = "none";
}

// ABRIR CREDITOS

function abrirCreditos(){

    document.getElementById("modalCreditos")
    .style.display = "flex";
}

// CERRAR CREDITOS

function cerrarCreditos(){

    document.getElementById("modalCreditos")
    .style.display = "none";
}
// ACTIVAR MUSICA

window.addEventListener("click", () => {

    const menu =
    document.getElementById("musicaMenu");

    const profes =
    document.getElementById("musicaProfe");

    if(menu){

        menu.volume = 1;

        menu.play()
        .catch(error => console.log(error));
    }

    if(profes){

        profes.volume = 1;
    }

}, { once:true });