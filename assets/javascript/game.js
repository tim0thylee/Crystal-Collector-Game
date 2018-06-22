$(document).ready(function(){
	
	var wins = 0;
	var losses = 0;
	var addition = 0;
	
	var total = Math.round((Math.random()* 100) + 19);
	
	var red = Math.round((Math.random()* 12) + 1);
	var blue = Math.round((Math.random()* 12) + 1);
	var yellow = Math.round((Math.random()* 12) + 1);
	var green = Math.round((Math.random()* 12) + 1);
	
	
	var totalSum = function (){
		$('.sum').empty();
		$('.sum').append(addition);
		
		$('#wins').empty();
		$('#wins').append(wins);
		
		$('#losses').empty();
		$('#losses').append(losses);
	}
	
	var restart = function(){
		addition = 0;
		total = Math.round((Math.random()* 100) + 19);
		
		$('.total').empty();
		$('.total').append(total);
		
		red = Math.round((Math.random()* 12) + 1);
		blue = Math.round((Math.random()* 12) + 1);
		yellow = Math.round((Math.random()* 12) + 1);
		green = Math.round((Math.random()* 12) + 1);
		
		totalSum();
	}
	
	var game = function (){
		if (addition === total) {
			wins = wins + 1;
			
			restart();
		}
		
		else if(addition > total){
			losses = losses + 1;
			
			restart();
		}
		
		else{
			totalSum();
		}
	}
	
	$('.total').append(total);
	
	$('.sum').append(addition);
	
	
	
	$('#red').click(function(){
		addition = addition + red;
		game();
	})
	
	$('#blue').click(function(){
		addition = addition + blue;
		game();
	})
	
	$('#yellow').click(function(){
		addition = addition + yellow;
		game();
	})
	
	$('#green').click(function(){
		addition = addition + green;
		game();
	})
});










