/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
//     const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",
//                    ".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//     const alpha = ["a","b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",                 "t", "u", "v", "w", "x", "y", "z"];
//     let count = [];
//     let morseKey = {};
    
//     morse.forEach((morseAlpha, i) => {
//         morseKey[alpha[i]] = morseAlpha;
//         return morseKey;
//     })

//     const morsedWords = words.map((word) => {
//          let newWord = "";
                             
//         for (let i = 0; i < word.length; i++) {
//             newWord += morseKey[word[i]];
//         }
        
//         return newWord;
//     })
    
//     while(morsedWords.length > 0) {
//         let checkingWord = morsedWords.shift();
//         if(!count.includes(checkingWord)) count.push(checkingWord);
//         console.log(morsedWords)
//     }
    
//     return count.length; 
    
    let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

	let map = new Set()

	words.forEach(word => {
		let s = ""
		for(let i = 0; i < word.length; i++) {
			s += morseCode[word[i].charCodeAt(0) - 97]
		}

		map.add(s)
	})

	return map.size
};