/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max, c, str;
    var n = s.length;
    if(n < 1) {
        return 0;
    }
    max = 0;
    str = "";
    for(var i = 0; i < n; i++) {
        for(var j = 0; (i - j) >=0 && (i + j) < n; j++) {
            if(s[i-j] != s[i+j]) {
                break;
            }
            c = j * 2 + 1;
        }
        if(c > max){
            max = c;
            str = s.slice(i+j-max,i+j);
        }
        for(var j = 0; (i - j) >= 0 && (i + j + 1) < n; j++) {
            if(s[i - j] != s[i + j +1]) {
                break;
            }
            c = (j + 1) * 2;
        }
        if( c > max ) {
            max = c;
            str = s.slice(i+j-max+1,i+j+1);
        }
    }
    return str;
};
