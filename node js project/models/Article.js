const mongoose=require("mongoose");
const Schema = mongoose.Schema;
   const ArticleSchema=new Schema({
    title:String,
    body:String,
    numberofLikes:Number
   })



   const Article=mongoose.model("book",ArticleSchema);
   module.exports=Article;