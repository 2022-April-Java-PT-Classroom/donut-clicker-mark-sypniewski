class DonutMaker {

    constructor(numDonuts, numAutoclickers, costAutoclickers, numMultipliers, costMultipliers) {
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.costAutoclickers = costAutoclickers;
        this.numMultipliers = numMultipliers;
        this.costMultipliers = costMultipliers;

    }


    addDonut() {
        this.numDonuts += 1;
    }

    addAutoclicker() {
        if (this.numDonuts >= 100) {
           this.numDonuts -= this.costAutoclickers;
           this.numAutoclickers += 1;
           this.costAutoclickers = Math.round(this.costAutoclickers * 1.1);
        }
    }

    activateAutoclickers(){
        this.numDonuts += this.numAutoclickers;
    }

    addMultiplier(){
        if (this.numDonuts >= 10) {
         this.numDonuts -= this.costMultipliers;
         this.numMultipliers += 1;
         this.costMultipliers = Math.round(this.costMultipliers * 1.1);
        }
    }

    
}

 export default DonutMaker;