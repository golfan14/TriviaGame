$(document).ready(function() {

    var index = 0;

    var timer = {
        time: 30,

        reset: function() {
            this.time = 30;
            $("#timer").html("<h3>" + this.time + " seconds remaining</h3>");     
        },
        
        start: function() {
            counter = setInterval(timer.count, 1000);
        },

        stop: function() {
            clearInterval(counter);
        },

        count: function() {
                timer.time--;
            if (timer.time >= 0) {
                $("#timer").html("<h3>" + timer.time + " seconds remaining</h3>");
            }
            else {
                index++;
                wrongAnswer();
                timer.reset();
                if (index < questionArray.length) {
                    nextQuestion(index);
                }
                else  {
                    showScore();
                }
            }
        }
    }









    
    var Q1 = {
        statement : 'Some animals can get sunburn',
        answer : true
    };

    var Q2 = {
        statement : 'No cat likes water',
        answer : false
    };

    var Q3 = {
        statement : 'Frogs have to drink lots of water',
        answer : false
    };

    var Q4 = {
        statement : 'Elephants eat with their noses',
        answer : true
    };

    var Q5 = {
        statement : 'Camels can walk 100 miles in the desert without water',
        answer : true
    };

    var Q6 = {
        statement : 'Chimpanzees are nocturnal',
        answer : false
    };

    var questionArray = [Q1, Q2, Q3, Q4, Q5, Q6];

    var index = 0;
    var correct = 0;
    var wrong = 0;

    



