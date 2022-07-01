import DonutMaker from './donut-maker.js';

describe ('DonutMaker object', () => {

    test('Does DonutMaker return a name', () => {
        const underTest = new DonutMaker('Arnie', 0);
        expect(typeof underTest.name).toMatch('string');
    });

    test('does DonutMaker return a clickValu', () => {
        const underTest = new DonutMaker('Arnie', 50);
        expect(underTest.clickValu).toEqual(50);
    });

    
})