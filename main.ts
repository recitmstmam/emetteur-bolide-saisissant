input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
    control.reset()
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    Fentes += 1
})
radio.setGroup(1)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
let Fentes = 0
let f1 = 0
let f2 = 0
basic.forever(function () {
    f1 = Fentes
    if (f1 > f2) {
        radio.sendString("" + (Fentes))
    }
    f2 = f1
    basic.pause(10)
})
