let currentPageIndex = 0;

//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach(el => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const page = document.getElementById(pageTurnId);
    const index = Array.from(pages).indexOf(page);

    if (page.classList.contains("turn")) {
      page.classList.remove("turn");
      currentPageIndex = index - 1;
      setTimeout(() => {
        page.style.zIndex = 20 - index;
      }, 500);
    } else {
      page.classList.add("turn");
      currentPageIndex = index;
      setTimeout(() => {
        page.style.zIndex = 20 + index;
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
  return pageNumber;
}

const backProfileBtn = document.querySelector(".back-profile");
backProfileBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      let newIndex = reverseIndex();
      page.classList.remove("turn");

      setTimeout(() => {
        pages[newIndex].style.zIndex = 5 + index; // Start at a lower z-index to avoid covering others
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
// Initially hide all right pages
pages.forEach(page => {
  page.style.opacity = "0"; // Hide the pages initially
});

// Delay making them visible and then animate them
setTimeout(() => {
  pages.forEach((page, index) => {
    page.style.opacity = "1"; // Make pages visible

    setTimeout(() => {
      let newIndex = reverseIndex();
      page.classList.remove("turn");

      setTimeout(() => {
        pages[newIndex].style.zIndex = 5 + index; // Adjust z-index order
      }, 500); // Adjust animation timing
    }, (index + 1) * 200 + 100); // Slow down the animation
  });
}, 2000); // Delay before animation starts (Adjust as needed)

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

const allPages = Array.from(document.querySelectorAll(".book-page.page-right"));
const navButtons = document.querySelectorAll(".page-nav button");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetIndex = parseInt(button.getAttribute("data-goto"));

    pages.forEach((page, i) => {
      if (i <= targetIndex - 1) {
        page.classList.add("turn");
        page.style.zIndex = 20 + i;
      } else {
        page.classList.remove("turn");
        page.style.zIndex = 20 - i;
      }
    });

    currentPageIndex = targetIndex - 1; // Track current for arrow logic
  });
});
