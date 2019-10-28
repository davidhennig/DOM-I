const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const mainLogo = document.getElementById("cta-img");
mainLogo.setAttribute("src", siteContent["cta"]["img-src"]);

const middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const myNav = document.querySelectorAll("nav a");
myNav[0].textContent = siteContent.nav["nav-item-1"];
myNav[1].textContent = siteContent.nav["nav-item-2"];
myNav[2].textContent = siteContent.nav["nav-item-3"];
myNav[3].textContent = siteContent.nav["nav-item-4"];
myNav[4].textContent = siteContent.nav["nav-item-5"];
myNav[5].textContent = siteContent.nav["nav-item-6"];
myNav.forEach(element => {
  element.style.color = "green";
});

const myH1 = document.querySelector("h1");
myH1.textContent = siteContent.cta["h1"];

const myButton = document.querySelector("button");
myButton.textContent = siteContent.cta["button"];

const myH4 = document.querySelectorAll(".main-content h4");
myH4[0].textContent = siteContent["main-content"]["features-h4"];
myH4[1].textContent = siteContent["main-content"]["about-h4"];
myH4[2].textContent = siteContent["main-content"]["services-h4"];
myH4[3].textContent = siteContent["main-content"]["product-h4"];
myH4[4].textContent = siteContent["main-content"]["vision-h4"];

const myP = document.querySelectorAll(".main-content p");
myP[0].textContent = siteContent["main-content"]["features-content"];
myP[1].textContent = siteContent["main-content"]["about-content"];
myP[2].textContent = siteContent["main-content"]["services-content"];
myP[3].textContent = siteContent["main-content"]["product-content"];
myP[4].textContent = siteContent["main-content"]["vision-content"];

const h4Contact = document.querySelector(".contact h4");
h4Contact.textContent = siteContent["contact"]["contact-h4"];

const myContact = document.querySelectorAll(".contact p");
myContact[0].textContent = siteContent["contact"]["address"];
myContact[1].textContent = siteContent["contact"]["phone"];
myContact[2].textContent = siteContent["contact"]["email"];

const myFooter = document.querySelector("footer p");
myFooter.textContent = siteContent["footer"]["copyright"];

const btmContent = document.createElement("a");
btmContent.textContent = "BOTTOM";
const parentElement = document.querySelector("nav");
parentElement.append(btmContent);

const topContent = document.createElement("a");
topContent.textContent = "TOP";
const prntElement = document.querySelector("nav");
prntElement.prepend(topContent);
