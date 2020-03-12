function plus() {
    var x = document.getElementById("counter");
    x.innerText = parseInt(x.innerText) + 1;
}

function min() {
    var x = document.getElementById("counter");
    x.innerText = parseInt(x.innerText) - 1;
}

function res() {
    var x = document.getElementById("counter");
    x.innerText = 0;
}




function malam() {
    var switcher = document.getElementById("tombol");
    body = document.getElementsByTagName("body")[0];
    if (switcher.innerText == "Berubah Ke Mode Malam") {
        switcher.innerText = "Berubah Ke Mode Siang";
        body.classList.add("malam")
    } else {
        switcher.innerText = "Berubah Ke Mode Malam";
        body.classList.remove("malam")
    }

}

var index = 0;
var item = [{
    nama: "Hiskia",
    nim: "14117091"
}, {
    nama: "Rahmat",
    nim: "14117114"
}];

function tambah() {
    var r = document.getElementById("tbl");
    if (index != item.length) {
        r.innerHTML += "<tr><td>" + item[index].nama + "</td><td>" + item[index].nim + "</td></tr>";
        index++;
    } else {
        alert("dah habis");
    }
}
var tgl = new Date();

function ganti() {
    alert(tgl.getHours())
    body = document.getElementById("test");
    var jam = tgl.getHours();
    if ((jam >= 18)) {
        body.classList.add("malam");
    } else {
        body.classList.remove("malam");
    }
}
ganti();