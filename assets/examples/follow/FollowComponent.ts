import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("FollowComponent")
@executeInEditMode
export class FollowComponent extends Component {
  @property(Node)
  target: Node;

  @property(Boolean)
  isLerp: boolean = false;

  update(deltaTime: number) {
    if (this.target) {
      if (!this.isLerp) {
        this.node.worldPosition = this.target.worldPosition.clone().add(new Vec3(0, 50, 0));
      } else {
        this.node.worldPosition = this.node.worldPosition.lerp(
          this.target.worldPosition.clone().add(new Vec3(0, 50)),
          deltaTime
        );
      }
    }
  }
}
