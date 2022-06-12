
// slide
const slideWrapper = document.querySelector(".slide__wrapper")
const slideItem = document.querySelectorAll(".slide__item")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
let slideIndex = 0;

function showSlide(n) {
    if(slideIndex > slideItem.length -1) {
        slideIndex = 0
    }
    if(slideIndex < 0) {
        slideIndex = slideItem.length -1
    }
    for(let i=0;i < slideItem.length -1;i++) {
      slideItem[i].classList.remove("active")
    }
    slideItem[slideIndex].classList.add("active")
}

next.addEventListener("click",function() {
  slideWrapper.scrollLeft += slideItem[0].offsetWidth 
  showSlide(slideIndex += 1)
  if(slideIndex === 0) {
    slideWrapper.scrollLeft = 0
  }
    
})
prev.addEventListener("click",function() {
    slideWrapper.scrollLeft -= slideItem[0].offsetWidth
    showSlide(slideIndex -= 1)
    if(slideIndex === slideItem.length -1) {
      slideWrapper.scrollLeft = slideWrapper.scrollWidth;
    }
})

// test slide
const testSlide = document.querySelector(".testimonials__slide-wrapper")
const testItem = document.querySelectorAll(".testimonials__info")
const testPrev = document.querySelector(".testimonials__navi--prev")
const testNext = document.querySelector(".testimonials__navi--next")

let slideIndexTest = 0;

function showSlideTest(n) {
  if(slideIndexTest > testItem.length -1) {
    slideIndexTest = 0
  }
  if(slideIndexTest < 0) {
      slideIndexTest = testItem.length -1
  }

  for(let i=0;i < testItem.length -1;i++) {
    testItem[i].classList.remove("active")
  }
  testItem[slideIndexTest].classList.add("active")
}
testNext.addEventListener("click",function() {
  console.log(testSlide.scrollLeft)
  testSlide.scrollLeft += testItem[0].offsetWidth
  showSlideTest(slideIndexTest += 1)
  if(slideIndexTest === 0) {
    testSlide.scrollLeft = 0
  }
    
})
testPrev.addEventListener("click",function() {
  console.log("first")
  console.log(testSlide.scrollLeft)
    testSlide.scrollLeft -= testItem[0].offsetWidth
    showSlideTest(slideIndexTest -= 1)
    if(slideIndexTest === testItem.length -1) {

      testSlide.scrollLeft = testSlide.scrollWidth;
    }
})
// slide doctor

let slideIndexDoctor = 0;
showSlides(slideIndexDoctor);


function currentSlide(n) {
  showSlides(slideIndexDoctor = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("doctors__item");
  let dots = document.querySelectorAll(".dots__item");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active")
  }
  slides[slideIndexDoctor].style.display = "block";
  dots[slideIndexDoctor].classList.add("active")
}

// tabs 

const tabs = document.querySelectorAll(".tabs__item");
const panes = document.querySelectorAll(".tabs-content__pane");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    document.querySelector(".tabs__item.active").classList.remove("active");
    document.querySelector(".tabs-content__pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

