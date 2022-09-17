
const innNumber = document.querySelector('.innNumber')
const innChek = document.querySelector('.innCheck')
const innresult = document.querySelector('.innResult')

const innRegExp = /^[1-2]\d{12}$/
innChek.addEventListener('click', () => {
   if(innRegExp.test(innNumber.value)){
    innresult.innerText = 'ok'
    innresult.style.color = "green"
   }else{
   innresult.innerText = 'not ok'
    innresult.style.color = "red"
   }
}
)

const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;
let i = 0;


block.addEventListener('click',  function move() {
    if (position <=  360 && topPosition === 0) {
    position += 16;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  }
    else if (position >= 360 && topPosition <= 320) {
    topPosition += 40;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  } else if (topPosition >= 360 && position !== 0) {
    position -= 16;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  } else if (position === 0 && topPosition !== 0) {
    topPosition -= 40;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  }

});



