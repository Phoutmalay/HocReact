//variable var
var value1 = "Phutmalay"
console.log(value1)
    //let use on local function
let a = "a string"
console.log(a);
//number
var num = 100;
console.log(typeof(num));
//const
const con = "phut";
console.log(con);
//function
function sum(a, b) {
    return a + b;
}
var x = sum(1, 2);
console.log(x);

//arow funtion
let y = (x) => (x * 2);
console.log(y(3));
//string
var string = "phutmalay";
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.split(","));
console.log(string.substr(0, 5));
//array
var arr = new Array(1, 2, 3, 4, 5, 6);
var arr2 = ["Nam", "Phong", "Linh"];
const [t, z] = arr2;
console.log(t + "  " + z);
console.log(arr2[1]);
arr2.push("love")
console.log(arr2);
arr2.unshift("a")
console.log(arr2);
arr2.unshift();
console.log(arr2);
arr2.pop();
console.log(arr2);
//object
const obj = {
    name: "phutmalay",
    age: 21,
    language: {
        motherLang: "VietNam",
        otherLang: "English"
    },
    dis: function(message) {
        console.log("Hi! " + this.name);
    }
}
console.log(obj.name);
obj.dis();

function display(ob) {
    console.log(ob.name + " " + ob.age);
}

console.log(display(obj));
//json
const json = [
    { id: 1, name: "Nam" },
    { id: 2, name: "Linh" }
]
console.log(json);
console.log(JSON.stringify(json));
// loop
for (let a = 0; a < json.length; a++) {
    console.log(json[a].name);
}
for (let b of json) {
    console.log(b);
}
json.forEach(
        function tes(x) {
            console.log(x.id);
        }
    )
    //map
const k = json.map((s) => (s.name + " phut"))
console.log(k);
//condition
var cond = 1;
if (cond == 1) {
    console.log("1 đây rồi");
} else {
    console.log("không phải")
}
//reduce
var arr3 = [1, 2, 3, 4, 5];
var reduce = arr3.reduce((x, y) => (x + y));
console.log(reduce);