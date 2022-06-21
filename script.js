document.addEventListener('DOMContentLoaded', () => {
  // Calls the setFeatured function when the website loads
  setFeatured();
});

// Elements
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
// The elements in an array
const pArray = [p1, p2, p3, p4];

// All the clubs in an array
const clubsList = ["Chat for change"];

// Function that sets the featured clubs in index.html
const setFeatured = () => {
  for (let i = 0; i < 5; i++) {
    // Element taken out of the array
    let p = pArray[i];
    // Random club from clubsList
    let club = clubsList[Math.floor(Math.random()*clubsList.length)];

    // Checks which club is in the club variable
    switch (club) {
      case "Chat for change":
      p.setAttribute('href', './ChatForChange.html');
      break;

      default:
      console.log("Club not found. Please check your spelling.");
      break;
    }
  }
}
