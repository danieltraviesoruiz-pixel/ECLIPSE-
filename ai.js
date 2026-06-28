/*======================================================
      ECLIPSE FACE v7.0
      PARTE 15
      MOTOR CONVERSACIONAL
======================================================*/

"use strict";

const AI={

name:"Eclipse",

version:"7.0",

online:false,

thinking:false,

lastQuestion:"",

lastAnswer:"",

context:[]

};

/*======================================
        INICIALIZAR
======================================*/

function aiInit(){

console.log("AI iniciada");

}

/*======================================
      AGREGAR CONTEXTO
======================================*/

function aiContext(text){

AI.context.push(text);

if(AI.context.length>20){

AI.context.shift();

}

}

/*======================================
        PENSAR
======================================*/

function aiThinking(state){

AI.thinking=state;

if(state){

startThinking();

}else{

stopThinking();

}

}

/*======================================
      RESPUESTA LOCAL
======================================*/

function aiLocal(question){

question=question.toLowerCase();

if(question.includes("hola")){

return{

emotion:"happy",

text:"Hola, ¿cómo estás?"

};

}

if(question.includes("gracias")){

return{

emotion:"happy",

text:"De nada."

};

}

if(question.includes("adiós")){

return{

emotion:"sad",

text:"Hasta luego."

};

}

return{

emotion:"thinking",

text:"Estoy analizando tu mensaje."

};

}

/*======================================
      RESPONDER
======================================*/

function aiReply(question){

AI.lastQuestion=question;

brainRemember(question);

aiThinking(true);

setTimeout(()=>{

let response=aiLocal(question);

AI.lastAnswer=response.text;

brainRemember(response.text);

brainSetMood(response.emotion);

brainSpeak(response.text);

aiThinking(false);

},1200);

}

/*======================================
      ESTADO
======================================*/

function aiStatus(){

return{

online:AI.online,

thinking:AI.thinking,

question:AI.lastQuestion,

answer:AI.lastAnswer,

context:AI.context.length

};

}

/*======================================
      CONECTAR IA
======================================*/

function aiOnline(){

AI.online=true;

console.log("Modo Online");

}

function aiOffline(){

AI.online=false;

console.log("Modo Offline");

}

aiInit();