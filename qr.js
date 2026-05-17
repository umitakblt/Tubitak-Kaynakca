document.addEventListener('DOMContentLoaded', () => {
    // Vercel'deki canlı sitenizin linki
    const targetUrl = "https://tubitak-kaynak-a.vercel.app/";
    
    const qrGrid = document.getElementById("qr-grid");
    
    // Sayfada kaç adet QR kod üretileceğini belirleyin (Örn: 6 adet)
    const qrCount = 6;

    for (let i = 0; i < qrCount; i++) {
        // Kartı oluştur
        const card = document.createElement("div");
        card.className = "qr-card";
        
        // QR kodun içine gireceği div
        const qrContainer = document.createElement("div");
        card.appendChild(qrContainer);
        
        // Başlıklar
        const title = document.createElement("h3");
        title.innerText = "TÜBİTAK Kaynakça";
        card.appendChild(title);
        
        const subtitle = document.createElement("div");
        subtitle.className = "school-name";
        subtitle.innerText = "Esenyurt Anadolu Lisesi";
        card.appendChild(subtitle);
        
        // Grid'e ekle
        qrGrid.appendChild(card);
        
        // QR Kodu o div'in içine çiz
        new QRCode(qrContainer, {
            text: targetUrl,
            width: 150,
            height: 150,
            colorDark : "#0f172a",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});
