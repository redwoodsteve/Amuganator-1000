function muisiec () {
    music.play(music.tonePlayable(2222, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(1500, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(1000, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
}
function changeCHNL () {
    if (currentCHNL >= 255) {
        currentCHNL = 0
    } else {
        currentCHNL += 1
    }
}
let currentCHNL = 0
radio.setGroup(0)
radio.setTransmitPower(7)
basic.showLeds(`
    . # # # .
    . . # # #
    . # # # #
    . # # # .
    . # . # .
    `)
// Change this to the string you want to send
let keyID = "GET AMUGGED"
basic.forever(function () {
    radio.setGroup(currentCHNL)
    radio.sendString(keyID)
    // Change this to number to be sent
    radio.sendNumber(333)
    changeCHNL()
})
