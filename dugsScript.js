const t = "test";

/* CONTACT BUTTON Functions */

function displayNumb() {
    let dugsNumb = 1;
    document.getElementById("dugsNumb").innerHTML = dugsNumb;
}

function displayDate() {
    let dugsDate = new Date();
    let shortDate = dugsDate.getMonth() + "/" + dugsDate.getDate() + "/" + dugsDate.getFullYear();
	document.getElementById("dugsDate").innerHTML = shortDate;
}

function displayLocation() {
    let dugsLocation = "Home";
	document.getElementById("dugsLocation").innerHTML = dugsLocation;
}

function contact() {
	displayNumb();
	displayDate();
	displayLocation();
}

/*

function switchInfo() {
    let p = document.getElementById("selectedInfo");
    var e = document.getElementById("dugsDrop");
    var t = e.options[e.selectedIndex].text;
    var v = e.options[e.selectedIndex].value;
    if (v == 0) {
        document.getElementById("selectedInfo").innerHTML = p;
    } else {
        document.getElementById("selectedInfo").innerHTML = t;
    }
}

*/

