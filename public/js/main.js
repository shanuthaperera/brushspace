async function getNavBar() {
  try {
    const navbarSection = document.getElementById("navbar");

    const topnavDiv = document.createElement("div");
    topnavDiv.className = "topnav";
    topnavDiv.id = "myTopnav";

    const mainAnchor = document.createElement("a");
    mainAnchor.href = "/";
    mainAnchor.textContent = "Brush Space";
    topnavDiv.appendChild(mainAnchor);

    const topnavRightDiv = document.createElement("div");
    topnavRightDiv.className = "topnav-right";

    const navLinks = [
      { href: "#news", text: "Log In" },
      { href: "#contact", text: "Sign Up" },
    ];

    const homeAnchor = document.createElement("a");
    (homeAnchor.href = "/"),
      (homeAnchor.textContent = "HOME"),
      topnavRightDiv.appendChild(homeAnchor);

    const dropdowns = [
      {
        buttonText: "Color Wheel",
        items: [
          "Analogous",
          "Monochromatic",
          "Triad",
          "Complementary",
          "Split Complementary",
          "Square",
          "Compound",
          "Shades",
          "Custom",
        ],
        href: [
          "/colorwheel.html#Analogous",
          "/colorwheel.html#Monochromatic",
          "/colorwheel.html#Triad",
          "/colorwheel.html#Complementary",
          "/colorwheel.html#SplitComplementary",
          "/colorwheel.html#Square",
          "/colorwheel.html#Compound",
          "/colorwheel.html#Shades",
          "/colorwheel.html#Custom",
        ],
      },
      {
        buttonText: "Brushes",
        items: ["Ink Brush", "Concept Art", "Environment Brush"],
        href: [
          "/brushes.html#Inking",
          "/brushes.html#ConceptArtBrushes",
          "/brushes.html#EnvironmentBrush",
        ],
      },
      {
        buttonText: "References",
        items: ["Anatomy", "Background", "Animals", "Nature"],
        href: [
          "/references.html#Anatomy",
          "/references.html#Background",
          "/references.html#Animals",
          "/references.html#Nature",
        ],
      },
      {
        buttonText: "Tutorials",
        items: ["Anatomy", "Background", "Animals", "Nature"],
        href: [
          "/tutorials.html#Anatomy",
          "/tutorials.html#Background",
          "/tutorials.html#Animals",
          "/tutorials.html#Nature",
        ],
      },
    ];

    dropdowns.forEach((dropdown) => {
      const dropdownDiv = document.createElement("div");
      dropdownDiv.className = "dropdown";

      const button = document.createElement("button");
      button.className = "dropbtn";
      button.innerHTML = `${dropdown.buttonText} <i class="fa fa-caret-down"></i>`;
      dropdownDiv.appendChild(button);

      const dropdownContentDiv = document.createElement("div");
      dropdownContentDiv.className = "dropdown-content";

      dropdown.items.forEach((item, index) => {
        const anchor = document.createElement("a");
        anchor.href = dropdown.href[index];
        anchor.textContent = item;
        dropdownContentDiv.appendChild(anchor);
      });

      dropdownDiv.appendChild(dropdownContentDiv);
      topnavRightDiv.appendChild(dropdownDiv);
    });

    topnavDiv.appendChild(topnavRightDiv);

    navLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.text;
      topnavRightDiv.appendChild(anchor);
    });

    const iconAnchor = document.createElement("a");
    iconAnchor.href = "javascript:void(0);";
    iconAnchor.className = "icon";
    iconAnchor.innerHTML = "&#9776;";
    iconAnchor.setAttribute("onclick", "myFunction()");
    topnavDiv.appendChild(iconAnchor);

    navbarSection.appendChild(topnavDiv);

    const mainfooterdiv = document.getElementById("footer");

    const footerdiv = document.createElement("div");
    footerdiv.classList.add("footer-div");

    const leftfooter = document.createElement("div");
    leftfooter.classList.add("left-footer");
    leftfooter.textContent = "Brush Space";

    const rightfooter = document.createElement("div");
    rightfooter.classList.add("right-footer");

    const footerpages1 = document.createElement("a");
    footerpages1.textContent = "Privacy Policy";

    const footerpages2 = document.createElement("a");
    footerpages2.textContent = "Terms and Conditions";

    rightfooter.appendChild(footerpages1);
    rightfooter.appendChild(footerpages2);

    footerdiv.appendChild(leftfooter);
    footerdiv.appendChild(rightfooter);

    mainfooterdiv.appendChild(footerdiv);
  } catch (error) {
    console.log("Navbar Error", error);
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));

    if (targetElement) {
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }, 20);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  getNavBar();
});

document.addEventListener("DOMContentLoaded", function () {
  // Create the fullscreen overlay
  const overlay = document.createElement("div");
  overlay.className = "fullscreen-overlay";

  // Create the close button
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = function () {
    overlay.style.display = "none";
  };

  // Create an image element for the overlay
  const overlayImg = document.createElement("img");
  overlay.appendChild(overlayImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  // Add click event to gallery images
  document.querySelectorAll(".gallery-image").forEach((image) => {
    image.addEventListener("click", function () {
      overlayImg.src = this.src;
      overlay.style.display = "flex";
    });
  });
});
