// firstName and lastName Variables
const firstName  = "Numthap"
const lastName = "Oovanit"

// FullName Variable
const fullName = firstName + " " + lastName

// Select h1 and update content with full name
const h1 = document.querySelector('h1');
h1.textContent = fullName;

// Age Variable
let age = 14

// Select #age and update with current age
const ageElement = document.querySelector('p');
ageElement.textContent = "Age: " + age;

// Create new paragraph for age in twenty years and append to section
const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `In twenty years, your age will be ${age + 20} years old.`;
section.appendChild(para1);
