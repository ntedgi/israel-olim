const puppeteer = require("puppeteer");
const EventEmitter = require("events");
class PDFExtractor extends EventEmitter {
  constructor(link) {
    super();
    this.link = link;
    this.pdf = null;
  }
  async fetch() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (interceptedRequest) => {
      if (interceptedRequest.url().includes("pdf")) {
        const url = interceptedRequest.url();
        this.pdf = url.split("file=")[1].split("&")[0];
        this.emit("ready", this.pdf);
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });
    page.on("error", (err) => {
      console.log("Error: " + err.message);
    });
    await page.goto(this.link);
    await browser.close();
  }
}

module.exports = {
  PDFExtractor,
};
