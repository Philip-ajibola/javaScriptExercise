let maximumProduct = require("./javaExercise.js")

test("get the maximum product",()=>{
    let numbers = [1,2,3,4,-5];
    let answer = maximumProduct(numbers);
    expect(answer).toBe(12);
})