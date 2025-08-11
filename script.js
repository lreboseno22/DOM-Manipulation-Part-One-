// Part One:

// Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector("main");
console.log(mainEl);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = "#4a4e4d";

// Set the content of mainEl to <h1>DOM Manipulation</h1>
const newHeader = document.createElement("h1");
newHeader.textContent = "DOM Manipulation";
mainEl.append(newHeader);

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

// ---------------------------------------------------------

// Part Two

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById("top-menu");

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";

// Set the background color of topMenuEL to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = "#0e9aa7";

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');
