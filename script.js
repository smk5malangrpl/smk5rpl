// Menampilkan pop-up ketika tombol "Tambah Materi" ditekan
document.getElementById('addMateriBtn').onclick = function() {
    document.getElementById('popupMateri').style.display = 'block';
};

// Menutup pop-up ketika tombol close ditekan
document.getElementById('closePopup').onclick = function() {
    document.getElementById('popupMateri').style.display = 'none';
};

// Menutup pop-up jika area di luar pop-up diklik
window.onclick = function(event) {
    if (event.target == document.getElementById('popupMateri')) {
        document.getElementById('popupMateri').style.display = 'none';
    }
};
