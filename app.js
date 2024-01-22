const express = require("express")
const app = express()


app.set('view engine', 'pug')

app.get('/', (req, res)=> {

    let person = {
        name:'Billy Jean',
        bio:'whatever bio could be here...'
    }


    res.render('index', person)
})

app.listen(3000)