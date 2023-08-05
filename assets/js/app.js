const numberSet = "1234567890";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const symbolSet = "~!@#$%^&*()_+/";

//Selectors
const passBox = document.getElementById("pass-Box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => { 
  return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const genratePassword = (password = "") => { 
  if (upperInput.checked) { 
    password += getRandomData(upperSet); 
  }
  if (lowerInput.checked) { 
    password += getRandomData(lowerSet); 
  }
  if (numberInput.checked) { 
    password += getRandomData(numberSet); 
  }
  if (symbolInput.checked) { 
    password += getRandomData(symbolSet); 
  }
  
  if (password.length < totalChar.value) { 
    return genratePassword(password); 
  }

  passBox.innerText = trunacteString(password, totalChar.value);
}

genratePassword();

document.getElementById("btn").addEventListener(
  "click",
  function () { 
    genratePassword();
  }
)

function trunacteString(str, num) { 
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  }
  else { 
    return str;
  }

}

// Function to show the popup message
const showPopupMessage = (message) => {
  const popupMessage = document.getElementById("popup-message");
  popupMessage.textContent = message;
  popupMessage.classList.add("show");
  setTimeout(() => {
    popupMessage.classList.remove("show");
  }, 2000); // Hide the popup message after 2 seconds (adjust as needed)
};

// Function to copy the password to the clipboard
const copyPasswordToClipboard = () => {
  const password = passBox.innerText;
  const textarea = document.createElement("textarea");
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Show the popup message when the password is copied
  showPopupMessage("Password copied to clipboard!");
};

// Add a click event listener to the "pass-Box" element to copy the password
passBox.addEventListener("click", copyPasswordToClipboard);