function generateQRCode(){
    let text = document.getElementById('input');

    if(text.value === ""){
        alert("Por favor, insira um texto!")
        return;
    }

    let qrCodeHtml = document.getElementById("qrcode");

    qrCodeHtml.innerHTML = "";

    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text.value,
        width: 128,
        height: 128,
        colorDark: "#4e764e",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })

    qrcode.makeCode(text.value);

    text.value = "";
}