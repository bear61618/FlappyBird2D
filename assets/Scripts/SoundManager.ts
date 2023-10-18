import { _decorator, AudioClip, AudioSource, AudioSourceComponent, Component, Node, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager extends Component {
    @property(AudioSource)
    Fly = null;
    PlayFly() {
        console.log('play fly sound');
        this.Fly.play();
    }
}