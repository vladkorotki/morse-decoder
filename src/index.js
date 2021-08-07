const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    decodeExpr = '';
    let exprSymb = [];
    for (let i = 0; i < expr.length; i += 10) {
        exprSymb[i] = expr.slice(i, i + 10).replace(/11/gi, '-').replace(/10/gi, '.').replace(/\*\*\*\*\*\*\*\*\*\*/, ' ').replace(/0/gi, '');

        for (let [key, value] of Object.entries(MORSE_TABLE)) {
            if (key == exprSymb[i]) {
                decodeExpr += value;

            }
            if (exprSymb[i] == ' ') {
                decodeExpr += exprSymb[i];
                break;
            }
        }
    }
    // return exprSymb;
    return decodeExpr;

}


module.exports = {
    decode
}