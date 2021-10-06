// var width = 0;
// gsap.from("#navbar", { duration: 1, y: "-100%", ease: "bounce" });

function whiteData(nav, links, brand, toggler) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("text-blue");
    links[i].classList.add("text-white");
  }
  toggler[0].classList.remove("text-blue");
  toggler[0].classList.add("text-white");
  brand.src = "img/white-logo.png";
  nav.classList.add("nav-color");
  nav.classList.remove("nav-color2");
}
function blueData(nav, links, brand, toggler) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("text-blue");
    links[i].classList.remove("text-white");
  }
  toggler[0].classList.add("text-blue");
  toggler[0].classList.remove("text-white");
  brand.src = "img/blue-logo.png";
  nav.classList.add("nav-color2");
  nav.classList.remove("nav-color");
}
window.addEventListener(
  "scroll",
  function (event) {
    var top = this.scrollY;

    // GSAP ANIMATIONS
    if (top > 380) {
      // gsap.from(".carousel-div", { duration: 1, x: "30vh" });
    }
    // CSS class changes

    var nav = document.getElementById("navbar");
    var brand = this.document.getElementById("navbar-brand");
    var toggler = this.document.getElementsByClassName("fa-bars");
    var links = this.document.getElementsByClassName("nav-link");
    if (top >= 45) {
      this.blueData(nav, links, brand, toggler);
    } else {
      this.whiteData(nav, links, brand, toggler);
      if (width < 800) {
        console.log("here");
        this.blueData(nav, links, brand, toggler);
      } else {
        this.whiteData(nav, links, brand, toggler);
      }
      // if (width < 500) {
      //   for (let i = 0; i < links.length; i++) {
      //     links[i].classList.add("text-blue");
      //     links[i].classList.remove("text-white");
      //   }
      //   toggler[0].classList.add("text-blue");
      //   toggler[0].classList.remove("text-white");
      //   brand.src = "img/blue-logo.png";
      //   nav.classList.add("nav-color2");
      //   nav.classList.remove("nav-color");
      // }
      //   nav.classList.add("navbar");
      //   nav.classList.remove("navbar2");
    }
  },
  false
);

var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
window.addEventListener("resize", function (event) {
  var video = document.getElementById("video");
  width = document.body.clientWidth;
  if (document.body.clientWidth > 500) {
    if (video) {
      video.src = "video_home.mp4";
      video.load();
      video.play();
    }
  } else {
    if (video) {
      video.src = "video_home_sm.mp4";
      video.load();
      video.play();
    }

    var nav = document.getElementById("navbar");
    var toggler = this.document.getElementsByClassName("fa-bars");
    var links = this.document.getElementsByClassName("nav-link");
    var brand = this.document.getElementById("navbar-brand");
    nav.classList.add("nav-color2");
    nav.classList.remove("nav-color");
    brand.src = "img/blue-logo.png";
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add("text-blue");
      links[i].classList.remove("text-white");
    }
    toggler[0].classList.add("text-blue");
    toggler[0].classList.remove("text-white");
  }
});

// $(document).ready(function () {
//   $(document).click(function () {
//     // if($(".navbar-collapse").hasClass("in")){
//     $(".navbar-collapse").collapse("hide");
//     // }
//   });
// });
