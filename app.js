let contrastToggle = false;
let isOpen = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_56wiqal",
      "template_4nofg39",
      event.target,
      "C0DmF2EILNSfuOV5b"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch((error) => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily down, please contact me directly at donovanlopez999@gmail.com"
      );
    });
}

function toggleModal() {
  if (isOpen) {
    isOpen = !isOpen;
    return document.body.classList.remove("modal--open");
  }

  isOpen = !isOpen;
  document.body.classList += " modal--open";
}
