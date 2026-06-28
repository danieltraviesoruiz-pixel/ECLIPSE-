/*======================================================
    ECLIPSE FACE v7.0
    PARTE 5
    MOTOR PRINCIPAL
======================================================*/

"use strict";

/*==========================
    ELEMENTOS
==========================*/

const frame=document.getElementById("frame");
const face=document.getElementById("face");

const leftEye=document.getElementById("leftEye");
const rightEye=document.getElementById("rightEye");

const leftPupil=document.getElementById("leftPupil");
const rightPupil=document.getElementById("rightPupil");

const leftLid=document.getElementById("leftLid");
const rightLid=document.getElementById("rightLid");

const leftBrow=document.getElementById("leftBrow");
const rightBrow=document.getElementById("rightBrow");

const mouth=document.getElementById("mouth");

const tear=document.getElementById("tear");

const processing=document.getElementById("processing");

const cheeks=document.querySelectorAll(".cheek");

const hearts=document.querySelectorAll(".heart");

const stars=document.querySelectorAll(".star");

const spirals=document.querySelectorAll(".spiral");

/*==========================
      VARIABLES
==========================*/

let mood="neutral";

let talking=false;

let listening=false;

let thinking=false;

let processingMode=false;

let blinkEnabled=true;

/*==========================
      REINICIAR
==========================*/

function resetFace(){

mouth.style.opacity=0;

mouth.className="";

mouth.style.borderTop="";

mouth.style.borderBottom="5px solid #D8A4FF";

mouth.style.borderRadius="0 0 90px 90px";

mouth.style.width="90px";

mouth.style.height="28px";

leftBrow.style.opacity=0;
rightBrow.style.opacity=0;

tear.style.opacity=0;
tear.className="";

processing.style.opacity=0;
processing.className="";

cheeks.forEach(c=>c.style.opacity=0);

hearts.forEach(h=>{

h.style.opacity=0;

h.className="heart";

});

stars.forEach(s=>{

s.style.opacity=0;

s.className="star";

});

spirals.forEach(sp=>{

sp.style.opacity=0;

sp.className="spiral";

});

leftEye.style.height="88px";
rightEye.style.height="88px";

leftEye.style.width="72px";
rightEye.style.width="72px";

leftEye.style.transform="";
rightEye.style.transform="";

leftPupil.style.transform="";
rightPupil.style.transform="";

}

/*==========================
      PARPADEO
==========================*/

function blink(){

if(!blinkEnabled)return;

leftLid.style.height="88px";
rightLid.style.height="88px";

setTimeout(()=>{

leftLid.style.height="0px";
rightLid.style.height="0px";

},120);

}

function autoBlink(){

setInterval(()=>{

let t=2000+Math.random()*3000;

setTimeout(blink,t);

},4000);

}

autoBlink();

/*==========================
     MIRAR
==========================*/

function lookCenter(){

leftPupil.style.transform="translate(0px,0px)";
rightPupil.style.transform="translate(0px,0px)";

}

function lookLeft(){

leftPupil.style.transform="translate(-8px,0px)";
rightPupil.style.transform="translate(-8px,0px)";

}

function lookRight(){

leftPupil.style.transform="translate(8px,0px)";
rightPupil.style.transform="translate(8px,0px)";

}

function lookUp(){

leftPupil.style.transform="translate(0px,-8px)";
rightPupil.style.transform="translate(0px,-8px)";

}

function lookDown(){

leftPupil.style.transform="translate(0px,8px)";
rightPupil.style.transform="translate(0px,8px)";

}

/*==========================
      ESTADO
==========================*/

function setState(state){

mood=state;

console.log("Estado:",state);

}

/*==========================
    INICIALIZAR
==========================*/

window.onload=function(){

resetFace();

lookCenter();

setState("neutral");

};