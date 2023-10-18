import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BGControl')
export class BGControl extends Component {
    @property
    speed: number = 4;

    width: number = 288;
    
    update(deltaTime: number) {
        for (let bgNode of this.node.children) {
            bgNode.setPosition(bgNode.position.x - this.speed*deltaTime, 0);
            if (bgNode.position.x <= -this.width) {
                bgNode.setPosition(this.width, 0);
            }
        }
    }
}