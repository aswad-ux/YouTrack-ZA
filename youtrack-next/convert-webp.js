const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'assets');

fs.readdir(dir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const outputName = file.replace(/\.(jpg|png)$/, '.webp');
      const outputPath = path.join(dir, outputName);

      // Only convert if the webp doesn't exist
      if (!fs.existsSync(outputPath)) {
        sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(info => {
            console.log(`Converted: ${file} -> ${outputName} (${info.size} bytes)`);
          })
          .catch(err => {
            console.error(`Error converting ${file}:`, err);
          });
      }
    }
  });
});
