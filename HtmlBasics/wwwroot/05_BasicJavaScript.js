function adSoyadBirlestir() {
    var adTextBox = document.getElementById("tbAd");
    var ad = adTextBox.value;

    var soyadTextBox = document.getElementById("tbSoyad");
    var soyad = soyadTextBox.value;
    var adsoyadP = document.getElementsByClassName("sonuc")[0];
    console.log(adTextBox);
    adsoyadP.innerHTML = ad + " " + soyad; 
}