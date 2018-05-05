/**********************************/
/***Intializing the Libraries*****/
/*********************************/
var express = require('express');
var faker=require('faker');
var app=express();
/*********************************/
/***********ROUTES****************/
/*********************************/
app.get("/",function(req,res){
  res.send("hello there,Welcome to my assigment");
}
);
app.get("/speak/:animal",function(req,res){
  switch(req.params.animal){
      case "pig":
      res.send("The "+req.params.animal + " says : OinK");
      break;
      case "cow":
          res.send("The "+req.params.animal + " says : Moow");
      break;
      case "dog":
    res.send("The "+req.params.animal + " says : woof woof");
      break;
      default:
          res.send("i dont know this animal");
      break;
  }
}
);
app.get("/repeat/:word/:number",function(req,res){
var wordvar="";
for(var i=0 ; i< Number(req.params.number) ;i++){
wordvar+=req.params.word+" ";
}
res.send(wordvar);
})


app.get("*",function(req,res){
    res.send("sorry, page not found , what are you doing with you life :) .")
})




/*Listening to the ports*/
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("the Server is Online!!");
})

