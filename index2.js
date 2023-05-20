"use strict";

document.addEventListener('DOMContentLoaded', function () {

// Popup-Inhalt und Styling definieren
let popupContent = "<h1>Altersüberprüfung</h1><p>Um diese Seite zu besuchen, musst du älter als 18 Jahre alt sein.</p><br><button id='older' style='padding: 20px'>Ja, ich bin 18</button><button id='younger' style='margin-left: 50px; padding: 20px'>Nein, ich bin jünger</button>";
let popupStyle = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: black; padding: 700px; width: 100%; height: 250px; text-align: center;";

// Popup-Element erstellen und Inhalt einfügen
let popup = document.createElement("div");
popup.innerHTML = popupContent;
popup.style = popupStyle;

// Popup dem body-Element hinzufügen
document.body.appendChild(popup);

// Popup schließen
document.getElementById("older").addEventListener("click", function () {
    document.body.removeChild(popup);
});

// Anderer Knopf wird gedrückt 
document.getElementById('younger').addEventListener('click',()=>{
    
    // Lässt auf eine andere Seite weiterleiten
    // window.location.href = 'alter.html';

    let newContent = "<h1>Schade..</h1><p>Um diese Seite zu besuchen, musst du älter als 18 Jahre alt sein.</p>";
    let newContentStyle = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: black; padding: 700px; width: 100%; height: 250px; text-align: center;";

    let newWindow = document.createElement("div");
    newWindow.innerHTML = newContent;
    newWindow.style = newContentStyle;

    document.body.appendChild(newWindow);

});
});