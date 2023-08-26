const https = require("https");
const fs = require("fs");

const downloadedFile = (url, outputPath,onSuccess,onError) => {
  const request = https.get(url, (response) => {
    const fileStream = fs.createWriteStream(outputPath);
    response.pipe(fileStream);
    fileStream.on("finish", () => {
      fileStream.close();
      console.log(`${outputPath} =>  File downloaded successfully!`);
      onSuccess()
    });
  });
  request.on("error", (error) => {
    console.error("Error downloading the file:", error.message);
    onError()
  });
};

module.exports = {
  downloadedFile
};
