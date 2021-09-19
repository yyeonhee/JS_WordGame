'use static';

//10진법으로 바꿔주기
const number = parseInt(prompt('몇 명이 참가하나요?'), 10);
const $button = document.querySelector('#input_button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; //제시어 담는 변수
let newWord; //새로 입력한 단어

const onClickButton = () => {
    //제시어가 비어있거나 입력한게 올바르다면,
    if(!word || word[word.length -1] === newWord[0]){
        word = newWord;
        $word.textContent = word;
        const order = parseInt($order.textContent);
        if(order + 1 > number){
            $order.textContent = 1; 
        } else {
            $order.textContent = order + 1;
        }
    }
    else{ //올바르지 않다면
            //틀렸다고 표시한다
            alert('올바르지 않는 단어입니다');
        }
    //입력 창 비우기
    $input.value = '';
    //입력 창 커서두기
    $input.focus();
};

const onInput = (event) => {
    newWord = event.target.value;
};

//input에 글씨를 입력할 경우, 아래의 이벤트 함수 실행
$input.addEventListener('input', onInput);
//button을 클릭할 경우, 아래의 이벤트 함수 실행
$button.addEventListener('click', onClickButton);