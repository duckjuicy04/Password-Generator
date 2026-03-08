const resultEl = document.getElementById("result"); // Get references to DOM elements
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Define character sets
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"; // Define symbols (you can customize this as needed)
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-="; // Event listener for clipboard button

clipboardEl.addEventListener("click", () => {
  // Copy password to clipboard
  const password = resultEl.innerText;
  if (!password) return; // If there's no password, do nothing
  navigator.clipboard.writeText(password).then(() => {
    // Use Clipboard API to copy text
    alert("Password copied to clipboard! ✅");
  });
});

generateEl.addEventListener("click", () => {
  // Generate password based on user input
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    // Call the function to generate password and display it
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length,
  );
});

function generatePassword(upper, lower, number, symbol, length) {
  // Function to generate password based on selected criteria
  let generatedPassword = "";
  let characterPool = "";

  if (upper) characterPool += upperLetters;
  if (lower) characterPool += lowerLetters;
  if (number) characterPool += numbers;
  if (symbol) characterPool += symbols;

  if (characterPool.length === 0) return ""; // If no character types are selected, return an empty string

  for (let i = 0; i < length; i++) {
    // Randomly select characters from the pool to create the password
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool[randomIndex];
  }
  return generatedPassword; // Return the generated password
}
