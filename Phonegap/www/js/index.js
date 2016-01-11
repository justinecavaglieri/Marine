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
        localStorage.setItem('titre', document.getElementById('titre').value);
        alert('gagné');
        $('#title').hide();
    })
    $("#match").click(function(){
        var titre = localStorage.getItem('titre');
        $('#liste').html(titre);
    })

    function setCanvas() {
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
	window.onload=setCanvas;
});
