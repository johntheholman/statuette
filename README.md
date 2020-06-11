# Statuette | [Live Site](//statuette.johntheholman.com)

Statuette is a way of gamifying the Academy Award nominees and trying to pick the winners of each category before Oscar Sunday. Your picks are emailed to you so that you can follow along with the broadcast. Once the broadcast has completed scores are totalled up and then a follow-up email is sent out with the standings and announcing the winners.

## Rules:
- Start by making your picks for each category (see categories below)
- If you have questions about what criteria is being used for the Academy to determine a winner, see the information next to the category name in the header
- After you pick your nominee for a category, select the "Next Category" button to move forward through the categories
- If you would like to go back and change a pick, you will need to use the back button in the header next to the category name
- Once you have completed making selections for each category there is one last thing that you will need to consider
	1. If you would like your picks emailed to you, you will need to fill out the two form fields for the name and email at the top of the review page
	2. You need to drag-and-drop your picks to correspond with the confidence level that you have selected the winner for that category
	3. A confidence number of 24 is the highest confidence score you can give a pick, 1 is the lowest

### Scoring:
- If you are scoring the game live as you watch, if you have selected the correct nominee that wins that category you are awarded the confidence points associated with your pick.
- The second way of scoring is to award one point for each correct category guessed.
- I award a winner for each scoring method and send out a recap after the winner is crowned.

### Categories:
Best Picture, Actor in a Leading Role, Actress in a Leading Role, Actor in a Supporting Role, Actress in a Supporting Role, Animated Feature Film, Cinematography, Costume Design, Directing, Documentary (Feature), Documentary (Short Subject), FIlm Editing, Foreign Language Film, Makeup and Hairstyling, Music (Original Score), Music (Original Song), Production Design, Short Film (Animated), Short Film (Live Action), Sound Editing, Sound Mixing, Visual Effects, Writing (Adapted Screenplay), and Writing (Original Screenplay)

---

## Project Background:
I have been using various methods throughout the years to compile an Oscar related game for family and friends. This year, after focussing more on my programing experience, I decided to write out an app to control some of the elements that I have wanted to implement since I started to digitize the game. Specifically sending emails with picks, pulling in the data through JSON information that has already been compiled, and the ability to implement a way to add points to the various categories for parsing out a winner for confidence.

## Knowledge Gained:
- This deepened my understanding of Object Oriented Programming
- Added more practice to working with JSON data from an outside source and how to not only see how other people structure their JSON data, but how to access the information for an app
- How to work with styling libraries to allow for quick implementation and uniform looks with content as well as mobile responsiveness built in
- Using other sources to enhance the functionality of particular things you are trying to implement (specifically, using touch-punch to help incorporate drag-and-drop features on mobile)

### Current Features:
1. AJAX calls to source JSON file to pull in category and nominee information
2. Material Design Lite design with some enhancements to style the information quickly
3. Drag-and-drop review list to order picks in terms of confidence

### Planned Additions:
1. Navigation options to quickly jump from one category to another
2. The ability to update each category on the reviews page to make sure you are comfortable with your choice, or to change it last minute
3. Update to reduce the need for PHPMailer (if possible)
---

## Instructions for setting up the project locally:

1. Clone the project locally on your machine.
2. Download and install a proxy server (like MAMP)
3. Point your server to the main project folder
4. Navigate to localhost in your browser

### Dependencies:
You will need to have a gmail account setup (or any other email service) in order to send emails out with player picks.

---

If you are interested in contributing to the project then please message me for more details.
