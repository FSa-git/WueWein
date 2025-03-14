"use strict";
// Laden der JSON-Daten
fetch('./json/quiz.json')
  .then(response => response.json())
  .then(data => {
    const fragen = data.fragen;
    const antworten = data.antworten;
    const rueckmeldungen = data.rueckmeldungen;

    // Quiz-Variablen
    let aktuelleFrage = 0;
    let punktzahl = 0;

    // Verweise auf HTML-Elemente
    const frageElement = document.getElementById('frage');
    const quizContainer = document.getElementById('quizContainer');
    const quizResult = document.getElementById('quizResult');

// Funktion zum Anzeigen der aktuellen Frage
function zeigeFrage() {
  // Frage anzeigen
  frageElement.textContent = fragen[aktuelleFrage].frage;

  // Optionen anzeigen
  const antwortenOptionen = antworten[aktuelleFrage];
  quizContainer.innerHTML = '';
  for (let option in antwortenOptionen) {
    const optionText = antwortenOptionen[option];
    const optionElement = document.createElement('button');
    optionElement.textContent = optionText;
    optionElement.classList.add('option-button');
    optionElement.addEventListener('click', antwortAuswählen);
    quizContainer.appendChild(optionElement);
  }
}

    // Funktion zur Überprüfung der ausgewählten Antwort
    function antwortAuswählen(event) {
      const ausgewählteAntwort = event.target.textContent;
      const richtigeAntwort = fragen[aktuelleFrage].richtig;

      if (ausgewählteAntwort === richtigeAntwort) {
        punktzahl++;
      }

      // Nächste Frage anzeigen oder Ergebnis anzeigen
      aktuelleFrage++;

      if (aktuelleFrage < fragen.length) {
        zeigeFrage();
      } else {
        zeigeErgebnis();
      }
    }

    // Funktion zur Anzeige des Quiz-Ergebnisses
    function zeigeErgebnis() {

    // Quiz-Container ausblenden   
    quizContainer.style.display = 'none';

    // Frage ausblenden
    frageElement.style.display = 'none';

    // Ergebnis anzeigen
    const anzahlRichtigeAntworten = punktzahl;
    const ergebnisElement = document.createElement('p');
    ergebnisElement.textContent = 'Du hast ' + anzahlRichtigeAntworten + ' von ' + fragen.length + ' Fragen richtig beantwortet.';
    quizResult.appendChild(ergebnisElement);

    if(punktzahl >= 3){
        const lobesText = document.createElement('p');
        lobesText.innerText = 'Wie es aussieht, bist du ein richtiger Weinkennner! Weiter so!';
    }
    if(punktzahl < 3){
        const lobesText = document.createElement('p');
        lobesText.innerText = 'Das war leider nichts. Versuche es doch noch einmal!';
    }
}

    // Quiz starten
    zeigeFrage();
  })
  .catch(error => {
    console.error('Fehler beim Laden der JSON-Daten:', error);
  });
