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


//product search function:
// var productContainer=document.getElementById("productContainer")

// var search=document.getElementById("search")

// var productlist=productContainer.querySelectorAll("div")

// console.log(productlist)

// search.addEventListener("keyup",function(){
//   var enteredvalue=event.target.value.toUpperCase()

//   for(count=0;count<productList.length;count++){

// var productname=productList[count].querySelector("h1").textContent;

//     // if(productname[count].textContent.toUpperCase().indexOf(enteredvalue)<0)
//     if (productname.toUpperCase().indexOf(enteredvalue) < 0)

//   {
//     productList[count].style.display="none"
//   }
//   else{
//       productList[count].style.display="block"
//   }
//   }
 
// })


var productContainer = document.getElementById("productContainer");
var search = document.getElementById("search");

// Get only top-level product boxes
var productList = productContainer.querySelectorAll(":scope > div");

console.log(productList); // ✅ Now this will show 8 divs (your products)

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (var i = 0; i < productList.length; i++) {
    var productName = productList[i].querySelector("h1").textContent.toUpperCase();

    if (productName.indexOf(enteredValue) === -1) {
      productList[i].style.display = "none";
    } else {
      productList[i].style.display = "block";
    }
  }
});

