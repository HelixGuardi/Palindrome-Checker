const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultContainer = document.getElementById("result");

const isPalindrome = input => {
  if (input === "") {
    alert("A palindrome without text is like a sandwich without bread 🥪")
    return;
  }

  const regex = /[^A-Za-z0-9]/gi
  const lowerCaseStr = input.replace(regex, "").toLowerCase();
  const resultMsg = `${input} ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? "is" : "is not"} a palindrome`

  const resultContainer = document.querySelector(".result-container")
  const resultMsgParagraph = document.createElement("p");

  if(resultMsg === `${input} is a palindrome`){
    resultContainer.classList.remove("false-palindrome")
    resultContainer.classList.add("true-palindrome");  
  } else {
    resultContainer.classList.remove("true-palindrome")
    resultContainer.classList.add("false-palindrome");
  }

  resultMsgParagraph.classList.add("resultMsg")
  resultMsgParagraph.innerText = `${resultMsg}`
  resultContainer.replaceChildren();
  resultContainer.appendChild(resultMsgParagraph);
  resultContainer.style.display = "block"
}

checkBtn.addEventListener("click", () => {
  isPalindrome(textInput.value);
  textInput.value = "";
})

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    isPalindrome(textInput.value)
    textInput.value = "";
  }
})
