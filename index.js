var sidenav = document.getElementById("sidenav");
var iconify = document.getElementById("iconify");
var closenav = document.getElementById("closenav");
var shopbtn=document.getElementById("shopbtn");
var productpage=document.getElementById("productpage");

// Open the sidebar
iconify.addEventListener("click", function () {
  sidenav.style.right = "0"; // ✅ value must be a string with units
});

// Close the sidebar
closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%"; // ✅ also needs to be in quotes
});

shopbtn.addEventListener("click",function(){
  window.location.href = "product.html";
})