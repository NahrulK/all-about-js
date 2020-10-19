const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = "darkblue";
    // document.body.setAttribute("class", "biru-doang");
    document.body.classList.toggle("biru-doang")
}