let item = 0
let flag = 5
basic.forever(function () {
    if (flag + item > 180) {
        flag = -2
    }
    if (flag + item < 0) {
        flag = 2
    }
    item += flag
    for (let index = 0; index <= 15; index++) {
        pins.servoWritePin(AnalogPin.P0, item)
    }
    basic.pause(20)
})
