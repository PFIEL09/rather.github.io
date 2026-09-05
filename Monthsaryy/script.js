
const CORRECT_PIN = "0408";
const CORRECT_USERNAME = "Jaja";
const START_DATE = new Date("2026-04-08T00:00:00");

let pin = "";
const pinDots = document.querySelectorAll("#pinDisplay i");
function updatePin() {

  pinDots.forEach((dot, index) => {

    dot.classList.toggle(
      "filled",
      index < pin.length
    );

  });

}

function enterPin(number) {
  if (pin.length >= 4) {
    return;
  }
  pin += number;
  updatePin();
  if (pin.length === 4) {

    setTimeout(() => {
      checkLogin();
    }, 220);

  }

}

function deletePin() {

  pin = pin.slice(0, -1);

  updatePin();

}


function checkLogin() {

  const usernameInput =
    document.getElementById("username");

  const error =
    document.getElementById("loginError");

  const name =
    usernameInput.value.trim();



  if (!name) {

    error.textContent =
      "Enter your name first, love. 💗";

    shakeLogin();

    pin = "";
    updatePin();

    return;
  }


  if (
    name.toLowerCase() !==
    CORRECT_USERNAME.toLowerCase()
  ) {

    error.textContent =
      "Hmm... that name isn't recognized. Try again, love. 🌷";

    shakeLogin();

    pin = "";
    updatePin();

    return;
  }


  if (pin !== CORRECT_PIN) {

    error.textContent =
      "Hmm... that PIN isn't right. Try again. 💕";

    shakeLogin();

    pin = "";
    updatePin();

    return;
  }


  error.textContent = "";



  document
    .getElementById("loginScreen")
    .classList
    .add("hidden");



  document
    .getElementById("mainContent")
    .classList
    .remove("hidden");



  document.body.style.overflow = "auto";



  if (typeof createPetals === "function") {
    createPetals(22);
  }

  if (typeof initReveal === "function") {
    initReveal();
  }

  if (typeof updateCounter === "function") {
    updateCounter();

    setInterval(
      updateCounter,
      1000
    );
  }



  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


function shakeLogin() {

  const card =
    document.querySelector(".login-card");

  if (!card) {
    return;
  }

  card.animate(
    [
      {
        transform: "translateX(-7px)"
      },

      {
        transform: "translateX(7px)"
      },

      {
        transform: "translateX(-4px)"
      },

      {
        transform: "translateX(4px)"
      },

      {
        transform: "translateX(0)"
      }
    ],
    {
      duration: 350
    }
  );

}


document.addEventListener(
  "DOMContentLoaded",
  function () {

    const username =
      document.getElementById("username");

    if (!username) {
      return;
    }

    username.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {


          if (pin.length === 4) {

            checkLogin();

          }
          else {


            const firstKey =
              document.querySelector(
                ".keypad button"
              );

            if (firstKey) {
              firstKey.focus();
            }

          }

        }

      }
    );

  }
);


function updateCounter() {

  const difference =
    Math.max(
      0,
      Date.now() -
      START_DATE.getTime()
    );


  const seconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      seconds / 86400
    );


  const hours =
    Math.floor(
      (seconds % 86400) / 3600
    );


  const minutes =
    Math.floor(
      (seconds % 3600) / 60
    );


  const remainingSeconds =
    seconds % 60;


  document
    .getElementById("days")
    .textContent =
    days;


  document
    .getElementById("hours")
    .textContent =
    String(hours)
      .padStart(2, "0");


  document
    .getElementById("minutes")
    .textContent =
    String(minutes)
      .padStart(2, "0");


  document
    .getElementById("seconds")
    .textContent =
    String(remainingSeconds)
      .padStart(2, "0");

}


