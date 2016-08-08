var hashes = location.hash;

function checklinks() {
    for (x = 0; x < document.getElementsByClassName("navbutton").length; x++) {
        if (("#!" + document.getElementsByClassName("navbutton").item(x).innerHTML) == hashes) {
            document.getElementsByClassName("navbutton").item(x).click();
        }

    }
    if (hashes == "") {
        get_home()
    }
}

var quicknav = new XMLHttpRequest();
quicknav.onreadystatechange = function() {
    if (quicknav.readyState == 4 && quicknav.status == 200) {
        ChangeStuff(quicknav.responseText, "navstuff");
        checklinks()
    };
};
quicknav.open("GET", "./navigation.html", true);
quicknav.send();