const pasaran = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Referensi 1 Januari 1970 = Pon
const baseDate = new Date("1970-01-01");

function getPasaran(date) {
  const diff = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
  return pasaran[(diff % 5 + 5) % 5];
}

function updateClock() {
  const now = new Date();

  let h = now.getHours().toString().padStart(2, '0');
  let m = now.getMinutes().toString().padStart(2, '0');
  let s = now.getSeconds().toString().padStart(2, '0');

  document.getElementById("clock").innerText = `${h}:${m}:${s}`;

  const hariIni = hari[now.getDay()];
  const pasaranIni = getPasaran(now);

  const tanggal = now.toLocaleDateString("id-ID", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  document.getElementById("date").innerText = `${hariIni} ${pasaranIni}, ${tanggal}`;
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener("mousemove", function(e) {
  const x = e.clientX;
  const y = e.clientY;

  document.body.style.background = `
    radial-gradient(circle at ${x}px ${y}px, 
    rgba(0,255,255,0.8),
    rgba(255,0,255,0.5),
    rgba(0,0,0,0.9) 50%)
  `;
});

document.addEventListener("mousemove", function(e) {
  const x = e.clientX;
  const y = e.clientY;

  document.body.style.background = `
    radial-gradient(circle 15px at ${x}px ${y}px,
    rgba(0,255,200,1),
    rgba(0,255,200,0.3) 40%,
    rgba(0,0,0,0.95) 80%)
  `;
});

document.addEventListener("click", function(e) {
  const ripple = document.createElement("span");

  const size = 20;
  ripple.style.width = size + "px";
  ripple.style.height = size + "px";

  ripple.style.left = (e.clientX - size / 2) + "px";
  ripple.style.top = (e.clientY - size / 2) + "px";

  ripple.classList.add("ripple");

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});