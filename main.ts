input.onGesture(Gesture.Shake, function () {
    game.setScore(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    game.addScore(game.score() + 1)
})
basic.forever(function () {
	
})
