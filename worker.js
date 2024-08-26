onmessage = function(e) {
    if (e.data === 'start') {
        // Contoh perhitungan berat: faktorial dari 30
        let result = 1;
        for (let i = 1; i <= 30; i++) {
            result *= i;
        }

        // Kirim hasil kembali ke thread utama
        postMessage(result);
    }
};
