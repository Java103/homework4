//ამოცანა1

let array = [5, 25, 89, 120, 36];

array.push("javascript","python");
array.reverse().push("html","css");

console.log(array);


//ამოცანა2

let array2 = ["ფორთოხალი","ბანანი","მსხალი"];
console.log(array2.length);

array2.push("ვაშლი","ანანასი");
array2.unshift("საზამთრო");
console.log(array2.length);
array2.splice(2,0,"მანგო");
array2.shift();
array2.pop();

console.log(array2.length);


//ამოცანა3

let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, "a", "b", "c");

console.log(array3);


//ამოცანა4

let array4 = [1,2,3,4,5];
let sum = 0;
array4.forEach(elem => {
    return sum += elem
});

console.log(sum);


//ამოცანა5

let array5 = [];

for( let i = 100; i > 0; i--){
    array5.push(i);
}

console.log(array5);

//ამოცანა6

let array6 = [2,15,10,24]
array6.splice(2,1);
console.log(array6);

