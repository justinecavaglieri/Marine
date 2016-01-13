window.onload = function() {
  InitializeMapF();
  InitializeMapP();

};

var dicF = new Map(); // or var map = {};
function InitializeMapF(){
	dicF.set("Dixmude","20 000 tonnes");
	dicF.set("Charles de Gaulle", "40 000 tonnes");
}

var dicP = new Map(); // or var map = {};
function InitializeMapP(){
	dicP.set("test","15 bateaux");
	dicP.set("good", "100 bateaux");
}