console.log("Learning Destructuring in javascript");


let a,b;
[a,b] = [34,35]; // this is correct syntax
console.log(a,b);

let w,x,y,z;
[w,x,y,...z] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// this means 1 is assigned to w , 2 is assigned to x , 3 is assigned to y and the rest is assigned to z
console.log(w);
console.log(x);
console.log(y);
console.log(z);


let aa,ab,ac;
({aa, ab, ac,  ...abc}= {aa:1, ab:4, ac:3 ,bb:5 ,bc:565,bbj:6})
console.log(aa,ab,ac);
console.log(abc);

// array destructuring
const f = [1,2,3,5,4,2,5,2,5,2,52];
[a,b,c  ]  = f
console.log(a,b,c);


// object destructuring
let aaaa = {
    v : 'veer',
    ww : 'work',
    func : function() {
        console.log("logged");
    }
}

let {func,v,ww} = aaaa;
console.log(func,v,ww);
func();