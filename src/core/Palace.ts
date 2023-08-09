import { Graphics, Text } from "pixi.js";

export interface PalaceProps {
  x: number;
  y: number;
  width: number;
  height: number;
  earthlyBranches: string;
  heavenlyStems?: string;
}

export default class Palace {
  width: number;
  height: number;
  x: number;
  y: number;
  earthlyBranches: string;
  heavenlyStems?: string;
  graphics: Graphics;

  constructor(palace: PalaceProps) {
    this.width = palace.width;
    this.height = palace.height;
    this.x = palace.x;
    this.y = palace.y;
    this.earthlyBranches = palace.earthlyBranches;
    this.heavenlyStems = palace.heavenlyStems;
    this.graphics = new Graphics();
  }

  render() {
    // 绘制宫格
    this.graphics.lineStyle({
      color: "#000",
      width: 1,
    });
    this.graphics.beginFill("#fff");
    this.graphics.drawRect(this.x, this.y, this.width, this.height);

    // 绑定点击事件
    this.graphics.eventMode = "static";
    this.graphics.onpointerdown = () => {
      //
    };

    // 绘制地支
    const text = new Text(this.earthlyBranches, {
      fontSize: 14,
    });
    text.position.set(this.x + 5, this.y + 5);
    this.graphics.addChild(text);

    return this.graphics;
  }
}
