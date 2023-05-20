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
        window.location.href = 'https://www.youtube.com';
    }

});