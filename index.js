const express = require ("express");
const app = express()
const puppeteer = require("puppeteer");

async function pup() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent('<h1>Hello</h1>');

        await page.emulateMediaType('screen');
        await page.pdf({
            path:'mypdf.pdf',
            format:'A4',
            printBackground: true 
        });
        await page.screenshot({ 
            path: 'example.png' ,
            fullPage: true  
        });

        console.log('done');
        await browser.close();
        process.exit()

    }catch(err){
        console.log("Error",err);
    }
} 

pup()



app.listen(5000,()=>{
    console.log("server is running");
})