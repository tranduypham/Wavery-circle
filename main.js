var span = document.getElementsByTagName("span");
var last_span = document.getElementById("last");
var hidden = document.querySelector("#hidden");
var cusor = document.querySelector(".cusor");
var loader = document.querySelector(".loader");
var deg = document.querySelector(".deg");
var Xposition = document.querySelector("#Xposition");
var Yposition = document.querySelector("#Yposition");
var XD = document.querySelector(".Xdeg");
var YD = document.querySelector(".Ydeg");
// cusor.style.right = 500;
// cusor.style.top = 400;
var total = span.length;

var position = 0;
var delay = 0;

for (var i = 0; i < total; i++) {
    span[i].style.top = position + "px";
    span[i].style.left = position + "px";
    span[i].style.right = position + "px";
    span[i].style.bottom = position + "px";
    span[i].style.animationDelay = delay + "s";
    position += 4;
}

function calcAngle(opposite, hypotenuse) {
    return Math.atan(opposite / hypotenuse);
}

function radians_to_degrees(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
}
var Xdeg = 90;
var Ydeg = 90;
var Xbound = 1920 / 2;
var Ybound = 973 / 2;
var Xvalue = 50;
var Yvalue = 50;
var Xnew = 60;
var Ynew = 0;
Xposition.addEventListener("input", (e) => {
    Xb = Xposition.value;
    Xnew =60+ Xdeg * (Xb / Xvalue);
    XD.style.transform = "rotateX(" + Xnew + "deg)" + "rotateY(" + Ynew + "deg)";
});
Yposition.addEventListener("input", (e) => {
    Yb = Yposition.value;
    Ynew = Ydeg * (Yb / Yvalue);
    YD.style.transform = "rotateX(" + Xnew + "deg)" + "rotateY(" + Ynew + "deg)";
});

// window.addEventListener("mousemove", function (e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     cusor.style.left = x + "px";
//     cusor.style.top = y + "px";
// });
// window.addEventListener("mousemove", function (e) {
//     // console.log("1");
//     let x = e.clientX;
//     let y = e.clientY;
//     cusor.style.left = x + "px";
//     cusor.style.top = y + "px";
//     // loader.style.left = x-700 + "px";
//     // loader.style.top = y-700 + "px";

//     var deg_test = calcAngle(Ybound - y,(Xbound - x)>=0?(Xbound - x):(x-Xbound));
//     deg_test = parseInt(radians_to_degrees(deg_test));
//     console.log(deg_test);
//     if (x >= Xbound) {
//         // Ydeg = 45;
//         Ydeg = deg_test;
//     } else {
//         // Ydeg = -45;
//         Ydeg = -deg_test;
//     }
//     if (y >= Ybound) {
//         // Xdeg = 45;
//         Xdeg = 90-deg_test;
//     } else {
//         // Xdeg = 135;
//         Xdeg = 90-deg_test;
//     }
//     // deg.style.transform = "rotateX(" + Xdeg + "deg) rotateY(" + Ydeg + "deg)";
//     deg.style.transform = "rotateX(" + Xdeg + "deg) rotateY(" + Ydeg + "deg)";
//     // console.log(Xdeg);

// })

var y1 = 450;

window.addEventListener("mousemove", function (e) {
    let y2 = e.pageY;
    last_span.style.transform = "translateZ(" + (y2 - y1) * (-1) + "px)";
    var i = total;

    let start = Date.now()
    var myReq;
    myReq = requestAnimationFrame(run);

    function run() {
        i = i - 1;
        try {
            span[i].style.transform = "translateZ(" + (y2 - y1) * (-1) + "px)";
        } catch (Error) {
            console.log("Looxi o " + Error);
        }
        if (i > 0) {
            myReq = requestAnimationFrame(run);
        } else {
            cancelAnimationFrame(myReq);
            return 0;
        }
    }
});



// let y = e.clientY;
//     // console.log(y);
//     for (var i = 0; i < total; i++) {
//         span[i].style.transform = "translateZ(-" + y * 0.5 + "px)";
//         span[i].style.transitionDelay = delay + "s";
//         delay -= 0.1;
//     }
//     delay = 0.1 * 26;