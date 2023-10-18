import { _decorator, AudioSource, Collider2D, Component, Contact2DType, director, EventTouch, game, Input, input, IPhysics2DContact, KeyCode, Label, Node, RigidBody, RigidBody2D, RigidBodyComponent, v2 } from 'cc';
import { SoundManager } from './SoundManager';
import { GameManager } from './GameManager';
import { PipeControl } from './PipeControl';
const { ccclass, property } = _decorator;

@ccclass('BirdControl')
export class BirdControl extends Component {
    @property(AudioSource)
    Fly;
    @property(AudioSource)
    Hit;
    @property(AudioSource)
    Scored;

    rigidbody: RigidBody2D;
    @property(GameManager)
    gamemanager: GameManager;
    @property(Label)
    scoreLabel: Label;

    ScoreGet: number = 0;

    start() {
        this.rigidbody = this.getComponent(RigidBody2D);
        input.on(Input.EventType.TOUCH_START, () => {
            this.FlyUp();
            this.Fly.play();
        })
        let collider = this.node.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }
    FlyUp() {
        this.rigidbody.linearVelocity = v2(0, 5);
    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.tag == 1) {
            let currentPosition = this.node.position;
            this.Hit.play();
            this.BirdStop();
            this.gamemanager.StopGame();
        }
    }
    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.tag == 2) {
            this.Scored.play();
            this.AddScore(this.ScoreGet);
        }
    }
    AddScore(score: number) {
        score += 1;
        this.ScoreGet = score;
        this.scoreLabel.string = this.ScoreGet.toString();
    }
    ResetScore() {
        //input.on(Input.EventType.TOUCH_START, this.BirdFly)
        input.on(Input.EventType.TOUCH_START, () => {
            this.FlyUp();
            this.Fly.play();
        })
        this.ScoreGet = 0;
        this.scoreLabel.string = this.ScoreGet.toString();
    }
    BirdStop() {
        //this.rigidbody.gravityScale = 0;
        //this.rigidbody.linearVelocity = v2(0, 0);
        
        console.log("input off");
    }
    BirdFly() {
        //this.FlyUp();
        //this.Fly.play();
    }
}