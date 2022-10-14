// slider for themes change
let sliderCircle = document.querySelector('.inner-circle');
let sliderValue= 1;
let body = document.querySelector('.body');
let arthFunction = document.querySelectorAll('.arth-function');
let numbers = document.querySelectorAll('.numbers');
let displayNumber = document.querySelector('.pressed-keys');
let calcFunction = document.querySelectorAll('.calc-function');
let beforeResult = document.querySelector('.before-result');

const slider = () =>{
    if(sliderValue < 3){
        sliderValue ++;
    }
    else{
        sliderValue = 1;
    }
    for(i=1 ; i<4 ; i++){
        sliderCircle.classList.remove(`t${i}`);
        body.classList.remove(`theme-${i}`);
    }

    sliderCircle.classList.add(`t${sliderValue}`);
    body.classList.add(`theme-${sliderValue}`);
}

sliderCircle.addEventListener('click',slider);



// Taking input numbers
const calculator = (event) =>{
    let pressedKey = event.target.innerHTML;
    
    if(pressedKey.includes('.')){
        if(displayNumber.innerHTML.includes('.')){
            displayNumber.innerHTML += '';
        }
        else{
            displayNumber.innerHTML += pressedKey;
        }
    }
    else{
        displayNumber.innerHTML += pressedKey;
    }
}


for(i=0 ; i<numbers.length ;i++){
    numbers[i].addEventListener('click',calculator);
}


// pressing arthmetic function 
const arthFuncClick = (event) =>{
    if(beforeResult.innerHTML == ''){
        beforeResult.innerHTML = parseFloat(displayNumber.innerHTML);
        displayNumber.innerHTML = '';
    }
    else{
            if(event.target.innerHTML == '+'){
                console.log('Plus')
                beforeResult.innerHTML = parseFloat(beforeResult.innerHTML) + parseFloat(displayNumber.innerHTML);
                displayNumber.innerHTML = '';
            }  
            else if(event.target.innerHTML == '-'){
                console.log('minus')
                beforeResult.innerHTML = parseFloat(beforeResult.innerHTML) - parseFloat(displayNumber.innerHTML);
                displayNumber.innerHTML = '';
            } 
            else if(event.target.innerHTML == '*'){
                console.log('multiply')
                beforeResult.innerHTML = parseFloat(beforeResult.innerHTML) * parseFloat(displayNumber.innerHTML);
                displayNumber.innerHTML = '';
            } 
            else{
                console.log('divide')
                beforeResult.innerHTML = parseFloat(beforeResult.innerHTML) / parseFloat(displayNumber.innerHTML);
                displayNumber.innerHTML = '';
            }   
    }
        console.log(event.target);
}


// calculating 1st result
for(j=0 ; j<arthFunction.length ; j++){
    arthFunction[j].addEventListener('click',arthFuncClick);
}



// Del button

const delFunction = () =>{
    displayNumber.innerHTML = (displayNumber.innerHTML.substring(0, displayNumber.innerHTML.length - 1));
}

document.querySelector('.del').addEventListener('click',delFunction);

// reset button
const resetFunction = () =>{
    displayNumber.innerHTML = '';
    beforeResult.innerHTML = '';
}

document.querySelector('.reset').addEventListener('click',resetFunction);

// result button
const resultFunction = () =>{
    displayNumber.innerHTML = beforeResult.innerHTML;
    beforeResult.innerHTML = '';
}

document.querySelector('.equal').addEventListener('click',resultFunction);
