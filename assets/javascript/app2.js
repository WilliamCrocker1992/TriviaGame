//variables
var showquestions;
var counter = 30;
var questionArray = ["In what classic Game did Leeroy Jenkins mess up?", "In what Raid did Leeroy charge in?", "What class was Leeroy Jenkins?", "What was Leeroy's famous last words?"];
var answerArray = [["World of Warcraft", "Runescape", "Eve Online", "Adventure Quest"], ["Twilights Hammer","BWD","IceCrown Citadel","Neltharians Liar"], ["Warrior", "Rogue", "Paladin", "Death Knight"], ["My loot lol","Godamnit Leeroy","At Least I have Chicken","Sorry Guys"]];
var Answers = ["A. World of Warcraft", "B. BWD", "C. Paladin", "C. At Least I have Chicken"];
var selectedAnswer;
var Clock;
var correct = 0;
var incorrect = 0;
var unanswered = 0;



$("body").on("click", ".area", function(event){
	showquestions();
});

function showquestions(){

	for (i = 0; i < questionArray.length; i++) { 
    console.log(questionArray[i]); }
$( ".area2" ).text(questionArray);

};





