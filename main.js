// ! Creating Opening Menu

const menu = document.querySelector(".hamburger");
const navBar = document.querySelector(".header-nav-links");
const ctbtnDisplay = document.getElementById("ctbtn-display");
console.log(ctbtnDisplay);

menu.addEventListener("click", () => {
  menu.classList.toggle("move");
  navBar.classList.toggle("open-menu");
  ctbtnDisplay.classList.toggle("db");
});

// ! *** ==========>>  Code For Responsive Dropdown <<============= ***

const dropdowns = document.querySelectorAll("#dd-down");
console.log(dropdowns);

// Add event listener to each dropdown
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function (event) {
    // console.log(event);
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Toggle the visibility of the submenu for this dropdown
    let submenu = this.nextElementSibling;
    console.log(submenu);
    submenu.classList.toggle("active");

    if (submenu.classList.contains("active")) {
      submenu.classList.remove("active");
    }
  });
});

// ! Removing Navbar When Scroll
// window.onscroll = () => {
//   navBar.classList.remove("open-menu");
//   menu.classList.remove("move");
// };

// ? ========================= = = = = = = = = = = = = ======================================== //

let lastScrollTop = 0;
const header = document.querySelector(".top-header");
console.log(header);

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  console.log(scrollTop);

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add("th-hide");
    // Hide header by moving it out of view
  } else {
    // Scrolling up
    header.classList.remove("th-hide"); // Make header visible
  }
});

//  ! Scroll To Top Button Script
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

// ! CONTACT FORM SCRIPT
const contactForm = document.getElementById("contact-form");
console.log(contactForm);
contactMessage = document.getElementById("alert-msg");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_2m097un",
      "template_1t93v7l",
      "#contact-form",
      "pnzeSlvPlRK2LmMaf"
    )
    .then(
      () => {
        contactMessage.textContent = "Message Sent Successfully ✅";
        console.log("hieiiiiiiiiii");

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

// ! ===========>> Slider JavaScript <<==============

// document.addEventListener("DOMContentLoaded", function () {
//   const videoSlides = document.querySelectorAll(".video-slide");
//   const navIndicators = document.querySelectorAll(".nav-indicator");
//   let currentSlide = 0;

//   // Function to show the current slide and update indicators
//   function showSlide(index) {
//     videoSlides.forEach((slide, i) => {
//       if (i === index) {
//         slide.classList.add("active");
//         navIndicators[i].classList.add("active");
//       } else {
//         slide.classList.remove("active");
//         navIndicators[i].classList.remove("active");
//       }
//     });
//   }

//   // Initial call to show first slide
//   showSlide(currentSlide);

//   // Function to handle indicator click
//   function handleIndicatorClick(index) {
//     currentSlide = index;
//     showSlide(currentSlide);
//   }

//   // Event listener for indicator click
//   navIndicators.forEach((indicator, index) => {
//     indicator.addEventListener("click", () => {
//       handleIndicatorClick(index);
//     });
//   });

//   // Automatic slide change
//   setInterval(() => {
//     currentSlide = (currentSlide + 1) % videoSlides.length;
//     showSlide(currentSlide);
//   }, 5000); // Change slide every 5 seconds (adjust as needed)
// });

function videoslider(links) {
  document.querySelector(".slider").src = links;
}
