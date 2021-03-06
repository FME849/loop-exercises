// Ex 01
function timSoChanLe() {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < 100; i++){
        if ((i%2) == 0) {
            soChan+= i + " "; 
        } else {
            soLe+= i + " ";
        }
    }
    document.getElementById("soChan").innerHTML = "Số chẵn: " + soChan;
    document.getElementById("soLe").innerHTML = "Số lẻ: " + soLe;
}
document.getElementById("timSoChanLe").onclick = timSoChanLe;

// Ex 02
function demSoChiaHetCho3() {
    var count = 0; // Biến đếm số
    for (var i = 0; i < 1000; i++) {
        if ((i%3) == 0) {
            count+=1;
        }
    }
    document.getElementById("soChiaHetCho3").value = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}
document.getElementById("demSo").onclick = demSoChiaHetCho3;

// Ex 03
function timSoNhoNhat() {
    var sum = 0;
    var i = 0;
    for (var i = 0; sum < 10000; i++) {
       sum+= i;
    }
    document.getElementById("soNhoNhat").value = "Số nguyên dương nhỏ nhất: " + (i - 1);
}
document.getElementById("timSoNhoNhat").onclick = timSoNhoNhat;

// Ex 04
function tinhTong() {
    var soX = Number(document.getElementById("soX").value);
    var soN = Number(document.getElementById("soN").value);
    var sum = 0; // Biến tổng
    for (var i = 1; i <= soN; i++) {
        sum+= soX ** i;
    }
    document.getElementById("sum").value = "Tổng: " + sum;
}
document.getElementById("tinhTong").onclick = tinhTong;

// Ex 05
function tinhGiaiThua() {
    var soGiaiThua = Number(document.getElementById("soGiaiThua").value);
    var ketQuaGiaiThua = 1;
    for (var i = 1; i <= soGiaiThua; i++) {
        ketQuaGiaiThua = ketQuaGiaiThua*= i;
    }
    document.getElementById("giaiThua").value = "Giai thừa: " + ketQuaGiaiThua;
}
document.getElementById("tinhGiaiThua").onclick = tinhGiaiThua;

// Ex 06
function taoTheDiv() {
    var theDiv = "";
    for (var i = 1; i <= 10; i++) {
        if ((i%2) != 0) {
            theDiv+= "<div class='py-2 px-1 text-light bg-primary'>Div lẻ</div>";
        } else {
            theDiv+= "<div class='py-2 px-1 text-light bg-danger'>Div chẵn</div>";
        }
    }
    document.getElementById("theDiv").innerHTML = theDiv;
}
document.getElementById("taoTheDiv").onclick = taoTheDiv;

// Ex 07
function inSoNguyenTo() {
    var soN = Number(document.getElementById("soNBaiTap7").value);
    var soNguyenTo = "";
    for (var i = 2; i <= soN; i++) {
        var canBacHai = Math.floor(Math.sqrt(i));
        if (canBacHai <= 1) {
            soNguyenTo+= i + " ";
        } else{
            for (j = 2; j <= canBacHai; j++) {
                if ((i%j) == 0) {
                    break;
                } else if (j == canBacHai && (i%j) != 0) {
                    soNguyenTo+= i + " "; 
                } else {
                    continue;
                }
            }
        }
    }
    document.getElementById("soNguyenTo").innerHTML = soNguyenTo;
}
document.getElementById("inSoNguyenTo").onclick = inSoNguyenTo;