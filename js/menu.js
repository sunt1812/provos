// =========show menu mobile=========
const toggleMenu = document.querySelector(".menu-mb__bars")
const showMenuMb = document.querySelector(".menu")
const menuClose = document.querySelector(".menu-mb__close")
// open menu mobile
toggleMenu.addEventListener("click",function() {
  showMenuMb.classList.toggle("show-menu-mb")
  toggleMenu.style.display = "none"
  menuClose.style.display = "block"
})
// close menu moblie
menuClose.addEventListener("click",function() {
  showMenuMb.classList.toggle("show-menu-mb")
  toggleMenu.style.display = "block"
  menuClose.style.display = "none"
})

// ===========menu active============
const activePage = window.location.pathname // url location

const menuLinks = document.querySelectorAll(".menu__link")

const dropdown = document.querySelector(".dropdown-toggle")
const dropdownContent = document.querySelector(".dropdown-content")
const dropdownTitle = document.querySelector(".dropdown-content__title")

// active menu
menuLinks.forEach(function(menulink) {

 if(menulink.href.indexOf(activePage) !== -1) {
  menulink.classList.add("active")
	//   click toggle dropdown
  if(menulink.href.includes("/services.html")) {
   dropdown.addEventListener("click",function(e) {
     e.preventDefault()
     dropdownContent.classList.toggle("show")
   })}
 }

})
// click outside dropdown
// window.addEventListener("click",function(event) {
// 	var isClickToggle = dropdown.contains(event.target);
// 	var isClickContent = dropdownContent.contains(event.target);
// 	var isClicktitle = dropdownTitle.contains(event.target);

// 		if (!isClickToggle && !isClickContent || isClicktitle){
// 			document.querySelector(".dropdown-content.show").classList.remove("show")
// 		}
// })
