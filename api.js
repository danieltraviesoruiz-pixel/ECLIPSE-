/*======================================================
      ECLIPSE FACE v7.0
      PARTE 10
      API DE CONTROL
======================================================*/

"use strict";

/*====================================
      ESTADO GLOBAL
====================================*/

const Eclipse={

version:"7.0",

emotion:"neutral",

camera:false,

microphone:false,

voice:true,

processing:false

};

/*====================================
      CAMBIAR EMOCIÓN
====================================*/

function apiEmotion(name){

    Eclipse.emotion=name;

    setEmotion(name);

}

/*====================================
      HABLAR
====================================*/

function apiSpeak(text){

    console.log("Eclipse:",text);

    eclipseSpeak(text);

}

/*====================================
      ESCUCHAR
====================================*/

function apiStartListening(){

    Eclipse.microphone=true;

    startListening();

}

function apiStopListening(){

    Eclipse.microphone=false;

    stopListening();

}

/*====================================
      PENSAR
====================================*/

function apiThinking(){

    startThinking();

}

/*====================================
      PROCESAR
====================================*/

function apiProcessing(){

    Eclipse.processing=true;

    emotionProcessing();

}

function apiStopProcessing(){

    Eclipse.processing=false;

    setEmotion("neutral");

}

/*====================================
      CÁMARA
====================================*/

function apiCameraOn(){

    Eclipse.camera=true;

    enableCameraMode();

}

function apiCameraOff(){

    Eclipse.camera=false;

    disableCameraMode();

}

/*====================================
      MIRAR
====================================*/

function apiLook(x,y){

    lookObject(x,y);

}

/*====================================
      PERSONA
====================================*/

function apiPerson(x,y){

    personDetected(x,y);

}

/*====================================
      OBJETO
====================================*/

function apiObject(name,x,y){

    objectDetected(name,x,y);

}

/*====================================
      TEXTO
====================================*/

function apiText(text){

    textDetected(text);

}

/*====================================
      COMANDO GENERAL
====================================*/

function apiCommand(command,data){

switch(command){

case "emotion":

apiEmotion(data);

break;

case "speak":

apiSpeak(data);

break;

case "listen":

apiStartListening();

break;

case "listenOff":

apiStopListening();

break;

case "thinking":

apiThinking();

break;

case "processing":

apiProcessing();

break;

case "processingOff":

apiStopProcessing();

break;

case "cameraOn":

apiCameraOn();

break;

case "cameraOff":

apiCameraOff();

break;

}

}

/*====================================
      INFORMACIÓN
====================================*/

function getStatus(){

return{

version:Eclipse.version,

emotion:Eclipse.emotion,

camera:Eclipse.camera,

microphone:Eclipse.microphone,

processing:Eclipse.processing

};

}

/*====================================
      REINICIAR
====================================*/

function apiReset(){

setEmotion("neutral");

lookCenterSmooth();

stopTalking();

stopListening();

stopThinking();

Eclipse.camera=false;

Eclipse.microphone=false;

Eclipse.processing=false;

}

/*====================================
      DEMOSTRACIÓN
====================================*/

function demo(){

apiEmotion("happy");

setTimeout(()=>{

apiSpeak("Hola soy Eclipse");

},1000);

setTimeout(()=>{

apiThinking();

},4000);

setTimeout(()=>{

apiCameraOn();

},7000);

}
/*======================================================
      ECLIPSE FACE v7.0
      PARTE 11
      COMUNICACIÓN CON MIT APP INVENTOR
======================================================*/

"use strict";

/*====================================
        EVENTOS
====================================*/

let eclipseEvents=[];

function sendEvent(type,data){

    const event={

        type:type,

        data:data,

        time:Date.now()

    };

    eclipseEvents.push(event);

    console.log("EVENT:",JSON.stringify(event));

}

/*====================================
        OBTENER EVENTOS
====================================*/

function getEvents(){

    const temp=[...eclipseEvents];

    eclipseEvents=[];

    return JSON.stringify(temp);

}

/*====================================
        CAMBIO DE EMOCIÓN
====================================*/

function notifyEmotion(name){

    Eclipse.emotion=name;

    sendEvent("emotion",name);

}

/*====================================
        HABLAR
====================================*/

function apiSpeak(text){

    sendEvent("speech_start",text);

    eclipseSpeak(text);

    let duration=text.length*70;

    setTimeout(()=>{

        sendEvent("speech_end",text);

    },duration);

}

/*====================================
        ESCUCHANDO
====================================*/

function apiStartListening(){

    Eclipse.microphone=true;

    startListening();

    sendEvent("microphone","on");

}

function apiStopListening(){

    Eclipse.microphone=false;

    stopListening();

    sendEvent("microphone","off");

}

/*====================================
        CÁMARA
====================================*/

function apiCameraOn(){

    Eclipse.camera=true;

    enableCameraMode();

    sendEvent("camera","on");

}

function apiCameraOff(){

    Eclipse.camera=false;

    disableCameraMode();

    sendEvent("camera","off");

}

/*====================================
        DETECCIÓN PERSONA
====================================*/

function apiPerson(name,x,y){

    personDetected(x,y);

    sendEvent("person",{

        name:name,

        x:x,

        y:y

    });

}

/*====================================
        DETECCIÓN OBJETO
====================================*/

function apiObject(name,x,y){

    objectDetected(name,x,y);

    sendEvent("object",{

        object:name,

        x:x,

        y:y

    });

}

/*====================================
        TEXTO OCR
====================================*/

function apiText(text){

    textDetected(text);

    sendEvent("text",text);

}

/*====================================
        RESPUESTA IA
====================================*/

function apiResponse(text,mood){

    setEmotion(mood);

    apiSpeak(text);

    sendEvent("response",{

        emotion:mood,

        text:text

    });

}

/*====================================
        ESTADO GENERAL
====================================*/

function getFullStatus(){

    return JSON.stringify({

        version:Eclipse.version,

        emotion:Eclipse.emotion,

        camera:Eclipse.camera,

        microphone:Eclipse.microphone,

        processing:Eclipse.processing,

        talking:talking,

        listening:listening,

        thinking:thinking

    });

}

/*====================================
        REINICIAR
====================================*/

function fullReset(){

    apiReset();

    eclipseEvents=[];

    sendEvent("system","reset");

}