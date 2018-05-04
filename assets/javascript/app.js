$(document).ready(function () {

    var timer = {
        number: 30,
        intervalId: null,
        run: function () {
            clearInterval(timer.intervalId);
            timer.intervalId = setInterval(timer.decrement, 1000);
        },
        decrement: function () {
            timer.number--;
            $("#show-number").text(timer.number);
            if (timer.number < 1) {
                timer.stop();
                alert("Time Up!");
            }
        },
        stop: function () {
            clearInterval(timer.intervalId);
        }
    }

    $("#start").on("click", timer.run)

});







/**
 * step 1: show a start button and game title
 * step 2: click the start button
 * step 3: first question pops up and timer starts
 * step 4: select an answer
 * step 5: store answer
 * step 6: repeat steps 3, 4, 5
 * step 7: calculate score
 * step 8: show results and stop timer
 */

 

function Question (question, answer) {
    this.statement = question;
    this.answer = answer;
}

Question("Some animals can get sunburn", true);
Question("No cat likes water", false);
Question("Frogs have to drink lots of water", false);
Question("Elephants eat with their noses", true);
Question("Camels can walk 100 miles in the desert without water", true);
Question("Chimpanzees are nocturnal", false);

var Q1 = {
    statement: 'Some animals can get sunburn',
    answer: true
};

var Q2 = {
    statement: 'No cat likes water',
    answer: false
};

var Q3 = {
    statement: 'Frogs have to drink lots of water',
    answer: false
};

var Q4 = {
    statement: 'Elephants eat with their noses',
    answer: true
};

var Q5 = {
    statement: 'Camels can walk 100 miles in the desert without water',
    answer: true
};

var Q6 = {
    statement: 'Chimpanzees are nocturnal',
    answer: false
};

var questionArray = [Q1, Q2, Q3, Q4, Q5, Q6];
var counter = 0;
var correct = 0;
var wrong = 0;





