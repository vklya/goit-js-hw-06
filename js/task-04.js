"use strict";

const refs = {
    add: document.querySelector("[data-action='increment']"),
    del: document.querySelector("[data-action='decrement']"),
    val: document.querySelector("#value"),
};

let counterValue = 0;
const incr = () => {
    counterValue += 1;
    refs.val.textContent = counterValue;
};

const decr = () => {
    counterValue -= 1;
    refs.val.textContent = counterValue;
};

refs.add.addEventListener("click", incr);
refs.del.addEventListener("click", decr);
