const gamePattern = [];
const userClickedPattern = [];

const sounds = ["sounds/red.mp3","sounds/blue.mp3","sounds/green.mp3","sounds/yellow.mp3","sounds/wrong.mp3"];
 //                        0             1                    2                 3

 const color = ["red", "blue", "green", "yellow"];
                //  0      1        2         3

function nextSequence() {
    
    var randomNumber = Math.floor(Math.random()*4)
    
    console.log(randomNumber);
    
    //Associated Color with that button
    
    var randomChosenColor = color[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`#${color[randomNumber]}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
   playSound(randomNumber);
    
}
nextSequence();


// For sound in game 


function playSound(randomNumber)
{
    var audio = new Audio(`${sounds[randomNumber]}`);
    audio.play();
}



function soundOnClicking(index)
{
    switch (index) {
        case "red":
            playSound(0)
            break;
        case "blue":
            playSound(1)
            break;
        case "green":
            playSound(2)
            break;
        case "yellow":
            playSound(3)
            break;
    
        default:
            break;
    }
}

// Animations for thr clicked Buttons
function animatePress(currentColor)
{

    $("#"+currentColor).addClass( "pressed" );

    setTimeout(() => {
        $("#"+currentColor).removeClass( "pressed" );
    }, 100);


}



//For detecting clicks

$(".btn").click(function (e) {
    var userChosenColor = this.id;
    soundOnClicking(userChosenColor);
    userClickedPattern.push(userChosenColor);
   // console.log(userClickedPattern);
   animatePress(userChosenColor);

});

