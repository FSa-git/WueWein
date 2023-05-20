// const progressBarEl = document.getElementById('progress-bar');

// window.addEventListener("scroll", ()=>{

//     let height = document.body.scrollHeight - window.innerHeight;
//     let scrollPosition = document.documentElement.scrollTop;
//     let width = (scrollPosition / height) * 100;
//     progressBarEl.style.width = '${width}%';

// });

function verifyAge() {
    var birthDate = new Date(document.getElementById('birthdate').value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age >= 18) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'https://www.youtube.com';
    }
}