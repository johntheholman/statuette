class Game_template {
    constructor( elementId ){
        this.elementId = elementId;
        this.playerPicks = {};

        this.startGame = this.startGame.bind(this);
        this.displayCategory = this.displayCategory.bind(this);
        this.reviewPicks = this.reviewPicks.bind(this);
    }

    addEventHandlers() {
        this.elementId.startGame.click(this.startGame);
        this.elementId.nextCategory.click(this.nextCategory);
        // $(".material-icons").click(this.previousCategory);
    }

    startGame() {
        $.ajax({
        dataType: 'json',
        url: 'https://johntheholman.github.io/statuette_data/data.json',
        success: (function(response){
                var category = new Category(response, this.selectCategory);
                category.getCategory(0);
            }).bind(this)
        });
        // this.playerPicks["name"] = $("#playerName").val().trim();
        // this.playerPicks["email"] = $("#playerEmail").val().trim();
        $(".start-screen").addClass("hidden");
        $(".game").removeClass("hidden");
    }

    displayCategory(category) {
        if(category === "Best Picture") {
            $(".mdl-layout-title").text(category);
            $(".material-icons").text("");
        } else if (category === "Review Your Picks"){
            $(".material-icons").text("");
            $(".mdl-layout-title").text(category);
        } else {
            $(".material-icons").text("arrow_back_ios");
            $(".mdl-layout-title").text(category);
        }
        this.displayTooltip(category);
    }

    displayTooltip(category) {
        var tooltipText = "";
        switch(category){
            case "Best Picture":
                tooltipText = "Awarded to the producers, the Best Picture statuette is awarded for the best collaborative efforts of the producer(s), director(s), actor(s), writer(s) and lots of other artists."
                break;
            case "Actor in a Leading Role":
                tooltipText = "Awarded to acknowledge the caliber of an actor who has delivered an outstanding performance as the lead character in a film.";
                break;
            case "Actress in a Leading Role": 
                tooltipText = "Awarded to acknowledge the caliber of an actress who has delivered an outstanding performance as the lead character in a film.";
                break;
            case "Actor in a Supporting Role": 
            case "Actress in a Supporting Role":
                tooltipText = "In a film, there is a character that, though not in the lead, equally bears the responsibility of a film. This award is given to those talented artists who play the supporting role.";
                break;
            case "Animated Feature Film": 
                tooltipText = "Awarded for the best collaborative efforts of an animated feature film between the producer(s), director(s), actor(s), writer(s), animator(s) and lots of other artists.";
                break;
            case "Cinematography": 
                tooltipText = "Awarded to a cinematographer for his/her achievement in camera angles, movement, and tone captured through the camera for a particular motion picture.";
                break;
            case "Costume Design": 
                tooltipText = "Awarded to the designer that prepares the attire of an individual, which adds to the character portrayed by the actor/actress (and extras) in a film.";
                break;
            case "Directing": 
                tooltipText = "Awarded to the director who has shown outstanding achievement in creating a singular vision of a particular film.";
                break;
            case "Documentary (Feature)": 
                tooltipText = "Awarded to the documentary filmmakers that tell a real life story through various means.";
                break;
            case "Documentary (Short Subject)": 
                tooltipText = "Awarded to the short documentary (less than 40 minutes) filmmakers that tell a real life story through various means.";
                break;
            case "Film Editing": 
                tooltipText = "Awarded to the editor that is able to put shots together in a particular sequence in order to convey story and emotion from what was captured by the camera.";
                break;
            case "Foreign Language Film": 
                tooltipText = "Awarded for the best film that is produced in a language other than English and submitted in representation of a particular country.";
                break;
            case "Makeup and Hairstyling": 
                tooltipText = "Awarded to those individuals who have the artistic flair to make an actor look like his/her character to perfection. This sometimes involves prothetics.";
                break;
            case "Music (Original Score)": 
                tooltipText = "Awarded to the composer that has written the best underscore or body of music, written specifically for the motion picture.";
                break;
            case "Music (Original Song)": 
                tooltipText = "Awarded to the music composer and lyricists that compose an original song specifically for a given motion picture.";
                break;
            case "Production Design": 
                tooltipText = "Awarded to the designers that build the world the characters live in. This could be given for the use of existing locations as well as fabricated sets.";
                break;
            case "Short Film (Animated)": 
                tooltipText = "Awarded for the best collaborative efforts of an animated short film (less than 40 mins) between all the artists involved.";
                break;
            case "Short Film (Live Action)": 
                tooltipText = "Awarded for the best collaborative efforts of a short film (less than 40 mins) between all the artists involved.";
                break;
            case "Sound Editing": 
                tooltipText = "Awarded to the sound engineers that create the actual sounds that you hear when something explodes or when you hear the footsteps of an actor/actress.";
                break;
            case "Sound Mixing": 
                tooltipText = "Awarded the sound mixers and engineers that are able to add all of the sound effects, dialogue, and music together without making one aspect too noticable.";
                break;
            case "Visual Effects": 
                tooltipText = "Awarded for the best execution of visual effects by seemlessly integrating them into a motion picture.";
                break;
            case "Writing (Adapted Screenplay)": 
                tooltipText = "Award to the writer or writers who have adapted the story from a different medium (another film, novel, play, or short story) into a film.";
                break;
            case "Writing (Original Screenplay)": 
                tooltipText = "Awarded to the writers that created a story not based upon previously published material.";
                break;
            case "Review Your Picks": 
                tooltipText = "Drag-and-drop your choices next to the confidence level you have for each category. 24 is the highest confidence and 1 is the lowest confidence. Get a category right and you will be awarded the points.";
                break;
            default:
            tooltipText = "Sorry, the text you were expecting is not available. Please check back later."
        }
        var tooltipIcon = $("<i>").addClass("material-icons").text("info");
        var mainTooltipDiv = $("<div>").addClass("tooltip").append(tooltipIcon);
        var mainTooltipText = $("<span>").addClass("tooltiptext tooltip-bottom").text(tooltipText);

        var tooltipMessage = mainTooltipDiv.append(mainTooltipText);
        $(".mdl-layout-title").append(mainTooltipDiv);
    }

    displayNominees(element) {
        element.appendTo(".page-content");
    }

    selectCategory(){
        
    }

    nextCategory() {
        
    }

    reviewPicks(listItem) {
        $(".player-picks").append(listItem);
    }

    endGame() {
        $("#nextCategoryButton").prop("disabled", true);
        $.ajax({
            url: "../server/picks.php",
            type: "POST",
            data: {
                playerPicks: this.playerPicks
            },
            cache: false,
            success: this.sendPicks(),
            error: function() {
                $('#alertMessage').html("<div class='warning warning-message'>");
                $('#alertMessage > .warning-message').html("<button type='button' class='close' data-dismiss='warning' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#alertMessage > .warning-message')
                    .append("<strong>There was a problem sending your picks to your email, please try again.</strong>");
                $('#alertMessage > .warning-message')
                    .append('</div>');
            }
        });

        $('.close').focus(function() {
            $('#alertMessage').html('');
        });
    }

    sendPicks() {
        var recursiveEncoded = $.param( this.playerPicks );
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycby0W8PhFoQAYUchOZB-g-rv4M9EtscbUIwgqh6hJ5pcejP7Gw0QROLUIXC6qAi90LAr/exec",
            type: "post",
            data: recursiveEncoded,
            success: this.finalScreen(),
            error: function() {
                $('#alertMessage').html("<div class='warning warning-message'>");
                $('#alertMessage > .warning-message').html("<button type='button' class='close' data-dismiss='warning' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#alertMessage > .warning-message')
                    .append("<strong>There is a problem saving your picks on the server, please try again.</strong>");
                $('#alertMessage > .warning-message')
                    .append('</div>');
            }
        });
    }

    finalScreen(){
        $(".mdl-layout__content").empty().addClass("hidden");
        $(".mdl-layout__header").addClass("hidden");
        $("footer").addClass("hidden");
        $(".final-screen").removeClass("hidden");
    }
}
