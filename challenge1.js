/**
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 * Example 1:

 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * Example 2:

 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * Clarification:

 * What should we return when needle is an empty string? This is a great question to ask during an interview.

 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      if(haystack=="" && needle=="")
    {
        return 0;
    }
    
     if(haystack=="")
    {
        return -1;
    }
    if(needle=="")
    {
        return 0;
    }
    var flag=0;
    for (let index = 0; index < haystack.length; index++) {
        let index3=index;
        for (let index2 = 0; index2 < needle.length; index2++) {
            const haystackChar = haystack.charAt(index3++);
            const needleChar = needle.charAt(index2);
            if(haystackChar!=needleChar)
                break;
            if(index2==needle.length-1)
            {
                flag=1;
                break;
            }
        }
        if(flag==1)
            return index;
        if(index==haystack.length-1 && flag==0)
            return -1;
    }
};
