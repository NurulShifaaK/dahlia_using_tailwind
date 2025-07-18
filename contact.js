var sidenav = document.getElementById("sidenav");
var iconify = document.getElementById("iconify");
var closenav = document.getElementById("closenav");

// Open the sidebar
iconify.addEventListener("click", function () {
  sidenav.style.right = "0"; // ✅ value must be a string with units
});

// Close the sidebar
closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%"; // ✅ also needs to be in quotes
});
