console.log("learning iterators");
function iterator_func(value) {
    let index = 0;
    // we will return an object
    return{
        //  here next is key and function is value and both are a key-value pair
        next: function() {
            if (index < value.length) {
                // we will return below object
                return{
                    // understainding i++ doubt -> why here mytech[i++] is giving 0th index value
                    index :index,
                    value0:value[index],
                    value: value[index++],
                    value2:value[index],
                    index_after_adding :index,
                    done : false
                }
            }
            else{
                // else we will return below object
                return{
                    done : true
                }
            }
        }      
    }
}


let mytech = ['monitor','mouse','keyboard','custom pc'];
let i = 0;

// understanding i++ doubt -> why here mytech[i++] is giving 0th index value
console.log(i);
console.log( mytech[i], mytech[i++] , mytech[i]);
console.log(i);


// USING THE ITERATOR

const tech = iterator_func(mytech);
console.log(tech);
console.log(tech.next());
console.log(tech.next());
console.log(tech.next());
console.log(tech.next());
console.log(tech.next());