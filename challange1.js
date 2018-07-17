/**
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
