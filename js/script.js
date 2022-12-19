var icon = document.getElementById("icon");
var changeMode = document.getElementById("imgChange");
var changeUserIcon = document.getElementById("changeUr");
var modeTheme = document.getElementById("theme");


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
}