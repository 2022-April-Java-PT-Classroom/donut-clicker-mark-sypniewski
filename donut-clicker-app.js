import DonutMaker from "./DonutMaker";
import { displayDonutStats } from "./utilities/utils";


renderPage();

function renderPage(){
    createDonutMaker();
}

function createDonutMaker(event) {

const myDonutMaker = new DonutMaker(0,0,100,0,10,0);
const donutStats = document.querySelector('#myDonutStats');
const donutInfoPara = document.createElenemt('p');
const donutInfoSection = document.createElement('section');

displayDonutStats(donutInfoPara, myDonutMaker);

donutInfoSection.appendChild(donutInfoPara);


}



    

const container = (document.querySelector('.container').innerText =
    'mmmmmmmmm doughnuts.... ahhhhhhh!');



    