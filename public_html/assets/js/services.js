// Contact form -> WhatsApp message
function sendWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const msg = document.getElementById('cf-msg').value.trim();
    const text = `Merhaba Halil, web sitesi teklifi almak istiyorum.\n\nAd: ${name}\nE-posta: ${email}\nMesaj: ${msg}`;
    const url = 'https://wa.me/905551234567?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener');
    return false;
}
