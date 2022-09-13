//var express = require('express'); 
import express from 'express';
const app = express(); 
import convertPdfToPng from 'pdf-to-png-converter';

const convertAndDoSomething = e => {
    //user input
    //const pdf = e.target.files[0];
    const pdf = './public/file.pdf';

    convertPdfToPng(pdf, {
        outputType: 'callback',
        callback: callback
    });

    const callback = images => {
        // the function returns an array
        // every img is a normal file object
        images.forEach(img => {
            console.log(img.filename);
        });
    }
}

return convertAndDoSomething;

var port = process.env.PORT || 8000;  
app.listen(port,()=>console.log('server run at port '+port));  