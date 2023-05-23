const express = require('express')
const app = express();
const fs = require('fs')
const request = require('request')
const { PORT } = require('./config.js')
const { log } = require('console')


    //console.log('a')    
    //const ticker = req.params.id
    //console.log(ticker)
    // let id = 1;
    // for (let i = 0; i < 5; i++) {
    //   const newId = {
    //     id: id,
    //   };
      
    //   objeto.propriedades.push(newId);
    //   id++;
    // }
    
    //console.log(objeto);
    const url =  'https://api.breakingbadquotes.xyz/v1/quotes/50';

    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
        
    }, (err, res, data) => {
        if(err){
            console.log('Error : ', err)
        } else if (res.statusCode !== 200) {
            console.log('Status', res.statusCode)
        } else {
            const newData = data.map((obj, index) => {
                return { id: index + 1, ...obj };
              });


            const newDataString  = JSON.stringify(newData);

            fs.writeFile('quote.json', newDataString, err =>{
                if(err) throw err
                console.log('sucess')
            })
        }
    })


// app.get('/ticker-result=:id', function(req, res){
//     const ticker = req.params.id
//     fs.readFile(__dirname+"/"+ticker+".json", "utf8", function(err, data){
//         res.send(JSON.parse(data))
//     })
// })

app.listen(PORT || 4001, () => {
    console.log('Server running on port', PORT)
})


const path = require('path')


app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname,'frontend', 'index.html'))
})


app.listen(8080, () => console.log('server running...'))
