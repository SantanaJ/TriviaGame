// Press Start to begin game----

// Game Screen appears

// Question appears   

// Answers are clickable

// Each answer is linked to right or wrong

//DOM is cleared to next screen 

//If right, display "right" result screen

//If wrong, display "wrong" result screen 

// After result screen display next question

//When all questions are answered, display number of right or wrong

// Game ends with "reset" button

var questionOrder = [questionOne, questionTwo];
// var displayQuestion=

var questionOne ={
    question:"In what decade is the Netflix original series set in?",
    a:["1950", false],
    b:["1960", false],
    c:["1980", true]
};

var questionTwo ={
    question:"The first Season 1 scene is a reference to which of these prominent '80s sci-fi films?",
    a:["Starwars", false],
    b:["Alien", true],
    c:["Blade Runner", true],
};

$("#waffleStart").on("click", function(){
    $("#intro").html("test");
    // gamePlay(questionOrder[displayQuestion]);
    // $("#intro").css("display", "inline");

});

console.log(questionOne);


// function gamePlay(){
    
    

// }




