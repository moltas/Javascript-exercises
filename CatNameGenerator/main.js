$(document).ready(function() {

    //Button on click function
    $(".btn").on("click", getCatName);


    //Create array of catnames and get random

    //just so the browser doesn't have to find span every time we press button
    var $write = $("h3");

    function getCatName() {

        var catArray = ["Simba",
            "Kalle", "Salty", "Kongo", "Drogo", "Kitty",
            "Dovah", "Lex", "Tess", "Tigger", "Lurch", "Loki", "Coco",
            "Godzilla", "Charlie", "Minto", "Dexter", "Mario", "Ronaldo",
            "Zlatan", "Jacky", "Rocky", "Thor", "Bella", "Molly",
            "Gringo", "Generalen", "Snickers", "Max", "Steve", "Magneto"
        ];

        //random value between 0-array length
        var randomCat = Math.floor(Math.random() * catArray.length);

        var i = 0;

        //This resets button every time u click it
        while (i < 1) {
            $write.html("You should name your cat <span>" + catArray[randomCat] + "</span>");
            i++;
        }


    }

});