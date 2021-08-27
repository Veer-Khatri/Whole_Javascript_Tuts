console.log("learning generators");

// generators means a function which generates values on the fly
function* num_generator() {
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while (i<6) {
        // yield (i++).toString();
        yield i++;
    }
}

let gen = num_generator();
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());