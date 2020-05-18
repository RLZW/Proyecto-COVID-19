const path = require("path"); 

exports.getInicio = (req,res)=>{
  res.sendFile(path.join(__dirname, '../views', 'inicio.html')); 
};