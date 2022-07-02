
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
        const underTest = new DonutMaker(100, 0, 100);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        const underTest = new DonutMaker(99, 0, 100);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);
    })

    test("cost of autoclicker should go up 10% eash additional purchase", () => {
        const underTest = new DonutMaker(211, 0, 100);
        underTest.addAutoclicker();
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(1);
        expect(underTest.numAutoclickers).toEqual(2);
    })

});