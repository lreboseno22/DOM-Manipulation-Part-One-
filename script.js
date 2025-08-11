// Part One:

// Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector("main")
console.log(mainEl);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = "#4a4e4d";

// Set the content of mainEl to <h1>DOM Manipulation</h1>
const newHeader = document.createElement("h1");
newHeader.textContent = "DOM Manipulation"
mainEl.append(newHeader);

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');
