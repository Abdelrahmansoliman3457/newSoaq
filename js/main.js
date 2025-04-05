// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader-container").fadeOut("slow", function () {
      $(".loader-container").remove();
    });
  }, 1000);
});
// toggle sidebar
let allLinks = document.querySelector(".links");
let toggleBtn = document.querySelector(".coll-icon");
let navLayer = document.querySelector(".nav-layer");

if (allLinks) {
  toggleBtn.addEventListener("click", function () {
    navLayer.classList.toggle("slideto");
    allLinks.classList.toggle("slideto");
    this.classList.toggle("active");
  });
  navLayer.addEventListener("click", function () {
    toggleBtn.classList.remove("active");
    allLinks.classList.remove("slideto");
    this.classList.remove("slideto");
  });
}

// add class to header onscroll
let header = document.querySelector(".header");
window.onscroll = function () {
  if (header) {
    if (window.pageYOffset > 50) {
      header.classList.add("shadow-header");
    } else {
      header.classList.remove("shadow-header");
    }
  }
};


//  toggle drop-down
let myBtndrop = document.querySelector(".profile-btn");
let drop = document.querySelector(".dropProfile");
// // toggle drop-down
// let btnNoti = document.querySelector(".noti-btn");
// let dropNoti = document.querySelector(".dropNotification");
if (drop) {
  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    // dropNoti.classList.remove("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}


// drop lang
let myBtndropLang = document.querySelector(".lang-sw-btn");
let dropLang = document.querySelector(".dropLang");

if (dropLang) {
  myBtndropLang.addEventListener("click", function (e) {
    alert("ak");
    dropLang.classList.toggle("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    dropLang.classList.remove("show-drop");
  });
  dropLang.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

// //  add active class to cuurent link
$(".links > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});
// //  add active class to cuurent link
$(".bg-light-gary ul > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

//  profile name show 

let profileName = document.querySelector('.name-of-profile')

if (profileName) {

  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

  let isArabic = arabicRegex.test(profileName.innerText);

  // check if inner text is ar
  if (isArabic) {
    profileName.style.direction = 'rtl';
  } else {
    profileName.style.direction = 'ltr';
  }

} 


// dark mode
let headerModeBtn = document.querySelector(".header-mode");
if(headerModeBtn){

  headerModeBtn.addEventListener("click", function () {
    if (this.querySelector("i").classList.contains("fa-sun")) {
      this.querySelector("i").classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("mode", "light");
      document.body.classList.remove('dark-layout')
    } else {
      this.querySelector("i").classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("mode", "dark");
      document.body.classList.add('dark-layout')
    }
  });
}
let headerModeBtnSwitch = document.querySelector(".all-nights");
if(headerModeBtnSwitch){
  let headerModeBtnInput = document.querySelectorAll(".all-nights input");

  for (let i = 0; i < headerModeBtnInput.length; i++) {
    headerModeBtnInput[i].addEventListener("change", function () {
      if (this.getAttribute("id") == "light") {
    
        localStorage.setItem("mode", "light");
        document.body.classList.remove('dark-layout')
      } else {

        localStorage.setItem("mode", "dark");
        document.body.classList.add('dark-layout')
      }
    });
  }


}



window.onload = function(){


    if(localStorage.getItem('mode') == 'dark'){
      document.body.classList.add('dark-layout')
      document.querySelector(".header-mode i")?.classList.replace("fa-moon", "fa-sun");
      if(headerModeBtnSwitch){
        console.log('aa');
        
        document.querySelector('#dark').checked = true
        document.querySelector('#light').checked = false
      }
    } else{
      document.body.classList.remove('dark-layout')
      document.querySelector(".header-mode i").classList.replace("fa-sun", "fa-moon");
      if(headerModeBtnSwitch){
        document.querySelector('#dark').checked = false
        document.querySelector('#light').checked = true

      }
    }
  
}
