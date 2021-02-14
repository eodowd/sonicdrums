Content.makeFrontInterface(790, 550);
var holdnotesnare = 60;



const var Sampler1 = Synth.getChildSynth("Sampler1");
const var samplemaps = Sampler.getSampleMapList();
const var ScriptComboBox8 = Content.getComponent("ScriptComboBox8");
ScriptComboBox8.set("items", samplemaps.join("\n"));





const var ScriptFloatingTile2 = Content.getComponent("ScriptFloatingTile2");


inline function onScriptButton8Control(component, value)
{
    if(value){
        ScriptFloatingTile2.showControl(true);
    }
    else {
        ScriptFloatingTile2.showControl(false);
    }

};



const var ScriptComboBox1 = Content.getComponent("ScriptComboBox1");
const var ScriptComboBox2 = Content.getComponent("ScriptComboBox2");
const var ScriptComboBox3 = Content.getComponent("ScriptComboBox3");
const var ScriptComboBox4 = Content.getComponent("ScriptComboBox4");
const var ScriptComboBox5 = Content.getComponent("ScriptComboBox5");
const var ScriptComboBox6 = Content.getComponent("ScriptComboBox6");
const var ScriptComboBox7 = Content.getComponent("ScriptComboBox7");



inline function onScriptButton9Control(component, value)
{
    if(value){
        ScriptComboBox1.showControl(true);
        ScriptComboBox2.showControl(true);
        ScriptComboBox3.showControl(true);
        ScriptComboBox4.showControl(true);
        ScriptComboBox5.showControl(true);
        ScriptComboBox6.showControl(true);
        ScriptComboBox7.showControl(true);
    }
    else {
        ScriptComboBox1.showControl(false);
        ScriptComboBox2.showControl(false);
        ScriptComboBox3.showControl(false);
        ScriptComboBox4.showControl(false);
        ScriptComboBox5.showControl(false);
        ScriptComboBox6.showControl(false);
        ScriptComboBox7.showControl(false);
    }
};

Content.getComponent("ScriptButton9").setControlCallback(onScriptButton9Control);




Content.getComponent("ScriptButton8").setControlCallback(onScriptButton8Control);




inline function onScriptComboBox8Control(component, value)
{
    
	Sampler1.asSampler().loadSampleMap(samplemaps[value-1]);
};

Content.getComponent("ScriptComboBox8").setControlCallback(onScriptComboBox8Control);







inline function onScriptComboBox1Control(component, value)
{
	if(value == 3){
	    holdnotesnare = 20;
	}
	else{
	    holdnotesnare = 60;
	}
};

Content.getComponent("ScriptComboBox1").setControlCallback(onScriptComboBox1Control);




inline function onScriptButton1Control(component, value)
{
    if(value){
        Synth.playNote(holdnotesnare, Math.floor(Math.random() * 100) + 1);
    }
	
};

Content.getComponent("ScriptButton1").setControlCallback(onScriptButton1Control);


inline function onScriptButton2Control(component, value)
{
	if(value){
        Synth.playNote(61, Math.floor(Math.random() * 100) + 1);
    }
};

Content.getComponent("ScriptButton2").setControlCallback(onScriptButton2Control);


inline function onScriptButton3Control(component, value)
{
	if(value){
        Synth.playNote(62, Math.floor(Math.random() * 100) + 1);
    }
};

Content.getComponent("ScriptButton3").setControlCallback(onScriptButton3Control);


inline function onScriptButton4Control(component, value)
{
	if(value){
        Synth.playNote(63, 100);
    }
};

Content.getComponent("ScriptButton4").setControlCallback(onScriptButton4Control);


inline function onScriptButton5Control(component, value)
{
	if(value){
        Synth.playNote(64, 100);
    }
};

Content.getComponent("ScriptButton5").setControlCallback(onScriptButton5Control);


inline function onScriptButton6Control(component, value)
{
	if(value){
        Synth.playNote(65, 100);
    }
};

Content.getComponent("ScriptButton6").setControlCallback(onScriptButton6Control);


inline function onScriptButton7Control(component, value)
{
	if(value){
        Synth.playNote(66, 100);
    }
};

Content.getComponent("ScriptButton7").setControlCallback(onScriptButton7Control);






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
 