const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
    {
      pregunta: "<br> 1. ¿Es verdad que las plantas carnivoras poseen &nbsp&nbsp&nbsp&nbsptrampas para atrapar insectos?",
      respuestas: {
        a: "Verdadero &nbsp",
        b: "Falso &nbsp",
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "<br> 2. ¿Es verdad que las plantas carnivoras crecen en &nbsp&nbsp&nbsp&nbsplugares donde el suelo es pobre?",
      respuestas: {
        a: "Verdadero &nbsp",
        b: "Falso &nbsp",
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "<br> 3. ¿Es verdad que las plantas carnivoras pueden comer carne humana?",
      respuestas: {
        a: "Verdadero &nbsp",
        b: "Falso &nbsp",
      },
      respuestaCorrecta: "b"
    },
    {
      pregunta: "<br> 4. ¿Es verdad que Nepenthes puede hacer fotosintesis?",
      respuestas: {
        a: "Verdadero &nbsp",
        b: "Flaso &nbsp",
      },
      respuestaCorrecta: "a"
    },
    {
        pregunta: "<br> 5. ¿Es verdad que se alimentan solo de insectos??",
        respuestas: {
            a: "Verdadero &nbsp",
            b: "Flaso &nbsp",
      },
      respuestaCorrecta: "b"
    },
    {
      pregunta: "<br> 6. ¿De que se alimentan las plantas carnivoras?",
      respuestas: {
        a: "Carne &nbsp",
        b: "Insectos &nbsp",
        c: "Hojas/Otras plantas &nbsp"
      },
      respuestaCorrecta: "b"
    },
    {
      pregunta: "<br> 7. ¿Cuantos tipos de trampas existen en las plantas carnivoras?",
      respuestas: {
        a: "1 &nbsp",
        b: "2 &nbsp",
        c: "3 o mas &nbsp"
      },
      respuestaCorrecta: "c"
    },
    {
      pregunta: "<br> 8. ¿Que cantidad insectos es sano que coman por semana?",
      respuestas: {
        a: "0-2 &nbsp",
        b: "3-4 &nbsp",
        c: "5-6 &nbsp"
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "<br> 9. ¿Las plantas carnivoras son autotrofas o heterotrofas",
      respuestas: {
        a: "Autotrofas &nbsp",
        b: "Heterotrofas &nbsp",
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "<br> 10. ¿Las plantas carnivoras tienen sistema nervioso?",
      respuestas: {
        a: "Todas &nbsp",
        b: "Ninguna &nbsp",
        c: "Algunas si &nbsp"
      },
      respuestaCorrecta: "b"
    }
];

function mostrarTest(){
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label> 
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                
                </label>`
            );
        }
        preguntasYrespuestas.push(
            `<div class="cuestion"> ${preguntaActual.pregunta} </div>
             <div class="respuestas"> ${respuestas.join('')} </div>
            `
        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();

function mostrarResultado(){
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;
  
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

    if(respuestaElegida === preguntaActual.respuestaCorrecta){
      respuestasCorrectas++;
    }
  });

  resultadoTest.innerHTML = 'Has acertado ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length;

}


botonRes.addEventListener('click', mostrarResultado);
