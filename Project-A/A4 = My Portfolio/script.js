
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    closeMenu();
  });
});

const burger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navOverlay = document.getElementById('navOverlay');
burger.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
  navOverlay.style.display = navbar.classList.contains('nav-open') ? 'block' : 'none';
  document.body.style.overflow = navbar.classList.contains('nav-open') ? 'hidden' : '';
});
navOverlay.addEventListener('click', closeMenu);
function closeMenu() {
  navbar.classList.remove('nav-open');
  navOverlay.style.display = 'none';
  document.body.style.overflow = '';
}

const themeBtn = document.querySelector('.theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }
});

function revealFade() {
  document.querySelectorAll('.fade-in-up').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealFade);
window.addEventListener('DOMContentLoaded', revealFade);

const typedElem = document.getElementById("typed");
const typedStrings = [
  "AIDS Engineer | Web Developer",
  "Building Intelligent Solutions",
  "Building User Friendly Experiences"
];
let typedIndex = 0, charIndex = 0, typing = true;
function typeEffect() {
  if (typing) {
    if (charIndex <= typedStrings[typedIndex].length) {
      typedElem.textContent = typedStrings[typedIndex].slice(0, charIndex++);
      setTimeout(typeEffect, 70);
    } else {
      typing = false;
      setTimeout(typeEffect, 1400);
    }
  } else {
    if (charIndex > 0) {
      typedElem.textContent = typedStrings[typedIndex].slice(0, --charIndex);
      setTimeout(typeEffect, 30);
    } else {
      typing = true;
      typedIndex = (typedIndex + 1) % typedStrings.length;
      setTimeout(typeEffect, 500);
    }
  }
}
window.addEventListener("DOMContentLoaded", typeEffect);

const skills = [
  { logo: "Image/Python.png" },
  { logo: "Image/C++.png" },
  { logo: "Image/JavaScript.png" },
  { logo: "Image/Java.png" },
  { logo: "Image/SQL.png" },
  { logo: "Image/C.png" }
];

document.querySelector('.skills-grid').innerHTML =
  skills.map(skill => `
    <div class="skill-card fade-in-up">
      <img src="${skill.logo}" alt="${skill.name}">
    </div>
  `).join('');

const contactForm = document.querySelector('.contact-form');
const statusEl = document.querySelector('.form-status');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  let error = '';
  
  if (!name) error = "Please enter your name.";
  else if (!email.match(/^[\w\.-]+@[\w\.-]+\.\w{2,}$/)) error = "Please enter a valid email.";
  else if (message.length < 10) error = "Message should be at least 10 characters.";
  if (error) {
    statusEl.textContent = error;
    statusEl.style.color = "red";
    return;
  }
  form.querySelector('button').disabled = true;
  statusEl.textContent = "Sending...";
  statusEl.style.color = "var(--primary)";
  setTimeout(() => {
    statusEl.textContent = "Message sent! Thank you.";
    statusEl.style.color = "green";
    form.querySelector('button').disabled = false;
    form.reset();
    setTimeout(() => { statusEl.textContent = ""; }, 3500);
  }, 1200);
});
