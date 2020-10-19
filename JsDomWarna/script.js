const tUbahWarna = document.getElementById("tUbahWarna");


tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = "darkblue";
    // document.body.setAttribute("class", "biru-doang");
    document.body.classList.toggle("biru-doang")
}

// Tombol acak warna

const tAcakWarna = document.createElement("button");
const teksAcakWarna = document.createTextNode("Tombol Acak Warna");
tAcakWarna.appendChild(teksAcakWarna);
tAcakWarna.setAttribute("type", "Button");
// Tambah tombol acak setelah tUbahWarna

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function(){
    const merah = Math.round(Math.random()*255+1);
    const hijau = Math.round(Math.random()*255+1);
    const biru = Math.round(Math.random()*255+1);

    document.body.style.backgroundColor= 'rgb('+merah+','+hijau+','+biru+')';
})

// Membuat Slider

// const sliderWarna = document.createElement("input");
// const enterKeBawah = document.createElement("br")
// sliderWarna.setAttribute("type","range");
// tAcakWarna.after(enterKeBawah);
// enterKeBawah.after(sliderWarna); percobaan.

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru');

sMerah.addEventListener("input", function(){

    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value; 

    document.body.style.backgroundColor = ('rgb('+merah+','+hijau+','+biru+')');   

});

sHijau.addEventListener("input", function(){

    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value; 

    document.body.style.backgroundColor = ('rgb('+merah+','+hijau+','+biru+')');   

});

sBiru.addEventListener("input", function(){

    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value; 

    document.body.style.backgroundColor = ('rgb('+merah+','+hijau+','+biru+')');   

});

// Cursor Pengubah warna

document.body.addEventListener("mousemove", function(){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';
});