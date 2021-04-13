class Category {
    constructor(response, categoryCallback=()=>{}){
    	this.response = response;
    	this.categoryCallback = categoryCallback;
    	this.nominees = new Nominees();
    	this.categoryArray = Object.keys(this.response.data.sections.nominees);
    	this.getCategory = this.getCategory.bind(this);
    	this.handleCategory = this.handleCategory.bind(this);
    	this.reviewPage = this.reviewPage.bind(this);
    	this.submitAnswers = this.submitAnswers.bind(this);
    	this.previousCategory = this.previousCategory.bind(this);
		$(".material-icons").click(this.previousCategory);
		$("#confidence-btn").click(this.handleCategory);
    }

    handleCategory(button){
		this.categoryCallback(this);
    	$(".page-content").empty();
    	$("#nextCategory").empty();
		var categoryIndex = parseInt(button.currentTarget.name);
    	if (categoryIndex < 22) {
	    	categoryIndex++;
	    	this.getCategory(categoryIndex);
	    } else if (categoryIndex === 22) {
	    	this.confidencePage();
	    } else if (categoryIndex === 23) {
	    	$("#reviewPicks").empty();
	    	categoryIndex++;
	    	this.reviewPage(categoryIndex);
	    } else if (categoryIndex === 24) {
	    	this.submitAnswers();
	    }
    }

	getCategory(index){
		$(".mdl-layout__container").removeClass("hidden");
	    if (index < this.categoryArray.length) {
	    	statuetteGame.playerPicks[this.categoryArray[index]] = {[this.categoryArray[index]]: ""};
	    	$(".mdl-layout__header").removeClass("hidden");
	        if (typeof this.response.data.sections.nominees[this.categoryArray[index]] === "object"){
	            var categoryTitle = this.response.data.sections.nominees[this.categoryArray[index]].category_name;
	        }
	        statuetteGame.displayCategory(categoryTitle);
	        var nominees = new Nominees (this.response, this.categoryArray[index], this.selectNominee);
	        window.scrollTo(0, 0);
			nominees.getNominees();
	        this.footerButton(index);
	    }
	}

	footerButton(index){
		if (index < 22) {
			var footerRaisedButton = $('<button type="button" name="'+index+'" id="nextCategoryButton">').addClass("start- mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent").text("Next Category").click(this.handleCategory);
			$("#nextCategory").append(footerRaisedButton);
			document.getElementById("nextCategoryButton").setAttribute("disabled", true);
		} else if (index === 22){
			var reviewRaisedButton = $('<button type="button" name="'+index+'" id="nextCategoryButton">').addClass("start- mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent").text("Review Picks").click(this.handleCategory);
			$("#reviewPicks").append(reviewRaisedButton);
			document.getElementById("nextCategoryButton").setAttribute("disabled", true);
		} else if (index === 24) {
			var submitRaisedButton = $('<button type="button" name="'+index+'" id="nextCategoryButton">').addClass("start- mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent").text("Submit").click(this.handleCategory);
			$("#reviewPicks").append(submitRaisedButton);
			// document.getElementById("nextCategoryButton").setAttribute("disabled", true);
		}
	}

	previousCategory(){
		var previousIndex = parseInt($("#nextCategoryButton")[0].name);
        previousIndex--;
		$(".page-content").empty();
    	$("#nextCategory").empty();
    	$("#reviewPicks").empty();
        this.getCategory(previousIndex);
	}

	selectNominee(){
		document.getElementById("nextCategoryButton").removeAttribute("disabled");
	}

	confidencePage(){
		$("header").addClass("hidden");
		$("main").addClass("hidden");
		$("footer").addClass("hidden");
		$(".confidence").removeClass("hidden");
	}

	reviewPage(index) {
		$(".confidence").addClass("hidden");
		$("header").removeClass("hidden");
		$("main").removeClass("hidden");
		$("footer").removeClass("hidden");
		var reviewTitle = "Review Your Picks";
		statuetteGame.displayCategory(reviewTitle);
		this.footerButton(index);
		var playerPicksObj = statuetteGame.playerPicks;
		var review = new Review (playerPicksObj, this.response, this.submitAnswers);
		review.parseOutPicks();
	}

	submitAnswers() {
		var confidenceArray = $("ul#sortable").sortable("toArray");
		var confidenceScore = 23;

		for(var confidenceIndex = 0; confidenceIndex < confidenceArray.length; confidenceIndex++) {
			statuetteGame.playerPicks[confidenceArray[confidenceIndex]] = confidenceScore;
			confidenceScore--; 
		}

		var playerName = $("#playerName").val().trim();
		var playerEmail = $("#playerEmail").val().trim();

		if (playerName == '' || playerEmail == ''){
			var alertText = "";
			if (playerName == ''){
				alertText = 'You must enter a valid Name.'
			} else if (playerEmail == ''){
				alertText = 'You must enter a valid Email.'
			}
			$('#alertMessage').html("<div class='alert alert-danger'>");
			$('#alertMessage > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			  .append("</button>");
			$('#alertMessage > .alert-danger').append($("<strong>").text(alertText));
			$('#alertMessage > .alert-danger').append('</div>');
			return;
		}

		statuetteGame.playerPicks["name"] = playerName;
		statuetteGame.playerPicks["email"] = playerEmail;
		statuetteGame.endGame();
	}

}