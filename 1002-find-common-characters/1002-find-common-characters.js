/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
//      let array =[];
    
//     for(let i =0;i < words[0].length ; i++){
        
//         let  check = false;
//         for(let j =0; j < words.length-1; j++){
            
//             if(words[j+1].includes(words[0][i])){
//                words[j+1] = words[j+1].replace(words[0][i],"");
//                 check= true;
                
//             } else{
//                 check = false;
//                 break;
//             }
//         }
        
//         if(check){
//             array.push(words[0][i]);
//         }
        
//     }
    
//     return array;
//     const common = new Map();
    
//     for (let i = words.length - 1; i >= 1; i--) {
//         const main = words[0];
        
//         for (let j = 0; j < words[i].length; j++) {
//             if (main.includes(words[i][j])) {
                
//             }
//         }
//     }
 let common = words[0].split('').filter(char => {
      
        for (var i = 1; i < words.length; i++) {
         
            if (!words[i].includes(char)) return false;
            else {
                words[i] = words[i].replace(char, '')
            }
        }
    
        return true;
     
    })
 // console.log("main", common)
	return common
};
    


// const lettersCount = (word) => {
//     const count = {};
    
//     for (let char of word) {
//         if (!count[char]) {
//             count[char] = 1;
//         } else {
//             count[char]++;
//         };
//     };
//     return count; 
// };
