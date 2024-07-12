/**
 * version = 1.0.0
 * Date = 11/07/24
 * this code nhelp to find max number form given array
 */

var arr = [1,3,4,2,10];
 var max = -1;

for( x=0; x < arr.length; x++){

    if (arr[x] > max) max = arr[x];
}


console.log(max);