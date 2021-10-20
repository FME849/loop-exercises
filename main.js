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