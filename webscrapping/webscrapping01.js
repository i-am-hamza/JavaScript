const request = require('request')
const cheerio = require('cheerio')

console.log("Before")

request("https://www.worldometers.info/coronavirus/", cb)

function cb(error, response, html){
	if (error){
		console.log("Error, code: ", error)
	}
	else{

		handleHTML(html)
	}
}

function handleHTML(html){
	let selTool = cheerio.load(html)
	let contentArr = selTool(".maincounter-number span")

	for(let i = 0; i < contentArr.length; i++){
		let data = selTool(contentArr[i]).text()
		console.log(data)
	}
	console.log(selTool(contentArr[0]).text())
}



console.log("After")