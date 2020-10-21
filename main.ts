scene.setBackgroundColor(10)
effects.bubbles.startScreenEffect()
let duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
duck.setPosition(30, 50)
let shark = sprites.create(img`
    ..................ccfff.............
    .................cddbbf.............
    ........fffffffffddbbf..............
    .......fbbbbbbbbbfcbcf..............
    .......fbbc111bffbbccffff...........
    .......fb111111ffbbbbbcccff....ccccc
    ........f1cc3311bbcbcbbccccf..cdbbbc
    ........fcc131c1bbbcbcbcccccfcddbbc.
    .........f111111bbbcbcbccccccbdbbf..
    .........f1111111bbbbbccccccccbbcf..
    ..........f111111bbbbcccccccffbccf..
    ...........c1111cbbbcccccbdbc.fbbcf.
    ............cc11cbbbfddddddc...fbbf.
    ..............cffbdbbfdddcc.....fbbf
    .................fbdbbfcc........fff
    ..................fffff.............
    `, SpriteKind.Player)
shark.setPosition(100, 50)
shark.say("Stupid", 1000)
pause(2000)
duck.say("Sharkfin soup", 2000)
pause(2000)
shark.say("Still stupid", 2000)
pause(2000)
duck.say("You sound stupid", 2000)
pause(2000)
shark.say("Still stupid", 2000)
pause(2000)
duck.say("I give up", 2000)
