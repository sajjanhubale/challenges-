/**
 * Travese the given array and print even number and largest number 
 * from consecutive odd numbers 
 */

let inputArr=[222,3,35,62,124,61,29,375,66,7]

function getResult(inputArr){
    let index=0;
    let max=-1;
    while(index < inputArr.length)
    {
        if(inputArr[index]%2!=0){
            if(max<inputArr[index])
                max=inputArr[index];
            if(index==inputArr.length-1)
                console.log(max);
        }
        else
        {
            if(max==-1)
            {
                console.log(inputArr[index]);
            }
            else
            {
                console.log(max);
                console.log(inputArr[index]);
                max=-1;
            }
        }
        index++;
    }
}
getResult(a);