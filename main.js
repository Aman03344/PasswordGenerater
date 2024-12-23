const lengthInput = document.querySelector("#lengthInput");
const upperCase = document.querySelector("#UpperCase");
const lowerCase = document.querySelector("#LowerCase");
const numbers = document.querySelector("#number");
const symbols = document.querySelector("#synbols");
const passInput = document.querySelector("#passInput");
const copy = document.querySelector("#copy");
const generateBtn = document.querySelector("#generateBtn");

const upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';
const numberStr = '0123456789';
const symbolStr = '!@#$%^&*()_+|}{:"?><,./;[]\\=-';

generateBtn.addEventListener("click", () => {
    let str = '';
    let password = '';

   
    if (upperCase.checked){
        str += upperCaseStr;
    }
    if (lowerCase.checked){
        str += lowerCaseStr;
    }
    if (numbers.checked){
        str += numberStr;
    }
    if (symbols.checked){
        str += symbolStr;
    }

    // Valid string and length input
    const length = parseInt(lengthInput.value) || 0;
    if (str === '' || length < 4 || length > 10) {
        alert("Please select at least one option and enter a valid length (4-10).");
        return;
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * str.length);
        password += str[index];
    }

    // Display passwords in inpute
    passInput.value = password;

});

// Copy password to clipboard
copy.addEventListener("click", () => {
    const password = passInput.value;
    if (password) {
        try {
           
            navigator.clipboard.writeText(password);
            alert("Password copied to clipboard!"); 
        } catch (error) {
       
            alert("Failed to copy password. Error: " + error);
        }
    } else {
        alert("Generate a password first.");  
    }
});
