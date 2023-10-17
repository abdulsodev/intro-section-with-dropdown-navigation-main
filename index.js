const navtoggler = document.querySelector('#nav-toggler')
const closeBtn = document.querySelector('#sidebarclosebtn')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')
const openDropdown = document.querySelector('.opendrop')
const closeDropdown = document.querySelector('.closedrop')
const mobileDropdown = document.querySelector(".mdropdown-container")

//mobile dropdown set to display:none; by default
mobileDropdown.style.display = "none"

//close dropdown arrow set to display none
closeDropdown.style.display = 'none'


//function 






//open dropdown
openDropdown.addEventListener('click' , openDrop);
 function openDrop(e){
    if (mobileDropdown.style.display = "none"){
        mobileDropdown.style.display = 'block'
        openDropdown.style.display = 'none'
        closeDropdown.style.display = 'inline-block'


    }
 }

//close dropdown
closeDropdown.addEventListener('click', closeDrop);
 function closeDrop(e){
    if (mobileDropdown.style.display = "block"){
        mobileDropdown.style.display = 'none'
        closeDropdown.style.display = 'none'
        openDropdown.style.display = 'inline-block'

    }
 }






//Open sidebar
navtoggler.addEventListener('click', onClick);
function onClick (e){
    sidebar.style.display = 'block'
    overlay.style.display = 'block'

}


//close sidebar
closeBtn.addEventListener('click', closeSide);
function closeSide (event){
    sidebar.style.display = 'none'
    overlay.style.display = 'none'
}