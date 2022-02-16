< script >

    function loadXMLDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("your div id").innerHTML =
                    this.responseText;
            }
        };
        xhttp.open("GET", "php page link", true);
        xhttp.send();
    }
setInterval(function () {
    loadXMLDoc();
}, 1000);

window.onload = loadXMLDoc; <
/script>