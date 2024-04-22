const AirConditional = require("./AirConditional.js");

test("check if Ac is on by default",  () => {
    const airConditional = new AirConditional();
    expect(airConditional.isAcOn()).toBe(false);
});
test("test that Ac Can Be On" ,() => {
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    expect(airConditional.isAcOn()).toBe(true);

})
test("test that ac has intial temperature value",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    expect(airConditional.getTemperature()).toBe(16);
})
test("test that Ac temperature can be increase",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    airConditional.increaseTemperature()
    expect(airConditional.getTemperature()).toBe(17);
})
test("test that the highest temperature ac can go is 30",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    for(let count = 0; count< 15; count++)airConditional.increaseTemperature();
    expect(airConditional.getTemperature()).toBe(30);
})
test("test that temperature can be decreased",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    for(let count = 0; count< 15; count++)airConditional.increaseTemperature();
    for(let count = 0; count< 5; count++)airConditional.decreaseTemperature();
    expect(airConditional.getTemperature()).toBe(25);
})
test("test that temperature can't go more than 16",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    for(let count = 0; count< 10; count++)airConditional.increaseTemperature();
    for(let count = 0; count< 12; count++)airConditional.decreaseTemperature();
    expect(airConditional.getTemperature()).toBe(16);
})
test("test that when ac is not on volume can't be increased",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    airConditional.toggleSwitch();
    for(let count = 0; count< 10; count++)airConditional.increaseTemperature();
    expect(airConditional.getTemperature()).toBe(0);
})
test("test that ac can't be decreased when ac is off",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    airConditional.toggleSwitch();
    for(let count = 0; count< 10; count++)airConditional.increaseTemperature();
    for(let count = 0; count< 12; count++)airConditional.decreaseTemperature();
    expect(airConditional.getTemperature()).toBe(0);
})
test("test that the number of temperature can be input from remote",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    airConditional.enterTemperatureFromRemote(21);
    expect(airConditional.getTemperature()).toBe(21);
})
test("test that the number of temperature can be input from remote",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    airConditional.enterTemperatureFromRemote(14);
    expect(airConditional.getTemperature()).toBe(16);
})
test(" test that when number enter is higher than 30 temperature remain in it previous state",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    airConditional.enterTemperatureFromRemote(27);
    airConditional.enterTemperatureFromRemote(37);
    
    expect(airConditional.getTemperature()).toBe(27);
})
test("test that entering temperature from the remote too shoudn't affect temperature when ac is off",()=>{
    const airConditional = new AirConditional();
    airConditional.toggleSwitch();
    airConditional.enterTemperatureFromRemote(27);
    airConditional.toggleSwitch();
    airConditional.enterTemperatureFromRemote(25);
    airConditional.toggleSwitch()
    expect(airConditional.getTemperature()).toBe(27);

})

