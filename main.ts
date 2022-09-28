let random = 0
basic.forever(function () {
    let index = 0
    random = randint(5, 10)
    basic.showNumber(random)
    for (let index = 0; index <= random; index++) {
        basic.showNumber(index)
    }
    while (index) {
        music.playTone(262, index)
    }
})
