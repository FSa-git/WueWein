"use strict";

document.addEventListener('DOMContentLoaded', function () {

// Popup-Inhalt und Styling definieren
var popupContent = "<h1>Altersüberprüfung</h1><p>Um diese Seite zu besuchen, musst du älter als 18 Jahre alt sein.</p><button id='older'>Ja, ich bin 18</button><button id='younger' style='margin-left: 50px'>Nein, ich bin jünger</button>";
var popupStyle = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: black; padding: 700px; width: 100%; height: 250px; text-align: center;";

// Popup-Element erstellen und Inhalt einfügen
var popup = document.createElement("div");
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
    window.location.href = 'alter.html';
});
});