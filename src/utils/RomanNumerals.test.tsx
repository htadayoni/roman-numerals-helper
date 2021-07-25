import RomanNumerals from './RomanNumerals';

describe('RomanNumerals', () => {
    describe('toRoman', () => {
        it('convert arabic numbers to roman', () => {
            expect(RomanNumerals.toRoman(1990)).toBe('MCMXC');
            expect(RomanNumerals.toRoman(2008)).toBe('MMVIII');
            expect(RomanNumerals.toRoman(1000000)).toBe('_M');
        });
    });

    describe('fromRoman', () => {
        it('convert roman numbers to arabic', () => {
            expect(RomanNumerals.fromRoman('MCMXC')).toBe(1990);
            expect(RomanNumerals.fromRoman('MMVIII')).toBe(2008);
            expect(RomanNumerals.fromRoman('_M')).toBe(1000000);
        });
    });
});
