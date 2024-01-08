const express =require("express");
const app =express()
app.use(express.json())
const mongoose=require("mongoose")
const Article=require("./models/Article")
mongoose.connect("mongodb+srv://karrar1:karrar123@myfirstclusternodejs.ukhikg1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to db")
}).catch(()=>{
    console.log("error with connecting")
})


//++++++++books+++++++++

app.post("/Articles",async(req,res)=>{
//تعريف مودل جديد 
    const newArticle= new Article()
const arttitle=req.body.Articletitle;
const artbody=req.body.Articlebody;

//newArticle.title=req.body.title
//newArticle.body=req.body.body

newArticle.title=arttitle;
newArticle.body=artbody;
newArticle.numberofLikes=0;
await newArticle.save();
    res.json(newArticle);
});

app.get("/Articles",async(req,res)=>{
const Articles= await Article.find();
console.log( "the areticles is" ,Articles);
res.json(Articles);

});
 

app.get("/Articles/:articleId",async (req,res)=>{
    const id =req.params.articleId;
    const article= await Article.findById(id);
   
    res.json(article);
    
    });

    app.delete("/Articles/:articleId",async (req,res)=>{
        const id =req.params.articleId;
        const article= await Article.findByIdAndDelete(id);
       
        res.json(article);
        
        });


        app.get("/showArticles",async(req,res)=>{
            const Articles= await Article.find();
//حتى نرجع الارتكال لازم نعرفه من نو اوبجت كي وفاليو وكي نفسه نستحدمه بالصفحة الثانية المستدعية من رندر
       res.render("articles.ejs" ,{
        allarticles:Articles
       });
            
            });




        
app.get("/hello",(req,res)=>{

res.send("hello")
})

app.get("/hi",(req,res)=>{

    res.send("I am visted in hi")
    })


    app.get("/",(req,res)=>{

        res.send("hello in node js project")
        })


        app.delete("/deletetest",(req,res)=>{

            res.send ("deleting reguest");
        });



        app.get("/numbers",(req,res)=>{
let numbers=""
for(let i=0 ;i<=100;i++){

numbers +=i +"-";

}


           // res.send (`the numbers are ${numbers}`);
         //  res.sendFile(__dirname +"/views/numbers.html");
         res.render("n.ejs",{
            name :"yarob",
            numbers : numbers ,
            languge : "arbic",
          

         });
        });


        app.get("/findsummation/:number1/:number2",(req,res)=>{
        const num1= req.params.number1;
        const num2=req.params.number2;
        const total=Number(num1)+Number(num2);
        res.send(`the total is ${total}`);

            
        });

        app.get("/sayhello",(req,res)=>{

//console.log(req.body)
//console.log(req.query)

//res.send(`hello ${req.body.name} , age is : ${req.query.age} `)
res.json({

name  : req.body.name,
age   : req.query.age,
languge : "Arbic"

})





        });


app.listen(8000,()=>{

    console.log("Iam listen inport 8000");
})