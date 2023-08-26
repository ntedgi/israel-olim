const textract = require("textract");

const pdfPath = "./00071706.81.CE.C0.4F.pdf";

textract.fromFileWithPath(pdfPath, { pdftotextOptions: {layout:'raw'} }, (error, text) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log(text);
});
