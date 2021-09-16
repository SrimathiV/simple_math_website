var playing = false;
var score;
var action;
var timeremaining;
var correctans;
var arrAns = [];
document.getElementById("startreset").onclick = function() {
    if (playing == true) {
        location.reload();

    } else {
        score = 0;
        playing = true;
        document.getElementById("timeremaining").style.display = "block";

        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("startreset").innerHTML = "reset";
        timeremaining = 30;
        count();
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameOver");

        hide("correct");
        hide("wrong");
        generateQA();


        for (var i = 1; i < 5; i++) {
            document.getElementById("box" + i).onclick = function() {

                if (this.innerHTML == correctans) {

                    show("correct");
                    hide("wrong");
                    score++;
                    document.getElementById("scorevalue").innerHTML = score;
                    setTimeout(function() {
                        hide("correct");

                    }, 1050)

                    generateQA();


                } else {
                    hide("correct");
                    show("wrong");
                    setTimeout(function() {
                        hide("wrong");

                    }, 1050)

                }

            }
        }

    }

}

function count() {
    action = setInterval(

        function() {

            timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            if (timeremaining == 0) {
                clear();
                hide("timeremaining");

                document.getElementById("startreset").innerHTML = "Start Game";
                show("gameOver");
                document.getElementById("gameOver").innerHTML = "<p> Game Over <p> <p>Your Score is " + score + "</p>";
                playing = false;
            }


        }, 1000);
}

function hide(id) {

    document.getElementById(id).style.display = "none";
}

function show(id) {

    document.getElementById(id).style.display = "block";
}

function clear() {

    clearInterval(action);

}

function generateQA() {
    var arrAns = [];
    do {
        var x = 1 + Math.round(9 * Math.random());
        var y = 1 + Math.round(9 * Math.random());
        correctans = x * y;
    }
    while (arrAns.indexOf(correctans) > -1)
    arrAns.push(correctans);
    var correctpos = 1 + Math.round(3 * Math.random());
    document.getElementById("question").innerHTML = x + "x" + y;
    document.getElementById("box" + correctpos).innerHTML = correctans;
    var wrongans;
    var arr2 = [correctans];
    for (var i = 1; i < 5; i++) {
        if (i != correctpos) {
            do { wrongans = 1 + Math.round(9 * Math.random()) * 1 + Math.round(9 * Math.random()); }
            while (arr2.indexOf(wrongans) > -1)
            document.getElementById("box" + i).innerHTML = wrongans;

            arr2.push(wrongans);

        }

    }


}

