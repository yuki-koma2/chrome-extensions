setTimeout(() => {
    if (!isActivatePage()) {
        console.log("freee-extend: not activated");
        return;
    }
    console.log("freee-extend: activated");
    addAverageWorkHoursElement();
    setEventOnChangeMonth();
    // NOTE: mount 時に実行したいが、onloadではDOM がまだ生成されていないため、setTimeout で遅延させている
}, 2000);

function setEventOnChangeMonth() {
    window.document.querySelectorAll(".month-link").forEach((element) => {
            element.addEventListener("click", () => {
                setTimeout(() => {
                    addAverageWorkHoursElement();
                }, 2000);
            });
        }
    )
}

function isActivatePage() {
    return window.document.querySelector('[aria-current="page"]').innerText === "勤怠編集";
}


function getWorkDays() {
    const workDaysElement = window.document.querySelector(".item .label");
    const workDaysText = workDaysElement.nextElementSibling.textContent;
    return parseInt(workDaysText, 10); // 「日」を除去して数値に変換
}

function getTotalWorkHours() {
    const totalWorkHoursElement = window.document.querySelectorAll(".items .label")[1].nextElementSibling;
    const totalWorkHoursText = totalWorkHoursElement.querySelector(".hour-min__value").textContent;
    return parseInt(totalWorkHoursText, 10); // 「時間」を除去して数値に変換
}

function getAverageWorkHoursPerDay() {
    const workDays = getWorkDays();
    const totalWorkHours = getTotalWorkHours();
    return totalWorkHours / workDays;
}

function addAverageWorkHoursElement() {
    const averageWorkHoursPerDay = getAverageWorkHoursPerDay();
    const shortageTimeElement = document.querySelector(".items");
    const averageWorkHoursElement = document.createElement("div");
    averageWorkHoursElement.innerHTML = `<div class="item"><div class="label">労働時間平均</div><div class="body"><span class="hour-min"><span class="hour-min__hour"><span class="hour-min__value">${averageWorkHoursPerDay.toFixed(2)}</span><span class="hour-min__unit">時間</span></span></span></div></div>`;
    shortageTimeElement.appendChild(averageWorkHoursElement);
}
