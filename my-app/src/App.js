import React from 'react';
import random from './random';
const date=new Date();
const currentTime=date.getHours();
let greeting;
const customStyle={
  color:"",
  fontSize:""
}
if(currentTime<12){
  greeting="Good Morning";
  customStyle.color="red";
  customStyle.fontSize="100px"
}else if(currentTime<18){
  greeting="Good afternoon";
  customStyle.color="green";
}else{
  greeting="Good night";
  customStyle.color="pink";
  customStyle.fontSize="50px";
}
const App = () => {
  return (
    <div>
    <random/>
    <h1 style={customStyle}>{greeting}</h1>
    </div>
  )
}

export default App
