import DonutMaker from './DonutMaker.js';

renderPage();

function renderPage(){
    makeDonut();
}

function makeDonut () {
            const makeDonut = new DonutMaker(0,0,100,false,0,10,0);
            const createBtn1 = document.querySelector('#make');
            const createBtn2 = document.querySelector('#auto');
            const createBtn3 = document.querySelector('#multiply');

            updateStats(makeDonut);

            createBtn1.addEventListener('click', () => {
                makeDonut.addDonut();
                updateStats();
            });



         function updateStats(){          
        donuttotal.innerText = makeDonut.numDonuts;
        autototal.innerText = makeDonut.numAutoclickers;
        multiplytotal.innerText = makeDonut.numMultipliers;
    }
   
}       


    