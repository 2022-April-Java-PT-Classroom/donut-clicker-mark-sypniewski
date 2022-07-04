import DonutMaker from "./DonutMaker";

renderPage();

function renderPage(){
    createDonutMaker();
}

function createDonutMaker() {
    const createBtn = document.querySelector('#btn');

    createBtn.addEventListener('click', () => {
        const createdDonutMaker = new DonutMaker(0,0,100,0,10,0);
    })

    
}
    

const container = (document.querySelector('.container').innerText =
    'mmmmmmmmm doughnuts.... ahhhhhhh!');



    