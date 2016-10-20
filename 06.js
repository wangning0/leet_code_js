/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 0)
        return;
    if(numRows == 1)
        return s;

    var newRows = [];
    for(var j = 0; j < numRows; j++) {
        newRows[j] = [];
    }
    var index = 0;
    var i = 0;
    while(i < s.length) {
        newRows[index].push(s[i]);
        if((i/(numRows-1))%2 == 1) {
            var j = 0;
            while(j < numRows - 2) {
                newRows[--index].push(s[++i]);
                j++;
            }
            index--;
        } else {
            index++;
        }
        i++;
    }
    var temp = newRows[0].concat(newRows[1]);
    for(var i = 2; i < numRows; i++) {
        temp = temp.concat(newRows[i]);
    }
    newRows = temp.join('');
    return newRows;
};