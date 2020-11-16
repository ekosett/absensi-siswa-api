require('dotenv').config()
const express = require('express')
const app = express()
const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT
const sql = require("./database/dbconfig")

app.listen(port, host, () => { 
    console.clear()
    console.log(`Example app listening at http://${host}:${port}`)
})



app.get('/test', async (req, res) => {
    try {
        const rows = await sql.query("SELECT * FROM users")
        console.log(rows)
        res.send({ some: 'json' });
    } catch (error) {
        console.log(error)
        res.status(404).send('Sorry, cant find that');
    }
})


app.post('/register', async (req, res) => {
    try{
        
    } catch (error){

    }
})


app.post('/login', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})