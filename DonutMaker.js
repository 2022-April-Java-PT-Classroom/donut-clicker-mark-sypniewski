class DonutMaker {

    constructor(numDonuts, numAutoclickers, costAutoclickers) {
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.costAutoclickers = costAutoclickers;
    }


    addDonut() {
        this.numDonuts += 1;
    }

    addAutoclicker() {
        if (this.numDonuts >= 100) {
           this.numDonuts -= this.costAutoclickers ;
           this.numAutoclickers += 1;
           this.costAutoclickers = Math.round(this.costAutoclickers * 1.1);
        }
    }

}
 export default DonutMaker;