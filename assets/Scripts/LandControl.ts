import { _decorator, Component, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('LandControl')
export class LandControl extends Component {
    @property
    moveSpeed: number = 160;

    width: number = 288;   
    
    update(deltaTime: number) {
        for (let landNode of this.node.children) {
            landNode.setPosition(landNode.position.x - this.moveSpeed*deltaTime, landNode.position.y);
            if (landNode.position.x <= -170) {
                landNode.setPosition(454, landNode.position.y);
            }
        }
    }
}