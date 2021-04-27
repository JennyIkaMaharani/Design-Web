function d1() {
    var no = (document.input.tb.value);
    if (no == "") {
        document.getElementById("tb").style.background = "red";
    }
}

function d2() {
    var nama = (document.input.bb.value);
    if (nama == "") {
        document.getElementById("bb").style.background = "red";
    }
}

function f1() {
    document.getElementById("tb").style.background = "lightblue";

}

function f2() {

    document.getElementById("bb").style.background = "lightblue";

}



function bmi() {
    var tinggi = parseFloat(document.input.tb.value)
    var berat = parseFloat(document.input.bb.value)


    var bmi = berat / (tinggi * tinggi)

    if (bmi < 18.5) {
        var kurang = (18.5 - bmi) * (tinggi * tinggi)
        alert("Anda kekurangan berat badan. Agar ideal anda butuh " + kurang + "kg Lagi")
    }
    if (bmi > 18.5) {
        var kurang = (bmi - 18.5) * (tinggi * tinggi)

        alert("Anda kelebihan berat badan. Agar ideal anda mengurangi " + kurang + "kg Lagi")
    }
    if ((bmi >= 18.5) && (bmi <= 20.5)) {
        alert("Anda memiliki berat badan ideal")
    }

}