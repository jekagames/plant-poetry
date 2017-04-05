var POETRY = 0;
var currentScreen;
var grammar;
var currentBackground = 0;

	grammar = tracery.createGrammar(madlibs);

$(document).ready(function()
{
	setCurrentScreen(POETRY);

});

function setCurrentScreen(POETRY)
{

		$("#instructionsScreen").show();
		$("#steps").html(grammar.flatten("#poems#"));
}

// function setBackground()
// {
// 	if (currentBackground == 0)
// 	{
// 		$("#drawing").css("background-image", "url(\"assets/flora.png\")");
// 		currentBackground++;
// 	}
// 	else if (currentBackground == 1)
// 	{
// 		$("#drawing").css("background-image", "url(\"assets/flora.png\")");
// 		currentBackground++;
// 	}
// 	else if (currentBackground == 2)
// 	{
// 		$("#drawing").css("background-image", "url(\"assets/flora.png\")");
// 		currentBackground = 0;
// 	}
// }

