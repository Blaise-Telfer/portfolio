/*navbar*/
var container = document.querySelector('.container');
var main = document.querySelector('.main');
var toggle = document.querySelector('.toggle');

function toggleSidebar(){
    isShowingSidebar() ? hideSidebar() : showSidebar();
}

function showSidebar(){
    container.classList.add('show-sidebar');
}

function hideSidebar(){
    container.classList.remove('show-sidebar');
}

function isShowingSidebar(){
    return container.classList.contains('show-sidebar');
}

toggle.addEventListener('click', toggleSidebar, false);

container.addEventListener('click', function(e){
    if(isShowingSidebar() && main.contains(e.target)){
        e.preventDefault();
        hideSidebar();
    }
}, true);


/*fixed navbar after intro*/
let scrollpos = window.scrollY;
const header = document.querySelector("nav");
const intro = document.querySelector(".intro");
const header_height = intro.offsetHeight;


const add_class_on_scroll = () => header.classList.add("sticky");
const remove_class_on_scroll = () => header.classList.remove("sticky");


window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})


/*active tracking*/
function setActive() {
  linkObj = document.getElementsByClassName('nav-link');
  for(i=0;i<linkObj.length;i++) {
    if(document.location.href.indexOf(linkObj[i].href)>=0) {
      linkObj[i].classList.add("activeLink");
    }
  }
}
window.onload = setActive;



