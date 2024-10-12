//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);
    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

//contact me button when click
const pages = document.querySelectorAll(".book-page.page-right");
// const contactMeBtn = document.querySelector(".btn.contact-me");
// contactMeBtn.onclick = () => {
//   pages.forEach((page, index) => {
//     setTimeout(() => {
//       page.classList.add("turn");
//       setTimeout(() => {
//         page.style.zIndex = 20 + index;
//       }, 500);
//     }, (index + 1) * 200 + 100);
//   });
// };

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

//back profile button when click
const backProfileBtn = document.querySelector(".back-profile");
backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

//opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

//opening animation (page left or profile page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});

const headings = [
  "Web Developer",
  "Software Engineer",
  "Technical Intern",
  "Tech Enthusiast"
];

let currentHeadingIndex = 0;
const headingElement = document.getElementById("heading");

function typeHeading() {
  const heading = headings[currentHeadingIndex];
  headingElement.textContent = ""; // Clear current heading

  let index = 0; // Start at the first character

  // Type the current heading one character at a time
  const typingInterval = setInterval(() => {
      headingElement.textContent += heading.charAt(index);
      index++;

      // If we've typed out the entire heading
      if (index === heading.length) {
          clearInterval(typingInterval); // Stop typing
          // Wait before typing the next heading
          setTimeout(() => {
              currentHeadingIndex = (currentHeadingIndex + 1) % headings.length; // Move to the next heading
              typeHeading(); // Type the next heading
          }, 1000); // Wait for 1 second before typing the next heading
      }
  }, 100); // Typing speed: 100 ms per character
}

// Start the typewriter effect
typeHeading();

