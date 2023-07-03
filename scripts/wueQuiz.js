"use strict"
function init() {

    let points = 0;
    let counter = 0;
    let fragen, frage, json, antworten;
    const container = document.getElementById('quizContainer');

    // JSON-Datei laden
    async function fetchJSON() {
        let response = await fetch("./json/quiz.json");
        if (response.status === 200) {
            json = await response.json();
            
            // Daten aus JSON-Datei verarbeiten
            letsQuiz();
        }
    }

    fetchJSON();

    function letsQuiz() {

        // Fragen erstellen 
        function createQuestion() {
            while (container.lastElementChild){
                container.removeChild(container.lastElementChild);
            }
            fragen = json.fragen;
            frage = fragen[counter];
            let frageJson = document.createTextNode(frage.frage);
            let p = document.createElement('p');
            p.classList.add('frage');
            p.appendChild(frageJson);
            container.appendChild(p);
        }

        // Frage anzeigen
        createQuestion();

        // Funktion um die Farbe der Antwort zu ändern
        // function changeColor(button, richtig) {
        //     if (richtig) {
        //         button.style.backgroundColor = "green";
        //         setTimeout(function() {
        //             button.classList.remove("green");
        //     }, 1000); }
        //     else {
        //         button.style.backgroundColor = "red";
        //         setTimeout(function() {
        //             button.classList.remove("green");
        //     }, 1000); 
        //     }
        // }

        // Antworten erstellen
        function createNewQuestion() {
            if (counter < fragen.length -1){
                counter++;
                createQuestion(counter);
                createButtonText();
            }
        }

        //EventListener auf Buttons
    let btns = document.querySelectorAll(".quiz_btn");
    //console.log(btns);
    btns.forEach((button) => button.addEventListener("click", controleAnswer));

    //Antworten auf Buttons
    function createButtonText() {
      antworten = json.antworten;
      btns.forEach((element) => {
        switch (element.id) {
          case "q1":
            console.log(element);
            element.value = antworten[zaehler].eins;
            break;
          case "q2":
            console.log(element);
            element.value = antworten[zaehler].zwei;
            break;
          case "q3":
            console.log(element);
            element.value = antworten[zaehler].drei;
            break;
          case "q4":
            console.log(element);
            element.value = antworten[zaehler].vier;
            break;
          default:
            console.log("Error :)");
        }
      });
    }
    createButtonText();

    function controleAnswer(e) {
      let wert = e.target.value;
      if (frage.correct === wert) {
        points = points + 10;
        punkteEintragen(points);
        changeColor(e.target, true);
      } else {
        changeColor(e.target, false);
      }
      neuefrage();
    }

    }
}
document.addEventListener('DOMContentLoaded', init);