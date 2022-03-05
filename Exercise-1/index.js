const express = require('express')
const fs = require('fs')

const app = express()


app.get('/', function(req, res) {

    fs.readFile('./exercise1.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        res.send(html)
    })

})
app.get('/detail', function(req, res) {

    fs.readFile('./fetchapi-detail.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        res.send(html)
    })

})

app.listen(3000, () => {
    console.log(' App running at: \n - local: http://localhost:3000/')
})