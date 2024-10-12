//scripting the side nav bar

var sidenav = document.querySelector(".side-navbar")


function closeNavbar(){
    sidenav.style.left="-60%"
}

function openNavbar(){
    sidenav.style.left="0%"
}

//product code

var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count+=1){
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})