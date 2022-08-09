const color = ["red", "blue", "green", "yellow"];
                //  0      1        2         3
const sounds = ["sounds/red.mp3","sounds/blue.mp3","sounds/green.mp3","sounds/yellow.mp3","sounds/wrong.mp3"];
                //        0             1                    2                 3

const gamePattern = [];
const userClickedPattern = [];


function nextSequence() {
    
    var randomNumber = Math.floor(Math.random()*4)

    console.log(randomNumber);
    
    //Associated Color with that button

    var randomChosenColor = color[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`#${color[randomNumber]}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    //Associated Audio with Buttton
    var audio = new Audio(`${sounds[randomNumber]}`);
    // audio.play();

}
nextSequence();

$(".btn").click(function (e) {
   var userChosenColor = this.id;
   userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
})