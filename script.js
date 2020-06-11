/**
 * Listen for the document to load and initialize the application
 */
$(document).ready( startApp );

var statuetteGame;
function startApp(){
	statuetteGame = new Game_template({
		startGame: $("#startGame"),
		selectNominee: $("#selectNominee"),
		nextCategory: $("#nextCategory"),
		reviewPicks: $("#reviewPicks"),
		submitPicks: $("#submitPicks")
	});
	statuetteGame.addEventHandlers();
	$(".mdl-layout__container").addClass("hidden");
	$(".final-screen").addClass("hidden");
}