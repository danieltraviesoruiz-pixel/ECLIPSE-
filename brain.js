/*======================================================
    ECLIPSE FACE v7.0
    PARTE 13
    CEREBRO
======================================================*/

"use strict";

const Brain={

    version:"7.0",

    name:"Eclipse",

    mood:"neutral",

    battery:100,

    memory:[],

    history:[],

    learning:[],

    personality:{
        curiosity:100,
        happiness:70,
        empathy:90,
        confidence:80
    }

};

function brainSetMood(mood){

    Brain.mood=mood;

    setEmotion(mood);

}

function brainRemember(text){

    Brain.memory.push({

        text:text,

        date:new Date().toISOString()

    });

}

function brainAddHistory(user,assistant){

    Brain.history.push({

        user:user,

        assistant:assistant,

        date:new Date().toISOString()

    });

}

function brainLearn(data){

    Brain.learning.push(data);

}

function brainBattery(level){

    Brain.battery=level;

}

function brainStatus(){

    return JSON.stringify(Brain);

}

function brainClearMemory(){

    Brain.memory=[];

}

function brainClearHistory(){

    Brain.history=[];

}

function brainSearch(word){

    return Brain.memory.filter(item=>

        item.text.toLowerCase().includes(word.toLowerCase())

    );

}

function brainSpeak(text){

    brainRemember(text);

    eclipseSpeak(text);

}

function brainThink(){

    startThinking();

}

function brainStopThinking(){

    stopThinking();

}

console.log("Brain v7.0 iniciado");
/*======================================================
      ECLIPSE FACE v7.0
      PARTE 14
      MEMORIA PERMANENTE
======================================================*/

"use strict";

/*====================================
      CONFIGURACIÓN
====================================*/

Brain.maxMemory=500;

Brain.autoSave=true;

/*====================================
      GUARDAR MEMORIA
====================================*/

function brainSave(){

    const data={

        version:Brain.version,

        mood:Brain.mood,

        battery:Brain.battery,

        personality:Brain.personality,

        memory:Brain.memory,

        history:Brain.history,

        learning:Brain.learning

    };

    localStorage.setItem(
        "ECLIPSE_BRAIN",
        JSON.stringify(data)
    );

}

/*====================================
      CARGAR MEMORIA
====================================*/

function brainLoad(){

    let data=localStorage.getItem(
        "ECLIPSE_BRAIN"
    );

    if(data==null){

        return;

    }

    data=JSON.parse(data);

    Brain.mood=data.mood;

    Brain.battery=data.battery;

    Brain.personality=data.personality;

    Brain.memory=data.memory||[];

    Brain.history=data.history||[];

    Brain.learning=data.learning||[];

}

/*====================================
      RECORDAR
====================================*/

function remember(text){

    Brain.memory.push({

        text:text,

        time:Date.now()

    });

    if(Brain.memory.length>

        Brain.maxMemory){

        Brain.memory.shift();

    }

    if(Brain.autoSave){

        brainSave();

    }

}

/*====================================
      APRENDER
====================================*/

function learn(question,answer){

    Brain.learning.push({

        question:question,

        answer:answer,

        date:Date.now()

    });

    if(Brain.autoSave){

        brainSave();

    }

}

/*====================================
      HISTORIAL
====================================*/

function addConversation(user,ai){

    Brain.history.push({

        user:user,

        eclipse:ai,

        date:Date.now()

    });

    if(Brain.autoSave){

        brainSave();

    }

}

/*====================================
      BUSCAR
====================================*/

function searchMemory(word){

    let result=[];

    Brain.memory.forEach(item=>{

        if(

            item.text

            .toLowerCase()

            .includes(

                word.toLowerCase()

            )

        ){

            result.push(item);

        }

    });

    return result;

}

/*====================================
      LIMPIAR
====================================*/

function clearMemory(){

    Brain.memory=[];

    Brain.history=[];

    Brain.learning=[];

    brainSave();

}

/*====================================
      EXPORTAR
====================================*/

function exportBrain(){

    return JSON.stringify(Brain);

}

/*====================================
      IMPORTAR
====================================*/

function importBrain(json){

const data=JSON.parse(json);

Object.assign(Brain,data);

brainSave();

}

/*====================================
      INFORMACIÓN
====================================*/

function brainInfo(){

    return{

        memories:Brain.memory.length,

        history:Brain.history.length,

        learning:Brain.learning.length,

        battery:Brain.battery,

        mood:Brain.mood,

        version:Brain.version

    };

}

/*====================================
      AUTOGUARDADO
====================================*/

setInterval(()=>{

    if(Brain.autoSave){

        brainSave();

    }

},10000);

/*====================================
      INICIO
====================================*/

brainLoad();

console.log("Memoria Permanente Cargada");