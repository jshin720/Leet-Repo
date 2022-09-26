/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
     let array =[];
    
    for(let i =0;i < words[0].length ; i++){
        
        let  check = false;
        for(let j =0; j < words.length-1; j++){
            
            if(words[j+1].includes(words[0][i])){
               words[j+1] = words[j+1].replace(words[0][i],"");
                check= true;
                
            } else{
                check = false;
                break;
            }
        }
        
        if(check){
            array.push(words[0][i]);
        }
        
    }
    
    return array;
};