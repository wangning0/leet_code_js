/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    if(Math.abs(x) < 10)
        return x;
    var arr = [];
    var sum = 0;
    var min = -(1 << 30) * 2;
    var max  = (1 << 30) * 2 -1;
    a(Math.abs(x));
    for(var i = 0;i<arr.length;i++) {
        sum += arr[i]*Math.pow(10,arr.length-1-i);
    }

    function a(num) {
        if(num < 10){
            arr.push(num);
            return;
        }
        var newnum = parseInt(num / 10);
        arr.push(num%10);
        a(newnum);
    }
    if(sum < min || sum > max) {
        return 0;
    }
    return x < 0 ? -sum : sum;
};

// second
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(Math.abs(x) < 10)
        return x;
    var min = -(1 << 30) * 2;
    var max = (1 << 30) *2 - 1;
    var numarr = x.toString().split('');
    if(x < 0) {
        numarr.shift();
    }
    var ans = Number(numarr.reverse().join(''));
    if (x < 0)
        ans *= -1;
    if(ans < min || ans > max)
        return 0;
    return ans
};

