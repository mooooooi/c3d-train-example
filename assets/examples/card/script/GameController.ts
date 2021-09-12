import {
    Component,
    createDefaultPipeline,
    EventKeyboard,
    KeyCode,
    SystemEvent,
    systemEvent,
    _decorator,
} from "cc";
import { CardController } from "./Card";

const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameControllerGameController extends Component {
    @property(CardController)
    card: CardController = null;

    start() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyPressA, this);
    }

    onKeyPressA(event: EventKeyboard) {
        if (event.keyCode == KeyCode.KEY_A) {
            this.card.attack();
        } else if (event.keyCode == KeyCode.KEY_D) {
            this.card.hurt();
        }
    }
}
