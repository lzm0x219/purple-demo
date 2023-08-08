import { Application, Graphics, Text } from "pixi.js";

export default class App {
  appWidth: number;
  appHeight: number;
  appPadding: number;
  palaceWidth: number;
  palaceHeight: number;
  palaceList: { x: number; y: number }[];

  constructor() {
    this.appWidth = document.body.clientWidth;
    this.appHeight = document.body.clientHeight * 0.7;
    this.appPadding = 10;
    this.palaceWidth = (this.appWidth - this.appPadding * 2) / 4;
    this.palaceHeight = (this.appHeight - this.appPadding * 2) / 4;
    this.palaceList = [
      {
        x: 10,
        y: 10,
      },
      {
        x: 10 + this.palaceWidth,
        y: 10,
      },
      {
        x: 10 + this.palaceWidth * 1,
        y: 10,
      },
      {
        x: 10 + this.palaceWidth * 2,
        y: 10,
      },
      {
        x: 10 + this.palaceWidth * 3,
        y: 10,
      },
      {
        x: 10 + this.palaceWidth * 3,
        y: 10 + this.palaceHeight * 1,
      },
      {
        x: 10 + this.palaceWidth * 3,
        y: 10 + this.palaceHeight * 2,
      },
      {
        x: 10 + this.palaceWidth * 3,
        y: 10 + this.palaceHeight * 3,
      },
      {
        x: 10 + this.palaceWidth * 2,
        y: 10 + this.palaceHeight * 3,
      },
      {
        x: 10 + this.palaceWidth,
        y: 10 + this.palaceHeight * 3,
      },
      {
        x: 10,
        y: 10 + this.palaceHeight * 3,
      },
      {
        x: 10,
        y: 10 + this.palaceHeight * 2,
      },
      {
        x: 10,
        y: 10 + this.palaceHeight,
      },
    ];
  }

  createPalace(x: number, y: number) {
    const palace = new Graphics();
    palace.lineStyle({
      color: "#000",
      width: 1,
    });

    palace.drawRect(x, y, this.palaceWidth, this.palaceHeight);

    const text = new Text("宫", {
      fontSize: 14,
      dropShadow: false,
    });
    text.position.set(x + 5, y + 5);
    palace.addChild(text);
    return palace;
  }

  render() {
    const root = document.getElementById("root");

    if (root) {
      const app = new Application({
        width: this.appWidth,
        height: this.appHeight,
        background: "#fff",
        resolution: 3,
        antialias: true,
        autoDensity: true,
      });
      root.appendChild(app.view as unknown as Node);

      this.palaceList.forEach((palace) => {
        app.stage.addChild(this.createPalace(palace.x, palace.y));
      });
    }
  }
}
