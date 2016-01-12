$(document).ready(function(){
    $('.burger').click(function() {
        $('.sub-nav').toggleClass('toggled');
    })
    $('#title').hide();
    $('#choix').hide();

    $('.drag').click(function(){
        $('#choix').show();
        $('#title').hide();
    })
    $('.add').click(function(){
        $('#title').show();
        $('#choix').hide();
    })
    $("#submit").click(function(){
        
        if(currentShipId == "bt1"){
            localStorage.setItem('titre1', document.getElementById('titre1').value);
        } 
        else if(currentShipId == "bt2")
        {
            localStorage.setItem('titre2', document.getElementById('titre2').value);
        }
        alert('gagné');
        $('#title').hide();
    })
    $("#match").click(function(){
        var titre = localStorage.getItem('titre');
        $('#liste').html(titre);
    })



    /*function setCanvas() {
		var canvas = document.getElementById("moncanevas");
		if (canvas.getContext)
		{    
			var context = canvas.getContext("2d"); 
		} 
	  	function drawLine() {
			context.beginPath();
			context.strokeStyle='green'; 
			context.fillStyle='rgba (0,0,128,1)';
			context.moveTo(20,100);
			context.lineTo(200,10);
			context.stroke(); 
		}  
	}
	window.onload=setCanvas;*/
});
var currentShipId;
var basicList =
{
    'items':{},
    'coucou':function(obj1) {
        //var element = document.getElementsByName("test");
    currentShipId = obj1.getAttribute("name");
    var shipName = alert(obj1.getAttribute("name"));   
  
  }
};

/*var ship1 = {
    var name = "Dixmude";
    var poids = "20 000 tonnes";
};
var ship2 = {
    var name = "Charles de Gaulle";
    var poids = "40 000 tonnes";
};*/


var form = {
    'link':function(title) {
        //var element = document.getElementsByName("test");
    currentShipId = obj1.getAttribute("name");
    var shipName = alert(obj1.getAttribute("name"));   
  }
    //'get':function(title) {

  //}
};
var map = L.map('map').setView([51.505, -0.09], 13);=