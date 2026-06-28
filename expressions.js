/*======================================================
    ECLIPSE FACE v7.0
    PARTE 6
    EXPRESIONES BÁSICAS
======================================================*/

"use strict";

/*====================================
        EMOCIÓN NEUTRAL
====================================*/

function emotionNeutral(){

    resetFace();

    lookCenter();

    setState("neutral");

}

/*====================================
        FELIZ
====================================*/

function emotionHappy(){

    resetFace();

    setState("happy");

    mouth.style.opacity=1;

    mouth.style.height="32px";

    mouth.style.width="95px";

    mouth.style.borderRadius="0 0 100px 100px";

    cheeks.forEach(c=>{

        c.style.opacity=".7";

    });

}

/*====================================
        TRISTE
====================================*/

function emotionSad(){

    resetFace();

    setState("sad");

    mouth.style.opacity=1;

    mouth.style.borderBottom="0";

    mouth.style.borderTop="5px solid #D8A4FF";

    mouth.style.borderRadius="100px 100px 0 0";

    tear.style.opacity=1;

    tear.classList.add("tearAnimation");

}

/*====================================
        ENOJADO
====================================*/

function emotionAngry(){

    resetFace();

    setState("angry");

    leftBrow.style.opacity=1;

    rightBrow.style.opacity=1;

    leftBrow.style.transform="rotate(-18deg)";

    rightBrow.style.transform="rotate(18deg)";

    mouth.style.opacity=1;

    mouth.style.width="70px";

    mouth.style.borderBottom="0";

    mouth.style.borderTop="5px solid #D8A4FF";

    mouth.style.borderRadius="90px 90px 0 0";

}

/*====================================
        PENSANDO
====================================*/

function emotionThinking(){

    resetFace();

    setState("thinking");

    leftEye.classList.add("thinking");

    rightEye.classList.add("thinking");

}

/*====================================
        ESCUCHANDO
====================================*/

function emotionListening(){

    resetFace();

    setState("listening");

    leftEye.classList.add("listening");

    rightEye.classList.add("listening");

}

/*====================================
        HABLANDO
====================================*/

function emotionTalking(){

    resetFace();

    setState("talking");

    mouth.style.opacity=1;

    mouth.classList.add("talking");

}

/*====================================
        PROCESANDO
====================================*/

function emotionProcessing(){

    resetFace();

    setState("processing");

    processing.style.opacity=1;

    processing.classList.add("processing");

}

/*====================================
        DORMIDO
====================================*/

function emotionSleep(){

    resetFace();

    setState("sleep");

    leftEye.style.height="8px";

    rightEye.style.height="8px";

}

/*====================================
        SORPRENDIDO
====================================*/

function emotionSurprised(){

    resetFace();

    setState("surprised");

    leftEye.style.height="105px";

    rightEye.style.height="105px";

    mouth.style.opacity=1;

    mouth.style.width="34px";

    mouth.style.height="34px";

    mouth.style.border="5px solid #D8A4FF";

    mouth.style.borderRadius="50%";

}

/*====================================
      CAMBIAR EMOCIÓN
====================================*/

function setEmotion(name){

    switch(name){

        case "neutral":
            emotionNeutral();
        break;

        case "happy":
            emotionHappy();
        break;

        case "sad":
            emotionSad();
        break;

        case "angry":
            emotionAngry();
        break;

        case "thinking":
            emotionThinking();
        break;

        case "listening":
            emotionListening();
        break;

        case "talking":
            emotionTalking();
        break;

        case "processing":
            emotionProcessing();
        break;

        case "sleep":
            emotionSleep();
        break;

        case "surprised":
            emotionSurprised();
        break;

        default:
            emotionNeutral();

    }

}

/*====================================
      ESTADO INICIAL
====================================*/

setEmotion("neutral");
/*======================================================
    ECLIPSE FACE v7.0
    PARTE 7
    EMOCIONES AVANZADAS
======================================================*/

/*====================================
        MUY FELIZ
====================================*/

function emotionVeryHappy(){

    resetFace();

    setState("veryHappy");

    mouth.style.opacity=1;

    mouth.style.width="120px";
    mouth.style.height="45px";

    cheeks.forEach(c=>{

        c.style.opacity="1";

    });

    leftEye.style.height="75px";
    rightEye.style.height="75px";

}

/*====================================
        ENAMORADO
====================================*/

function emotionLove(){

    resetFace();

    setState("love");

    hearts.forEach(h=>{

        h.style.opacity="1";

        h.classList.add("heartAnimation");

    });

    mouth.style.opacity=1;

}

/*====================================
        APENADO
====================================*/

function emotionShy(){

    resetFace();

    setState("shy");

    cheeks.forEach(c=>{

        c.style.opacity="1";

    });

    leftEye.style.height="65px";
    rightEye.style.height="65px";

}

/*====================================
        ASUSTADO
====================================*/

function emotionScared(){

    resetFace();

    setState("scared");

    leftEye.style.height="115px";
    rightEye.style.height="115px";

    mouth.style.opacity=1;

    mouth.style.width="30px";
    mouth.style.height="40px";

    mouth.style.border="5px solid #D8A4FF";
    mouth.style.borderRadius="50%";

}

/*====================================
        CONFUNDIDO
====================================*/

function emotionConfused(){

    resetFace();

    setState("confused");

    spirals.forEach(s=>{

        s.style.opacity="1";

        s.classList.add("spiralAnimation");

    });

    leftBrow.style.opacity=1;

    rightBrow.style.opacity=1;

    leftBrow.style.transform="rotate(-10deg)";

    rightBrow.style.transform="rotate(10deg)";

}

/*====================================
        MODO IA
====================================*/

function emotionAI(){

    resetFace();

    setState("AI");

    processing.style.opacity=1;

    processing.classList.add("processing");

    leftEye.style.boxShadow="0 0 30px cyan";
    rightEye.style.boxShadow="0 0 30px cyan";

}

/*====================================
        ORGULLOSO
====================================*/

function emotionProud(){

    resetFace();

    setState("proud");

    mouth.style.opacity=1;

    leftBrow.style.opacity=1;
    rightBrow.style.opacity=1;

    leftBrow.style.transform="rotate(5deg)";
    rightBrow.style.transform="rotate(-5deg)";

}

/*====================================
        GUIÑAR OJO
====================================*/

function emotionWink(){

    resetFace();

    setState("wink");

    leftEye.style.height="8px";

    mouth.style.opacity=1;

}

/*====================================
        CANSADO
====================================*/

function emotionTired(){

    resetFace();

    setState("tired");

    leftEye.style.height="28px";
    rightEye.style.height="28px";

}

/*====================================
        CURIOSO
====================================*/

function emotionCurious(){

    resetFace();

    setState("curious");

    lookLeft();

    leftBrow.style.opacity=1;

    rightBrow.style.opacity=1;

    leftBrow.style.transform="rotate(-12deg)";

}

/*====================================
        AGREGAR AL SELECTOR
====================================*/

const oldSetEmotion=setEmotion;

setEmotion=function(name){

switch(name){

case "veryHappy":

emotionVeryHappy();

break;

case "love":

emotionLove();

break;

case "shy":

emotionShy();

break;

case "scared":

emotionScared();

break;

case "confused":

emotionConfused();

break;

case "AI":

emotionAI();

break;

case "proud":

emotionProud();

break;

case "wink":

emotionWink();

break;

case "tired":

emotionTired();

break;

case "curious":

emotionCurious();

break;

default:

oldSetEmotion(name);

}

}