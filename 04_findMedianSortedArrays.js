/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newarr = nums1.concat(nums2);
    newarr.sort(function(a,b){
        return a - b;
    })
    
    var len = newarr.length;
    if(len & 1) {
        return newarr[~~(len/2)];
    } else {
        return (newarr[len/2 - 1] + newarr[len/2]) / 2;
    }
};