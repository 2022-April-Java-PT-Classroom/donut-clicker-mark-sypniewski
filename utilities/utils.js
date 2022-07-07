export const displayDonutStats = (element, object) => {
    element.innerText = 'Number of Donuts: ' + object.numDonuts + ' Number of Autoclickers: ' 
    + object.numAutoclickers + ' Cost of Autoclicker: ' + object.costAutoclicker + ' Number of Multipliers: '
     + object.numMultipliers + ' Cost of Multiplier: ' + object.costMultiplier + ' Active Multipliers: '
     + object.activeMultipliers;
}