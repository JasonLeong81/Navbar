const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click',()=>{
    let value = navbarLinks.classList.contains('navbar__collapse') /* check if it contains a class (classList jsut represents the classes navbarLinks have)*/
    if(value){
        navbarLinks.classList.remove('navbar__collapse'); /*create in css */
        navbarBtn.classList.remove('change'); /*create in css */
    }
    else{
        navbarLinks.classList.add('navbar__collapse');/*create in css */
        navbarBtn.classList.add('change');/*create in css */
    }
})





