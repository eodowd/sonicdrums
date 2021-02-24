Content.makeFrontInterface(1024, 700);



//declare overlays imgs
const var ScriptImage2 = Content.getComponent("ScriptImage2");
const var ScriptImage3 = Content.getComponent("ScriptImage3");
const var ScriptImage4 = Content.getComponent("ScriptImage4");
const var ScriptImage5 = Content.getComponent("ScriptImage5");












//samplers
const var Sampler1 = Synth.getChildSynth("Sampler1");
Sampler1.asSampler().setUseStaticMatrix(true); // use static
const var Sampler2 = Synth.getChildSynth("Sampler2");
//Sampler2.asSampler().setUseStaticMatrix(true); // use static
const var Sampler3 = Synth.getChildSynth("Sampler3");

const var Sampler4 = Synth.getChildSynth("Sampler4");

const var Sampler5 = Synth.getChildSynth("Sampler5");
//Sampler5.asSampler().setUseStaticMatrix(true); // use static

const var Sampler10 = Synth.getRoutingMatrix("Sampler1");





inline function onScriptComboBox4Control(component, value)
{
	    if(value){
        	Sampler10.addConnection(0, value);
	        Sampler10.addConnection(1, value+1);
    
    
    }else{
    

        Sampler10.addConnection(0, 0);
	    Sampler10.addConnection(1, 1);
    }
};

Content.getComponent("ScriptComboBox4").setControlCallback(onScriptComboBox4Control);



//the main routing
//const var main = Synth.getRoutingMatrix("main");
//main.addConnection(0, 18);



const var samplemaps = Sampler.getSampleMapList();

const var Player = Synth.getMidiPlayer("MIDI Player1");
inline function onScriptButton20Control(component, value)
{
    if(value){
        Player.play(0);
    }
	else {
	    Player.stop(0);
	}
};

Content.getComponent("ScriptButton20").setControlCallback(onScriptButton20Control);


const var ScriptComboBox2 = Content.getComponent("ScriptComboBox2");
//samplers change maps
ScriptComboBox2.set("items", samplemaps.join("\n"));


inline function onScriptComboBox2Control(component, value)
{

        Sampler1.asSampler().loadSampleMap(samplemaps[value-1]);
	
};

Content.getComponent("ScriptComboBox2").setControlCallback(onScriptComboBox2Control);




inline function onScriptImage16Control(component, value)
{
	Sampler1.asSampler().loadSampleMap(samplemaps[value-1]);
};

Content.getComponent("ScriptImage16").setControlCallback(onScriptImage16Control);
//settings
const var ScriptPanel2 = Content.getComponent("ScriptPanel2");
inline function onScriptButton18Control(component, value)
{
	if(value){
	    ScriptPanel2.showControl(true);

	    
	}else{
	    ScriptPanel2.showControl(false);

	
	}
};

Content.getComponent("ScriptButton18").setControlCallback(onScriptButton18Control);



Content.getComponent("ScriptButton19").setControlCallback(onScriptButton19Control);


//preset button
const var ScriptFloatingTile4 = Content.getComponent("ScriptFloatingTile4");
const var ScriptImage1 = Content.getComponent("ScriptImage1");
const var ScriptPanel1 = Content.getComponent("ScriptPanel1");
const var ScriptImage18 = Content.getComponent("ScriptImage18");
inline function onScriptButton17Control(component, value)

{
	if(value){
	    ScriptImage18.showControl(true);
	    ScriptFloatingTile4.showControl(true);
	    
	}else{
	    ScriptImage18.showControl(false);
	    ScriptFloatingTile4.showControl(false);
	
	}
};

Content.getComponent("ScriptButton17").setControlCallback(onScriptButton17Control);


//snare button for clicks
inline function onScriptButton1Control(component, value)
{

    if(value){
        ScriptImage2.showControl(true);
        Synth.playNote(38,Math.floor(Math.random() * (126 - 50 + 1)) + 50);
    }
    else {
        ScriptImage2.showControl(false);
    }

};
//bassdrum button for clicks
inline function onScriptButton16Control(component, value)
{
    if(value){
   
        Synth.playNote(36,Math.floor(Math.random() * (126 - 50 + 1)) + 50);
    }
};

Content.getComponent("ScriptButton16").setControlCallback(onScriptButton16Control);


Content.getComponent("ScriptButton1").setControlCallback(onScriptButton1Control);


inline function onScriptButton2Control(component, value)
{
    if(value){
        ScriptImage3.showControl(true);
        Synth.playNote(48,Math.floor(Math.random() * (126 - 50 + 1)) + 50);
    }
    else {
        ScriptImage3.showControl(false);
    }

};

Content.getComponent("ScriptButton2").setControlCallback(onScriptButton2Control);



inline function onScriptButton3Control(component, value)
{
    if(value){
        ScriptImage4.showControl(true);
        Synth.playNote(80,Math.floor(Math.random() * (126 - 50 + 1)) + 50);
    }
    else {
        ScriptImage4.showControl(false);
    }

};

Content.getComponent("ScriptButton3").setControlCallback(onScriptButton3Control);



inline function onScriptButton4Control(component, value)
{
    if(value){
        ScriptImage5.showControl(true);
        Synth.playNote(67,Math.floor(Math.random() * 126) + 1);
    }
    else {
        ScriptImage5.showControl(false);
    }

};
Content.getComponent("ScriptButton4").setControlCallback(onScriptButton4Control);


