window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var possibleWords =["apple","diamonds","cake","books","animals","rainbow","sun","moon"];
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Guess
    var guesses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var underscore = document.getElementById("wordUnderscore");

  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method

//   var queryURL = 'https://od-api.oxforddictionaries.com:443/api/v1/wordlist/en/registers=Rare;domains=Art';

//   $.ajax({
//     url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
//     headers: {'app_id': '60c32d7d', 'app_key': '337bc51bbead6cc72908d18645b94bf9'},
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
    var buttons = function () {
        myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");

        for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        //   check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
        }
    }
    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
          showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
          if (counter + space === guesses.length) {
            showLives.innerHTML = "You Win!";
          }
        }
    }
    function updateGuesses(letter) {      
        if (word.indexOf(letter) === -1) { 
          wrongGuesses.push(letter);
          lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
        } else {
          // replace underscore with the letter
          for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
              correctGuesses[i] = letter;
            }
          }
      
          wordElement.innerHTML = correctGuesses.join(' ');
        }
      }
    play = function(){
        word = possibleWords[Math.floor(Math.random()*possibleWords.length)]
        word = word.replace(/\s/g,"-");
        for (var i = 0; i < word.length; i++){
            underscore.innerHTML = (" _ "+" ")
            console.log("_")
            
        }
        console.log(word);
        buttons();
        guesses = [];
        lives = 10;
        counter = 0;
        space = 0;
        comments();
    }
    play();

    document.onkeyup = function(event){
        console.log(event);
        var guess = String.fromCharCode(event.keyCode).toLowerCase();
        updateGuesses(letterGuessed);
        comments();
    }

// ending currly
}