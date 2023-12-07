let str1 = "Ravi Shankar";
let itr2 = str1[Symbol.iterator]();
let res = itr2.next();
while (!res.done) {
    console.log(res.value);
    res = itr2.next();
}
console.log(res.done);