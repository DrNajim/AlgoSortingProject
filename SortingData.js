//This an algo to campare eache case of list and replac with their content-Insertion sort
// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. 
// Each time we take a new card we put it in the right place in our hand. 

var list=[5, 2, 4, 6, 1, 3]; 
var p
var n
for (var i=1; i<list.length ; i++){
    p=list[i]
for (var k=0; k<=i-1 ; k++){
    if (list[i]<list[k] ) { 
        n=list[i];
        list[i]=list[k];
        list[k]=n;
    } 
}}
console.log(list)
// Each time work only with the first i-1 element from of the array
// Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.


