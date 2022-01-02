document.getElementById('textarea').onmouseover = function() {
    document.getElementById('span').innerHTML = "Mouse is on textarea";
}

document.getElementById('textarea').onmouseout = function() {
    document.getElementById('span').innerHTML = "";
}

