/*======================================================
      ECLIPSE FACE v7.0
      PARTE 8
      EFECTOS DE VOZ
======================================================*/

"use strict";

/*====================================
        VARIABLES
====================================*/

let talkingInterval=null;
let listeningInterval=null;
let thinkingInterval=null;
let idleInterval=null;

/*====================================
        HABLAR
====================================*/

function startTalking(){

    stopTalking();

    setEmotion("talking");

    talking=true;

    talkingInterval=setInterval(()=>{

        let h=12+Math.random()*26;

        mouth.style.height=h+"px";

        mouth.style.width=(70+Math.random()*35)+"px";

    },80);

}

function stopTalking(){

    talking=false;

    clearInterval(talkingInterval);

    mouth.style.height="28px";

    mouth.style.width="90px";

}

/*====================================
        ESCUCHANDO
====================================*/

function startListening(){

    stopListening();

    listening=true;

    setEmotion("listening");

    listeningInterval=setInterval(()=>{

        let s=1+Math.random()*0.05;

        leftEye.style.transform="scale("+s+")";

        rightEye.style.transform="scale("+s+")";

    },180);

}

function stopListening(){

    listening=false;

    clearInterval(listeningInterval);

    leftEye.style.transform="";

    rightEye.style.transform="";

}

/*====================================
        PENSANDO
====================================*/

function startThinking(){

    stopThinking();

    thinking=true;

    setEmotion("thinking");

    let state=0;

    thinkingInterval=setInterval(()=>{

        if(state==0){

            lookLeft();

        }

        if(state==1){

            lookRight();

        }

        if(state==2){

            lookUp();

        }

        if(state==3){

            lookCenter();

        }

        state++;

        if(state>3){

            state=0;

        }

    },450);

}

function stopThinking(){

    thinking=false;

    clearInterval(thinkingInterval);

    lookCenter();

}

/*====================================
      MODO ESPERA
====================================*/

function startIdle(){

    clearInterval(idleInterval);

    idleInterval=setInterval(()=>{

        if(talking)return;

        if(listening)return;

        if(thinking)return;

        let r=Math.floor(Math.random()*5);

        switch(r){

            case 0:

            lookCenter();

            break;

            case 1:

            lookLeft();

            break;

            case 2:

            lookRight();

            break;

            case 3:

            lookUp();

            break;

            case 4:

            lookDown();

            break;

        }

    },3500);

}

startIdle();

/*====================================
    RESPUESTA DE ECLIPSE
====================================*/

function eclipseSpeak(text){

    startTalking();

    let duration=text.length*70;

    setTimeout(()=>{

        stopTalking();

        setEmotion("happy");

    },duration);

}

/*====================================
      ESCANEAR ENTORNO
====================================*/

function scanEnvironment(){

    startThinking();

    processing.style.opacity=1;

    processing.classList.add("processing");

    setTimeout(()=>{

        processing.style.opacity=0;

        processing.classList.remove("processing");

        stopThinking();

        setEmotion("AI");

    },4000);

}
/*======================================================
      ECLIPSE FACE v7.0
      PARTE 9
      SEGUIMIENTO DE LA MIRADA
======================================================*/

"use strict";

/*====================================
      POSICIÓN ACTUAL
====================================*/

let eyeX=0;
let eyeY=0;

let targetX=0;
let targetY=0;

/*====================================
      LÍMITES
====================================*/

const MAX_X=12;
const MAX_Y=10;

/*====================================
      ACTUALIZAR OJOS
====================================*/

function updateEyes(){

    eyeX+=(targetX-eyeX)*0.15;

    eyeY+=(targetY-eyeY)*0.15;

    leftPupil.style.transform=
    `translate(${eyeX}px,${eyeY}px)`;

    rightPupil.style.transform=
    `translate(${eyeX}px,${eyeY}px)`;

    requestAnimationFrame(updateEyes);

}

updateEyes();

/*====================================
      MIRAR COORDENADAS
====================================*/

function lookAt(x,y){

    targetX=Math.max(-MAX_X,
            Math.min(MAX_X,x));

    targetY=Math.max(-MAX_Y,
            Math.min(MAX_Y,y));

}

/*====================================
      CENTRO
====================================*/

function lookCenterSmooth(){

    lookAt(0,0);

}

/*====================================
      IZQUIERDA
====================================*/

function lookLeftSmooth(){

    lookAt(-10,0);

}

/*====================================
      DERECHA
====================================*/

function lookRightSmooth(){

    lookAt(10,0);

}

/*====================================
      ARRIBA
====================================*/

function lookUpSmooth(){

    lookAt(0,-8);

}

/*====================================
      ABAJO
====================================*/

function lookDownSmooth(){

    lookAt(0,8);

}

/*====================================
      SEGUIR DEDO (PRUEBAS)
====================================*/

document.addEventListener("mousemove",(e)=>{

    let w=window.innerWidth;
    let h=window.innerHeight;

    let x=((e.clientX/w)-0.5)*22;
    let y=((e.clientY/h)-0.5)*18;

    lookAt(x,y);

});

/*====================================
      POSICIÓN DESDE IA
====================================*/

function lookObject(px,py){

    let x=(px-0.5)*22;

    let y=(py-0.5)*18;

    lookAt(x,y);

}

/*====================================
      DETECCIÓN PERSONA
====================================*/

function personDetected(x,y){

    setEmotion("curious");

    lookObject(x,y);

}

/*====================================
      DETECCIÓN OBJETO
====================================*/

function objectDetected(name,x,y){

    console.log("Objeto:",name);

    lookObject(x,y);

}

/*====================================
      DETECCIÓN TEXTO
====================================*/

function textDetected(text){

    console.log(text);

    startThinking();

    setTimeout(()=>{

        stopThinking();

        setEmotion("happy");

    },1800);

}

/*====================================
      MODO CÁMARA
====================================*/

let cameraMode=false;

function enableCameraMode(){

    cameraMode=true;

    setEmotion("AI");

}

function disableCameraMode(){

    cameraMode=false;

    setEmotion("neutral");

}

/*====================================
      DEMOSTRACIÓN
====================================*/

function demoEyes(){

    lookCenterSmooth();

    setTimeout(()=>{

        lookLeftSmooth();

    },1000);

    setTimeout(()=>{

        lookRightSmooth();

    },2000);

    setTimeout(()=>{

        lookUpSmooth();

    },3000);

    setTimeout(()=>{

        lookDownSmooth();

    },4000);

    setTimeout(()=>{

        lookCenterSmooth();

    },5000);

}
