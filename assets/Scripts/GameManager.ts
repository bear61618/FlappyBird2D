import { _decorator, Button, Component, find, game, Input, input, Node } from 'cc';
import { PipeControl } from './PipeControl';
import { LandControl } from './LandControl';
import { BirdControl } from './BirdControl';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Button)
    restart: Button;


    @property(PipeControl)
    pipeControl: PipeControl;


    @property(LandControl)
    landControl: LandControl;


bird : BirdControl;

    start() {
        this.pipeControl = find("Canvas/Pipe").getComponent(PipeControl);
        this.landControl = find("Canvas/Land").getComponent(LandControl);
        this.bird = find("Canvas/Bird").getComponent(BirdControl);

        console.log(this.bird.name);


    }
    StopGame() {
        this.bird.BirdStop();
        input.off(Input.EventType.TOUCH_START);
        this.restart.node.active = true;
        this.pipeControl.moveSpeed = 0;
        this.landControl.moveSpeed = 0;
    }
    StartGame() {        
        this.pipeControl.moveSpeed = 160;
        this.pipeControl.ResetPosition();
        this.landControl.moveSpeed = 160;

        this.bird.node.setPosition(0, 130)
        console.log(this.bird.node.position);
        this.bird.ResetScore();
        this.bird.rigidbody.gravityScale=2;
    }
}


