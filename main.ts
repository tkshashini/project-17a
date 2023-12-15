let Game_On = true
let X = randint(0, 4)
let Y = 0
let Delay = 500
led.plot(0, 0)
basic.pause(100)
basic.forever(function () {
    if (Game_On) {
        led.unplot(X, Y)
        Y += 1
        led.plot(X, Y)
        basic.pause(Delay)
    }
    if (Y == 4 || led.point(X, Y + 1)) {
        X = randint(0, 4)
        Y = 0
        led.plot(X, Y)
    }
    if (led.point(0, 4) && led.point(1, 4) && led.point(2, 4) && led.point(3, 4) && led.point(4, 4)) {
        Delay += -50
        basic.clearScreen()
    }
    if (Y == 0 && led.point(X, Y + 1)) {
        Game_On = false
        basic.showIcon(IconNames.Chessboard)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (X != 0) {
            led.unplot(X, Y)
            X += -1
            led.plot(X, Y)
            basic.pause(500)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (X != 4) {
            led.unplot(X, Y)
            X += 1
            led.plot(X, Y)
            basic.pause(500)
        }
    }
})
