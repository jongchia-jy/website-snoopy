(function () {
  "use strict";

  // Tahun otomatis di footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mode terang/gelap (pilihan disimpan di browser)
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      themeBtn.textContent = "☀️";
      themeBtn.setAttribute("aria-label", "Ganti mode terang");
    } else {
      root.removeAttribute("data-theme");
      themeBtn.textContent = "🌙";
      themeBtn.setAttribute("aria-label", "Ganti mode gelap");
    }
  }

  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  applyTheme(saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  themeBtn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Menu mobile
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-toggle");

  menuBtn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Tandai menu yang sedang dilihat
  const links = nav.querySelectorAll("a");
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });

  // Formulir kontak
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const EMAIL_TUJUAN = "emailanda@example.com"; // ganti dengan email Anda

  function setError(id, message) {
    const field = document.getElementById(id);
    document.getElementById(id + "-error").textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const okName = setError("name", name ? "" : "Tulis nama Anda.");
    const okEmail = setError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Tulis alamat email yang valid.");
    const okMessage = setError("message", message.length >= 10 ? "" : "Tulis pesan minimal 10 karakter.");

    if (!(okName && okEmail && okMessage)) return;

    const subject = encodeURIComponent("Pesan dari " + name);
    const body = encodeURIComponent(message + "\n\nEmail balasan: " + email);
    window.location.href = "mailto:" + EMAIL_TUJUAN + "?subject=" + subject + "&body=" + body;
    status.textContent = "Aplikasi email Anda akan terbuka. Tekan kirim di sana.";
    form.reset();
  });
})();
