/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //第一种解法
var addTwoNumbers = function(l1, l2) {
    var arr1 = [];
    var arr2 = [];
    while(l1.next !== null) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    arr1.push(l1.val);
    while(l2.next !== null) {
        arr2.push(l2.val);
        l2 = l2.next;
    }
    arr2.push(l2.val);

    var sumarr = sum(arr1,arr2);
    
    var head = new ListNode();
    var temp = head;
    for(var i = 0;i<sumarr.length;i++) {
        temp.val = sumarr[i];
        if(i == sumarr.length-1) {
            return head; 
        }
        temp.next = new ListNode(sumarr[i+1]);
        temp = temp.next;
    }

    function sum(a,b) {
        if(a.length < b.length){
            var t = a;
            a = b;
            b = t;
        }
        var newarr = [];
        var carry = false;
        for(var k = 0;k<a.length;k++) {
            var s = a[k] + (b[k] || 0);
            if(carry) {
                s++;
            }
            if(s >= 10) {
                carry = true;
            }else {
                carry = false;
            }
            s = s >= 10 ? s % 10 : s;
            newarr.push(s);
        }
        if(carry === true) {
            newarr.push(1);
        }
        return newarr;
    }
    return head;
};

//第二种解法 

var addTwoNumbers = function(l1,l2) {
    var add = 0, ans, head;
    while(l1 || l2) {
        var a = l1 ? l1.val : 0;
        var b = l2 ? l2.val : 0;
        
        var sum = a + b + add;
        add = ~~(sum / 10);

        var node = new ListNode(sum%10);

        if(!ans) {
            ans = head = node;
        } else {
            head.next = node ;
            head = node;
        }

        if(l1)
            l1 = l1.next;
        if(l2)
            l2 = l2.next;
    }

    if(add) {
        var node = new ListNode(add);
        head.next = node;
        head = node;
    }

    return ans;
}



























