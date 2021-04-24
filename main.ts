let thePlayer = sprites.create(img`
    . . 5 5 5 5 . . 
    . . 5 . . 5 . . 
    . . 5 5 5 5 . . 
    . . . 5 5 . . . 
    . . 5 5 5 5 . . 
    . 5 . 5 5 . 5 . 
    5 5 5 5 5 5 5 5 
    . . 5 . . 5 . . 
    `, SpriteKind.Player)
let aPlayer = sprites.create(img`
    3 . . 3 3 . . 3 
    . 3 . 3 3 . 3 . 
    . . 3 3 3 3 . . 
    . . . 3 3 . . . 
    . . . 3 3 . . . 
    . . . 3 3 . . . 
    . . 3 . . 3 . . 
    . . 3 . . 3 . . 
    `, SpriteKind.Player)
let bestPlayer = sprites.create(img`
    . 4 4 4 4 4 4 . 
    4 4 . 4 4 . 4 4 
    4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 
    4 . 4 . . 4 . 4 
    . 4 4 4 4 4 4 . 
    . . 4 . . 4 . . 
    . . 4 . . 4 . . 
    `, SpriteKind.Player)
let noobPlayer = sprites.create(img`
    . . 7 7 7 7 . . 
    . . 7 . . 7 . . 
    . . 7 7 7 7 . . 
    . . . 7 7 . . . 
    . 7 7 . . 7 7 . 
    . 7 7 7 7 7 7 . 
    7 7 . . . . 7 7 
    7 . . . . . . 7 
    `, SpriteKind.Player)
let nicePlayer = sprites.create(img`
    2 . 2 2 2 2 . 2 
    2 2 . 2 2 . 2 2 
    . 2 2 2 2 2 2 . 
    . . 2 2 2 2 . . 
    . . . 2 2 . . . 
    . . 2 2 2 2 . . 
    . 2 2 . . 2 2 . 
    2 2 . . . . 2 2 
    `, SpriteKind.Player)
let theTurner = sprites.create(img`
    . . a a a a . . 
    . . a . . a . . 
    . . a a a a . a 
    . . . a a a a a 
    . . . a a . . a 
    . . . a a a a a 
    . a a a a . . . 
    . a . . . a . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(aPlayer)
controller.moveSprite(bestPlayer)
controller.moveSprite(nicePlayer)
controller.moveSprite(noobPlayer)
controller.moveSprite(thePlayer)
game.onUpdateInterval(3000, function () {
    theTurner.say("go fast until i turn")
    pause(3000)
    theTurner.setImage(img`
        . a a a a . . . 
        . a . . a . . . 
        . a a a a . . a 
        . . . a a a a a 
        . . . a a . . a 
        . . . a a a a a 
        . a a a a . . . 
        . a . . . a . . 
        `)
})
