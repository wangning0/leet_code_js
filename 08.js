/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var str = str.trim();
    var reg = /^(\-|\+)?[0-9]+/;
    var tmp = reg.exec(str);

    if(tmp) {
        var num = Number(tmp[0]);
        if(num < -(1<<30) * 2) {
            return -(1<<30) * 2;
        }
        if(num > (1<<30)*2-1) {
            return (1<<30)*2-1;
        }
        return num;
    }
    return 0;
};