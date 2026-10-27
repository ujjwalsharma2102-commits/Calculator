const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click' , (e)=> {
    e.preventDefault(); 
     generateQRcode();
} );

function generateQRcode(){
    new QRCode(qrContainer), {
      text: qrText.value,  
      height: size,
      width: size,
      colorLight: "#fff",
      colorDark : "#000" , 
    }
}