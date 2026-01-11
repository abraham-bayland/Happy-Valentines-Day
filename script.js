/* =========================
   EDIT THESE VALUES
========================= */

// Target date & time
const target = {
  year: 2026,
  month: 1,       // 0 = January, 11 = December
  day: 14,
  hour: 6,       // 24-hour format
  minute: 0,
  second: 0
};



//Elements to show and hide
const show1 = document.getElementById("state");
const show2 = document.getElementById("state2");
const show3 = document.getElementById("state3");
const show4 = document.getElementById("state4");
const show5 = document.getElementById("state5");


const hide1 = document.getElementById("rem1");
const hide2 = document.getElementById("rem2");
const hide3 = document.getElementById("rem3");
const hide4 = document.getElementById("rem4");

show1.style.display = 'none';
show2.style.display = 'none';
show3.style.display = 'none';
show4.style.display = 'none';
show5.style.display = 'none';

// Redirect URL
const redirectURL = "main.html";

/* ========================= */

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const targetDate = new Date(
  target.year,
  target.month,
  target.day,
  target.hour,
  target.minute,
  target.second
);

document.getElementById("targetDate").textContent =
  `${months[target.month]} ${target.day}, ${target.year}`;

const countdownEl = document.getElementById("countdown");
const button = document.getElementById("redirectBtn");
const timer = setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    countdownEl.textContent = "00:00:00";
    button.style.display = "inline-block";
    show1.style.display = 'block';
    show2.style.display = 'block';
    show3.style.display = 'block';
    show4.style.display = 'block';
    show5.style.display = 'block';
    hide1.style.display = 'none';
    hide2.style.display = 'none';
    hide3.style.display = 'none';
    hide4.style.display = 'none';
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) {
    // Show days + hours only if more than 24 hrs
    countdownEl.textContent =
      `${days} day${days > 1 ? "s" : ""} ` +
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`;
  } else {
    // Switch back to normal HH:MM:SS
    countdownEl.textContent =
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`;
  }
}, 1000);
button.addEventListener("click", () => {
  window.location.href = redirectURL;
});
  
