< script >
    function loadXMLDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("datdfetch").innerHTML =
                    this.responseText;
            }
        };
        xhttp.open("GET", "server.php", true);
        xhttp.send();
    }
setInterval(function () {
    loadXMLDoc();
}, 1000);

window.onload = loadXMLDoc; <
/script>