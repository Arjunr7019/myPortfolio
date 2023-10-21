// let width = document.getElementById('a').offsetWidth;
// document.getElementById('1').style.width = width+"px";
// let str = "0"
// console.log("0"+' '+ width+"px");

if(document.getElementById('a').classList.contains('active')){
    document.getElementById('a').style.color = "#cfb200";
}

const navChange = (e)=>{
    if(e === 'a'){
        let width = document.getElementById('a').offsetWidth;
        document.getElementById('1').style.width = width+"px";
        document.getElementById('1').style.padding = "0"+' '+ width+"px";
        document.getElementById('1').style.left = "-41%";
        document.getElementById('a').style.color = "#cfb200";
        document.getElementById('b').style.color = "black";
        document.getElementById('c').style.color = "black";
        document.getElementById('d').style.color = "black";
        document.getElementById('e').style.color = "black";
    }
    else if(e === 'b'){
        let width = document.getElementById('b').offsetWidth;
        document.getElementById('1').style.width = width+"px";
        document.getElementById('1').style.padding = "0"+' '+ width+"px";
        document.getElementById('1').style.left = "-23%";
        document.getElementById('a').style.color = "black";
        document.getElementById('b').style.color = "#cfb200";
        document.getElementById('c').style.color = "black";
        document.getElementById('d').style.color = "black";
        document.getElementById('e').style.color = "black";
    }
    else if(e === 'c'){
        let width = document.getElementById('c').offsetWidth;
        document.getElementById('1').style.width = width+"px";
        let result = width/4;
        let result1 = result * 3;
        document.getElementById('1').style.padding = "0"+' '+ result1+"px";
        document.getElementById('1').style.left = "-1%";
        document.getElementById('a').style.color = "black";
        document.getElementById('b').style.color = "black";
        document.getElementById('c').style.color = "#cfb200";
        document.getElementById('d').style.color = "black";
        document.getElementById('e').style.color = "black";
        
    }
    else if(e === 'd'){
        let width = document.getElementById('d').offsetWidth;
        document.getElementById('1').style.width = width+"px";
        document.getElementById('1').style.padding = "0"+' '+ width+"px";
        document.getElementById('1').style.left = "19.5%";
        document.getElementById('a').style.color = "black";
        document.getElementById('b').style.color = "black";
        document.getElementById('c').style.color = "black";
        document.getElementById('d').style.color = "#cfb200";
        document.getElementById('e').style.color = "black";
    }
    else if(e === 'e'){
        let width = document.getElementById('e').offsetWidth;
        document.getElementById('1').style.width = width+"px";
        let result = width/4;
        let result1 = result * 3;
        document.getElementById('1').style.padding = "0"+' '+ result1+"px";
        document.getElementById('1').style.left = "39%";
        document.getElementById('a').style.color = "black";
        document.getElementById('b').style.color = "black";
        document.getElementById('c').style.color = "black";
        document.getElementById('d').style.color = "black";
        document.getElementById('e').style.color = "#cfb200";
    }
}

const navMenuChangeForSm = (e)=>{
    let containClass = document.getElementById("nav-drop-for-sm").classList;
    if(containClass.contains('actineNav')){
        document.getElementById('span1').style.transform ="rotate(0deg)";
        document.getElementById('span1').style.top = "0%";
        document.getElementById('span2').style.transform ="rotate(0deg)";
        document.getElementById('span2').style.top = "0%";
        document.getElementById('span3').style.width = "50%";
        document.getElementById('smNavItems').style.opacity = "0";
        document.getElementById("nav-drop-for-sm").classList.remove("actineNav");
    }
    else{
        document.getElementById('span1').style.transform = "rotate(-45deg)";
        document.getElementById('span1').style.top = "11%";
        document.getElementById('span2').style.transform ="rotate(45deg)";
        document.getElementById('span2').style.top = "-4%";
        document.getElementById('span3').style.width = "0";
        document.getElementById('smNavItems').style.opacity = "100%";
        document.getElementById("nav-drop-for-sm").classList.add("actineNav");
    }
}

const onClickVisibilityChange = ()=>{
    document.getElementById('smNavItems').style.opacity = "0";
    navMenuChangeForSm();
}

document.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        document.getElementById('forUpper').style.opacity = "100%";
    }
    else{
        document.getElementById('forUpper').style.opacity = "0";
    }
})

const DownloadLinks = (e)=>{
    console.log(e);
    if(e === 'resumeBtn'){
        window.location.href='https://drive.google.com/file/d/1nNLnxm2NNhoyu0BNQhZHcrhs8Hku8mua/view?usp=drive_link';
    }
    else if(e === 'projectWeather'){
        window.location.href='https://arjunr7019.github.io/WeatherForecast/';
    }
    else if(e === 'projectTablenoms'){
        window.location.href='https://tablenoms.com/';
    }
    else if(e === 'projectStopClock'){
        window.location.href='https://arjunr7019.github.io/StopClock/';
    }
    else if(e === 'LinkedIn'){
        window.location.href='https://arjunr7019.github.io/StopClock/';
    }
    else if(e === 'Instagram'){
        window.location.href='https://arjunr7019.github.io/StopClock/';
    }
    else if(e === 'twitter'){
        window.location.href='https://arjunr7019.github.io/StopClock/';
    }
}