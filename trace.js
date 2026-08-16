const ImageTracer = require('imagetracerjs');
const fs = require('fs');

ImageTracer.imageToSVG(
    'assets/logo-icon.jpg',
    function(svgstring) {
        fs.writeFileSync('assets/logo.svg', svgstring);
        console.log("SVG created");
    },
    { 
        ltres: 0.1, 
        qtres: 1, 
        pathomit: 8, 
        colorsampling: 1, 
        numberofcolors: 4, 
        mincolorratio: 0, 
        colorquantcycles: 3 
    }
);
