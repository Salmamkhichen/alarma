let alarma = 0
radio.setGroup(1)
music.setVolume(35)
basic.forever(function () {
    if (input.magneticForce(Dimension.X) < 150) {
        alarma = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.clearScreen()
    } else {
        radio.sendNumber(0)
        music.stopAllSounds()
        basic.clearScreen()
    }
})
