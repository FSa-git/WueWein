// const progressBarEl = document.getElementById('progress-bar');

// window.addEventListener("scroll", ()=>{

//     let height = document.body.scrollHeight - window.innerHeight;
//     let scrollPosition = document.documentElement.scrollTop;
//     let width = (scrollPosition / height) * 100;
//     progressBarEl.style.width = '${width}%';

// });



document.addEventListener('click',(e)=>{

let over = document.getElementById('age_over');
let under = document.getElementById('age_under');

    if (e.target === over){
        window.location.href = 'index.html';
    }
    else if(e.target === under){
         // Popup-Inhalt und Styling definieren
    var popupContent = "<h1>Du bist nicht alt genug!</h1><p>Dies ist ein Popup-Fenster.</p>";
    var popupStyle = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: black; padding: 20px;";

    // Popup-Element erstellen und Inhalt einfügen
    var popup = document.createElement("div");
    popup.innerHTML = popupContent;
    popup.style = popupStyle;

    // Popup dem body-Element hinzufügen
    document.body.appendChild(popup);
    }

});