const path=require('path');
const express=require('express');
const publicPath=path.join(__dirname,'../public');
const port=process.env.port || 3000;
const app=express();
app.use(express.static(publicPath));
app.listen(port, ()=>{
  console.log('server is up on port 3000')
});
