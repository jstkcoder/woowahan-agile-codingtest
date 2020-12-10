function solution(arr, divisor) {
    const array = [];
    let num = 1;
    arr.forEach (function(element){
        if (element % divisor === 0){
            array.push(element);
        }
    });
    
    if (array.length === 0) {
        array.push(-1);
    }
        
    
    return array.sort(function(a,b) { return a - b; });
}