
import DonutMaker from './DonutMaker.js';


describe ("DonutMaker", () => {

    test("should be able to add a donut and retrieve the total count", () => {
        //Arrange
        const underTest = new DonutMaker(0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutMaker(100, 0, 100, 0, 10);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        const underTest = new DonutMaker(99, 0, 100, 0, 10);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);
    });

    test("cost of autoclicker should go up 10% eash additional purchase", () => {
        const underTest = new DonutMaker(211, 0, 100, 0, 10);
        underTest.addAutoclicker();
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(1);
        expect(underTest.numAutoclickers).toEqual(2);
        expect(underTest.costAutoclickers).toEqual(121);
    });

    test("activating autoclickers will increase donut count based on autoclickers owned", () => {
        const underTest = new DonutMaker(100, 2, 110, 0, 10);
        underTest.activateAutoclickers();
        expect(underTest.numDonuts).toEqual(102);
    });

    test("should be able to add a multiplier with 10 donuts", () => {
        const underTest = new DonutMaker(100, 0, 100, 0, 10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(90);
        expect(underTest.numMultipliers).toEqual(1);  
    });

    test("should NOT be able to purchase a multiplier with 9 donuts", () => {
        const underTest = new DonutMaker(9, 0, 100, 0, 10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(9);
        expect(underTest.numAutoclickers).toEqual(0);
    });

    test("cost of multiplier should go up 10% eash additional purchase", () => {
        const underTest = new DonutMaker(111, 0, 100, 0, 10);
        underTest.addMultiplier();
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(90);
        expect(underTest.numMultipliers).toEqual(2);
        expect(underTest.costMultipliers).toEqual(12);
    });

    


})
