
const output = document.getElementById("output");


let myColor = ["Red", "Green", "White", "Black"];
output.innerHTML += `<b>1. Join Array:</b><br>`;
output.innerHTML += `Comma-separated: ${myColor.join(",")}<br>`;
output.innerHTML += `Plus-separated: ${myColor.join("+")}<br><br>`;


let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let frequency = {};
let maxCount = 0;
let mostFrequent = null;

arr1.forEach(item => {
  frequency[item] = (frequency[item] || 0) + 1;
  if (frequency[item] > maxCount) {
    maxCount = frequency[item];
    mostFrequent = item;
  }
});

output.innerHTML += `<b>2. Most Frequent Element:</b><br>`;
output.innerHTML += `${mostFrequent} ( ${maxCount} times )<br><br>`;


function truncateString(str, num) {
  return str.slice(0, num);
}

output.innerHTML += `<b>3. Truncate String:</b><br>`;
output.innerHTML += `Original: "Robin Singh"<br>`;
output.innerHTML += `Truncated (4): "${truncateString("Robin Singh", 4)}"<br><br>`;


function capitalizeWords(str) {
  return str.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}

output.innerHTML += `<b>4. Capitalize Words:</b><br>`;
output.innerHTML += `Original: "js string exercises"<br>`;
output.innerHTML += `Capitalized: "${capitalizeWords("js string exercises")}"<br><br>`;


function arrBetween(a, b, arr) {
  return arr.filter(num => num > a && num < b);
}

output.innerHTML += `<b>5. arrBetween:</b><br>`;
output.innerHTML += `Between 3 and 8 in [1, 5, 95, 0, 4, 7]:<br>`;
output.innerHTML += JSON.stringify(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) + "<br>";

output.innerHTML += `Between 1 and 10 in [1, 10, 25, 8, 11, 6]:<br>`;
output.innerHTML += JSON.stringify(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) + "<br>";
