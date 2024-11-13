// Set current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

