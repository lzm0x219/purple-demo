import { Application, Text, type ICanvas } from "pixi.js";
import Palace, { type PalaceProps } from "./core/Palace";

export default class App {
  app: Application<ICanvas>;
  appWidth: number;
  appHeight: number;
  appPadding: number;
  palaceWidth: number;
  palaceHeight: number;
  palaceList: PalaceProps[];

  constructor() {
    this.appWidth = document.body.clientWidth;
    this.appHeight = document.body.clientHeight * 0.7;
    this.appPadding = 10;
    this.app = new Application({
      width: this.appWidth,
      height: this.appHeight,
      background: "#fff",
      resolution: 3,
      antialias: true,
      autoDensity: true,
    });
    this.palaceWidth = (this.appWidth - this.appPadding * 2) / 4;
    this.palaceHeight = (this.appHeight - this.appPadding * 2) / 4;
    this.palaceList = [
      {
        x: this.appPadding + this.palaceWidth * 2,
        y: this.appPadding + this.palaceHeight * 3,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "子",
      },
      {
        x: this.appPadding + this.palaceWidth,
        y: this.appPadding + this.palaceHeight * 3,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "丑",
      },
      {
        x: this.appPadding,
        y: this.appPadding + this.palaceHeight * 3,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "寅",
      },
      {
        x: this.appPadding,
        y: this.appPadding + this.palaceHeight * 2,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "卯",
      },
      {
        x: this.appPadding,
        y: this.appPadding + this.palaceHeight * 1,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "辰",
      },
      {
        x: this.appPadding,
        y: this.appPadding,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "巳",
      },
      {
        x: this.appPadding + this.palaceWidth * 1,
        y: this.appPadding,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "午",
      },
      {
        x: this.appPadding + this.palaceWidth * 2,
        y: this.appPadding,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "未",
      },
      {
        x: this.appPadding + this.palaceWidth * 3,
        y: this.appPadding,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "申",
      },
      {
        x: this.appPadding + this.palaceWidth * 3,
        y: this.appPadding + this.palaceHeight * 1,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "酉",
      },
      {
        x: this.appPadding + this.palaceWidth * 3,
        y: this.appPadding + this.palaceHeight * 2,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "戌",
      },
      {
        x: this.appPadding + this.palaceWidth * 3,
        y: this.appPadding + this.palaceHeight * 3,
        width: this.palaceWidth,
        height: this.palaceHeight,
        earthlyBranches: "亥",
      },
    ];
  }

  /**
   * 绘制全盘
   */
  render() {
    const root = document.getElementById("root");
    if (root) {
      root.appendChild(this.app.view as unknown as Node);

      this.renderCourtyard();
      this.renderPalace();
    }
  }

  /**
   * 渲染中庭
   */
  renderCourtyard() {
    const logo = new Text("文墨天机", {
      fontSize: 16,
    });
    logo.position.set(
      this.appWidth / 2,
      this.palaceHeight + this.appPadding * 2,
    );
    logo.pivot.x = logo.width / 2;
    this.app.stage.addChild(logo);

    //
  }

  /**
   * 绘制十二宫位
   */
  renderPalace() {
    this.palaceList.forEach((palace) => {
      this.app.stage.addChild(new Palace(palace).render());
    });
  }
}
