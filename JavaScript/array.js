


let items = ['treadmills', 'dumbles', 'eliptical', 'yoga mat', 'tennis', 'boxing'];

console.log(items[2]);
op = eliptical


items[2] = 'metal bar';

// index 2 updating



var x = items.slice(2, 5, 'cycling');

console.log(x);
// shwoing updated result

// op: ["eliptical", "yoga mat", "tennis"]



var arr = ["Monday", "Tuesday", "Saturday", "Sunday", "Thursday", "Friday"];

var result = arr.splice(2, 5, "Wednesday")

console.log("Updated array: " + arr + "<br>");

console.log("Removed element: " + result);

// op
// Updated array: Monday, Tuesday, Wednesday 
// Removed element: Saturday, Sunday, Thursday, Friday


for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// op
// treadmills', 'dumbles', 'eliptical', 'yoga mat', 'tennis ,boxing

console.log('elements of array', items.toString());
// op
// VM2704:1 elemens treadmills,dumbles,eliptical,yoga mat,tennis,boxing


console.log(items.join('+'));

// op
//  treadmills+dumbles+eliptical+yoga mat+tennis+boxing

console.log(items.pop(), items); // remove last elements

console.log(items.push(), items); // append at last element


console.log(items.sort());  //sorting array




// pushing element into array

let arr = new Array();
// let arr  = []; u can also write like that

for (let i = 0; i < 10; i++) {

    arr.push(i);
}



let student = {

    first_name: 'rahul',
    last_name: 'shilwant',
    age: 25,
    height: 170,

}
console.log(student);

console.log(student.age);


let student = {

    first_name: 'rahul',
    last_name: 'shilwant',
    age: 25,
    height: 170,


    studentinfo: function () {
        return (this.first_name + '\n' + this.last_name);
    }

};
console.log(student.studentinfo());
