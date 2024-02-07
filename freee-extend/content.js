setTimeout(() => {
    console.log("freee-extend: activated");
    const workDaysElement = window.document.querySelector(".item .label");
    const workDaysText = workDaysElement.nextElementSibling.textContent;
    const workDays = parseInt(workDaysText, 10); // 「日」を除去して数値に変換

// 総勤務時間を取得
    const totalWorkHoursElement =
        window.document.querySelectorAll(".items .label")[1].nextElementSibling;
    const totalWorkHoursText =
        totalWorkHoursElement.querySelector(".hour-min__value").textContent;
    const totalWorkHours = parseInt(totalWorkHoursText, 10); // 「時間」を除去して数値に変換

// 一応結果をコンソールに出力
    console.log(`労働日数: ${workDays}日`);
    console.log(`総勤務時間: ${totalWorkHours}時間`);

    const averageWorkHoursPerDay = totalWorkHours / workDays;
    console.log(`労働時間平均: ${averageWorkHoursPerDay.toFixed(2)} 時間/日`);

// 不足時間の横に平均労働時間を追加
    const shortageTimeElement = document.querySelector(".items");
    const averageWorkHoursElement = document.createElement("div");
    averageWorkHoursElement.innerHTML = `<div class="item"><div class="label">労働時間平均</div><div class="body"><span class="hour-min"><span class="hour-min__hour"><span class="hour-min__value">${averageWorkHoursPerDay.toFixed(
        2
    )}</span><span class="hour-min__unit">時間</span></span></span></div></div>`;
    shortageTimeElement.appendChild(averageWorkHoursElement);
    // NOTE: mount 時に実行したいが、onloadではDOM がまだ生成されていないため、setTimeout で遅延させている
}, 1000);

