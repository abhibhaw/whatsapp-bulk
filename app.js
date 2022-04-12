const wbm = require("wbm");

wbm
  .start({ showBrowser: true, qrCodeData: true, session: true })
  .then(async () => {
    await wbm.waitQRCode(); // it's used to avoid qrcode errors
    const phones = ["911234567891", "911234567890"];
    const message = "Testing whatsapp bulk bot.";
    await wbm.send(phones, message);
    await wbm.end();
  })
  .catch((err) => console.log(err));
