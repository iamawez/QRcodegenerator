


let IMGbox = document.getElementById("IMGbox");
let qrImg = document.getElementById("qrImg");
let qrinput = document.getElementById("qrinput");


function GenerateQR() {
    if (qrinput.value.length > 0) { 
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;
        IMGbox.classList.add("show-img");

         // Remove the "show-img" class after a delay to trigger the fade-in animation again
         setTimeout(() => {
            IMGbox.classList.remove("show-img");
        }, 3000);

    }else{
        qrinput.classList.add('error');
        setTimeout(() => {
            qrinput.classList.remove('error');
        }, 1000);
    }
    
}