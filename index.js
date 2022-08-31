const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const helmet = require('helmet');//farklı HTTP header'ları oluşturduk
const morgan = require('morgan');
const moongoose=require('mongoose');


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
  moongose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology: true})
  .then(result => app.listen(port))
  .then(result=> console.log(`your server is running at http://localhost: 3001`))
  .catch(err => console.log(err));
  app.get('/',(req,res)=>{
    res.send('you are home now');
  });
  app.get('/users/:userId',[
    UsersController.getById
]);
  
  