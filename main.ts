input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendValue("Ping", 0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "Ping") {
        radio.sendValue("Pong", 0)
    }
    if (name == "Pong") {
        basic.showString("Pong")
    }
})
let Funk = randint(0, 255)
radio.setGroup(Funk)
basic.showString("" + (Funk))