//each dropdown
const var ScriptImage6 = Content.getComponent("ScriptImage6");
const var ScriptImage7 = Content.getComponent("ScriptImage7");
const var ScriptImage8 = Content.getComponent("ScriptImage8");
const var ScriptImage9 = Content.getComponent("ScriptImage9");
const var ScriptImage10 = Content.getComponent("ScriptImage10");
const var ScriptImage11 = Content.getComponent("ScriptImage11");
const var ScriptImage12 = Content.getComponent("ScriptImage12");
const var ScriptImage13 = Content.getComponent("ScriptImage13");
const var ScriptImage14 = Content.getComponent("ScriptImage14");

//each button for dropdown
const var ScriptButton6 = Content.getComponent("ScriptButton6");
const var ScriptButton7 = Content.getComponent("ScriptButton7");
const var ScriptButton8 = Content.getComponent("ScriptButton8");
const var ScriptButton9 = Content.getComponent("ScriptButton9");
const var ScriptButton10 = Content.getComponent("ScriptButton10");
const var ScriptButton11 = Content.getComponent("ScriptButton11");
const var ScriptButton12 = Content.getComponent("ScriptButton12");
const var ScriptButton13 = Content.getComponent("ScriptButton13");
const var ScriptButton14 = Content.getComponent("ScriptButton14");

Content.getComponent("ScriptButton5").setControlCallback(onScriptButton5Control);

//show and hide dropdowns
inline function onScriptButton5Control(component, value)
{
	if(value){
	    ScriptImage6.showControl(true);
	    ScriptButton6.showControl(true);
	    ScriptImage7.showControl(true);
	    ScriptButton7.showControl(true);
	    ScriptImage8.showControl(true);
	    ScriptButton8.showControl(true);
	    ScriptImage9.showControl(true);
	    ScriptButton9.showControl(true);
	    ScriptImage10.showControl(true);
	    ScriptButton10.showControl(true);
	    ScriptImage11.showControl(true);
	    ScriptButton11.showControl(true);
	    ScriptImage12.showControl(true);
	    ScriptButton12.showControl(true);
	    ScriptImage13.showControl(true);
	    ScriptButton13.showControl(true);
	    ScriptImage14.showControl(true);
	    ScriptButton14.showControl(true);

    
	}
	else {
	    ScriptImage6.showControl(false);
	    ScriptButton6.showControl(false);
	    ScriptImage7.showControl(false);
	    ScriptButton7.showControl(false);
	    ScriptImage8.showControl(false);
	    ScriptButton8.showControl(false);
	    ScriptImage9.showControl(false);
	    ScriptButton9.showControl(false);
	    ScriptImage10.showControl(false);
	    ScriptButton10.showControl(false);
	    ScriptImage11.showControl(false);
	    ScriptButton11.showControl(false);
	    ScriptImage12.showControl(false);
	    ScriptButton12.showControl(false);
	    ScriptImage13.showControl(false);
	    ScriptButton13.showControl(false);
	    ScriptImage14.showControl(false);
	    ScriptButton14.showControl(false);
	    //combox
	    ScriptImage15.showControl(false);
	    ScriptImage16.showControl(false);
	}
};




//dropdown image callbacks


const var ScriptImage15 = Content.getComponent("ScriptImage15");
const var ScriptImage16 = Content.getComponent("ScriptImage16");



inline function onScriptButton6Control(component, value)
{
	if(value){
	    ScriptImage15.showControl(true);
	}else {
	    ScriptImage15.showControl(false);
	}
};

Content.getComponent("ScriptButton6").setControlCallback(onScriptButton6Control);

inline function onScriptButton7Control(component, value)
{
		if(value){
	    ScriptImage16.showControl(true);
	}else {
	    ScriptImage16.showControl(false);
	}
};

Content.getComponent("ScriptButton7").setControlCallback(onScriptButton7Control);

inline function onScriptButton8Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("ScriptButton8").setControlCallback(onScriptButton8Control);

inline function onScriptButton9Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("ScriptButton9").setControlCallback(onScriptButton9Control);

inline function onScriptButton10Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("ScriptButton10").setControlCallback(onScriptButton10Control);

inline function onScriptButton11Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("ScriptButton11").setControlCallback(onScriptButton11Control);

inline function onScriptButton12Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("ScriptButton12").setControlCallback(onScriptButton12Control);

inline function onScriptButton13Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("ScriptButton13").setControlCallback(onScriptButton13Control);

inline function onScriptButton14Control(component, value)
{
	//Add your custom logic here...
};

Content.getComponent("ScriptButton14").setControlCallback(onScriptButton14Control);




















//for about panel
const var ScriptFloatingTile2 = Content.getComponent("ScriptFloatingTile2");

inline function onScriptButton15Control(component, value)
{
	if(value){
	    ScriptFloatingTile2.showControl(true);
	}else{
	    ScriptFloatingTile2.showControl(false);
	}
};

Content.getComponent("ScriptButton15").setControlCallback(onScriptButton15Control);




//for mixer


const var ScriptImage19 = Content.getComponent("ScriptImage19");

inline function onScriptButton22Control(component, value)
{
	if(value){
	    ScriptImage19.showControl(true);
	}else{
	    ScriptImage19.showControl(false);
	}
};


Content.getComponent("ScriptButton22").setControlCallback(onScriptButton22Control);




function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 