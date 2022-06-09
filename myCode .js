// 2秒ごとに アライグマ の絵文字を追加します
let addRaccoon = () => {
    let theRaccoonMeter = document.getElementById("raccoonMeter");
    theRaccoonMeter.append("🤑🤑🤑🤑");
  };
  window.addEventListener("load", () => {
    window.setInterval(addRaccoon, 2000);
  });

let addIronman = () => {
    let theIronmanMeter = document.getElementByld("ironmanMeter");
    theIronmanMeter.append("images.png");
  };
  window.addEventListener("load", () => {
    window.setInterval(addIronman, 2000);
  });
