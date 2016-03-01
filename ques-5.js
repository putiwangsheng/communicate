// 算法：谷歌搜索之星算法实现
function getMostWord(wordsAry){
    var help = 1;
    var currentWord;

    for (var i = 0, len = wordsAry.length; i < len; i++) {
        if(wordsAry[i] === wordsAry[i + 1]){
            help += 1;
        }
        else{
            help -= 1;
            if(help < 0){
                currentWord = wordsAry[i];
                help = 1;
            }
        }
    }
    return currentWord;
}
console.log(getMostWord(["a","b","c","a","d","e","a","a","b","a","f","a","a","a","b"])); //a
