class Review {
	constructor(picksObj, response, reviewCallback=()=>{}) {
		this.picksObj = picksObj;
		this.response = response;
		this.reviewCallback = reviewCallback;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	parseOutPicks() {
		this.addFormFields();
		this.addFormDiv();
		var categoryPicksArray = Object.keys(this.response.data.sections.nominees);
		for (var picksIndex = 0; picksIndex < categoryPicksArray.length; picksIndex++) {
			var mainPick = this.picksObj[categoryPicksArray[picksIndex]];
			var categoryPick = this.response.data.sections.nominees[categoryPicksArray[picksIndex]].category_name;
			var categoryKey = categoryPicksArray[picksIndex];
			this.structureOfReviews(mainPick, categoryPick, categoryKey);
	  };
	}

	addFormDiv() {
		var formDiv = $('<ul id="sortable">').addClass("player-picks mdl-list");
		$("#review-form").append(formDiv);
		var confidenceList = $("<ul>").addClass("confidence-list");
		for(var listIndex = 24; listIndex > 0; listIndex--){
				var confidencelistItem = $("<li>").text(listIndex);
				confidencelistItem.appendTo(confidenceList);
		}
		confidenceList.appendTo(".review-columns");
	}

	addFormFields() {
		var nameLabel = $('<label for="playerName">').addClass("mdl-textfield__label").text("Name");
		var nameInput = $('<input type="text" id="playerName">').addClass("mdl-textfield__input");
		var nameDiv = $('<div>').addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");

		var nameField = nameDiv;
		nameInput.appendTo(nameDiv);
		nameLabel.appendTo(nameDiv);
		componentHandler.upgradeElements(nameField);

		var emailLabel = $('<label for="playerEmail">').addClass("mdl-textfield__label").text("Email");
		var emailInput = $('<input id="playerEmail" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">').addClass("mdl-textfield__input");
		var emailDiv = $('<div>').addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");

		var emailField = emailDiv;
		emailInput.appendTo(emailDiv);
		emailLabel.appendTo(emailDiv);
		componentHandler.upgradeElements(emailField);

		$("#review-form").append(nameField, emailField);
	}

	structureOfReviews(title, category, key) {
		var listItem = $("<li id='"+key+"-confidence'>").addClass("mdl-list__item mdl-list__item--two-line ui-state-default");
		var columnOneSpan = $("<span>").addClass("mdl-list__item-primary-content");
		var columnOneTitle = $("<span>").text(title);
		var columnOneSubtitle = $("<span>").addClass("mdl-list__item-sub-title").text(category);

		var iconSpan = $("<span>").addClass("mdl-list__item-secondary-content");
		var iconFont = $("<i>").addClass("material-icons instant").text("reorder");

		// var columnTwoSpan = $("<span>").addClass("mdl-list__item-secondary-content");
		// var columnTwoDiv = $("<div>").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
		// var columnTwoInput = $('<input id="'+key+'" type="number" pattern="\\d*" name="quantity" min="1" max="24">').addClass("mdl-textfield__input");
		// var columnTwoLabel = $('<label for="'+key+'">').addClass("mdl-textfield__label").text("Score");
		// var columnTwoError = $("<span>").addClass("mdl-textfield__error").text("Input is not a number!");

		var confidenceList = listItem;
		
		var columnOne = columnOneSpan;
		columnOneTitle.appendTo(columnOneSpan);
		columnOneSubtitle.appendTo(columnOneSpan);

		var iconColumn = iconSpan;
		iconFont.appendTo(iconSpan);
		
		// var columnTwo = columnTwoSpan;
		// columnTwoDiv.appendTo(columnTwoSpan);
		// columnTwoInput.appendTo(columnTwoDiv);
		// columnTwoLabel.appendTo(columnTwoDiv);
		// columnTwoError.appendTo(columnTwoDiv);

		// componentHandler.upgradeElements(columnTwo);
		var fullElement = confidenceList.append(iconColumn, columnOne);
		statuetteGame.reviewPicks(fullElement);

		$(function() {
			$("#sortable").sortable();
			$("#sortable").disableSelection();
		});
	}

	handleSubmit(response){
		this.reviewCallback(this);
	}
}