const express = require('express');
const app = express ();

const port = 3007;

app.get('/',(req,res)=>{

    res.sendFile(__dirname +'/views'+req.url);   

   });
   
app.get('*', (req, res) => {


res.sendFile(__dirname + '/public' + req.url);

});
   
app.listen(port,() => console.log('estamos corriendo en el puerto ' + port))  ;
