/* =========================
   EDIT THESE VALUES
========================= */

// Target date & time
const target = {
  year: 2026,
  month: 0,       // 0 = January, 11 = December
  day: 2,
  hour: 16,       // 24-hour format
  minute: 5,
  second: 0
};

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

/*
const timer = setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    countdownEl.textContent = "00:00:00";
    button.style.display = "inline-block";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}, 1000);
*/


const timer = setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    countdownEl.textContent = "00:00:00";
    button.style.display = "inline-block";
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







