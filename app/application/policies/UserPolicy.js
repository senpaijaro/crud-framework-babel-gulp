module.exports = async function(req,res,next){
     //creating middleware
   
       await next();
 }