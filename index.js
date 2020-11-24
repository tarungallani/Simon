
var colorarray=["red","yellow","blue","green"];
var colorchosen;
var computerpattern=[];
var userpattern=[];
var level=0;
var started=false;
alert("Remember the pattern. Every level adds a new pattern.")
$("#level-title").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$("div.btn").click(function(){
var userclicked=$(this).attr("id");
userpattern.push(userclicked);
makeSound(userclicked);
makeAnimation(userclicked);
checkAnswer(userpattern.length-1);
});

function checkAnswer(currentLevel) {
    console.log(computerpattern);
    console.log(userpattern);
    if (computerpattern[currentLevel] === userpattern[currentLevel]) {
      if (userpattern.length === computerpattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      makeSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").html("Game Over:(<br> Click Me to Restart :(");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function startOver() {
  level = 0;
  compPattern = [];
  started = false;
}

function nextSequence()
{
userpattern=[];
computerpattern=[];
level++;
$("#level-title").text("Level " + level);
for (i=0; i<level; i++) {
  setTimeout(function() {
    rno=Math.floor(Math.random()*4);
    colorchosen=colorarray[rno];
    makeSound(colorchosen);
    makeAnimation(colorchosen);
    computerpattern.push(colorchosen);
    console.log(computerpattern);
  }, 1000*i);
}
}


function makeSound(valuegiven) {
  var v = "sounds/"+ valuegiven + ".mp3";
  var audio = new Audio(v);
  audio.play();
}

function makeAnimation(valuegiven){

  var activeButton= $("#"+valuegiven);
  activeButton.addClass("pressed");
  setTimeout(function(){
    activeButton.removeClass("pressed");
  },100);
}
