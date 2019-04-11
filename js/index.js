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
    address: "123 Way 456 Street  Somewhere, USA",
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

const image1 = document.getElementById("cta-img");
image1.setAttribute("src", siteContent["cta"]["img-src"]);

const image2 = document.getElementById("middle-img");
image2.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const navbarItems = [
  "Services",
  "Product",
  "Vision",
  "Features",
  "About",
  "Contact"
];

const navigation = document.querySelectorAll("a");

navigation.forEach((item, index) => {
  console.log(item, index);
  item.textContent = navbarItems[index];
});

const parent = document.querySelector(".container header nav");
const anchor = document.createElement("a");
const anchor2 = document.createElement("a");
anchor.textContent = "Prepend";
anchor.style.color = "#008000";
parent.prepend(anchor);
anchor2.textContent = "AppendChild";
anchor2.style.color = "#008000";
parent.appendChild(anchor2);

console.log(parent);

navigation.forEach(element => {
  element.style.color = "#008000";
});

const domAws = document.querySelector(".cta-text h1");
domAws.textContent = siteContent["cta"]["h1"];

const domBtn = document.querySelector(".cta-text button");
domBtn.textContent = siteContent["cta"]["button"];

const topSectionTitle = document.querySelectorAll(
  ".top-content .text-content h4"
);
topSectionTitle[0].textContent = siteContent["main-content"]["features-h4"];
topSectionTitle[1].textContent = siteContent["main-content"]["about-h4"];

const topSection = document.querySelectorAll(".top-content .text-content p");
topSection[0].textContent = siteContent["main-content"]["features-content"];
topSection[1].textContent = siteContent["main-content"]["about-content"];

const bottomSectionTitle = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomSectionTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomSectionTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomSectionTitle[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomSection = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomSection[0].textContent = siteContent["main-content"]["services-content"];
bottomSection[1].textContent = siteContent["main-content"]["product-content"];
bottomSection[2].textContent = siteContent["main-content"]["vision-content"];

const contactUs = document.querySelector(".contact h4");
contactUs.textContent = siteContent["contact"]["contact-h4"];

const info = document.querySelectorAll(".contact p");
info[0].textContent = siteContent["contact"]["address"];
info[1].textContent = siteContent["contact"]["phone"];
info[2].textContent = siteContent["contact"]["email"];

const foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];
