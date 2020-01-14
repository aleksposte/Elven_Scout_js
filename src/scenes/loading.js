import { Scene } from "../scene";

export class Loading extends Scene{
    constructor(game) {
        super(game);
        this.loadedAT = 0;
    }

    init() {
        super.init();
        this.loadedAT = 0;
    }

    update(time) {
        if (this.loadedAT == 0 && this.game.screen.isImagesLoaded == true) {
            this.loadedAT = time;
        }
        if (this.loadedAT != 0 && (time - this.loadedAT) > 500) {
            this.finish(Scene.LOADED);
        }
    }

    render(time) {
        this.update(time);
        this.game.screen.fill("#000000");
        this.game.screen.print(50, 70, "Loading...");
        super.render(time);
    }
}