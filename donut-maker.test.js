import DonutMaker from './donut-maker.js';


const underTest = new DonutMaker('Arnie', 0);

describe ('DonutMaker object', () => {

    test('Does DonutMaker return a name', () => {
        expect(typeof underTest.name).toMatch('string');
    });

    test('does DonutMaker return a clickValu', () => {
        expect(underTest.clickValu).toEqual(0);
    });

    test('adds to clickValu for every button click', () => {
        underTest.increaseClicker();
        expect(underTest.clickValu).toEqual(1);
    })
})