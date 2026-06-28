/*======================================================
      ECLIPSE FACE v7.0
      PARTE 12
      VISIÓN ARTIFICIAL
======================================================*/

"use strict";

/*====================================
        ESTADO
====================================*/

const Vision={

enabled:false,

person:false,

object:false,

text:false,

motion:false,

lastObject:"",

lastPerson:"",

lastText:"",

brightness:0,

confidence:0

};

/*====================================
        ACTIVAR
====================================*/

function visionStart(){

Vision.enabled=true;

apiCameraOn();

console.log("Vision ON");

}

/*====================================
        DESACTIVAR
====================================*/

function visionStop(){

Vision.enabled=false;

apiCameraOff();

console.log("Vision OFF");

}

/*====================================
        PERSONA
====================================*/

function visionPerson(name,x,y){

Vision.person=true;

Vision.lastPerson=name;

apiPerson(name,x,y);

setEmotion("curious");

}

/*====================================
        OBJETO
====================================*/

function visionObject(name,x,y){

Vision.object=true;

Vision.lastObject=name;

apiObject(name,x,y);

setEmotion("AI");

}

/*====================================
        TEXTO
====================================*/

function visionText(text){

Vision.text=true;

Vision.lastText=text;

apiText(text);

startThinking();

setTimeout(()=>{

stopThinking();

setEmotion("happy");

},2000);

}

/*====================================
        MOVIMIENTO
====================================*/

function visionMotion(){

Vision.motion=true;

setEmotion("surprised");

setTimeout(()=>{

setEmotion("neutral");

},1200);

}

/*====================================
        COLOR
====================================*/

function visionColor(color){

console.log("Color:",color);

}

/*====================================
        LUZ
====================================*/

function visionBrightness(level){

Vision.brightness=level;

}

/*====================================
        CONFIANZA
====================================*/

function visionConfidence(value){

Vision.confidence=value;

}

/*====================================
        REINICIAR
====================================*/

function visionReset(){

Vision.person=false;

Vision.object=false;

Vision.text=false;

Vision.motion=false;

Vision.lastObject="";

Vision.lastPerson="";

Vision.lastText="";

}

/*====================================
        INFORMACIÓN
====================================*/

function getVisionStatus(){

return JSON.stringify(Vision);

}

/*====================================
        DEMOSTRACIÓN
====================================*/

function visionDemo(){

visionStart();

setTimeout(()=>{

visionPerson("Persona",0.45,0.55);

},1000);

setTimeout(()=>{

visionObject("Botella",0.70,0.35);

},3000);

setTimeout(()=>{

visionText("Hola Eclipse");

},5000);

setTimeout(()=>{

visionMotion();

},7000);

}