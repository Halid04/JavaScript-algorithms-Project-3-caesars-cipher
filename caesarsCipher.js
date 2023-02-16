//JavaScript Algorithms and Data Structures Project 3 to earn the JavaScript Algorithms and Data Structures certification.
const alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let key=13;
let newStr= "";

function rot13(str){
    for(let i in str){
        for(let j in alph){
            if(str[i].toUpperCase()==alph[j]){
                if((parseInt(j)+parseInt(key))<26){
                    newStr += alph[parseInt(j)+parseInt(key)];
                }else{
                    newStr += alph[(parseInt(j)+parseInt(key))-26]
                }
            }
        }
        if(/[^a-zA-Z0-9]/g.test(str[i])){
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(rot13("SERR PBQR PNZC"));