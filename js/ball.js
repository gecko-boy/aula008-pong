export default class Ball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        this.scene = scene;
        this.setScale(15, 15);

        this.setPosition(
            this.scene.game.config.width * 0.5,
            this.scene.game.config.height * 0.5
        );

        this.direction = {
            x: 1,
            y: 0
        }

        this.speed = 2;
    }

    update(time) {
        
    }
}