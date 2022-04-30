var qr;
			(function() {
                    qr = new QRious({
                    element: document.getElementById('qr-code'),
                    size: 300,
                    value: ''
                });
            })();
            
            function generateQRCode() {
                var qrtext = document.getElementById("qr-text").value;
                document.getElementById("qr-result").innerHTML = "QR code for " + qrtext +":";
                qr.set({
                    foreground: 'black',
                    size: 300,
                    value: qrtext
                });
            }