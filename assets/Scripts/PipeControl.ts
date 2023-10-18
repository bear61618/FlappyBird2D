import { _decorator, Component, EPhysics2DDrawFlags, Node, PhysicsSystem2D } from 'cc';
import { BirdControl } from './BirdControl';
const { ccclass, property } = _decorator;

@ccclass('PipeControl')
export class PipeControl extends Component {

    @property
    moveSpeed: number = 160;

    i:number=0;
    originPosion_y: number[] = [0, 0, 0];

    randomHeight: number = 0;
    onLoad() {
        // PhysicsSystem2D.instance.enable = true;
        // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
        //     EPhysics2DDrawFlags.Pair |
        //     EPhysics2DDrawFlags.CenterOfMass |
        //     EPhysics2DDrawFlags.Joint |
        //     EPhysics2DDrawFlags.Shape;
    }
    start() {
        for (let pipeNode of this.node.children) {
            this.originPosion_y[this.i] = pipeNode.position.y;
            this.i++;
        }
        this.i=0;
    }
    update(deltaTime: number) {
        for (let pipeNode of this.node.children) {
            //console.log("i:    "+this.i)

            pipeNode.setPosition(pipeNode.position.x - this.moveSpeed * deltaTime, pipeNode.position.y);
            if (pipeNode.position.x <= -30) {
                pipeNode.setPosition(320, this.originPosion_y[this.i] + this.randomHeight);
                // console.log("i:    "+this.i)
                // console.log(this.originPosion_y[this.i]);

                // console.log(this.randomHeight);

                // console.log(pipeNode.name + ":    " + pipeNode.position.y);
                this.i++;
                if(this.i>2){
                    this.i=0;
                    
                    this.randomHeight = (Math.random() - 0.5) * 200;
                }
            }

        }
    }
    ResetPosition(){
        for (let pipeNode of this.node.children) {
            pipeNode.setPosition(320, this.originPosion_y[this.i]);
            this.i++;
            if(this.i>2){
                this.i=0;
            }
        }

    }
}


