const request = require("request")
const cheerio = require("cheerio")

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary", cb)

function cb(error, response, html){
    if(error){
        console.log(error)
    }else{
        handleHTML(html)
    }

    
}

function handleHTML(html){
    let selTool = cheerio.load(html)
    let lbc = selTool(".ds-text-ui-typo.ds-underline.ds-underline-offset-4.ds-decoration-ui-stroke")

    let data = selTool(lbc[1]).text()
    console.log(data)
}