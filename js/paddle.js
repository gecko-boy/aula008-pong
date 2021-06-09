import clamp from "./utils.js"

export default class Paddle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, keymap) {
        super(scene, x, y, texture);

        this.scene = scene;
        this.setScale(15,15);

        this.setAngle(90);

        //this.keyIsDown = false;
        this.direction = 0;
        
        this.velocity = 5;

        this.keymap = keymap;

        this.halfSize = this.displayWidth * 0.5;
    }

    init() {
        this.scene.input.keyboard.on("keydown", e => {
            this.startMoving(e);
        });
        this.scene.input.keyboard.on("keyup", e => {
            this.stopMoving(e);
        });
    }

setKeyMap(keymap) {
        this.keymap = keymap;
    }

    startMoving(event) {
        //this.keyIsDown = true;
        switch(event.keyCode) {
            case this.keymap.up:
                this.direction = -1;
                break;
            case this.keymap.down:
                this.direction = 1;
                break;
        }
    }

    stopMoving(event) {
        //this.keyIsDown = false;
        this.direction = 0;
    }

    update(time) {
        //if(this.keyIsDown) {
            this.y += this.direction * this.velocity;
        //}

        // if(this.y <= this.halfSize) {
        //     this.y = this.halfSize;
        // }
        // else if (this.y >= this.scene.game.config.height - this.halfSize) {
        //     this.y = this.scene.game.config.height - this.halfSize;
        // }

        this.y = clamp(this.y, this.halfSize, this.scene.game.config.height - this.halfSize)
        //this.scene.game.config.height
    }
}