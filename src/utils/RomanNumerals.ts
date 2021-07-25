class RomanNumerals {
    numToRomanList: {};
    romanToNumList: {};

    constructor() {
        this.numToRomanList = {
            '_M': 1000000, '_C_M': 900000, '_D': 500000, '_C_D': 400000,
            '_C': 100000, '_X_C': 90000, '_L': 50000, '_X_L': 40000,
            '_X': 10000, '_I_X': 9000, '_V': 5000, '_I_V': 4000,
            'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
            'C': 100, 'XC': 90, 'L': 50, 'XV': 40,
            'X': 10, 'IX': 9, 'V': 5, 'IV': 4,
            'I': 1,
        };

        this.romanToNumList = {
            '_C_M': 900000, '_M': 1000000, '_C_D': 400000, '_D': 500000,
            '_X_C': 90000, '_C': 100000, '_X_L': 40000, '_L': 50000,
            '_I_X': 9000, '_X': 10000, '_I_V': 4000, '_V': 5000,
            'CM': 900, 'M': 1000, 'CD': 400, 'D': 500,
            'XC': 90, 'C': 100, 'XV': 40, 'L': 50,
            'IX': 9, 'X': 10, 'IV': 4, 'V': 5,
            'I': 1,
        };
    }

    toRoman(numeric: number) {
        return Object.keys(this.numToRomanList).reduce((acc, key) => {
            const count = Math.floor(numeric / this.numToRomanList[key]);
            acc += count ? Array(count).fill(key).join('') : '';
            numeric = numeric % this.numToRomanList[key];
            return acc;
        }, '');

    }

    fromRoman(roman: string) {
        return Object.keys(this.romanToNumList).reduce((acc, key) => {
            let romanNumberExists = roman.includes(key);

            while (romanNumberExists) {
                acc += this.romanToNumList[key];
                roman = roman.replace(key, '');
                romanNumberExists = roman.includes(key);
            }
            return acc;
        }, 0);
    }
}

export default new RomanNumerals();
