/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var rest = target - nums[i];
        for(var j = i + 1; j < nums.length ; j++) {
            if(nums[j] == rest) {
                var arr = [];
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }
};