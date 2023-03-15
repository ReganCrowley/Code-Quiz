
	const Question = ["null", "What is NOT a Pokemon game?","Which is a starter?", "How many of the original Pokemon are there? ", "Which of the following isn't a Pokemon", "What Pokemon type doesnt exist?",  "A pokemon has ____ if they run out of HP?", "Which Pokemon is a Flying type?","Which Pokemon is not a Water type" ] ;
	const Correct  = ["null", "Purple", "Charmander", "151" , "Frodo", "Snow", "Fainted", "Gyarados", "Grapploct"]   ;

	const Answer1 = ["null", "Red"    , "Jigglypuff", "493"  , "Firigiraf"   ,"Fire", "Been eliminated", "Flygon", "Grapploct"] ;
	const Answer2 = ["null", "Blue"   , "Charmander" ,"200"  , "Pikachu"   ,  "Grass", "Fainted",	     "Golurk", "Kindra"] ;
	const Answer3 = ["null", "Purple" , "Mew"   ,     "78"  ,  "Frodo" 	,    "Snow",   "Died",           "Druddigon", "Palkia"] ;
	const Answer4 = ["null", "Yellow"  , "Geodude"  , "151" ,  "Zigzagoon" 	,"Poison", "Been defeated",  "Gyarados", "Croconaw"] ;
	
	let LoopCnt = 1;
	let RightAns = 0;
	let WrongAns = 0;
	var timeoutMyOswego;
	let maxCnt= 9;
	
function countdown() {
  var seconds;
  var temp;
  var GivenTime = document.getElementById('countdown').innerHTML


  time = document.getElementById('countdown').innerHTML;
  timeArray = time.split(':')
  seconds = timeToSeconds(timeArray);
  if (seconds == '') {
    temp = document.getElementById('countdown');
    temp.innerHTML = GivenTime;
    time = document.getElementById('countdown').innerHTML;
    timeArray = time.split(':')
    seconds = timeToSeconds(timeArray);
  }
  seconds--;
  temp = document.getElementById('countdown');
  temp.innerHTML = secondsToTime(seconds);
  timeoutMyOswego = setTimeout(countdown, 1000);
  
  if (secondsToTime(seconds) == '00:00') {
	stopQuiz();
  }
}

function stopQuiz() {
//let displayTxt = (loopCnt == 11 ) ? `That's all  the Questions answer!` : `Time's Up`;
	clearTimeout(timeoutMyOswego); //stop timer
	document.getElementById("timeleft").innerHTML = "<b>That's the end of the quiz!  </b> 	  ";
	document.getElementById("RightAns").innerHTML = "Correct = " + RightAns + "  ";
    document.getElementById("WrongAns").innerHTML = "Wrong = " + WrongAns +"  ";
	LoopCnt = LoopCnt - 1;
	maxCnt  = maxCnt - 1;
	document.getElementById("question").innerHTML = "<b> Questions Answered  : " + LoopCnt + " of "+ maxCnt +"  </b> <br> " ;
}

function timeToSeconds(timeArray) {
  var minutes = (timeArray[0] * 1);
  var seconds = (minutes * 60) + (timeArray[1] * 1);
  return seconds;
}

function secondsToTime(secs) {
  var hours = Math.floor(secs / (60 * 60));
  hours = hours < 10 ? '0' + hours : hours;
  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return minutes + ':' + seconds;
   

}
countdown();

function startquestions() {
	let startEl = document.getElementById("start");
	startEl.setAttribute("class", "hide");
	document.getElementById("question").innerHTML = "<b>Question " + LoopCnt + "   </b> <br> " +
      "<br> " + Question[LoopCnt] + "<br>" +
      "<br> <input type='button' class='submit' value=' " + Answer1[LoopCnt]   + " '  onclick = 'answer(value)' /> " +  
	  "<br> <input type='button' class='submit' value=' " + Answer2[LoopCnt]   + " '  onclick = 'answer(value)' /> " +  
	  "<br> <input type='button' class='submit' value=' " + Answer3[LoopCnt]   + " '  onclick = 'answer(value)' /> " +  
	  "<br> <input type='button' class='submit' value=' " + Answer4[LoopCnt]   + " '  onclick = 'answer(value)' /> " ;

}

function answer(value) {
/*	document.getElementById("answer").innerHTML = "<b>Answered </b> " +  value + Correct[LoopCnt] + "  "; */

	if (value.trim() == Correct[LoopCnt]) { RightAns = RightAns + 1;} 
	else 
	{ WrongAns = WrongAns + 1; } 

	  
	document.getElementById("RightAns").innerHTML = "Correct = " + RightAns + "  ";
    document.getElementById("WrongAns").innerHTML = "Wrong = " + WrongAns +"  ";
    LoopCnt ++;	
	if (LoopCnt >= maxCnt) {
		stopQuiz();
	}
	else {
	startquestions();
	}
}  

