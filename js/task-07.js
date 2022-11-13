"use strict";

const refs = {
    text: document.querySelector('#text'),
    range: document.querySelector('#font-size-control'),
};

const textSizeChange = () =>
{ refs.text.style.fontSize = refs.range.value + 'px'; }
    
refs.range.addEventListener('input', textSizeChange);