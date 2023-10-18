import { _decorator, Button, Component, director, game, Node, SceneAsset } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('LoadScene')
export class LoadScene extends Component {
    button: Button = null;
    @property(SceneAsset)
    gameScene: SceneAsset;


    @property(GameManager)
    gamemanager: GameManager;

    start() {
        this.button = this.node.getComponent(Button);
        this.button.node.on(Button.EventType.CLICK, () => {
            if (this.button.name == "Game Start Button<Button>") {
                director.loadScene("GameScene");
            } else if (this.button.name == "Restart Button<Button>") {
                //director.loadScene("StartScene");
                //director.runScene(this.gameScene);
                this.gamemanager.StartGame();
                this.node.active = false;

            }
        })
    }
}