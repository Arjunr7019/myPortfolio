
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
let navMenuItems = document.getElementById("navMenuItems").style.cssText;

const navInAction =
`
    position: absolute;
    width: 42%;
    height: calc(100vh + 180vh);
    right: 0;
    background-color: #f0f0f0;
    filter: drop-shadow(16px 16px 16px black);
`;

navMenu.addEventListener("click",() => {
    navMenu.classList.toggle("action");
    nothing.classList.toggle("changeNothing");
    if(nothing.classList.contains("changeNothing")){
        document.getElementById("navMenuItems").style.cssText = navInAction;
        setTimeout(function() {
            navMenuVisible.classList.replace("navStyle","navVisible");
        },600);
    }else{
        navMenuVisible.classList.replace("navVisible","navStyle");
        document.getElementById("navMenuItems").style.cssText = navMenuItems;
    }
});


// -------User icon and Name color change on mouseover & mouseover--------

let main = document.getElementById("userIcon");
let userIcon = document.querySelector(".txt-ur").style.color;
let usrIconChange = document.querySelector("#changeUr").style.color;

main.addEventListener("mouseover", () =>{
    document.querySelector(".txt-ur").style.color = '#ffc107';
    document.querySelector("#changeUr").style.color = '#ffc107';
});
main.addEventListener("mouseout", () =>{
    document.querySelector(".txt-ur").style.color = userIcon;
    document.querySelector("#changeUr").style.color = usrIconChange;
});


// -------Resume download iocn and text color change on mouseover & mouseover--------

let mainCV = document.getElementById("cvMain");
let cvDownloadImage = document.querySelector("#cvImage").style.color;
let cvDownloadText = document.querySelector("#cvText").style.color;

mainCV.addEventListener("mouseover",()=>{
    document.querySelector("#cvImage").style.color = '#ffc107';
    document.querySelector("#cvText").style.color = '#ffc107';
});
mainCV.addEventListener("mouseout",()=>{
    document.querySelector("#cvImage").style.color = cvDownloadImage;
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
