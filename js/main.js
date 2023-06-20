const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

const navList = document.querySelector('#nav-list');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "img/btn-close.svg";
            

            

            
          

    } else {
        navBtnImg.src = "img/btn-open.svg";

        
    }
}
