const request = require('request');
const cheerio = require('cheerio');

request('http://codedemos.com/sampleblog',(error,response,html) => {
    if(!error && response.statusCode == 200) {
        //console.log(html);
        const $ = cheerio.load(html);

        $('.nav-item a').each((i,el)=>{
            const item = $(el).text();
            const link = $(el).attr('href');
            console.log(link);
        });
    }
});
