let request = require('request');
let cheerio = require('cheerio');
const getAllMatches = require('./getAllMatches');

let link = "https://www.espncricinfo.com/series/_/id/8039/season/2019/icc-cricket-world-cup";

request(link, cb);

function cb(error,repsonse, html){
    parseHtmlData(html);
}

function parseHtmlData(html){
    let ch = cheerio.load(html);
    let link = ch(".widget-items.cta-link a").attr('href');
    // console.log(link);
    let completeLink = "https://www.espncricinfo.com" + link;
    // console.log(completeLink);
    getAllMatches(completeLink);
};