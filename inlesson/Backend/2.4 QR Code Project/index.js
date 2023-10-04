/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from "qr-image";
import inq from "inquirer";
import fs from "fs";

const questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter your URL: ',
    }
];
inq.prompt(questions).then((answers) => {
    var qr_image = qr.image(answers['url'], {type: 'png'});
    qr_image.pipe(fs.createWriteStream('qr.png'));
    
    fs.writeFile('URL.txt', `${answers['url']}`, (err) => {
        if (err) throw err;
        console.log("Successful.")
    });
});
