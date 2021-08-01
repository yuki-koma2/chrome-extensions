let wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("dev-wrapper");

let backGroundTextDiv = document.createElement("div");
backGroundTextDiv.classList.add("back-ground-text");
backGroundTextDiv.textContent = "TEST"
wrapperDiv.appendChild(backGroundTextDiv)

let cloneNode = backGroundTextDiv.cloneNode(true);
wrapperDiv.appendChild(cloneNode);

let cloneNode1 = backGroundTextDiv.cloneNode(true);
wrapperDiv.appendChild(cloneNode1);

let cloneNode2 = backGroundTextDiv.cloneNode(true);
wrapperDiv.appendChild(cloneNode2);

let cloneNode3 = backGroundTextDiv.cloneNode(true);
wrapperDiv.appendChild(cloneNode3);

let cloneNode4 = backGroundTextDiv.cloneNode(true);
wrapperDiv.appendChild(cloneNode4);

// 本当はちゃんと計算して繰り返しできた方が良さそうだけど大した数じゃないし面倒なのでやめます。
// let countNumber = 0;
//
// do {
//     wrapperDiv.appendChild(backGroundTextDiv.cloneNode(true));
//     countNumber++
// } while (countNumber === 50)

document.body.prepend(wrapperDiv);
