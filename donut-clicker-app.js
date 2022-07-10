import DonutMaker from './DonutMaker.js';

renderPage();

function renderPage(){
    makeDonut();
    
}

function makeDonut () {
            const makeDonut = new DonutMaker(0,0,100,false,0,10,0);
            const createBtn1 = document.querySelector('#make');
            const createBtn2 = document.querySelector('#auto');
            const createBtn3 = document.querySelector('#activateauto');
            const createBtn4 = document.querySelector('#multiply');

            updateStats();

            createBtn1.addEventListener('click', () => {
                makeDonut.addDonut();
                updateStats();
            });

            createBtn2.addEventListener('click', () => {
                makeDonut.addAutoclicker();
                updateStats();
            })

            createBtn3.addEventListener('click', () => {
                makeDonut.activateAutoclickers();
            })
            

            createBtn4.addEventListener('click', () => {
                makeDonut.addMultiplier();
                updateStats();
            })


            setInterval(() => {
                if(makeDonut.isAutoclickerActive == true){
                    makeDonut.addDonut();
                    updateStats();}
                },1000);
                      

            


         function updateStats(){          
        donuttotal.innerText = makeDonut.numDonuts;
        autototal.innerText = makeDonut.numAutoclickers;
        multiplytotal.innerText = makeDonut.numMultipliers;
    }
   
}       


    