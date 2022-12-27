
// --------DARK-MODE---------

let icon = document.getElementById("icon");
let changeMode = document.getElementById("imgChange");
let changeUserIcon = document.getElementById("changeUr");
let modeTheme = document.getElementById("theme");


icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    // changeMode.classList.replace("mode-img","dr-mode-img");
    if(document.body.classList.contains("dark-theme")){
        changeMode.classList.replace("mode-img","dr-mode-img");
        changeUserIcon.classList.replace("img-ur","change-img-ur");
        modeTheme.href = "projectDarkMode.html"
    }else{
        changeMode.classList.replace("dr-mode-img","mode-img");
        changeUserIcon.classList.replace("change-img-ur","img-ur");
        modeTheme.href = "projectsLightMode.html"
    }
};


// --------MOBILE-MODE-NAV-BAR----------

const navMenu = document.querySelector("#navMenu");
let navMenuVisible = document.querySelector("#navMenuVisible");
let nothing = document.getElementById("nothing");

navMenu.addEventListener("click",() => {
    navMenu.classList.toggle("action");
    nothing.classList.toggle("changeNothing");
    if(nothing.classList.contains("changeNothing")){
        navMenuVisible.classList.replace("navStyle","navVisible");
    }else{
        navMenuVisible.classList.replace("navVisible","navStyle");
    }
});


// -------User icon and Name color change on mouseover & mouseover--------

let main = document.getElementById("userIcon");
let userIcon = document.querySelector(".txt-ur").style.color;
let usrIconChange = document.querySelector("#changeUr").style.background;

main.addEventListener("mouseover", () =>{
    document.querySelector(".txt-ur").style.color = '#ffc107';
    document.querySelector("#changeUr").style.background = "bottom / contain no-repeat url('img/profile-yellow.png')";
});
main.addEventListener("mouseout", () =>{
    document.querySelector(".txt-ur").style.color = userIcon;
    document.querySelector("#changeUr").style.background = usrIconChange;
});


// -------Resume download iocn and text color change on mouseover & mouseover--------

let mainCV = document.getElementById("cvMain");
let cvDownloadImage = document.querySelector("#cvImage").src;
let cvDownloadText = document.querySelector("#cvText").style.color;

mainCV.addEventListener("mouseover",()=>{
    document.querySelector("#cvImage").src = "img/document-icon-yellow.png";
    document.querySelector("#cvText").style.color = '#ffc107';
});
mainCV.addEventListener("mouseout",()=>{
    document.querySelector("#cvImage").src = cvDownloadImage;
    document.querySelector("#cvText").style.color = cvDownloadText;
});


// ---------Resume Download Link-------------

let resumeDownloadLink = "https://drive.google.com/file/d/1TzPIkEMkkO2k9a2qQiTRdQUxL5xi2ygJ/view?usp=drivesdk";
let link = document.getElementById("cvText");
let navBarLink = document.getElementById("resumeLink");

link.onclick = function (){
    document.getElementById("cvText").href = resumeDownloadLink;
};
navBarLink.onclick = function (){
    document.getElementById("resumeLink").href = resumeDownloadLink;
};
