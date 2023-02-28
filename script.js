// Login form start

const logo =document.querySelector(".user_logo");
const form =document.querySelector(".login_form");

logo.addEventListener('click',()=>{
    form.classList.toggle('active');
})

// login form end

// hamburger start

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// hamburger end


// search icon start

var searchBox=document.getElementById("search-bar");
        var Icon=document.getElementsByClassName("submit")[0];
        Icon.onclick=function(){
            searchBox.classList.toggle("active");
        }


// search icon end