function initReveal() {

  const observer =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(
          function (entry) {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add("visible");

            }

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  document
    .querySelectorAll(".reveal")
    .forEach(
      element =>
        observer.observe(element)
    );

}


const envelope =
  document.getElementById(
    "envelope"
  );


envelope.addEventListener(
  "click",
  function () {

    envelope
      .classList
      .toggle("open");


    document
      .getElementById("letter")
      .classList
      .toggle("open");


    if (
      envelope.classList.contains(
        "open"
      )
    ) {

      burstHearts(envelope);

    }

  }
);


const gift =
  document.getElementById(
    "gift"
  );


gift.addEventListener(
  "click",
  function () {

    gift
      .classList
      .toggle("open");


    document
      .getElementById(
        "surpriseMessage"
      )
      .classList
      .toggle("show");


    if (
      gift.classList.contains(
        "open"
      )
    ) {

      createPetals(35);

      burstHearts(gift);

    }

  }
);


document
  .getElementById("bigHeart")
  .addEventListener(
    "click",
    function (event) {

      burstHearts(
        event.currentTarget
      );

    }
  );


function burstHearts(target) {

  const rect =
    target.getBoundingClientRect();


  for (
    let i = 0;
    i < 12;
    i++
  ) {

    const heart =
      document.createElement(
        "span"
      );


    const symbols = [
      "❤",
      "♡",
      "✦",
      "🌸"
    ];


    heart.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    heart.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      z-index: 9999;
      pointer-events: none;
      font-size: ${14 + Math.random() * 16}px;
      transition: 1s ease-out;
    `;


    document.body.appendChild(
      heart
    );


    requestAnimationFrame(
      function () {

        heart.style.transform = `
          translate(
            ${(Math.random() - 0.5) * 180}px,
            ${-60 - Math.random() * 150}px
          )
          rotate(
            ${Math.random() * 100 - 50}deg
          )
        `;

        heart.style.opacity = "0";

      }
    );


    setTimeout(
      () => heart.remove(),
      1100
    );

  }

}


function createPetals(
  count = 15
) {

  const layer =
    document.getElementById(
      "petalLayer"
    );


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const petal =
      document.createElement(
        "span"
      );


    petal.className =
      "petal";


    const symbols = [
      "🌸",
      "🌷",
      "✿",
      "♡"
    ];


    petal.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    petal.style.left =
      Math.random() * 100 + "%";


    petal.style.fontSize =
      12 +
      Math.random() * 16 +
      "px";


    petal.style.animationDuration =
      5 +
      Math.random() * 6 +
      "s";


    petal.style.animationDelay =
      Math.random() * 2 +
      "s";


    petal.style.setProperty(
      "--drift",
      (
        Math.random() * 240 -
        120
      ) + "px"
    );


    layer.appendChild(
      petal
    );


    setTimeout(
      () => petal.remove(),
      13000
    );

  }

}


document.addEventListener(
  "mousemove",
  function (event) {

    const cursorHeart =
      document.getElementById(
        "cursorHeart"
      );


    cursorHeart.style.left =
      event.clientX + "px";


    cursorHeart.style.top =
      event.clientY + "px";


    cursorHeart.style.opacity =
      ".65";

  }
);


document.addEventListener(
  "click",
  function (event) {

    if (
      Math.random() < 0.45 &&
      !event.target.closest(
        "button,input,a"
      )
    ) {

      burstHearts({

        getBoundingClientRect:
          () => ({
            left:
              event.clientX - 1,

            top:
              event.clientY - 1,

            width: 2,

            height: 2
          })

      });

    }

  }
);


const bgMusic = document.getElementById("bgMusic");
const musicDisc = document.getElementById("musicDisc");
const musicIcon = document.querySelector(".music-icon");


function startMusic() {

    bgMusic.play()
        .then(() => {

            musicDisc.classList.add("playing");

            musicIcon.textContent = "❚❚";

        })
        .catch(() => {


            console.log("Autoplay was blocked by the browser.");

        });

}


window.addEventListener("load", () => {

    startMusic();

});


document.addEventListener("click", () => {

    if (bgMusic.paused) {
        startMusic();
    }

}, { once: true });


musicDisc.addEventListener("click", (event) => {

    event.stopPropagation();

    if (bgMusic.paused) {

        bgMusic.play()
            .then(() => {

                musicDisc.classList.add("playing");

                musicIcon.textContent = "❚❚";

            });

    } else {

        bgMusic.pause();

        musicDisc.classList.remove("playing");

        musicIcon.textContent = "▶";

    }

});

