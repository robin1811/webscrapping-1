let request = require('request');
let cheerio = require('cheerio');
const { load } = require('cheerio');
const { get } = require('request');
const getMatch = require('./match');

function getAllMatches(link){
    request(link,cb);
}

function cb(error,response, html){
    parseData(html);
}
function parseData(html){
    let ch = cheerio.load(html);
    let AllATags = ch('a[data-hover="Scorecard"]');
    // console.log(AllATags.length)

    for(i=0; i<AllATags.length; i++){
        let link = ch(AllATags[i]).attr('href');
        let completeLink = "https://www.espncricinfo.com" + link;
        // console.log(completeLink);
        getMatch(completeLink);
    }
}

module.exports = getAllMatches;