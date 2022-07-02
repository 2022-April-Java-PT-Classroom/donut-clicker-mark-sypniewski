import DonutMaker from "./DonutMaker";

renderPage();

function renderPage(){
    increaseClicker();
}

function increaseClicker(){
    const createBtn = document.querySelector('#make');
    
    createBtn.addEventListener('click', () => {
        increaseClicker();
    })
}


const container = (document.querySelector('.container').innerText =
    'mmmmmmmmm doughnuts.... ahhhhhhh!');




    