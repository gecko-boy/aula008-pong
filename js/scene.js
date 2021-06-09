import Paddle from "./paddle.js";
import Ball from "./ball.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    init() {
        this.paddleOffsetX = 80;
    }

    preload() {
        this.load.image("paddle", "./images/paddle.png");
        this.load.image("ball", "./images/ball.png");
    }

    create() {
        this.paddleL = this.add.existing(new Paddle(this, this.paddleOffsetX, this.game.config.height * 0.5, "paddle", {"up": 87, "down": 83}));

        this.paddleL.init();

        this.paddleR = this.add.existing(new Paddle(this, this.game.config.width - this.paddleOffsetX, this.game.config.height * 0.5, "paddle",{"up": 38, "down": 40}));

        this.paddleR.init();

        this.ball = this.add.existing(new Ball(this, 0, 0, "ball"));
        
    }

    update(time) {
        this.paddleL.update(time);
        this.paddleR.update(time);
        this.ball.update(time);
    }
}