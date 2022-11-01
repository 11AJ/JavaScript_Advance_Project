const LowerSet  = 'abcdefghijklmnopqrstuvwxyz';
const UpperSet  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NumberSet = '1234567890';
const SpecialSet = "!@#$%^&*()_+/<>{}[]";
// Slider Function
const SliderInput = document.querySelector('.len-range');
const TotalChar = document.querySelector('.len-num');
// selectors
const LowercaseInput = document.querySelector('.lowerInput');
const UppercaseInput = document.querySelector('.upperInput');
const NumberInput = document.querySelector('.numberInput');
const SpecialInput = document.querySelector('.specialInput');
const passValue = document.querySelector('.passBox');


// Random Data Picker
const randomData = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const updateCharLength = () =>{
    TotalChar.value = SliderInput.value;
}
SliderInput.addEventListener('change',updateCharLength); 

// truncate Password
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
}


const generatePassword = (password ="") => {
    if(LowercaseInput.checked){
        password += randomData(LowerSet);
    }
    if(UppercaseInput.checked){
        password += randomData(UpperSet);
    }
    if(NumberInput.checked){
        password += randomData(NumberSet);
    }
    if(SpecialInput.checked){
        password += randomData(SpecialSet);
    }
    if(password.length < TotalChar.value){
        return generatePassword(password);
    }
    
    // console.log(password);
    passValue.innerText = truncateString(password, TotalChar.value);
}

document.querySelector('.btn').addEventListener('click',function(){
    generatePassword();
})


// strength function
const checkboxes = document.querySelectorAll('.checkbox');
const rectangles = document.querySelectorAll('.rectangle');

const PassStrength = () =>{
    let count = 0;

    for(i=0 ; i<checkboxes.length ; i++){
        if(checkboxes[i].checked){
            count++;
        }
        rectangles[i].style.background = '#18171F';
    }

    for(j=0 ; j<count ; j++){
        rectangles[j].style.background = 'goldenrod';
    }
     
} 

document.querySelector('.btn').addEventListener('click',PassStrength);


// copy password
function copyPassword() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.innerText);
  }

document.querySelector('.copy-icon').addEventListener('click',copyPassword);