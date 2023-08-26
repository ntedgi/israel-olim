const { PDFExtractor } = require("./pdf-extractor");
const { downloadedFile } = require("./file-downloader");
const { links } = require("./links");
const outPutDir = "./downloads";

process.on('uncaughtException', (e) => console.error('uncaughtException', e))
process.on('unhandledRejection', (e) => console.error('unhandledRejection', e))
process.on('beforeExit', (code) => {
  console.log('We seem to be exiting purely because there are no more awaits scheduled instead of having reached and exit.  Assuming this is bad behavior from the browser process. previous exit code: ', code);
  process.exit(1); 
});


async function downloadPDF(link) {
  return new Promise((resolve, reject) => {
    const pdfExtractor = new PDFExtractor(link);
    pdfExtractor.on("ready", (pdf) => {
      const outPutName = pdf.split("/").pop();
      downloadedFile(pdf, `${outPutDir}/${outPutName}`, resolve, reject);
    });
    pdfExtractor.fetch();
  });
}


(async function () {
  let counter = 1;
  for (const link of links) {
    await downloadPDF(link);
    console.log(`Downloaded: (${counter++}/${links.length}) files..`);
  }
})().catch((e) => console.error(e)).finally(() => console.log('Done!'));
