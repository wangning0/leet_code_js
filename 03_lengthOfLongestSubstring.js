/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var hash = {};
    var start = 0;
    var ans = 0;
    
    for(var i = 0; i < s.length; i++) {
        var item = s[i];
        
        if(!hash[item]) {
            hash[item] = true;
        } else {
            for(;;){
                if(s[start] == item) {
                    start++;
                    break;
                }
                hash[s[start++]] = false;
            }
        }
        ans  = Math.max(ans,i - start + 1);
    }
    
    return ans;
};
