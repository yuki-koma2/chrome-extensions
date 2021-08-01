
// 注意書きのelementを定義
let wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("wrapper");

let cardDiv = document.createElement("div");
cardDiv.classList.add("card");

let buttonDiv = document.createElement("div");
buttonDiv.classList.add("hide-button");
buttonDiv.textContent = "承知";

let h2Element = document.createElement("h2");
h2Element.textContent = "これは本番環境です！";

let paragraphElement = document.createElement("p");
paragraphElement.textContent = "今使用しているのはお客様に見える環境です。テスト用のアカウントを登録したり、安易にデータ操作・公開しないでください。"

wrapperDiv.appendChild(cardDiv);
cardDiv.appendChild(buttonDiv);
cardDiv.appendChild(h2Element);
cardDiv.appendChild(paragraphElement);


// 邪魔な時にこれで消します。
const hideContent = () => {
    wrapperDiv.style.display = 'none';
    // 今は意味ないですが、今後ずっと出てくるのうざいな…と思った時のために。
    chrome.storage.sync.set({'isHide': true});
}

// ボタンをクリックして消します。
buttonDiv.onclick = hideContent;

// 読み込み時に表示します。
window.onload = () => {
    document.body.appendChild(wrapperDiv)
}

// ページ遷移の度に出てくるのはやりすぎな気もしましたが、間違えたくないのでこれでいいと思います。
// document.onload = () => {
//     chrome.storage.sync.get("isHide", ({isHide}) => {
//         if (!isHide) {
//             document.body.appendChild(wrapperDiv)
//         }
//     });
// }
