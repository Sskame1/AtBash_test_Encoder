function atbashDecode(input) {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    const lowerAlphabet = alphabet.toLowerCase();
    const lowerReversedAlphabet = lowerAlphabet.split('').reverse().join('');

    let output = '';

    for (let char of input) {
        if (alphabet.includes(char)) {
            output += reversedAlphabet[alphabet.indexOf(char)];
        } else if (lowerAlphabet.includes(char)) {
            output += lowerReversedAlphabet[lowerAlphabet.indexOf(char)];
        } else {
            output += char;
        }
    }

    return output;
}

const encodedMessage = "Трурыъи, мд оячьяыяу, я мъпъог ыях ыольцт мршъ оячьяыямг, э вмрт мэра нцуя. Ц сяпцжц э фрттъсмяоцай нурэр — А льяыяу"; 
const decodedMessage = atbashDecode(encodedMessage);
console.log(decodedMessage);
