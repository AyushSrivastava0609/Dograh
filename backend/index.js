import express from 'express';

const app = express();

app.use('/', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 10000));
    res.send('Hello World!');
  });

app.listen(8001 , (()=>{
    console.log("App Started")
}))