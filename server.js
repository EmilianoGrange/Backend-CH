import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo cruel!!!")
})

app.listen(8080, ()=> console.log("Server up!!"))