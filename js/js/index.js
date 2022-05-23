const number = Number(prompt("참가자는 몇 명?"));
const $button = document.getElementById('button');
const $input = document.getElementById('input');
const $word = document.getElementById('word');
const $order = document.getElementById('order');

let word;
let newWord;


//버튼

const onClickButton = () => {
    console.log('버튼클릭');
};
$button.addEventListener('click', onClickButton);

//입력

const onInput = (event) => {
    console.log("글자입력", evebt.target.value);
}
$input.addEventListener('input',onInput);