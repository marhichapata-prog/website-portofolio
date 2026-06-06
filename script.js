// MENU MOBILE
document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("active");
});

// VALIDASI FORM
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value.trim();

  let email = document.getElementById("email").value.trim();

  let subjek = document.getElementById("subjek").value.trim();

  let pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || subjek === "" || pesan === "") {
    alert("Semua field harus diisi!");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Format email tidak valid!");
    return;
  }

  alert("Pesan berhasil dikirim!");

  this.reset();
});

 
