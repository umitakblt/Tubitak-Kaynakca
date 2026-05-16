document.addEventListener('DOMContentLoaded', () => {
    const qrContainer = document.getElementById("qrcode");
    let qrcode = null;

    function generateQR(url) {
        if (qrcode) {
            qrContainer.innerHTML = "";
        }
        qrcode = new QRCode(qrContainer, {
            text: url,
            width: 170,
            height: 170,
            colorDark : "#0f172a",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }

    // İlk açılışta mevcut URL ile oluştur
    const currentUrl = window.location.href;
    generateQR(currentUrl);

    // Eğer localhost ise kullanıcıyı uyaralım
    if (currentUrl.includes('localhost')) {
        console.warn("DİKKAT: 'localhost' üzerinden bağlandığınız için QR kod sadece bu bilgisayarda çalışır. Telefonla test etmek için ağ IP'nizi kullanın.");
    }

    // QR Kodu İndir
    document.getElementById('download-qr').addEventListener('click', () => {
        const qrImage = document.querySelector('#qrcode img');
        if (qrImage) {
            const link = document.createElement('a');
            link.download = 'proje-qr-kodu.png';
            link.href = qrImage.src;
            link.click();
        }
    });

    // Sayfayı Yazdır
    document.getElementById('print-page').addEventListener('click', () => {
        window.print();
    });
});
