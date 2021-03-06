let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 1 1 1 1 1 2 2 2 1 1 1 1 1 2 
    2 2 1 1 1 1 1 2 2 2 1 1 1 1 1 2 
    2 2 f f f 1 1 2 2 2 f f f 1 1 2 
    2 2 f f f 1 1 2 2 2 f f f 1 1 2 
    2 2 f f f 1 1 2 2 2 f f f 1 1 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 4 4 4 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite.setPosition(80, 60)
let mySprite2 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 1 1 1 1 1 7 7 7 1 1 1 1 1 7 
    7 7 1 1 1 1 1 7 7 7 1 1 1 1 1 7 
    7 7 f f f 1 1 7 7 7 f f f 1 1 7 
    7 7 f f f 1 1 7 7 7 f f f 1 1 7 
    7 7 f f f 1 1 7 7 7 f f f 1 1 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
mySprite2.setVelocity(50, 50)
mySprite2.follow(mySprite, 50)
