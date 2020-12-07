////////////////////////////////////
// Query Selectors
const lengthEl = document.querySelector('.length');
const resultEl = document.querySelector('.result');
const uppercaseEl = document.querySelector('.uppercase');
const lowercaseEl = document.querySelector('.lowercase');
const symbolsEl = document.querySelector('.symbols');
const numbersEl = document.querySelector('.numbers');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy');

////////////////////////////////////
// Possibilities of combinations
const numbersArr = [...'0123456789'];
const uppercaseArr = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lowercaseArr = [...'abcdefghijklmnopqrstuvwxyz'];
const symbolsArr = [...'~!@#$%^&*()_+='];

const allArr = [...numbersArr, ...uppercaseArr, ...lowercaseArr, ...symbolsArr];

// All combinations with numbers
const numbersSymbolsArr = [...numbersArr, ...symbolsArr];
const numbersUppercaseLowercaseArr = [...numbersArr, ...uppercaseArr, ...lowercaseArr];
const numbersUppercaseArr = [...numbersArr, ...uppercaseArr];
const numbersLowercaseArr = [...numbersArr, ...lowercaseArr];
const numbersSymbolArr = [...numbersArr, ...symbolsArr];
const numbersSymbolLowercaseArr = [...numbersArr, ...lowercaseArr, ...symbolsArr];
const numbersSymbolUppercaseArr = [...numbersArr, ...uppercaseArr, ...symbolsArr];

// All combinations with uppercase
const uppercaseLowercaseArr = [...uppercaseArr, ...lowercaseArr];
const uppercaseSymbolArr = [...uppercaseArr, ...symbolsArr];
const uppercaseLowercaseSymbolArr = [...uppercaseArr, ...lowercaseArr, ...symbolsArr];
const uppercaseNumbersArr = [...uppercaseArr, ...numbersArr];
const uppercaseNumbersSymbolsArr = [...numbersArr, ...uppercaseArr, ...symbolsArr];

// All combinations with lowercase
const lowercaseNumbersArr = [...lowercaseArr, ...numbersArr];
const lowercaseSymbolsArr = [...lowercaseArr, ...symbolsArr];

// All combinations with symbol
const symbolsNumbersArr = [...symbolsArr, ...numbersArr];

/////////////////////////////////////
// Program
const getLength = () => lengthEl.value;

const generateAndRenderPassword = (length, array) => {
  let password = ''
  for (let i = 0; i < length; i++) password += array[Math.floor(Math.random() * array.length)];
  resultEl.textContent = password;
}

generateBtn.addEventListener('click', () => {
  const length = getLength();
  if (!length || length < 4 || length > 40) return alert('Please enter a valid length from 4 to 40. We recommend using a minimum length of 8 for better security.');

  // 1 Checked
  if (uppercaseEl.checked && !lowercaseEl.checked && !symbolsEl.checked && !numbersEl.checked) generateAndRenderPassword(length, uppercaseArr);
  if (!uppercaseEl.checked && lowercaseEl.checked && !symbolsEl.checked && !numbersEl.checked) generateAndRenderPassword(length, lowercaseArr);
  if (!uppercaseEl.checked && !lowercaseEl.checked && symbolsEl.checked && !numbersEl.checked) generateAndRenderPassword(length, symbolsArr);
  if (!uppercaseEl.checked && !lowercaseEl.checked && !symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, numbersArr);

  // 2 Checked
  if (uppercaseEl.checked && lowercaseEl.checked && !symbolsEl.checked && !numbersEl.checked) generateAndRenderPassword(length, uppercaseLowercaseArr);
  if (uppercaseEl.checked && !lowercaseEl.checked && symbolsEl.checked && !numbersEl.checked) generateAndRenderPassword(length, uppercaseSymbolArr);
  if (uppercaseEl.checked && !lowercaseEl.checked && !symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, uppercaseNumbersArr);
  if (!uppercaseEl.checked && lowercaseEl.checked && symbolsEl.checked && !numbersEl.checked) generateAndRenderPassword(length, lowercaseSymbolsArr);
  if (!uppercaseEl.checked && lowercaseEl.checked && !symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, lowercaseNumbersArr);
  if (!uppercaseEl.checked && !lowercaseEl.checked && symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, symbolsNumbersArr);

  // 3 Checked 
  if (uppercaseEl.checked && lowercaseEl.checked && symbolsEl.checked && !numbersEl.checked) generateAndRenderPassword(length, uppercaseLowercaseSymbolArr);
  if (!uppercaseEl.checked && lowercaseEl.checked && symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, numbersSymbolLowercaseArr);
  if (uppercaseEl.checked && !lowercaseEl.checked && symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, numbersSymbolUppercaseArr);
  if (uppercaseEl.checked && lowercaseEl.checked && !symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, numbersUppercaseLowercaseArr);
  if (uppercaseEl.checked && !lowercaseEl.checked && symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, uppercaseNumbersSymbolsArr);

  // 4 Checked
  if (uppercaseEl.checked && lowercaseEl.checked && symbolsEl.checked && numbersEl.checked) generateAndRenderPassword(length, allArr);

  // Nothing checked
  if (!uppercaseEl.checked && !lowercaseEl.checked && !symbolsEl.checked && !numbersEl.checked) return alert('Please Fill The Checkboxes');
});

copyBtn.addEventListener('click', () => {
  const value = resultEl.textContent;
  if (!value) return
  navigator.clipboard.writeText(value).then(console.log('Copied!')).catch(_ => alert('Something went wrong. Please copy it manually.'));
});
