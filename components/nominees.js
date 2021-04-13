class Nominees {
	constructor(response, category, nominateCallback=()=>{}) {
		this.response = response;
		this.category = category;
		this.nominateCallback = nominateCallback;
		this.handleNominate = this.handleNominate.bind(this);
	}

	getNominees() {
	    var nominationArray = this.response.data.sections.nominees[this.category].result;

	    for (var nomineeIndex = 0; nomineeIndex < nominationArray.length; nomineeIndex++) {
	        var posterClass = this.response.data.sections.nominees[this.category].result[nomineeIndex].post_name;
	        var nomineeFilmData = this.response.data.sections.nominees[this.category].result[nomineeIndex].post_title;
	        var nomineePersonData = this.response.data.sections.nominees[this.category].result[nomineeIndex].nominee_description;
	        this.buildCard(nomineeIndex, nomineeFilmData, nomineePersonData);
	    }

	}

	buildCard(index, title, individual) {
		var materialCard = $("<div>").addClass("demo-card-square mdl-card mdl-shadow--2dp");
        var materialCardFilm = $("<div>").addClass("mdl-card__title mdl-card--expand").css({"background":"url('"+this.response.data.sections.nominees[this.category].result[index].featured_image.sizes.featured.url+"')","background-position-x": "right 15%","background-position-y": "center","background-repeat": "no-repeat","background-color": "whitesmoke","background-size": "cover"});
        var materialCardFilmTitle = $("<div>").addClass("mdl-card__title-text").text(title);
        var materialCardIndividual = $("<div>").addClass("mdl-card__supporting-text").text(individual);
        var materialCardButtonDivider = $("<div>").addClass("mdl-card__actions mdl-card--border");
        var materialCardButtonText = $('<button type="button" name="'+this.category+'"value="'+title+'" id="nomineeButton">').addClass("mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect").text("Nominate").click(this.handleNominate);

        var renderCards = materialCard;
        materialCardFilm.appendTo(materialCard);
        materialCardFilmTitle.appendTo(materialCardFilm);
        materialCardIndividual.appendTo(materialCard);
        materialCardButtonDivider.appendTo(materialCard);
        materialCardButtonText.appendTo(materialCardButtonDivider);

        statuetteGame.displayNominees(renderCards);
	}

	handleNominate(button){
		this.nominateCallback(this);
		
		if($("button").hasClass("nominated")){
			$(".mdl-card__actions > button").removeClass("nominated").text("Nominate");
		}

		var cardNominated = button.currentTarget.value;
		statuetteGame.playerPicks[button.currentTarget.name] = cardNominated;
		$(button.currentTarget).addClass("nominated").text("Nominated");
	}

}