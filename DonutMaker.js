class DonutMaker {

    constructor(numDonuts, numAutoclickers, costAutoclicker, isAutoclickerActive, numMultipliers, costMultiplier, activeMultipliers) {
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.costAutoclicker = costAutoclicker;
        this.isAutoclickerActive = isAutoclickerActive; 
        this.numMultipliers = numMultipliers;
        this.costMultiplier = costMultiplier;
        this.activeMultipliers = activeMultipliers;
    }


    addDonut() {
        this.numDonuts += this.numAutoClickers >0 ? 1 * this.numAutoclickers: 1;
    }

    addAutoclicker() {
        for (let i = 0; this.numAutoclickers; i++){

        }
        if (this.numDonuts >= 100) {
           this.numDonuts -= this.costAutoclicker;
           this.numAutoclickers += 1;
           this.costAutoclicker = Math.round(this.costAutoclicker * 1.1);
        }
    }

    activateAutoclickers(){
        this.isAutoclickerActive = true;
    }

    addMultiplier(){
        if (this.numDonuts >= 10) {
         this.numDonuts -= this.costMultiplier;
         this.numMultipliers += 1;
         this.costMultiplier = Math.round(this.costMultiplier * 1.1);
        }
    }

    activateMultiplier(){
        this.numDonuts += Math.round(this.numMultipliers * 1.2)
    }
    
}

 export default DonutMaker;