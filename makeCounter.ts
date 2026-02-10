type user ={
    increment():number,
    decrement():number,
    reset():number
}
function makeCounter(initialValue :number  = 0) :user{
    // Your implementation
    let x = initialValue;
    return {
        increment():number{
            return ++x;
        },
        decrement():number {
            return --x;
        },
        reset():number{
            x = initialValue;
            return x;
        }
    }
    // function increment(): number{
    //     return x++;
    // }

    // function decrement():number{
    //     return x--;
    // }

    // function reset():number{
    //     x = initialValue
    //     return x;
    // }

    // return {
    //     increment,
    //     decrement,
    //     reset
    // };
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());



export default makeCounter;