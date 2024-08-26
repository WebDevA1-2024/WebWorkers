document.getElementById('startWorker').addEventListener('click', () => {
    if (window.Worker) {
        // Buat Web Worker baru
        const worker = new Worker('worker.js');

        // Kirim pesan ke worker
        worker.postMessage('start');

        // Terima pesan dari worker
        worker.onmessage = function(e) {
            document.getElementById('result').textContent = `Result: ${e.data}`;
        };

        // Tangani error dari worker
        worker.onerror = function(e) {
            console.error(`Error from worker: ${e.message}`);
        };
    } else {
        console.log('Your browser doesn\'t support Web Workers.');
    }
});
