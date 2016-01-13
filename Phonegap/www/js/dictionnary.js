window.onload = function() {
  InitializeMapF();
  InitializeMapP();

};

var dicF = new Map(); // or var map = {};
function InitializeMapF(){
	dicF.set("Dixmude","21 300 tonnes max.","B.P.C");
	dicF.set("Charles de Gaulle", "42 500 tonnes max.", "Porte-avion");
	dicF.set("Albatros", "2 800 tonnes max.", "Patrouilleur austral");
	dicF.set("Cassard", "5 000 tonnes max.", "Frégate antiaérienne type F 70 AA");
	dicF.set("Var", "18 000 tonnes max.", "Pétrolier B.C.R");
	dicF.set("EDA-R1", "185 tonnes min.", "EDA-R");
	dicF.set("EDA-R2", "185 tonnes min.", "EDA-R");
	dicF.set("EDA-R3", "185 tonnes min.", "EDA-R");
	dicF.set("EDA-R4", "185 tonnes min.", "EDA-R");
	dicF.set("Aquitaine", "6 000 tonnes", "Frégate anti-sous-marine FREMM");
	dicF.set("Aconit", "3 600 tonnes max.", "Frégate La Fayette")
}

var dicP = new Map(); // or var map = {};
function InitializeMapP(){
	dicP.set("Lagos","15 bateaux");
	dicP.set("Good", "100 bateaux");
}