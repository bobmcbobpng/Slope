input.onButtonPressed(Button.A, function () {
    top_y_m = y2 - y1
    bottom_x_m = x2 - x1
    m = top_y_m / bottom_x_m
    basic.showString("" + (m))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("x1=?")
    if (input.pinIsPressed(TouchPin.P0)) {
        x1 = x1 - 1
        basic.showString("x1=")
        basic.showString("" + (x1))
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        x1 = x1 + 1
        basic.showString("x1=")
        basic.showString("" + (x1))
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (input.buttonIsPressed(Button.A)) {
            y1 = y1 - 1
            basic.showString("y1=")
            basic.showString("" + (y1))
        }
        if (input.buttonIsPressed(Button.B)) {
            y1 = y1 + 1
            basic.showString("y1=")
            basic.showString("" + (y1))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    top_y_m = y1 - y2
    bottom_x_m = x1 - x2
    m = top_y_m + bottom_x_m
    b = y1 - m * x1
    basic.showString("" + (b))
})
let b = 0
let m = 0
let bottom_x_m = 0
let top_y_m = 0
let y2 = 0
let x2 = 0
let y1 = 0
let x1 = 0
x1 = 0
y1 = 0
x2 = 0
y2 = 0
basic.forever(function () {
	
})
