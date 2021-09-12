import {
    _decorator,
    Component,
    Node,
    CCInteger,
    AudioClip,
    AudioSource,
    Animation,
    TERRAIN_HEIGHT_BASE,
    ProgressBar,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("CardState")
export class CardState {
    @property(CCInteger)
    maxHP: number = 20;
    @property(CCInteger)
    hp: number = 20;
}

@ccclass("AudioMap")
export class AudioMap {
    @property(AudioSource)
    attack: AudioSource = null;
    @property(AudioSource)
    beHit: AudioSource = null;
}

@ccclass("CardController")
export class CardController extends Component {
    @property(CardState)
    state: CardState = new CardState();

    @property(AudioMap)
    audioMap: AudioMap = null;

    @property(AudioSource)
    audioSource: AudioSource = null;

    @property(Animation)
    aniamtion: Animation = null;

    @property(ProgressBar)
    bloodBar: ProgressBar = null;

    attack() {
        this.aniamtion.play("attack");
        this.audioMap.attack.play();
    }

    hurt() {
        if (this.state.hp <= 0) return;
        this.state.hp--;
        this.aniamtion.play("be-hit");
        this.audioMap.beHit.play();
        this.bloodBar.progress = this.state.hp / this.state.maxHP;
    }
}
