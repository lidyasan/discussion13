window.addEventListener("load", function () {
    console.log("you loaded the page");
    document.getElementById(h1).style.color = "purple";
});

window.addEventListener("dblclick", function () {
    console.log("you double clicked");
    alert(Date());
});

document.querySelector("#toggle").addEventListener("click", function () {
    console.log("you toggled");
});

