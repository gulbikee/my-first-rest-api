const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const helmet = require('helmet');//farklı HTTP header'ları oluşturduk
const morgan = require('morgan');


const app=express();
const ads = [
    {title: 'My first rest API attempt!'}
  ];
  
  
  
  app.use(helmet());
  app.use(bodyParser.json);//json'ları ayrıştırıp js objelerine dönüştürdük
  app.use(cors());
  app.use(morgan('combined'));

app.get('/',(req,res)=>{
    res.send(ads);

});
app.listen(3001, () => {
    console.log('listening on port 3001');
  });
  app.post('/users', [
    UsersController.insert
             ]);